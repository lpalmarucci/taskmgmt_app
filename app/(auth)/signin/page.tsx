import { cn } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import * as React from 'react';
import { SignInForm } from '@/components/SignInForm';

export default function SigninPage() {
  return (
    <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="min-w-[100dvw] flex">
        <div className="w-full flex justify-center lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Login into an existing account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter the username and password to signin
              </p>
            </div>
            <div className={cn('grid gap-6')}>
              <SignInForm />
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or
                  </span>
                </div>
              </div>
              <Link
                href="/signup"
                className={cn(buttonVariants({ variant: 'outline' }))}
              >
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
