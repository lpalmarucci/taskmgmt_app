import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import { Separator } from '@/components/ui/separator';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export const metadata = {
  title: 'Projects',
  description: 'List of all projects',
};

export default async function ProjectsPage() {
  return (
    <div className="h-full px-4 py-6 lg:px-8">
      <Tabs defaultValue="board" className="h-full space-y-6">
        <div className="space-between flex items-center">
          <TabsList>
            <TabsTrigger value="board" className="relative">
              Board
            </TabsTrigger>
            <TabsTrigger value="list">List</TabsTrigger>
          </TabsList>
          <div className="ml-auto mr-4">
            <Button>
              <PlusCircledIcon className="mr-2 h-4 w-4" />
              Add task
            </Button>
          </div>
        </div>
        <TabsContent value="board" className="border-none p-0 outline-none">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">
                Listen Now
              </h2>
              <p className="text-sm text-muted-foreground">
                Top picks for you. Updated daily.
              </p>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="relative">
            <ScrollArea>
              <div className="flex space-x-4 pb-4">
                {/*{listenNowAlbums.map((album) => (*/}
                {/*  <AlbumArtwork*/}
                {/*    key={album.name}*/}
                {/*    album={album}*/}
                {/*    className="w-[250px]"*/}
                {/*    aspectRatio="portrait"*/}
                {/*    width={250}*/}
                {/*    height={330}*/}
                {/*  />*/}
                {/*))}*/}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
          <div className="mt-6 space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              Made for You
            </h2>
            <p className="text-sm text-muted-foreground">
              Your personal playlists. Updated daily.
            </p>
          </div>
          <Separator className="my-4" />
          <div className="relative">
            <ScrollArea>
              <div className="flex space-x-4 pb-4">
                {/*{madeForYouAlbums.map((album) => (*/}
                {/*  <AlbumArtwork*/}
                {/*    key={album.name}*/}
                {/*    album={album}*/}
                {/*    className="w-[150px]"*/}
                {/*    aspectRatio="square"*/}
                {/*    width={150}*/}
                {/*    height={150}*/}
                {/*  />*/}
                {/*))}*/}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </TabsContent>
        <TabsContent
          value="list"
          className="h-full flex-col border-none p-0 data-[state=active]:flex"
        >
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">
                New Episodes
              </h2>
              <p className="text-sm text-muted-foreground">
                Your favorite podcasts. Updated daily.
              </p>
            </div>
          </div>
          <Separator className="my-4" />
          {/*<PodcastEmptyPlaceholder/>*/}
        </TabsContent>
      </Tabs>
    </div>
  );
}
