import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="bg-background w-full min-h-[100dvh] flex justify-center items-center">
      <div className="flex flex-col gap-6 justify-center items-center">
        <h1 className="py-8 font-bold cursor-pointer text-5xl select-none text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-700 tracking-tight">
          Welcome to TASKMGMT
        </h1>
        <h6 className="scroll-m-20 text-xl tracking-tight">
          Get started by{' '}
          <Link href="/signin" className="underline">
            creating an account
          </Link>{' '}
          or{' '}
          <Link href="/signin" className="underline">
            signing in
          </Link>{' '}
          if you already have an account.
        </h6>
      </div>
    </div>
  );
}
