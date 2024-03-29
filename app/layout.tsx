import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Sidebar } from '@/components/Sidebar';
import React from 'react';
import { getServerSession } from 'next-auth';
import SessionProvider from '@/context/SessionProvider';
import ProtectedComponent from '@/hoc/ProtectedComponent';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  const isLogged = session?.user;
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          {isLogged ? (
            <div className="grid lg:grid-cols-7">
              <Sidebar />
              <div className="col-span-3 lg:col-span-6 lg:border-l">
                {children}
              </div>
            </div>
          ) : (
            <ProtectedComponent>{children}</ProtectedComponent>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
