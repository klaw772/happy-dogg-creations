'use client';

import Image from 'next/image';
import adorableDog from '/public/adorable_dog.jpg';
import smalldog from '/public/another_small_dog.jpg';
import bertha from '/public/bertha.jpg';
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <div className='flex justify-center md:mb-20'>
          <Image
            className='mr-7 rounded-md'
            src={adorableDog}
            alt='Happy Dogg Creations Adorable Dog Logo'
            width={500}
            priority
          />
        </div>
        <div className='mb-20 flex items-center'>
          <h1 className='text-center text-4xl font-bold md:text-left'>
            Welcome to Happy Dogg Creations.
          </h1>
        </div>
        <div className='flex items-center'>
          <h1 className='text-center text-4xl font-bold md:text-left'>
            Please buy things for your pets.
          </h1>
        </div>
        <div className='mb-20 flex justify-center'>
          <Image
            className='mr-7 rounded-md'
            src={smalldog}
            alt='A very small pomeranian dog'
            width={500}
            priority
          />
        </div>
        <div className='mt-5 flex justify-center'>
          <Image
            className='mr-7 rounded-md'
            src={bertha}
            alt='a little tan cat who looks like she is smiling or perhaps grimacing'
            width={500}
            priority
          />
        </div>
        <div className='flex items-center'>
          <h1 className='text-center text-4xl font-bold md:text-left'>
            Just look at that smile.
          </h1>
        </div>
      </div>
      <p className='mt-20 text-lg font-medium'>
        <Link href='/inventory' className='text-red-900'>
          Browse Inventory
        </Link>
      </p>
    </>
  );
}
