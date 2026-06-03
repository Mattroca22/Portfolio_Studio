export interface Project {
  title: string;
  tag: string;
  stack: string;
  description: string;
}

export interface Service {
  icon: string;
  title: string;
  items: string[];
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}