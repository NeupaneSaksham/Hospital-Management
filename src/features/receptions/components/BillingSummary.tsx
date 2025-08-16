import React from "react";

interface BillingItem {
  label: string;
  value: string;
  isSubtotal?: boolean;
  isTotal?: boolean;
}

interface BillingSummaryProps {
  items: BillingItem[];
  subtotal: string;
  total_price: string;
}

const BillingSummary: React.FC<BillingSummaryProps> = ({ items, subtotal, total_price }) => (
  <div className="mb-8">
    <h2 className="text-lg font-semibold text-gray-700 mb-3">BILLING SUMMARY</h2>
    <div className="border border-gray-300">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left p-3 font-medium">Content</th>
            <th className="text-right p-3 font-medium">Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr
              key={idx}
              className={`border-t ${item.isSubtotal ? "bg-gray-50" : ""} ${item.isTotal ? "bg-gray-100" : ""}`}
            >
              <td className={`p-3 ${item.isSubtotal || item.isTotal ? "font-medium" : "text-gray-600"}`}>{item.label}</td>
              <td className={`p-3 text-right ${item.isSubtotal || item.isTotal ? "font-medium" : "text-gray-600"}`}>{item.value}</td>
            </tr>
          ))}
          <tr className="border-t bg-gray-50">
            <td className="p-3 font-medium">Subtotal:</td>
            <td className="p-3 text-right font-medium">{subtotal}</td>
          </tr>
          <tr className="border-t bg-gray-100">
            <td className="p-3 font-semibold">Total Amount:</td>
            <td className="p-3 text-right font-semibold">{total_price}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default BillingSummary;
