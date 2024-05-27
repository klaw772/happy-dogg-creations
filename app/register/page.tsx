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
        <p className='mb-3 text-center text-3xl'>Register</p>
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
