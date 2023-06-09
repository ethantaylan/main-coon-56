export interface Cats {
  name: string;
  race: string;
  description: string;
  onmMoreInfo?: () => void;
  image: string;
  file?: File;
  isUserAdmin?: boolean;
  id?: number
}

export interface Inputs {
  text: string;
  name: string;
  value: string;
  type: string;
}
