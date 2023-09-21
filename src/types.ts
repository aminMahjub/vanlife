export interface Van {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
}

export interface FetchResponeVan {
  vans: Van[];
}
