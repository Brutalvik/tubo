// utils/priceCalculator.ts

export const calculatePriceForSelectedDuration = (
  selectedDates,
  pricePerDay,
  discount
) => {
  if (selectedDates.length === 0 || pricePerDay <= 0) {
    return {
      totalDays: 0,
      totalPrice: 0,
      discountedPrice: 0,
      discountAmount: 0,
      isDiscountApplied: false,
    };
  }

  const totalDays = selectedDates.length;
  const totalPrice = totalDays * pricePerDay;
  const discountAmount = (totalPrice * discount) / 100;
  const discountedPrice = totalPrice - discountAmount;

  return {
    totalDays,
    totalPrice,
    discountedPrice,
    discountAmount,
    isDiscountApplied: discount > 0,
  };
};
