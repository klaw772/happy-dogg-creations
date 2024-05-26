'use server';

import { redirect } from "next/navigation";

export const handleRegister = async (data: FormData) => {
  const email = data.get('email');
  const password = data.get('password');

  try {
    const response = await fetch(`${process.env.NEXTAUTH_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  } catch (error: any) {
    console.error('Registration Failed:', error);
  } finally {
    redirect('/login');

  }
};
