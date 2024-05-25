'use client';

import Image from "next/image";

export default function Home() {

  return (
      <div>
        <Image
          src="https://images.unsplash.com/photo-1417325384643-aac51acc9e5d"
          alt="Ecommerce Greeting Page"
          width={150}
          height={150}
          priority
        />
        <div>
          <h1>Lorem Ipsum</h1>
          <p>
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum{" "}
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum{" "}
          </p>
        </div>
      </div>
  );
}