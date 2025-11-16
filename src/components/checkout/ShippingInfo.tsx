interface ShippingInfoProps {
  formData: Record<string, string>;
  errors: Record<string, string>;
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  getInputClasses: (fieldName: string) => string;
}

export default function ShippingInfo({
  formData,
  errors,
  inputHandler,
  handleBlur,
  getInputClasses,
}: ShippingInfoProps) {
  return (
    <div>
      <p className="subtitle text-primary-500 pt-10 sm:pt-15 pb-7">
        shipping info
      </p>
      <div className="sm:grid grid-cols-2 gap-x-4">
        {/* Address */}
        <div className="flex flex-col col-span-2 gap-3 pb-7">
          <label className="text-xs font-bold text-dark-100" htmlFor="address">
            Your Address
          </label>
          <input
            className={getInputClasses("address")}
            placeholder="1137 Williams Avenue"
            id="address"
            name="address"
            type="text"
            value={formData.address}
            onChange={inputHandler}
            onBlur={handleBlur}
            required
          />
          {errors.address && (
            <span className="text-red-500 text-xs font-medium">{errors.address}</span>
          )}
        </div>
        {/* ZIP Code */}
        <div className="flex flex-col gap-3 pb-7">
          <label className="text-xs font-bold capitalize text-dark-100" htmlFor="zip-code">
            zip code
          </label>
          <input
            className={getInputClasses("zip")}
            placeholder="100001"
            id="zip-code"
            name="zip"
            type="text"
            value={formData.zip}
            onChange={inputHandler}
            onBlur={handleBlur}
            required
          />
          {errors.zip && (
            <span className="text-red-500 text-xs font-medium">{errors.zip}</span>
          )}
        </div>
        {/* City */}
        <div className="flex flex-col gap-3 pb-7">
          <label className="text-xs font-bold capitalize text-dark-100" htmlFor="city">
            city
          </label>
          <input
            className={getInputClasses("city")}
            placeholder="New York"
            id="city"
            name="city"
            type="text"
            value={formData.city}
            onChange={inputHandler}
            onBlur={handleBlur}
            required
          />
          {errors.city && (
            <span className="text-red-500 text-xs font-medium">{errors.city}</span>
          )}
        </div>
        {/* Country */}
        <div className="flex flex-col gap-3">
          <label className="text-xs font-bold capitalize text-dark-100" htmlFor="country">
            Country
          </label>
          <input
            className={getInputClasses("country")}
            placeholder="United States"
            id="country"
            name="country"
            type="text"
            value={formData.country}
            onChange={inputHandler}
            onBlur={handleBlur}
            required
          />
          {errors.country && (
            <span className="text-red-500 text-xs font-medium">{errors.country}</span>
          )}
        </div>
      </div>
    </div>
  );
}