interface ImageProps {
  mobile: string;
  tablet: string;
  desktop: string;
}
export interface CartItemProps {
  id: string;
  name: string;
  image: ImageProps;
  price: number;
  quantity: number;
}