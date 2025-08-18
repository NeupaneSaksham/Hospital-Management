
import { useState } from "react"
import { Search, Plus, Check, Trash2, Edit, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import SharedSidebar from "./Sidebar/Sidebar"
import { useMutation } from "@tanstack/react-query"
import type { Property } from "../../types/property"
import { propertyApi } from "../../services/api/propertyapi"
// import type { CheckedState } from "@radix-ui/react-checkbox"

export default function ItemProperty() {
  // Changed type from number[] to string[] to match Property.id type
  const [selectedProperties, setSelectedProperties] = useState<string[]>([])
  const [showAddModal, setShowAddModal] = useState(false)
  const [newPropertyName, setNewPropertyName] = useState("")
  const [propertiesData, setPropertiesData] = useState<Property[]>([])

  // Mutation for creating a new property
  const createPropertyMutation = useMutation({
    mutationFn: (name: string) => propertyApi.postProperty({ name }),
    onSuccess: (newProperty: Property) => {
      console.log("New property added to state:", newProperty)
      // Update local state with the new property
      setPropertiesData((prev) => [...prev, newProperty])
      // Close modal and reset input
      setShowAddModal(false)
      setNewPropertyName("")
    },
    onError: (error: Error) => {
      console.error("Error creating property:", error.message)
      // Optionally show error to user (e.g., toast notification)
    },
  })

  const handleSelectAll = () => {
    if (selectedProperties.length === propertiesData.length) {
      setSelectedProperties([])
    } else {
      // Updated to use string IDs from Property.id
      setSelectedProperties(propertiesData.map((prop) => prop.id))
    }
  }

  // Changed parameter type from number to string
  // const handleSelectProperty = (id: string) => {
  //   setSelectedProperties((prev) => 
  //     prev.includes(id) ? prev.filter((propId) => propId !== id) : [...prev, id]
  //   )
  // }

  const handleAddProperty = () => {
    setShowAddModal(true)
  }

  const handleCloseModal = () => {
    setShowAddModal(false)
    setNewPropertyName("")
  }

  const handleSubmitProperty = () => {
    if (!newPropertyName) {
      console.error("Property name is required")
      return
    }
    createPropertyMutation.mutate(newPropertyName)
  }

  // Handle Input onChange with proper typing
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPropertyName(e.target.value)
  }

  // Handle Checkbox onCheckedChange with proper typing
  // const handleCheckboxChange = (id: string) =>  {
  //   return (checked: CheckedState) => handleCheckboxChange(id)
  // }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <SharedSidebar activePage="properties" />

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6 border-b-2 border-teal-500 pb-2 inline-block">
              Property list
            </h1>

            {/* Search and Action Buttons */}
            <div className="flex items-center justify-between mb-6">
              <div className="relative w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  placeholder="Search" 
                  className="pl-10 bg-gray-50 border-gray-200" 
                  onChange={handleInputChange} // Added proper event handler
                />
              </div>

              <div className="flex items-center gap-3">
                <Button 
                  onClick={handleSelectAll} 
                  className="bg-teal-500 hover:bg-teal-600 text-white cursor-pointer"
                  disabled={propertiesData.length === 0} // Added disabled prop for better UX
                >
                  <Check className="w-4 h-4 mr-2" />
                  {selectedProperties.length === propertiesData.length && propertiesData.length > 0
                    ? 'Deselect All'
                    : 'Select All'}
                </Button>

                <Button 
                  variant="destructive" 
                  className="bg-red-500 hover:bg-red-600 text-white cursor-pointer"
                  disabled={selectedProperties.length === 0} // Added disabled prop for better UX
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete ({selectedProperties.length})
                </Button>

                <Button 
                  onClick={handleAddProperty} 
                  className="bg-teal-500 hover:bg-teal-600 text-white cursor-pointer"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Item Property
                </Button>
              </div>
            </div>

            {/* Error State */}
            {createPropertyMutation.isError && (
              <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4">
                <p className="text-red-800">
                  Error: {createPropertyMutation.error?.message || "Failed to create property"}
                </p>
              </div>
            )}

            {/* Properties Table */}
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left border-b border-gray-200 w-12">
                        <Checkbox
                          checked={propertiesData.length > 0 && selectedProperties.length === propertiesData.length}
                          onCheckedChange={handleSelectAll}
                        />
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 border-b border-gray-200">
                        Property name
                      </th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900 border-b border-gray-200 pr-8">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {propertiesData.length === 0 ? (
                      <tr>
                        <td
                          colSpan={3}
                          className="px-4 py-8 text-center text-gray-500"
                        >
                          No properties found. Click "Add Item Property" to create one.
                        </td>
                      </tr>
                    ) : (
                      propertiesData.map((property) => (
                        <tr key={property.id} className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-3">
                            {/* <Checkbox
                              checked={selectedProperties.includes(property.id)}
                              onCheckedChange={(checked) => handleCheckboxChange(property.id)} 
                            /> */}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-900">{String(property.name)}</td> {/* Convert name to string to handle Stock type */}
                          <td className="px-4 py-3 text-right pr-8">
                            <div className="flex items-center justify-end gap-2">
                              <Button variant="ghost" size="sm" className="p-1 h-8 w-8 cursor-pointer hover:bg-gray-100">
                                <Edit className="w-4 h-4 text-gray-600" />
                              </Button>
                              <Button variant="ghost" size="sm" className="p-1 h-8 w-8 cursor-pointer hover:bg-red-50">
                                <Trash2 className="w-4 h-4 text-red-500" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 max-w-md mx-4 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Add new property</h2>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleCloseModal} 
                className="p-1 h-8 w-8 hover:bg-gray-100 cursor-pointer"
                disabled={createPropertyMutation.isPending}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Property Name <span className="text-red-500">*</span>
              </label>
              <Input
                placeholder="Example: Fragile, Perishable, Hazardous"
                value={newPropertyName}
                onChange={handleInputChange} // Updated to use typed handler
                className="w-full"
                disabled={createPropertyMutation.isPending}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                  if (e.key === 'Enter') {
                    handleSubmitProperty()
                  }
                }}
              />
              {createPropertyMutation.isError && (
                <p className="text-red-500 text-sm mt-2">
                  Error: {createPropertyMutation.error?.message || "Failed to create property"}
                </p>
              )}
            </div>

            <div className="flex items-center gap-3 justify-end">
              <Button
                variant="outline"
                onClick={handleCloseModal}
                className="bg-red-500 hover:bg-red-600 text-white border-red-500 hover:border-red-600 cursor-pointer"
                disabled={createPropertyMutation.isPending}
              >
                Cancel
              </Button>
              <Button 
                onClick={handleSubmitProperty} 
                className="bg-teal-500 hover:bg-teal-600 text-white cursor-pointer"
                disabled={createPropertyMutation.isPending || !newPropertyName}
              >
                {createPropertyMutation.isPending ? (
                  "Adding..."
                ) : (
                  <>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Property
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}