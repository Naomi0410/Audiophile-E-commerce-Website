import Image from "next/image";

const EmptyCart = () => {
  return (
    <div className="text-center">
      <h2 className="h6-bold text-dark-100/40">Your Cart Is Empty</h2>
      <Image
        src="/assets/cart/empty-cart.jpg"
        alt="empty-cart"
        width={500}
        height={500}
      />
    </div>
  );
};

export default EmptyCart;