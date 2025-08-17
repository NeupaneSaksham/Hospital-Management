interface BillingSummaryProps {
  billingData: {
    doctorCharge: number
    serviceCharges: number
    otherCharges: number
    subtotal: number
    totalAmount: number
  }
}

export default function BillingSummarySection({ billingData }: BillingSummaryProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">BILLING SUMMARY</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 font-medium text-gray-700">Content</th>
              <th className="text-right py-2 font-medium text-gray-700">Price</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="py-2 text-gray-600">Doctor Charge:</td>
              <td className="py-2 text-right text-gray-600">Rs.{billingData.doctorCharge}</td>
            </tr>
            <tr>
              <td className="py-2 text-gray-600">Service Charges:</td>
              <td className="py-2 text-right text-gray-600">Rs.{billingData.serviceCharges}</td>
            </tr>
            <tr>
              <td className="py-2 text-gray-600">Other Charges:</td>
              <td className="py-2 text-right text-gray-600">Rs.{billingData.otherCharges}</td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="py-2 font-medium text-gray-700">Subtotal:</td>
              <td className="py-2 text-right font-medium text-gray-700">Rs.{billingData.subtotal}</td>
            </tr>
            <tr className="border-t-2 border-gray-400">
              <td className="py-2 font-semibold text-gray-900">Total Amount:</td>
              <td className="py-2 text-right font-semibold text-gray-900">Rs.{billingData.totalAmount}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
