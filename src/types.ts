export interface Van {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
}

export interface User {
  id: string;
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
  name: string;
}

export interface FetchResponeVan<TVan> {
  vans: TVan;
}

export type FetchResponeUser = Omit<User, "id" | "name">;

export type VanType = "simple" | "rugged" | "luxury";
