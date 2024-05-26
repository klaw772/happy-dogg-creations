import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import LoginFormPage from './loginForm';
import Link from 'next/link';

export default async function LoginPage() {
  const session = await getServerSession();

  if (session) {
    redirect('/');
  }

  return (
    <section className='flex items-center justify-center'>
      <div className='w-[400px]'>
        <LoginFormPage />
        <p className='mt-5 text-sm font-medium'>
          Need an account?{' '}
          <Link href='/register' className='text-red-900'>
            Register
          </Link>
        </p>
      </div>
    </section>
  );
}
