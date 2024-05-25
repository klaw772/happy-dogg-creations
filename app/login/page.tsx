import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LoginFormPage from "./loginForm";

export default async function LoginPage() {
  const session = await getServerSession();
  
  if (session) {
    redirect("/");
  }

  return (
    <section className="flex items-center justify-center">
      <div className="w-[400px]">
        <LoginFormPage />
      </div>
    </section>
  );
}