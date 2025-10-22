export interface BibleVerse {
  ref: string;
  text: string;
}

export interface ThemedVerse {
  ref: string;
  text: string;
}

export interface Theme {
  id: string;
  title: string;
  // Fix: Changed type of icon to string to match data usage and fix React namespace error.
  icon: string;
  color: string;
  verses: ThemedVerse[];
}
