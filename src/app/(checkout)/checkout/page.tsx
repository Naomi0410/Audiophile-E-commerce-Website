"use client";
import { useCartContext } from "@/context/CartProvider";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import CheckoutModal from "@/components/shared/CheckoutModal";
import BillingDetails from "@/components/checkout/BillingDetails";
import ShippingInfo from "@/components/checkout/ShippingInfo";
import PaymentMethod from "@/components/checkout/PaymentMethod";
import OrderSummary from "@/components/checkout/OrderSummary";

const CheckoutPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    paymentMethod: "e-money",
    eNumber: "",
    ePin: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const raf = requestAnimationFrame(() => setIsMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  const { cart } = useCartContext();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const vatPrice = (totalPrice * 20) / 100;
  const shippingPrice = 50;
  const grandTotal = totalPrice + shippingPrice + vatPrice;

  // ---------- Validation ----------
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2) return "Name must be at least 2 characters";
        if (!/^[a-zA-Z\s]+$/.test(value)) return "Name can only contain letters and spaces";
        return "";
      case "email":
        if (!value.trim()) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return "Please enter a valid email address";
        return "";
      case "phone":
        if (!value.trim()) return "Phone number is required";
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ""))) {
          return "Please enter a valid phone number";
        }
        return "";
      case "address":
        if (!value.trim()) return "Address is required";
        if (value.trim().length < 10) return "Please enter a complete address";
        return "";
      case "zip":
        if (!value.trim()) return "ZIP code is required";
        if (!/^\d{5,6}$/.test(value)) return "Please enter a valid ZIP code (5 or 6 digits)";
        return "";
      case "city":
        if (!value.trim()) return "City is required";
        if (value.trim().length < 2) return "City must be at least 2 characters";
        if (!/^[a-zA-Z\s\-\.]+$/.test(value)) return "City can only contain letters, spaces, hyphens, and periods";
        return "";
      case "country":
        if (!value.trim()) return "Country is required";
        if (value.trim().length < 2) return "Country must be at least 2 characters";
        if (!/^[a-zA-Z\s\-\.]+$/.test(value)) return "Country can only contain letters, spaces, hyphens, and periods";
        return "";
      case "eNumber":
        if (formData.paymentMethod === "e-money") {
          if (!value.trim()) return "e-Money number is required";
          if (!/^\d{8,12}$/.test(value)) return "e-Money number must be 8-12 digits";
        }
        return "";
      case "ePin":
        if (formData.paymentMethod === "e-money") {
          if (!value.trim()) return "e-Money PIN is required";
          if (!/^\d{4,6}$/.test(value)) return "e-Money PIN must be 4-6 digits";
        }
        return "";
      default:
        return "";
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    const fieldsToValidate = ["name", "email", "phone", "address", "zip", "city", "country"];

    if (formData.paymentMethod === "e-money") {
      fieldsToValidate.push("eNumber", "ePin");
    }

    fieldsToValidate.forEach((field) => {
      const error = validateField(field, formData[field as keyof typeof formData]);
      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ---------- Handlers ----------
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const allFields = ["name", "email", "phone", "address", "zip", "city", "country"];
    if (formData.paymentMethod === "e-money") {
      allFields.push("eNumber", "ePin");
    }
    const newTouched: Record<string, boolean> = {};
    allFields.forEach((field) => {
      newTouched[field] = true;
    });
    setTouched(newTouched);

    if (validateForm()) {
      console.log("Form submitted successfully:", formData);
      setFormSubmitted(true);
    } else {
      console.log("Form has validation errors");
      setFormSubmitted(false);
    }
  };

  const getInputClasses = (fieldName: string) => {
    const baseClasses =
      "py-3.75 px-4 border rounded-md placeholder:font-bold placeholder:text-sm placeholder:text-dark-100/40";
    const hasError = errors[fieldName];
    if (hasError) {
      return `${baseClasses} border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500`;
    }
    return `${baseClasses} border-[#cfcfcf] focus:border-primary-500 focus:ring-1 focus:ring-primary-500`;
  };

  return (
    <div>
      {formSubmitted && <CheckoutModal />}
      <div className="bg-light-200 pt-6 sm:pt-14 lg:pt-21 pb-24 sm:pb-29 lg:pb-35">
        <button
          className="body text-dark-100/50 pb-4 pl-8 sm:pl-10 lg:pl-41 sm:pb-7 cursor-pointer"
          onClick={() => router.back()}
        >
          Go back
        </button>
        <form
          onSubmit={formSubmitHandler}
          className="mx-6 sm:mx-10 lg:mx-41 flex flex-col lg:flex-row gap-8"
        >
          {/* Billing & Shipping Form */}
          <div className="px-6 sm:px-10 lg:w-2/3 rounded-md bg-light-100 pt-8 pb-0.5">
            <h4 className="h4-bold sm:h3-bold">Checkout</h4>
            <BillingDetails
              formData={formData}
              errors={errors}
              inputHandler={inputHandler}
              handleBlur={handleBlur}
              getInputClasses={getInputClasses}
            />
            <ShippingInfo
              formData={formData}
              errors={errors}
              inputHandler={inputHandler}
              handleBlur={handleBlur}
              getInputClasses={getInputClasses}
            />
            <PaymentMethod
              formData={formData}
              errors={errors}
              inputHandler={inputHandler}
              handleBlur={handleBlur}
              getInputClasses={getInputClasses}
            />
          </div>

          {/* Order Summary */}
          <OrderSummary
            cart={cart}
            totalPrice={totalPrice}
            shippingPrice={shippingPrice}
            vatPrice={vatPrice}
            grandTotal={grandTotal}
            isMounted={isMounted}
          />
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;