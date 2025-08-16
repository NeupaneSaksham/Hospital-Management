import { useState } from "react"
import { DollarSign } from "lucide-react"
import DetailedBill from "./DetailedBill"
import BillSummary from "./BillSummary"
import PaymentDialog from "../../components/popups/PopUp"

export default function BillingHistory() {
  const [activeTab, setActiveTab] = useState<'Detailed Bill' | 'Bill Summary'>('Bill Summary')
  const [showPaymentDialog, setShowPaymentDialog] = useState<null | 'due' | 'remaining'>(null)
  const [dueAmount, setDueAmount] = useState(2000)
  const [remainingBalance, setRemainingBalance] = useState(0)

  // Handler for confirming payment
  const handleConfirmPayment = (amount: number) => {
    const payment = Math.min(amount, dueAmount)
    setDueAmount(dueAmount - payment)
    setRemainingBalance(remainingBalance + (dueAmount - payment))
    setShowPaymentDialog(null)
  }

  // Handler for clearing remaining balance
  const handleClearRemaining = (amount: number) => {
    setRemainingBalance(0)
    setDueAmount(dueAmount + amount)
    setShowPaymentDialog(null)
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-400 text-white p-6 rounded-lg">
          <h3 className="text-sm font-medium opacity-90">Total Amount</h3>
          <p className="text-2xl font-semibold mt-1">Rs.32,000</p>
        </div>

        <div className="bg-teal-500 text-white p-6 rounded-lg">
          <h3 className="text-sm font-medium opacity-90">Deposit Amount</h3>
          <p className="text-2xl font-semibold mt-1">Rs.30,000</p>
        </div>

        <div className="bg-red-500 text-white p-6 rounded-lg relative cursor-pointer" onClick={() => setShowPaymentDialog('due')}>
          <h3 className="text-sm font-medium opacity-90">Due Amount</h3>
          <p className="text-2xl font-semibold mt-1">Rs.{dueAmount}</p>
          <div className="absolute bottom-4 right-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white opacity-70">
              <path d="M3 6h18l-2 13H5L3 6z" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>

        <div className="bg-yellow-300 text-gray-800 p-6 rounded-lg relative cursor-pointer" onClick={() => remainingBalance > 0 && setShowPaymentDialog('remaining')}>
          <h3 className="text-sm font-medium">Remaining Balance</h3>
          <p className="text-2xl font-semibold mt-1">Rs.{remainingBalance}</p>
          <div className="absolute bottom-4 right-4 bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center">
            <DollarSign size={16} />
          </div>
        </div>
      </div>

      {/* Payment PopUp */}
      {showPaymentDialog === 'due' && (
        <PaymentDialog
          dueAmount={dueAmount}
          onClose={() => setShowPaymentDialog(null)}
          onConfirm={handleConfirmPayment}
        />
      )}
      {showPaymentDialog === 'remaining' && (
        <PaymentDialog
          dueAmount={remainingBalance}
          onClose={() => setShowPaymentDialog(null)}
          onConfirm={handleClearRemaining}
          title="Clear Remaining Balance"
          balanceLabel="Remaining Balance"
          inputLabel="Return Amount"
        />
      )}

      {/* Tab Navigation */}
      <div className="flex gap-0 mb-6">
        <button
          onClick={() => setActiveTab('Detailed Bill')}
          className={`px-6 py-3 rounded-l-lg border-none ${
            activeTab === 'Detailed Bill' ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-600'
          }`}
        >
          Detailed Bill
        </button>
        <button
          onClick={() => setActiveTab('Bill Summary')}
          className={`px-6 py-3 rounded-r-lg ${
            activeTab === 'Bill Summary' ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-600'
          }`}
        >
          Bill Summary
        </button>
      </div>

      {activeTab === 'Bill Summary' ? <BillSummary /> : <DetailedBill />}
    </div>
  )
}