interface BillingSummaryProps {
  subtotal: string | number;
  discount: string | number;
  depositAmount: string | number;
  dueAmount: string | number;
  vat: string | number;
  totalAmount: string | number;
}

export function BillingSummary({
  subtotal,
  discount,
  depositAmount,
  dueAmount,
  vat,
  totalAmount
}: BillingSummaryProps) {
  const summaryItems = [
    ["Subtotal:", `Rs.${subtotal}`],
    ["Discount(%):", `Rs.${discount}`],
    ["Deposit Amount", `Rs.${depositAmount}`],
    ["Due Amount", `Rs.${dueAmount}`],
    ["VAT 13%:", `Rs.${vat}`],
    ["Total Amount:", `Rs.${totalAmount}`, true]
  ];

  return (
    <div className="text-right space-y-2">
      {summaryItems.map(([label, value, bold], i) => (
        <div key={i} className={`flex justify-between w-64 ${bold ? "font-semibold" : ""}`}>
          <span className="text-gray-700">{label}</span>
          <span className="text-gray-800">{value}</span>
        </div>
      ))}
    </div>
  );
}
