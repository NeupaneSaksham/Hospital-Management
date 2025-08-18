import BackButton from "@/features/receptions/components/buttons/BackButton"
import Layout from "@/features/pharmacy/layout"


export default function ViewPatient() {
  return (
    <Layout>
      <div className="p-6 bg-white min-h-screen w-full">
      {/* Patient Information Header */}
      <BackButton to="/pharmacy/patients" className="mb-4"/>
      <div className="border border-gray-300 p-4 mb-6">
        <div className="flex flex-wrap gap-8 text-sm">
          <div>
            <span className="font-semibold text-gray-800">Patient Name :</span>
            <span className="ml-2 text-gray-700">Ram Bahadur</span>
          </div>
          <div>
            <span className="font-semibold text-gray-800">Patient ID :</span>
            <span className="ml-2 text-gray-700">1283</span>
          </div>
          <div>
            <span className="font-semibold text-gray-800">Doctor Name :</span>
            <span className="ml-2 text-gray-700">1283</span>
          </div>
          <div>
            <span className="font-semibold text-gray-800">Department :</span>
            <span className="ml-2 text-gray-700">Neurology</span>
          </div>
          <div>
            <span className="font-semibold text-gray-800">Date :</span>
            <span className="ml-2 text-gray-700">2082/3/21</span>
          </div>
        </div>
      </div>

      {/* Prescriptions Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Prescriptions</h2>

        {/* Prescription Table */}
        <div className="border border-gray-300">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="border-r border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">
                  Medicine Name
                </th>
                <th className="border-r border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">Dosage</th>
                <th className="border-r border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">Duration</th>
                <th className="border-r border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">Status</th>
                <th className="border-r border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">Quantity</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-800">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-300">
                <td className="border-r border-gray-300 px-4 py-3 text-gray-700">D-Cold</td>
                <td className="border-r border-gray-300 px-4 py-3 text-gray-700">500 Mg</td>
                <td className="border-r border-gray-300 px-4 py-3 text-gray-700">2-3 Days</td>
                <td className="border-r border-gray-300 px-4 py-3">
                  <span className="text-green-600">In Stock</span>
                </td>
                <td className="border-r border-gray-300 px-4 py-3 text-gray-700">12</td>
                <td className="px-4 py-3 text-gray-700">Rs. 123</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="border-r border-gray-300 px-4 py-3 text-gray-700">D-Cold</td>
                <td className="border-r border-gray-300 px-4 py-3 text-gray-700">500 Mg</td>
                <td className="border-r border-gray-300 px-4 py-3 text-gray-700">2-3 Days</td>
                <td className="border-r border-gray-300 px-4 py-3">
                  <span className="text-red-600">No Stock</span>
                </td>
                <td className="border-r border-gray-300 px-4 py-3 text-gray-700">12</td>
                <td className="px-4 py-3 text-gray-700">Rs. 123</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="border-r border-gray-300 px-4 py-3 text-gray-700">D-Cold</td>
                <td className="border-r border-gray-300 px-4 py-3 text-gray-700">500 Mg</td>
                <td className="border-r border-gray-300 px-4 py-3 text-gray-700">2-3 Days</td>
                <td className="border-r border-gray-300 px-4 py-3">
                  <span className="text-green-600">In Stock</span>
                </td>
                <td className="border-r border-gray-300 px-4 py-3 text-gray-700">12</td>
                <td className="px-4 py-3 text-gray-700">Rs. 123</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4">
        <button className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md font-medium transition-colors" >
          Close
        </button>
        <button className="px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-md font-medium transition-colors">
          Create Bill
        </button>
      </div>
      </div>
    </Layout>
  )
}
