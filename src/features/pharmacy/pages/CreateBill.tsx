import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Trash2 } from "lucide-react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "../components/pharmacy-sidebar"
import { AppHeader } from "../components/pharmacy-header"
import type { BillingItem } from "../types/BillingItem"

export default function MedicalBillingForm() {
  const [customerID, setCustomerID] = useState("")
  const [customerName, setCustomerName] = useState("")
  const [address, setAddress] = useState("")
  const [contact, setContact] = useState("")

  const [medicineName, setMedicineName] = useState("")
  const [quantity, setQuantity] = useState("2")
  const [discount, setDiscount] = useState("10%")
  const [price, setPrice] = useState("")

  const [billingItems, setBillingItems] = useState<BillingItem[]>([])
  const [isBillFullyPaid, setIsBillFullyPaid] = useState("no")
  const [dueAmount, setDueAmount] = useState("1231")
  const [amountDeposited, setAmountDeposited] = useState("1231")
  const [amountToBePaid, setAmountToBePaid] = useState("1231")
  const [paymentMethod, setPaymentMethod] = useState<string[]>([])

  const handlePaymentMethodChange = (method: string, checked: boolean) => {
    if (checked) {
      setPaymentMethod([...paymentMethod, method])
    } else {
      setPaymentMethod(paymentMethod.filter((m) => m !== method))
    }
  }

  const removeBillingItem = (id: string) => {
    setBillingItems(billingItems.filter((item) => item.id !== id))
  }


  return (
    <div className="flex min-h-screen w-full">
      <SidebarProvider>
        <AppSidebar />
        <div className="flex-1 flex flex-col min-h-screen max-full">
          <AppHeader title="Medical Billing" />
          <main className="p-4 md:p-6 flex-1 w-full">
            <div className="max-w-6xl mx-auto p-6 bg-white">
              <div className="border border-gray-300 p-6 space-y-6">
                {/* Customer Information */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <Label className="text-sm font-normal whitespace-nowrap">Customer ID :</Label>
                    <Input value={customerID} onChange={(e) => setCustomerID(e.target.value)} className="flex-1" />
                  </div>
                  <div className="flex items-center gap-3">
                    <Label className="text-sm font-normal whitespace-nowrap">Customer name :</Label>
                    <Input value={customerName} onChange={(e) => setCustomerName(e.target.value)} className="flex-1" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <Label className="text-sm font-normal whitespace-nowrap">Address :</Label>
                    <Input value={address} onChange={(e) => setAddress(e.target.value)} className="flex-1" />
                  </div>
                  <div className="flex items-center gap-3">
                    <Label className="text-sm font-normal whitespace-nowrap">Contact :</Label>
                    <Input value={contact} onChange={(e) => setContact(e.target.value)} className="flex-1" />
                  </div>
                </div>

                {/* Bill Entry */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Bill Entry</h3>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <Label className="text-sm font-normal">Name of Medicine :</Label>
                      <Input
                        placeholder="Enter The Name"
                        value={medicineName}
                        onChange={(e) => setMedicineName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-normal">Quantity :</Label>
                      <Input value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-normal">Discount % :</Label>
                      <Input value={discount} onChange={(e) => setDiscount(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-normal">Price :</Label>
                      <Input placeholder="Auto Add/Editable" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                  </div>
                </div>

                {/* Billing Table */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Billing</h3>
                  <div className="border border-gray-300">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border-r border-gray-300 p-3 text-left text-sm font-normal">S.N.</th>
                          <th className="border-r border-gray-300 p-3 text-left text-sm font-normal">Medicine Name</th>
                          <th className="border-r border-gray-300 p-3 text-left text-sm font-normal">Quantity</th>
                          <th className="border-r border-gray-300 p-3 text-left text-sm font-normal">Price/unit</th>
                          <th className="border-r border-gray-300 p-3 text-left text-sm font-normal">Total Price</th>
                          <th className="p-3 text-left text-sm font-normal"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {billingItems.length === 0 ? (
                          <tr>
                            <td className="border-r border-gray-300 p-3 h-12"></td>
                            <td className="border-r border-gray-300 p-3"></td>
                            <td className="border-r border-gray-300 p-3"></td>
                            <td className="border-r border-gray-300 p-3"></td>
                            <td className="border-r border-gray-300 p-3"></td>
                            <td className="p-3 text-center">
                              <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700 hover:bg-red-50 cursor-pointer">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </td>
                          </tr>
                        ) : (
                          billingItems.map((item, index) => (
                            <tr key={item.id}>
                              <td className="border-r border-gray-300 p-3">{index + 1}</td>
                              <td className="border-r border-gray-300 p-3">{item.medicineName}</td>
                              <td className="border-r border-gray-300 p-3">{item.quantity}</td>
                              <td className="border-r border-gray-300 p-3">{item.pricePerUnit}</td>
                              <td className="border-r border-gray-300 p-3">{item.totalPrice}</td>
                              <td className="p-3 text-center">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeBillingItem(item.id)}
                                  className="text-red-500 hover:text-red-700 hover:bg-red-50 cursor-pointer"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="grid grid-cols-2 gap-6">
                  {/* Billing Summary */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Billing Summary</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Sub total :</span>
                        <span className="text-sm">Rs.123</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Total discount:</span>
                        <span className="text-sm">Rs.123</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">VAT :</span>
                        <span className="text-sm">Rs.123</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Grand Total :</span>
                        <span className="text-sm">Rs.123</span>
                      </div>
                    </div>

                    {/* Due Management */}
                    <div className="space-y-3 pt-4 border-t border-gray-300">
                      <h4 className="text-sm font-medium">Due management</h4>
                      <div className="flex items-center gap-4">
                        <span className="text-sm">Is bill fully Paid?</span>
                        <RadioGroup
                          value={isBillFullyPaid}
                          onValueChange={setIsBillFullyPaid}
                          className="flex items-center gap-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="yes" />
                            <Label htmlFor="yes" className="text-sm">
                              Yes
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="no" />
                            <Label htmlFor="no" className="text-sm">
                              No
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm">Due Amount:</span>
                        <Input value={dueAmount} onChange={(e) => setDueAmount(e.target.value)} className="w-24" />
                      </div>
                    </div>
                  </div>

                  {/* Payment */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Payment</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Amount Deposited:</span>
                        <div className="flex items-center gap-2">
                          <Input
                            value={amountDeposited}
                            onChange={(e) => setAmountDeposited(e.target.value)}
                            className="w-24"
                          />
                          <span className="text-sm text-gray-500">NPR</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm">Amount to be Paid:</Label>
                        <Input value={amountToBePaid} onChange={(e) => setAmountToBePaid(e.target.value)} />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm">Payment method :</Label>
                        <div className="flex items-center gap-6">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="cash"
                              checked={paymentMethod.includes("cash")}
                              onCheckedChange={(checked) => handlePaymentMethodChange("cash", checked as boolean)}
                            />
                            <Label htmlFor="cash" className="text-sm">
                              Cash
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="online"
                              checked={paymentMethod.includes("online")}
                              onCheckedChange={(checked) => handlePaymentMethodChange("online", checked as boolean)}
                            />
                            <Label htmlFor="online" className="text-sm">
                              Online
                            </Label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center gap-4 pt-6">
                  <Button variant="destructive" className="px-8 py-2 bg-red-400 hover:bg-red-500">
                    Reset Bill
                  </Button>
                  <Button className="px-8 py-2 bg-teal-500 hover:bg-teal-600">Confirm</Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  )
}