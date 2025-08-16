
import { useState } from 'react';
import { Button } from "../../../../components/ui/button";
import { Plus } from "lucide-react";
import { HospitalHeader } from "../../components/headers/HospitalHeader";
import { PrintButton } from "../../components/buttons/PrintButton";
import { BillingForm } from "../../components/billing/BillingForm";
import { BillingTable } from "../../components/billing/BillingTable";
import { BillingSummary } from "../../components/billing/BillingSummary";
import InfoRow from "../../components/tables/InfoRow";
import BackButton from "../../components/buttons/BackButton";

export default function Billing() {
  const [formData, setFormData] = useState({
    content: "",
    discount: "",
    deposit: "",
    serviceCount: "",
    amount: "",
    rate: "",
    section: ""
  });

  const hospitalInfo = {
    name: "Makalu Everest Hospital",
    type: "PVT.LTD",
    location: "Location",
    contact: "Contact",
    email: "www.user@email.com"
  };

  const billInfo = {
    billCode: "92748552952",
    panNo: "ABCDEFGHIJ",
    date: "2020-3-21"
  };

  const handleFormChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePrint = () => {
    console.log('Printing...');
  };

  const handleAddRow = () => {
    console.log('Adding row...');
  };

  const handleDone = () => {
    console.log('Saving...');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-center justify-between mb-4">
          <BackButton to="/patients" label="Back" />
          <PrintButton onClick={handlePrint} />
        </div>
        
        <HospitalHeader 
          hospitalInfo={hospitalInfo} 
          billInfo={billInfo}
        />

        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <InfoRow label="Patient Name" value="Hari Mohan" />
            <InfoRow label="Address" value="Itahari, Sunsari" />
            <InfoRow label="Phone" value="9812345678" />
          </div>
          <div className="space-y-4">
            <InfoRow label="User ID" value="12211" />
            <InfoRow label="Password" value="Hari Mohan" />
            <InfoRow label="Receptionist" value="Hari Mohan" />
          </div>
        </div>

        <BillingForm
          values={formData}
          onContentChange={handleFormChange('content')}
          onDiscountChange={handleFormChange('discount')}
          onDepositChange={handleFormChange('deposit')}
          onServiceCountChange={handleFormChange('serviceCount')}
          onAmountChange={handleFormChange('amount')}
          onRateChange={handleFormChange('rate')}
          onSectionChange={handleFormChange('section')}
        />

        <div className="mb-6">
          <Button 
            className="bg-teal-500 hover:bg-teal-600 text-white"
            onClick={handleAddRow}
          >
            <Plus className="w-4 h-4 mr-2" /> Add
          </Button>
        </div>

        <BillingTable />

        <div className="flex justify-between items-end">
          <Button 
            className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-2"
            onClick={handleDone}
          >
            Done
          </Button>
          <BillingSummary
            subtotal={Number(formData.amount)}
            discount={Number(formData.discount)}
            depositAmount={Number(formData.deposit)}
            dueAmount={Number(formData.amount) - Number(formData.deposit)}
            vat={Number(formData.amount) * 0.13}
            totalAmount={
              (Number(formData.amount) + (Number(formData.amount) * 0.13)) - 
              ((Number(formData.amount) * Number(formData.discount)) / 100) 
            }
          />
        </div>
      </div>
    </div>
  );
}