import React from 'react';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col mx-auto w-full">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
}
