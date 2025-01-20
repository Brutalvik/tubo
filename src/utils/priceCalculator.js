export const calculatePriceForSelectedDuration = (
  startDate,
  endDate,
  pricePerDay,
  discount
) => {
  // Handle invalid input
  if (!startDate || !endDate || pricePerDay <= 0 || startDate >= endDate) {
    return {
      totalDays: 0,
      totalPrice: 0,
      discountedPrice: 0,
      discountAmount: 0,
      isDiscountApplied: false,
    };
  }

  // Calculate the difference in milliseconds
  const timeDifference = endDate.getTime() - startDate.getTime();

  // Convert milliseconds to hours
  const totalHours = timeDifference / (1000 * 3600);

  // Calculate the total number of days (rounding to nearest whole day based on the threshold)
  const totalDays = Math.max(Math.ceil(totalHours / 24), 1);
  console.log(1, totalDays); // Ensure at least 1 day if valid

  // If the duration is more than 3 hours but less than 24 hours, treat it as 1 day
  const isPartialDay = totalHours > 3 && totalHours < 24;
  const fullDays = isPartialDay ? 1 : totalDays; // Partial days count as 1 day

  // Calculate the total price without discount
  const totalPrice = fullDays * pricePerDay;

  // Calculate the discount amount
  const discountAmount = (totalPrice * discount) / 100;

  // Calculate the discounted price
  const discountedPrice = totalPrice - discountAmount;

  return {
    totalDays: fullDays,
    totalPrice,
    discountedPrice,
    discountAmount,
    isDiscountApplied: discount > 0,
  };
};
