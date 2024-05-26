"use server";
export const handleRegister = async (data: FormData) => {
  const email = data.get('email');
  const password = data.get('password');

  try {
      
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
