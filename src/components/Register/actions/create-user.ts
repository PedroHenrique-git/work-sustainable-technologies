"use server";

import getDB from "@/infra/db";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const createUser = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  const db = await getDB();

  await db?.query(`
    CREATE TABLE IF NOT EXISTS user(
        id int primary key auto_increment,
        email varchar(255) not null,
        password varchar(255) not null
    );
  `);

  await db?.query(
    `INSERT INTO user(email, password) VALUES ("${email}", "${password}");`
  );

  cookies().set("authenticated", "yes");

  redirect("/greetings");
};
