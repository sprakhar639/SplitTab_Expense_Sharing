import bcrypt from "bcrypt";
import bcrpyt from "bcrypt";
import db from "../prisma/db.ts";

async function register({ username, email, password, name }) {
  try {
    const passwordHash = await bcrpyt.hash(password, 10);
    const user = await db.orm.public.User.create({
      data: {
        email,
        username,
        name,
        passwordHash,
      },
    });
    return user;
  } catch (error) {
    console.error("error message", error);
  }
}

async function login({ username, email, password }) {}

async function logout() {}
export { register, login, logout };
