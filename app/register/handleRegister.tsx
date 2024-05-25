"use server";
import { db } from "@/db/kysely";
export const handleRegister = async (data: FormData) => {
  const email = data.get('email');
  const password = data.get('password');

  try {
    await db.schema
      .createTable("users")
      .ifNotExists()
      .addColumn("id", "serial", (column) => column.primaryKey())
      .addColumn("email", "varchar(255)", (column) => column.notNull().unique())
      .addColumn("password", "varchar(255)", (column) => column.notNull())
      .execute();
      
    const response = await fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    // Process response here
    console.log("Registration Successful", response);
  } catch (error: any) {
    console.error("Registration Failed:", error);
  }
};
