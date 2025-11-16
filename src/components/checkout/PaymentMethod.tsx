import Image from "next/image";

interface PaymentMethodProps {
  formData: Record<string, string>;
  errors: Record<string, string>;
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  getInputClasses: (fieldName: string) => string;
}

export default function PaymentMethod({
  formData,
  errors,
  inputHandler,
  handleBlur,
  getInputClasses,
}: PaymentMethodProps) {
  return (
    <div>
      <p className="subtitle text-primary-500 pt-10 sm:pt-15 pb-7">
        payment details
      </p>
      <fieldset className="sm:grid sm:grid-cols-2 pb-7">
        <p className="text-xs font-bold capitalize text-dark-100 pb-3">
          payment method
        </p>
        <div className="flex flex-col gap-4">
          <label className="flex text-sm font-bold items-center gap-3 border py-3.75 px-4 rounded-md">
            <input
              type="radio"
              name="paymentMethod"
              value="e-money"
              className="accent-primary-500"
              onChange={inputHandler}
              checked={formData.paymentMethod === "e-money"}
            />
            <span className="text-sm font-bold text-dark-100">e-Money</span>
          </label>
          <label className="flex text-sm font-bold items-center gap-3 border py-3.75 px-4 rounded-md">
            <input
              type="radio"
              name="paymentMethod"
              value="cash-on-delivery"
              className="accent-primary-500"
              onChange={inputHandler}
              checked={formData.paymentMethod === "cash-on-delivery"}
            />
            <span className="text-sm font-bold text-dark-100">
              Cash on Delivery
            </span>
          </label>
        </div>
      </fieldset>

      {/* E‑Money Fields */}
      {formData.paymentMethod === "e-money" && (
        <div className="sm:flex items-start gap-4">
          <div className="flex flex-col gap-3 pb-7 w-full">
            <label
              className="text-xs font-bold capitalize text-dark-100"
              htmlFor="e-money"
            >
              e-Money Number
            </label>
            <input
              className={getInputClasses("eNumber")}
              placeholder="238521993"
              name="eNumber"
              id="e-money"
              type="text"
              onChange={inputHandler}
              onBlur={handleBlur}
              value={formData.eNumber}
              required
            />
            {errors.eNumber && (
              <span className="text-red-500 text-xs font-medium">
                {errors.eNumber}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-3 w-full">
            <label
              className="text-xs font-bold capitalize text-dark-100"
              htmlFor="e-pin"
            >
              e-Money PIN
            </label>
            <input
              className={getInputClasses("ePin")}
              placeholder="6891"
              name="ePin"
              id="e-pin"
              type="text"
              onChange={inputHandler}
              onBlur={handleBlur}
              value={formData.ePin}
              required
            />
            {errors.ePin && (
              <span className="text-red-500 text-xs font-medium">
                {errors.ePin}
              </span>
            )}
          </div>
        </div>
      )}

      {formData.paymentMethod === "cash-on-delivery" && (
        <div className="flex items-center pb-7 gap-4 sm:gap-8">
          <Image
            src="/assets/checkout/icon-cash-on-delivery.svg"
            alt="cash-on-delivery"
            height={50}
            width={50}
          />
          <p className="body text-dark-100/50">
            The 'Cash on Delivery' option enables you to pay in cash when our
            delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </p>
        </div>
      )}
    </div>
  );
}
