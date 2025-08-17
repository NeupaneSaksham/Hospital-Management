interface BillingItem {
    sn: number;
    content: string;
    serviceCount?: string;
    section?: string;
    rate: string;
    amount: string;
  }
  
  const billingData: BillingItem[] = [
    {
      sn: 1,
      content: "Doctor Charge:",
      serviceCount: "",
      section: "Department",
      rate: "Rs.800",
      amount: "Rs.800",
    },
    {
      sn: 2,
      content: "",
      serviceCount: "",
      section: "",
      rate: "",
      amount: "",
    },
  ];
  
  export default function DetailsForm() {
    return (
      <div>
        {/* Billing Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border">S.N</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border">Content</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border">Service Count</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border">Section</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border">Rate</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border">Amount</th>
              </tr>
            </thead>
            <tbody>
              {billingData.map((item) => (
                <tr key={item.sn} className="bg-white">
                  <td className="px-4 py-2 border text-sm">{item.sn}.</td>
                  <td className="px-4 py-2 border text-sm">{item.content}</td>
                  <td className="px-4 py-2 border text-sm">{item.serviceCount}</td>
                  <td className="px-4 py-2 border text-sm">{item.section}</td>
                  <td className="px-4 py-2 border text-sm">{item.rate}</td>
                  <td className="px-4 py-2 border text-sm">{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        {/* Summary Section */}
        <div className="mt-6 flex justify-end">
          <div className="text-sm space-y-1">
            <p><span className="font-semibold">Subtotal:</span> Rs.800</p>
            <p><span className="font-semibold">Discount(%):</span> Rs.0</p>
            <p><span className="font-semibold">Deposit Amount:</span> Rs.800</p>
            <p><span className="font-semibold">Due Amount:</span> Rs.0</p>
            <p><span className="font-semibold">VAT 13%:</span> Rs.0</p>
            <p><span className="font-semibold">Total Amount:</span> Rs.800</p>
          </div>
        </div>
      </div>
    );
  }
  