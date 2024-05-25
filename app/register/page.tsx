import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import RegisterFormPage from "./registerForm";

export default async function RegisterPage() {
  const session = await getServerSession();

  if (session) {
    redirect("/");
  }

  return (
    <section className="flex items-center justify-center">
      <div className="w-[400px]">
        <RegisterFormPage />
      </div>
    </section>
  );
}
