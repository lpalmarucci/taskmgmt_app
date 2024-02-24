'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import CreateEditProjectSheet from '@/components/projects/sheet/CreateEditProjectSheet';

function ProjectsContainer() {
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex flex-col">
      <div className="ml-auto mr-4">
        <CreateEditProjectSheet
          isOpen={isSheetOpen}
          onClose={() => setIsSheetOpen(false)}
        />
        <Button onClick={() => setIsSheetOpen((prev) => !prev)}>
          <PlusCircledIcon className="mr-2 h-4 w-4" />
          Add project
        </Button>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <h1 className="text-4xl font-semibold">
          No projects found. Create a new one now!
        </h1>
      </div>
    </div>
  );
}

export default ProjectsContainer;
