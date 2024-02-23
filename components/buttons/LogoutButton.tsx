'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';

function LogoutButton() {
  return (
    <Button
      size="lg"
      className="w-full"
      variant="default"
      onClick={() => signOut({ callbackUrl: '/' })}
    >
      Logout
    </Button>
  );
}

export default LogoutButton;
