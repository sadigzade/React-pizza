export type CartItem = {
  id: string;
  imageUrl: string;
  title: string;
  type: string;
  size: number;
  price: number;
  count: number;
};

export interface CartSliceState {
  totalPrice: number;
  totalCount: number;
  items: CartItem[];
}
