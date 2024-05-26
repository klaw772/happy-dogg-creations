'use client';

import Image from "next/image";

export default function Home() {

  return (
    <div className="flex">
      <Image
        className="mr-5"
        src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Ecommerce Greeting Page"
        width={400}
        height={400}
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