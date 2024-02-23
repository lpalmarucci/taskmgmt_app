'use client';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ColumnsIcon, DashboardIcon, TargetIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import UserMenu from '@/components/buttons/UserMenu';

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  boards?: any[];
}

export function Sidebar({ className, boards }: SidebarProps) {
  return (
    <div className={cn('py-4 min-h-[100dvh]', className)}>
      <div className="h-full flex flex-col justify-between space-y-4 py-4 px-3">
        <div className=" py-2">
          <Link href="/">
            <h2 className="mb-2 px-4 cursor-pointer text-xl select-none text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-800 font-semibold tracking-tight">
              Task Management
            </h2>
          </Link>
          <div className="space-y-1">
            <Link href="/projects">
              <Button variant="ghost" className="w-full justify-start">
                <DashboardIcon className="mr-2 h-4 w-4" />
                Projects
              </Button>
            </Link>

            <Button variant="ghost" className="w-full justify-start">
              <ColumnsIcon className="mr-2 h-4 w-4" />
              Board
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <TargetIcon className="mr-2 h-4 w-4" />
              Assigned to me
            </Button>
          </div>
        </div>
        <div className="w-full space-y-4 py-4 px-3">
          <UserMenu />
        </div>
      </div>
    </div>
  );
}
