'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { signIn } from 'next-auth/react';

function GithubSignInButton() {
  return (
    <Button variant="outline" type="button" onClick={() => signIn()}>
      <Icons.gitHub className="mr-2 h-4 w-4" />
      Sign In
    </Button>
  );
}

export default GithubSignInButton;
