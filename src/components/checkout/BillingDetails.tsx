interface BillingDetailsProps {
  formData: Record<string, string>;
  errors: Record<string, string>;
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  getInputClasses: (fieldName: string) => string;
}

export default function BillingDetails({
  formData,
  errors,
  inputHandler,
  handleBlur,
  getInputClasses,
}: BillingDetailsProps) {
  return (
    <div>
      <p className="subtitle text-primary-500 pt-10 sm:pt-13 pb-7">
        billing details
      </p>
      <div className="sm:grid grid-cols-2 gap-x-4">
        {/* Name */}
        <div className="flex flex-col gap-3 pb-7">
          <label className="text-xs font-bold text-dark-100" htmlFor="name">
            Name
          </label>
          <input
            className={getInputClasses("name")}
            placeholder="Alexei Ward"
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={inputHandler}
            onBlur={handleBlur}
            required
          />
          {errors.name && (
            <span className="text-red-500 text-xs font-medium">
              {errors.name}
            </span>
          )}
        </div>
        {/* Email */}
        <div className="flex flex-col gap-3 pb-7">
          <label
            className="text-xs font-bold capitalize text-dark-100"
            htmlFor="email"
          >
            email address
          </label>
          <input
            className={getInputClasses("email")}
            placeholder="alexei@mail.com"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={inputHandler}
            onBlur={handleBlur}
            required
          />
          {errors.email && (
            <span className="text-red-500 text-xs font-medium">
              {errors.email}
            </span>
          )}
        </div>
        {/* Phone */}
        <div className="flex flex-col gap-3">
          <label
            className="text-xs font-bold capitalize text-dark-100"
            htmlFor="phone-number"
          >
            phone number
          </label>
          <input
            className={getInputClasses("phone")}
            placeholder="+234 123 456 7890"
            id="phone-number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={inputHandler}
            onBlur={handleBlur}
            required
          />
          {errors.phone && (
            <span className="text-red-500 text-xs font-medium">
              {errors.phone}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
