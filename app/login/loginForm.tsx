'use client';

import { signIn } from 'next-auth/react';
import { Button, Label, TextInput } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginFormPage() {
  const router = useRouter();
  const [loginError, setLoginError] = useState<string|null>(null);
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
        setLoginError(null)
        router.push('/');
        router.refresh();
      } else {
        setLoginError('Incorrect username or password. Please try again.')
      }
    } catch (e) {
      throw e;
    }
  };

  return (
    <form action={handleLogin} className='flex max-w-md flex-col gap-4'>
      <p className="text-red-900">{loginError}</p>
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
