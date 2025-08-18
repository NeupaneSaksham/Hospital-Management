import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '../components/pharmacy-sidebar';
import { AppHeader } from '../components/pharmacy-header';
import FormSection from '@/features/receptions/components/forms/FormSection';
import FormField from '@/features/receptions/components/inputfields/FormField';
import SelectField from '@/features/receptions/components/inputfields/SelectField';
import TextareaField from '@/features/receptions/components/inputfields/TextareaField';
import DateInput from '@/features/receptions/components/inputfields/DateInput';
import { useQuery } from '@tanstack/react-query';
import { categoryApi } from '../services/api/categoryapi';

export default function AddStock() {
  const [formData, setFormData] = useState({
    itemName: '',
    category: '',
    description: '',
    unitOfMeasure: '',
    totalQuantity: '',
    unitQuantity: '',
    mfgdDate: '',
    expiryDate: '',
    manufacturer: '',
    supplier: '',
    unitPrice: '',
    totalPrice: '',
    requiresRefrigeration: false,
    sterile: false,
    hazardous: false,
    flammable: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ['categoryData'],
    queryFn: categoryApi.listCategory,
  });

  console.log('Category created', data);
  console.log('This is loading. ', isLoading);
  console.log('Err', error);

  return (
    <div className="flex min-h-screen w-full">
      <SidebarProvider>
        <AppSidebar />
        <div className="flex-1 flex flex-col min-h-screen w-full">
          <AppHeader title="Add Stock" />
          <main className="p-4 md:p-6 flex-1 w-full">
            <div className="bg-white border border-gray-200 rounded-lg p-6 w-full">
              {/* Basic Information Section */}
              <FormSection title="Basic Information" className="mb-8">
                <p className="text-sm text-gray-500 mb-6">
                  Enter Basic Informations
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <FormField
                    label="Item Name"
                    required
                    value={formData.itemName}
                    onChange={(v) => handleInputChange('itemName', v)}
                    placeholder="Enter The Name of Item"
                  />
                  <SelectField
                    label="Category"
                    value={formData.category}
                    onChange={(v) => handleInputChange('category', v)}
                    options={[
                      { value: 'Medication', label: 'Medication' },
                      { value: 'Equipment', label: 'Equipment' },
                      { value: 'Supplies', label: 'Supplies' },
                      { value: 'Other', label: 'Other' },
                    ]}
                  />
                </div>
                <TextareaField
                  label="Description"
                  value={formData.description}
                  onChange={(v) => handleInputChange('description', v)}
                  placeholder="Enter The Item Description"
                  className="mb-6"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <SelectField
                    label="Unit Of Measure"
                    value={formData.unitOfMeasure}
                    onChange={(v) => handleInputChange('unitOfMeasure', v)}
                    options={[
                      { value: 'Each', label: 'Each' },
                      { value: 'Box', label: 'Box' },
                      { value: 'Pack', label: 'Pack' },
                      { value: 'Bottle', label: 'Bottle' },
                    ]}
                    className="mt-3.5 w-full"
                  />
                  <FormField
                    label="Total Quantity"
                    value={formData.totalQuantity}
                    onChange={(v) => handleInputChange('totalQuantity', v)}
                    placeholder="Total Quantity"
                  />
                  <FormField
                    label="Unit Quantity"
                    value={formData.unitQuantity}
                    onChange={(v) => handleInputChange('unitQuantity', v)}
                    placeholder="Quantity Per Unit"
                  />
                </div>
              </FormSection>

              {/* Advanced Information Section */}
              <FormSection title="Advanced Information" className="mb-8">
                <p className="text-sm text-gray-500 mb-6">
                  Enter Basic Informations
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <DateInput
                    label="MFGD Date"
                    required
                    value={formData.mfgdDate}
                    onChange={(v) => handleInputChange('mfgdDate', v)}
                    placeholder="YY/MM/DD"
                  />
                  <DateInput
                    label="Expiry Date"
                    required
                    value={formData.expiryDate}
                    onChange={(v) => handleInputChange('expiryDate', v)}
                    placeholder="YY/MM/DD"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <FormField
                    label="Manufacturer"
                    value={formData.manufacturer}
                    onChange={(v) => handleInputChange('manufacturer', v)}
                    placeholder="Brand Name Or Manufacturer Name"
                  />
                  <FormField
                    label="Supplier"
                    value={formData.supplier}
                    onChange={(v) => handleInputChange('supplier', v)}
                    placeholder="Supplier Name"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <FormField
                    label="Unit Price"
                    value={formData.unitPrice}
                    onChange={(v) => handleInputChange('unitPrice', v)}
                    placeholder="Enter Unit Price"
                  />
                  <FormField
                    label="Total Price"
                    required
                    value={formData.totalPrice}
                    onChange={(v) => handleInputChange('totalPrice', v)}
                    placeholder="Enter Total Price"
                  />
                </div>
                {/* Item Properties */}
                <div className="mb-8">
                  <span className="text-sm font-medium text-gray-700 mb-4 block">
                    Item Properties
                  </span>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="refrigeration"
                        checked={formData.requiresRefrigeration}
                        onCheckedChange={(checked) =>
                          handleInputChange(
                            'requiresRefrigeration',
                            checked as boolean,
                          )
                        }
                      />
                      <span className="text-sm text-gray-700">
                        Requires Refrigeration
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="sterile"
                        checked={formData.sterile}
                        onCheckedChange={(checked) =>
                          handleInputChange('sterile', checked as boolean)
                        }
                      />
                      <span className="text-sm text-gray-700">Sterile</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="hazardous"
                        checked={formData.hazardous}
                        onCheckedChange={(checked) =>
                          handleInputChange('hazardous', checked as boolean)
                        }
                      />
                      <span className="text-sm text-gray-700">
                        Hazardous / Biohazard
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="flammable"
                        checked={formData.flammable}
                        onCheckedChange={(checked) =>
                          handleInputChange('flammable', checked as boolean)
                        }
                      />
                      <span className="text-sm text-gray-700">Flammable</span>
                    </div>
                  </div>
                </div>
              </FormSection>

              {/* Action Buttons */}
              <div className="flex justify-center gap-4 pt-6">
                <Button
                  variant="outline"
                  className="px-8 py-2 bg-red-500 text-white border-red-500 hover:bg-red-600 hover:border-red-600 cursor-pointer"
                  onClick={() => console.log('Cancel clicked')}
                >
                  Cancel
                </Button>
                <Button
                  className="px-8 py-2 bg-teal-500 text-white hover:bg-teal-600 cursor-pointer"
                  onClick={() => console.log('Add clicked', formData)}
                >
                  + Add
                </Button>
              </div>
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
}
