import React from 'react';

export default function Clients() {
  return (
    <section aria-label="Our clients" className="bg-white px-6 py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 items-center gap-10 md:grid-cols-4">
        <img
          src="/Logo/microsoft.svg"
          alt="Microsoft"
          className="mx-auto h-12 w-full max-w-[200px] object-contain"
        />

        <img
          src="/Logo/google.svg"
          alt="Google"
          className="mx-auto h-12 w-full max-w-[160px] object-contain"
        />

        <img
          src="/Logo/facebook.svg"
          alt="Facebook"
          className="mx-auto h-12 w-full max-w-[180px] object-contain"
        />

        <img
          src="/Logo/ibm.svg"
          alt="IBM"
          className="mx-auto h-12 w-full max-w-[130px] object-contain"
        />
      </div>
    </section>
  );
}