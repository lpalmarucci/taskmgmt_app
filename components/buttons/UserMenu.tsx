'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { signOut, useSession } from 'next-auth/react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

export default function UserMenu() {
  const { data: session } = useSession();
  if (!session) return;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="w-full">
        <Button
          variant="outline"
          size="lg"
          className="w-full justify-start gap"
        >
          <Avatar className="mr-2">
            <AvatarImage
              src={session.user?.image ?? ''}
              height={25}
              width={25}
            />
          </Avatar>
          {session.user?.name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{session.user?.email}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className={'cursor-pointer'}
          onClick={() => signOut({ callbackUrl: '/' })}
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
