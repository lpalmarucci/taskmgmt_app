import GithubSignInButton from '@/components/buttons/GithubSignInButton';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const session = await getServerSession();
  if (session?.user) redirect('/projects');
  return (
    <div className="bg-background w-full min-h-[100dvh] flex justify-center items-center">
      <div className="flex flex-col gap-6 justify-center items-center">
        <h1 className="py-8 font-bold cursor-pointer text-5xl select-none text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-700 tracking-tight">
          Welcome to TASKMGMT
        </h1>
        <h6 className="scroll-m-20 text-xl tracking-tight">
          <GithubSignInButton />
        </h6>
      </div>
    </div>
  );
}
