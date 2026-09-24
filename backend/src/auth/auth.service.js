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
    return user;
  } catch (error) {
    console.error("error message", error);
  }
}

async function login({ identifier, password }) {
  const user = await db.orm.public.User.where((u) =>
    or(u.email.eq(identifier), u.username.eq(identifier)),
  ).first();
  return user;
}

async function logout() {}
export { register, login, logout };
