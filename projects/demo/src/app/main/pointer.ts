export interface Gentelman {
  id: number;
  name: string;
  initial: string;
  status: 'Alive' | 'RIP';
  profession: string;
  twitter: string;
  picture: string;
  alternativeText: string;
  selected: boolean;
}
