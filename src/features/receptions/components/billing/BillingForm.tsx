import FormInput from '../inputfields/FormInput';
import SelectField from '../inputfields/SelectField';
import type { ChangeEvent } from 'react';

interface BillingFormProps {
  onContentChange?: (value: string) => void;
  onDiscountChange?: (value: string) => void;
  onDepositChange?: (value: string) => void;
  onServiceCountChange?: (value: string) => void;
  onAmountChange?: (value: string) => void;
  onRateChange?: (value: string) => void;
  onSectionChange?: (value: string) => void;
  values?: {
    content?: string;
    discount?: string;
    deposit?: string;
    serviceCount?: string;
    amount?: string;
    rate?: string;
    section?: string;
  };
}

export function BillingForm({
  onContentChange,
  onDiscountChange,
  onDepositChange,
  onServiceCountChange,
  onAmountChange,
  onRateChange,
  onSectionChange,
  values = {}
}: BillingFormProps) {
  const handleInputChange = (handler?: (value: string) => void) => (e: ChangeEvent<HTMLInputElement>) => {
    handler?.(e.target.value);
  };

  return (
    <div className="grid grid-cols-3 gap-6 mb-6">
      <div className="space-y-4">
        <FormInput 
          label="Content :" 
          placeholder="Enter the Content" 
          value={values.content}
          onChange={handleInputChange(onContentChange)}
        />
        <FormInput 
          label="Discount % :" 
          placeholder="Discount %" 
          type="number"
          value={values.discount}
          onChange={handleInputChange(onDiscountChange)}
        />
        <FormInput 
          label="Deposit Amount" 
          placeholder="Amount" 
          type="number"
          value={values.deposit}
          onChange={handleInputChange(onDepositChange)}
        />
      </div>
      <div className="space-y-4">
        <FormInput 
          label="Service count :" 
          placeholder="Service Count" 
          type="number"
          value={values.serviceCount}
          onChange={handleInputChange(onServiceCountChange)}
        />
        <FormInput 
          label="Amount :" 
          placeholder="Amount" 
          type="number"
          value={values.amount}
          onChange={handleInputChange(onAmountChange)}
        />
      </div>
      <div className="space-y-4">
        <FormInput 
          label="Rate :" 
          placeholder="Rate" 
          type="number"
          value={values.rate}
          onChange={handleInputChange(onRateChange)}
        />
        <SelectField
          label="Section :"
          options={[
            { value: "department", label: "Department" },
            { value: "emergency", label: "Emergency" },
            { value: "icu", label: "ICU" }
          ]}
          value={values.section}
          onChange={onSectionChange}
        />
      </div>
    </div>
  );
}
