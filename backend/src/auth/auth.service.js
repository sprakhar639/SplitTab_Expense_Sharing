import bcrpyt from "bcrypt";
import db from "../prisma/db.ts";
import { or } from "@prisma/orm-postgres/orm-client";

async function register({ username, email, password, name }) {
  try {
    const passwordHash = await bcrpyt.hash(password, 10);
    const user = await db.orm.public.User.create({
      email,
      username,
      name,
      passwordHash,
    });

    const session = await db.orm.public.Session.create({
      userId:user.id,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });

    return { user, session };
  } catch (error) {
    console.error("error message", error);
  }
}

async function login({ identifier, password }) {
  const user = await db.orm.public.User.where((u) =>
    or(u.email.eq(identifier), u.username.eq(identifier)),
  ).first();

  if (!user) {
    throw new Error("User Not Found");
  }

  const passwordMatch = await bcrpyt.compare(password, user.passwordHash);

  if (!passwordMatch) {
    throw new Error("Wrong Password");
  }
  return user;
}

async function logout() {}
export { register, login, logout };
