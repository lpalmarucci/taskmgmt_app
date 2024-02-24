import React from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';

const userSchema = z.object({
  id: z.number().nonnegative(),
  name: z.string().min(0),
});
type User = z.infer<typeof userSchema>;

const users: User[] = [
  {
    id: 1,
    name: 'palmareggio',
  },
  {
    id: 2,
    name: 'test',
  },
];

const formSchema = z.object({
  name: z.string().min(1, { message: 'Title must be provided' }),
  description: z.string().optional(),
  users: z.array(userSchema).min(1, { message: 'Select at least one user' }),
});

function CreateEditProjectSheet({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
      users: [] as User[],
    },
  });

  function handleSheetClose() {
    form.reset();
    onClose();
  }

  function onSubmit(values: z.infer<typeof formSchema>) {}

  return (
    <Sheet open={isOpen}>
      <SheetContent onClose={handleSheetClose}>
        <SheetHeader>
          <SheetTitle>Create project</SheetTitle>
          <SheetDescription>
            Add new project here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        {/*<div className="grid gap-4 py-4">*/}
        {/*  <div className="grid grid-cols-4 items-center gap-4">*/}
        {/*    <Label htmlFor="name" className="text-right">*/}
        {/*      Name*/}
        {/*    </Label>*/}
        {/*    <Input id="name" value="Pedro Duarte" className="col-span-3" />*/}
        {/*  </div>*/}
        {/*  <div className="grid grid-cols-4 items-center gap-4">*/}
        {/*    <Label htmlFor="username" className="text-right">*/}
        {/*      Username*/}
        {/*    </Label>*/}
        {/*    <Input id="username" value="@peduarte" className="col-span-3" />*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className="py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="This is a project about..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="users"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Users</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              'justify-between',
                              !field.value && 'text-muted-foreground',
                            )}
                          >
                            {field.value.length > 0
                              ? field.value.map(({ name }) => name).join(', ')
                              : 'Select user'}
                            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="p-0">
                        <Command>
                          <CommandInput
                            placeholder="Search name..."
                            className="h-9"
                          />
                          <CommandEmpty>No user found.</CommandEmpty>
                          <CommandGroup>
                            {users.map((user) => (
                              <CommandItem
                                value={user.name}
                                key={user.id}
                                onSelect={() => {
                                  const values = field.value;
                                  const oldValueIndex = field.value.findIndex(
                                    (u) => u.id === user.id,
                                  );
                                  oldValueIndex === -1
                                    ? values.push(user)
                                    : values.splice(oldValueIndex, 1);
                                  form.setValue('users', values, {
                                    shouldValidate: true,
                                  });
                                }}
                              >
                                {user.name}
                                <CheckIcon
                                  className={cn(
                                    'ml-auto h-4 w-4',
                                    field.value.find((u) => u.id === user.id)
                                      ? 'opacity-100'
                                      : 'opacity-0',
                                  )}
                                />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <FormDescription>
                      This is the user that will be part of the project
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
        <SheetFooter>
          <SheetClose asChild onClick={handleSheetClose}>
            <Button
              type="submit"
              onClick={handleSheetClose}
              disabled={!form.formState.isValid}
            >
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default CreateEditProjectSheet;
