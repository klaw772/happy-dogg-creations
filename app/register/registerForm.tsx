'use client';

import { Button, Label, TextInput } from 'flowbite-react';
import { handleRegister } from './handleRegister';
import Link from 'next/link';

export default function RegisterFormPage() {
  return (
    <>
      <form action={handleRegister} className='flex max-w-md flex-col gap-4'>
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
    </>
  );
}
