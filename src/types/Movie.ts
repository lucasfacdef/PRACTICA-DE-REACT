export interface Movie {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  year: number;
  rating: number;
  type: "movie" | "series";
}