
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, ChevronUp, ChevronDown } from "lucide-react"

interface PaymentDialogProps {
  dueAmount: number;
  onClose: () => void;
  onConfirm: (amount: number) => void;
  title?: string;
  balanceLabel?: string;
  inputLabel?: string;
}

export default function PaymentDialog({ dueAmount, onClose, onConfirm, title, balanceLabel, inputLabel }: PaymentDialogProps) {
  const [paymentAmount, setPaymentAmount] = useState<string>("")

  const handleIncrement = () => {
    const current = Number.parseFloat(paymentAmount) || 0
    setPaymentAmount((current + 1).toString())
  }

  const handleDecrement = () => {
    const current = Number.parseFloat(paymentAmount) || 0
    if (current > 0) {
      setPaymentAmount((current - 1).toString())
    }
  }

  const handleConfirm = () => {
    const amount = Number.parseFloat(paymentAmount)
    if (!isNaN(amount) && amount > 0) {
      onConfirm(amount)
      setPaymentAmount("")
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Transparent overlay */}
      <div className="absolute inset-0  backdrop-blur-sm bg-opacity-30" onClick={onClose} />
      <div className="relative bg-white border-4 border-none rounded-lg p-6 w-full max-w-md mx-auto z-10 shadow-xl">
        {/* Close button */}
        <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600" onClick={onClose}>
          <X size={28} />
        </button>

        {/* Title */}
        <h1 className="text-2xl font-bold text-black mb-6">{title || "Clear Payment Due"}</h1>

        {/* Patient Information */}
        <div className="mb-4">
          <p className="text-lg text-black mb-2">
            <span className="font-semibold">Patient Name:</span> Baburau G. Apte
          </p>
          <p className="text-base text-gray-700">
            <span className="font-medium">{balanceLabel || "Outstanding Balance"}:</span> Rs.{dueAmount}
          </p>
        </div>

        {/* Payment Amount Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-black mb-4">{inputLabel || "Payment Amount"}</h2>

          <div className="relative">
            <Input
              type="text"
              placeholder={`Enter ${inputLabel || "Payment Amount"}`}
              value={paymentAmount}
              onChange={(e) => setPaymentAmount(e.target.value)}
              className="text-base py-4 pr-10 border-2 border-gray-300 rounded-lg"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col">
              <button onClick={handleIncrement} className="text-gray-600 hover:text-gray-800 p-0.5">
                <ChevronUp size={16} />
              </button>
              <button onClick={handleDecrement} className="text-gray-600 hover:text-gray-800 p-0.5">
                <ChevronDown size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button
            variant="destructive"
            size="lg"
            className="flex-1 py-4 text-base font-semibold bg-red-500 hover:bg-red-600 rounded-full"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            size="lg"
            className="flex-1 py-4 text-base font-semibold bg-teal-500 hover:bg-teal-600 rounded-full text-white"
            onClick={handleConfirm}
            disabled={Number(paymentAmount) <= 0 || Number(paymentAmount) > dueAmount}
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>
  )
}