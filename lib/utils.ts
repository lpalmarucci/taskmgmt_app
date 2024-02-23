import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitialLetters(name: string, surname: string) {
  return name.slice(0, 1) + surname.slice(0, 1);
}
