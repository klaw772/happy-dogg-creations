import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import RegisterFormPage from './registerForm';
import Link from 'next/link';

export default async function RegisterPage() {
  const session = await getServerSession();

  if (session) {
    redirect('/');
  }

  return (
    <section className='flex items-center justify-center'>
      <div className='w-[400px]'>
        <RegisterFormPage />
        <p className='mt-5 text-sm font-medium'>
          Already have an account?{' '}
          <Link href='/login' className='text-red-900'>
            Log In
          </Link>
        </p>
      </div>
    </section>
  );
}
