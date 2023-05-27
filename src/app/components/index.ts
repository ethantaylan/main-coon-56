export interface Cats {
  name: string;
  race: string;
  description: string;
  onmMoreInfo?: () => void;
  image: string;
  file?: any;
  isUserAdmin?: boolean;
}

export interface Inputs {
  text: string;
  name: string;
  value: string;
  type: string;
}
