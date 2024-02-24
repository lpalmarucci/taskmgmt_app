import ProjectsContainer from '@/components/projects/ProjectsContainer';

export const metadata = {
  title: 'Projects',
  description: 'List of all projects',
};

export default async function ProjectsPage() {
  return (
    <div className="h-full w-full flex px-4 py-6 lg:px-8">
      <ProjectsContainer />
    </div>
  );
}
