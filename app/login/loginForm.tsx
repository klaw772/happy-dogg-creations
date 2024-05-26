'use client';

import { signIn } from 'next-auth/react';
import { Button, Label, TextInput } from 'flowbite-react';
import { useRouter } from 'next/navigation';

export default function LoginFormPage() {
  const router = useRouter();
  const handleLogin = async (data: FormData) => {
    const email = data.get('email');
    const password = data.get('password');

    try {
      const response = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (response?.ok) {
        router.push('/');
        router.refresh();
      }
      console.log('Login Successful', response);
    } catch (e) {
      throw e;
    }
  };

  return (
    <form action={handleLogin} className='flex max-w-md flex-col gap-4'>
      <div>
        <div className='mb-2 block'>
          <Label htmlFor='email' value='Your email' />
        </div>
        <TextInput id='email' name='email' type='email' required />
      </div>
      <div>
        <div className='mb-2 block'>
          <Label htmlFor='password' value='Your password' />
        </div>
        <TextInput id='password' name='password' type='password' required />
      </div>
      <Button
        type='submit'
        className='bg-red-900 hover:border-red-900 hover:text-red-900 enabled:hover:bg-white'
      >
        Submit
      </Button>
    </form>
  );
}
