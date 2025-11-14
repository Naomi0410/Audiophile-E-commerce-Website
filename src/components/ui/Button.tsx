import Link from "next/link";

interface ButtonProps {
  buttonStyle?: string;
  label: string;
  isLink?: boolean;
  route?: string;
  className?: string;
  action?: string;
  addToCartHandler?: () => void;
  handleBackToHome?: () => void;
  typeButton?: "button" | "submit" | "reset";
}

const Button = ({
  className,
  buttonStyle,
  typeButton,
  label,
  isLink = false,
  route,
  action,
  addToCartHandler,
  handleBackToHome,
}: ButtonProps) => {
  const buttonClass = `uppercase text-[13px] inline-block text-center font-bold leading-[18px] cursor-pointer px-9 py-3.5 transition duration-150  ${
    buttonStyle === "secondary" ? "button-secondary" : "button-primary"
  } ${className} `;

  const clickHandler = () => {
    switch (action) {
      case "add-to-cart":
        addToCartHandler?.();
      case "checkout":
        handleBackToHome?.();
    }
  };

  return (
    <>
      {isLink ? (
        <Link className={buttonClass} href={route || "/"}>
          {label}
        </Link>
      ) : (
        <button
          type={typeButton || "button"}
          onClick={clickHandler}
          className={buttonClass}
        >
          {label}
        </button>
      )}
    </>
  );
};

export default Button;