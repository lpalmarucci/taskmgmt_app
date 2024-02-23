'use client';

import { PropsWithChildren } from 'react';
import { redirect, usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function ProtectedComponent(props: PropsWithChildren) {
  const { data: session } = useSession();
  const pathname = usePathname();
  if (pathname !== '/' && (!session || !session.user))
    return redirect('/api/auth/signin');

  return props.children;
}
