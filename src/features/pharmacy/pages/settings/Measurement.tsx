// import { useEffect, useState } from 'react';
// import { Search, Plus, Check, Trash2, Edit, X } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Checkbox } from '@/components/ui/checkbox';
// import SharedSidebar from './Sidebar/Sidebar';
// import { useMutation, useQuery } from '@tanstack/react-query';
// import type { measurement } from '../../types/measurement';
// import { measurementApi } from '../../services/api/measurementapi';

// export default function Measurement() {
//   const [selectedMeasurements, setSelectedMeasurements] = useState<number[]>(
//     [],
//   );
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [newMeasurementName, setNewMeasurementName] = useState('');

//   const [measurementsData, setMeasurementsData] = useState<measurement[]>([]);

//   const { data, isLoading, error } = useQuery({
//     queryKey: ['listMeasurement'],
//     queryFn: measurementApi.listMeasurement,
//   });

//   useEffect(() => {
//     if (data?.data) {
//       setMeasurementsData(data.data);
//     }
//   }, [data]);

//   const createMeasurementMutation = useMutation({
//     mutationFn: (name: string) =>
//       measurementApi.createMeasurementUnit({ name }),
//     onSuccess: (newMeasurement: measurement) => {
//       console.log('New measurement added to state:', newMeasurement);
//       setMeasurementsData((prev) => [...prev, newMeasurement]);
//       setShowAddModal(false);
//       setNewMeasurementName('');
//     },
//     onError: (error: Error) => {
//       console.error('Error creating measurement:', error.message);
//     },
//   });

//   const handleSelectAll = () => {
//     if (selectedMeasurements.length === measurementsData.length) {
//       setSelectedMeasurements([]);
//     } else {
//       setSelectedMeasurements(
//         measurementsData.map((measurement) => measurement.id),
//       );
//     }
//   };

//   const handleSelectMeasurement = (id: number) => {
//     setSelectedMeasurements((prev) =>
//       prev.includes(id)
//         ? prev.filter((measurementId) => measurementId !== id)
//         : [...prev, id],
//     );
//   };

//   const handleAddMeasurement = () => {
//     setShowAddModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowAddModal(false);
//     setNewMeasurementName('');
//   };

//   const handleSubmitMeasurement = () => {
//     if (!newMeasurementName.trim()) {
//       console.error('Measurement name is required');
//       return;
//     }
//     createMeasurementMutation.mutate(newMeasurementName.trim());
//   };

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         <div className="flex">
//           <SharedSidebar activePage="measurements" />
//           <div className="flex-1 p-6 flex items-center justify-center">
//             <div className="text-lg text-gray-600">Loading measurements...</div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         <div className="flex">
//           <SharedSidebar activePage="measurements" />
//           <div className="flex-1 p-6 flex items-center justify-center">
//             <div className="text-lg text-red-600">
//               Error loading measurements: {error.message}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="flex">
//         <SharedSidebar activePage="measurements" />

//         {/* Main Content */}
//         <div className="flex-1 p-6">
//           <div className="max-w-7xl mx-auto">
//             <h1 className="text-2xl font-semibold text-gray-900 mb-6 border-b-2 border-teal-500 pb-2 inline-block">
//               Measure list
//             </h1>

//             {/* Search and Action Buttons */}
//             <div className="flex items-center justify-between mb-6">
//               <div className="relative w-80">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//                 <Input
//                   placeholder="Search"
//                   className="pl-10 bg-gray-50 border-gray-200"
//                 />
//               </div>

//               <div className="flex items-center gap-3">
//                 <Button
//                   onClick={handleSelectAll}
//                   className="bg-teal-500 hover:bg-teal-600 text-white cursor-pointer"
//                   disabled={measurementsData.length === 0}
//                 >
//                   <Check className="w-4 h-4 mr-2" />
//                   {selectedMeasurements.length === measurementsData.length &&
//                   measurementsData.length > 0
//                     ? 'Deselect All'
//                     : 'Select All'}
//                 </Button>

//                 <Button
//                   variant="destructive"
//                   className="bg-red-500 hover:bg-red-600 text-white cursor-pointer"
//                   disabled={selectedMeasurements.length === 0}
//                 >
//                   <Trash2 className="w-4 h-4 mr-2" />
//                   Delete ({selectedMeasurements.length})
//                 </Button>

//                 <Button
//                   onClick={handleAddMeasurement}
//                   className="bg-teal-500 hover:bg-teal-600 text-white cursor-pointer"
//                 >
//                   <Plus className="w-4 h-4 mr-2" />
//                   Add Measurement
//                 </Button>
//               </div>
//             </div>

//             {/* Error State */}
//             {createMeasurementMutation.isError && (
//               <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4">
//                 <p className="text-red-800">
//                   Error:{' '}
//                   {createMeasurementMutation.error?.message ||
//                     'Failed to create measurement'}
//                 </p>
//               </div>
//             )}

//             {/* Measurements Table */}
//             <div className="bg-white rounded-lg border border-gray-200">
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="px-4 py-3 text-left border-b border-gray-200 w-12">
//                         <Checkbox
//                           checked={
//                             measurementsData.length > 0 &&
//                             selectedMeasurements.length ===
//                               measurementsData.length
//                           }
//                           onCheckedChange={handleSelectAll}
//                         />
//                       </th>
//                       <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 border-b border-gray-200">
//                         Measures name
//                       </th>
//                       <th className="px-4 py-3 text-right text-sm font-medium text-gray-900 border-b border-gray-200 pr-8">
//                         Actions
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {measurementsData.length === 0 ? (
//                       <tr>
//                         <td
//                           colSpan={3}
//                           className="px-4 py-8 text-center text-gray-500"
//                         >
//                           No measurements found. Click "Add Measurement" to
//                           create one.
//                         </td>
//                       </tr>
//                     ) : (
//                       measurementsData.map((measurement) => (
//                         <tr
//                           key={measurement.id}
//                           className="border-b border-gray-200 hover:bg-gray-50"
//                         >
//                           <td className="px-4 py-3">
//                             <Checkbox
//                               checked={selectedMeasurements.includes(
//                                 measurement.id,
//                               )}
//                               onCheckedChange={() =>
//                                 handleSelectMeasurement(measurement.id)
//                               }
//                             />
//                           </td>
//                           <td className="px-4 py-3 text-sm text-gray-900">
//                             {measurement.name}
//                           </td>
//                           <td className="px-4 py-3 text-right pr-8">
//                             <div className="flex items-center justify-end gap-2">
//                               <Button
//                                 variant="ghost"
//                                 size="sm"
//                                 className="p-1 h-8 w-8 cursor-pointer hover:bg-gray-100"
//                                 title="Edit measurement"
//                               >
//                                 <Edit className="w-4 h-4 text-gray-600" />
//                               </Button>
//                               <Button
//                                 variant="ghost"
//                                 size="sm"
//                                 className="p-1 h-8 w-8 cursor-pointer hover:bg-red-50"
//                                 title="Delete measurement"
//                               >
//                                 <Trash2 className="w-4 h-4 text-red-500" />
//                               </Button>
//                             </div>
//                           </td>
//                         </tr>
//                       ))
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Add Modal */}
//       {showAddModal && (
//         <div className="fixed inset-0 backdrop:blur-sm bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 w-96 max-w-md mx-4 shadow-xl">
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-lg font-semibold text-gray-900">
//                 Add new measurement
//               </h2>
//               <Button
//                 variant="ghost"
//                 size="sm"
//                 onClick={handleCloseModal}
//                 className="p-1 h-8 w-8 hover:bg-gray-100 cursor-pointer"
//                 disabled={createMeasurementMutation.isPending}
//               >
//                 <X className="w-4 h-4" />
//               </Button>
//             </div>

//             <div className="mb-6">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Measurement Name <span className="text-red-500">*</span>
//               </label>
//               <Input
//                 placeholder="Example: Kg, Liter, Piece"
//                 value={newMeasurementName}
//                 onChange={(e) => setNewMeasurementName(e.target.value)}
//                 className="w-full"
//                 disabled={createMeasurementMutation.isPending}
//                 onKeyDown={(e) => {
//                   if (e.key === 'Enter') {
//                     handleSubmitMeasurement();
//                   }
//                 }}
//               />
//               {createMeasurementMutation.isError && (
//                 <p className="text-red-500 text-sm mt-2">
//                   Error:{' '}
//                   {createMeasurementMutation.error?.message ||
//                     'Failed to create measurement'}
//                 </p>
//               )}
//             </div>

//             <div className="flex items-center gap-3 justify-end">
//               <Button
//                 variant="outline"
//                 onClick={handleCloseModal}
//                 className="bg-red-500 hover:bg-red-600 text-white border-red-500 hover:border-red-600 cursor-pointer"
//                 disabled={createMeasurementMutation.isPending}
//               >
//                 Cancel
//               </Button>
//               <Button
//                 onClick={handleSubmitMeasurement}
//                 className="bg-teal-500 hover:bg-teal-600 text-white cursor-pointer"
//                 disabled={
//                   createMeasurementMutation.isPending ||
//                   !newMeasurementName.trim()
//                 }
//               >
//                 {createMeasurementMutation.isPending ? (
//                   'Adding...'
//                 ) : (
//                   <>
//                     <Plus className="w-4 h-4 mr-2" />
//                     Add Measurement
//                   </>
//                 )}
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import { useEffect, useState } from 'react';
import { Search, Plus, Check, Trash2, Edit, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import SharedSidebar from './Sidebar/Sidebar';
import { useMutation, useQuery } from '@tanstack/react-query';
import type { measurement } from '../../types/measurement';
import { measurementApi } from '../../services/api/measurementapi';

// Define the expected shape of the API response
interface MeasurementResponse {
  data: measurement[];
}

export default function Measurement() {
  // Changed type from number[] to string[] to match measurement.id type
  const [selectedMeasurements, setSelectedMeasurements] = useState<string[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newMeasurementName, setNewMeasurementName] = useState('');

  const [measurementsData, setMeasurementsData] = useState<measurement[]>([]);

  const { data, isLoading, error } = useQuery<MeasurementResponse, Error>({
    queryKey: ['listMeasurement'],
    queryFn: measurementApi.listMeasurement,
  });

  useEffect(() => {
    if (data?.data) {
      setMeasurementsData(data.data);
    }
  }, [data]);

  const createMeasurementMutation = useMutation<measurement, Error, string>({
    mutationFn: (name: string) =>
      measurementApi.createMeasurementUnit({ name }),
    onSuccess: (newMeasurement: measurement) => {
      console.log('New measurement added to state:', newMeasurement);
      setMeasurementsData((prev) => [...prev, newMeasurement]);
      setShowAddModal(false);
      setNewMeasurementName('');
    },
    onError: (error: Error) => {
      console.error('Error creating measurement:', error.message);
    },
  });

  const handleSelectAll = () => {
    if (selectedMeasurements.length === measurementsData.length) {
      setSelectedMeasurements([]);
    } else {
      // Updated to use string IDs
      setSelectedMeasurements(
        measurementsData.map((measurement) => measurement.id),
      );
    }
  };

  // Changed parameter type from number to string
  const handleSelectMeasurement = (id: string) => {
    setSelectedMeasurements((prev) =>
      prev.includes(id)
        ? prev.filter((measurementId) => measurementId !== id)
        : [...prev, id],
    );
  };

  const handleAddMeasurement = () => {
    setShowAddModal(true);
  };

  const handleCloseModal = () => {
    setShowAddModal(false);
    setNewMeasurementName('');
  };

  const handleSubmitMeasurement = () => {
    if (!newMeasurementName.trim()) {
      console.error('Measurement name is required');
      return;
    }
    createMeasurementMutation.mutate(newMeasurementName.trim());
  };

  // Handle Input onChange event with proper typing
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMeasurementName(e.target.value);
  };

  // Handle Checkbox onCheckedChange with proper typing
  // Updated id type to string
  const handleCheckboxChange = (id: string) => () => {
    handleSelectMeasurement(id);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="flex">
          <SharedSidebar activePage="measurements" />
          <div className="flex-1 p-6 flex items-center justify-center">
            <div className="text-lg text-gray-600">Loading measurements...</div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="flex">
          <SharedSidebar activePage="measurements" />
          <div className="flex-1 p-6 flex items-center justify-center">
            <div className="text-lg text-red-600">
              Error loading measurements: {error.message}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <SharedSidebar activePage="measurements" />

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6 border-b-2 border-teal-500 pb-2 inline-block">
              Measure list
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
                  disabled={measurementsData.length === 0}
                >
                  <Check className="w-4 h-4 mr-2" />
                  {selectedMeasurements.length === measurementsData.length &&
                  measurementsData.length > 0
                    ? 'Deselect All'
                    : 'Select All'}
                </Button>

                <Button
                  variant="destructive"
                  className="bg-red-500 hover:bg-red-600 text-white cursor-pointer"
                  disabled={selectedMeasurements.length === 0}
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete ({selectedMeasurements.length})
                </Button>

                <Button
                  onClick={handleAddMeasurement}
                  className="bg-teal-500 hover:bg-teal-600 text-white cursor-pointer"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Measurement
                </Button>
              </div>
            </div>

            {/* Error State */}
            {createMeasurementMutation.isError && (
              <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4">
                <p className="text-red-800">
                  Error:{' '}
                  {createMeasurementMutation.error?.message ||
                    'Failed to create measurement'}
                </p>
              </div>
            )}

            {/* Measurements Table */}
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left border-b border-gray-200 w-12">
                        <Checkbox
                          checked={
                            measurementsData.length > 0 &&
                            selectedMeasurements.length ===
                              measurementsData.length
                          }
                          onCheckedChange={handleSelectAll}
                        />
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 border-b border-gray-200">
                        Measures name
                      </th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900 border-b border-gray-200 pr-8">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {measurementsData.length === 0 ? (
                      <tr>
                        <td
                          colSpan={3}
                          className="px-4 py-8 text-center text-gray-500"
                        >
                          No measurements found. Click "Add Measurement" to
                          create one.
                        </td>
                      </tr>
                    ) : (
                      measurementsData.map((measurement) => (
                        <tr
                          key={measurement.id}
                          className="border-b border-gray-200 hover:bg-gray-50"
                        >
                          <td className="px-4 py-3">
                            <Checkbox
                              checked={selectedMeasurements.includes(
                                measurement.id,
                              )}
                              onCheckedChange={handleCheckboxChange(measurement.id)} // Updated to use typed handler
                            />
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-900">
                            {measurement.name}
                          </td>
                          <td className="px-4 py-3 text-right pr-8">
                            <div className="flex items-center justify-end gap-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="p-1 h-8 w-8 cursor-pointer hover:bg-gray-100"
                                title="Edit measurement"
                              >
                                <Edit className="w-4 h-4 text-gray-600" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="p-1 h-8 w-8 cursor-pointer hover:bg-red-50"
                                title="Delete measurement"
                              >
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

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 backdrop:blur-sm bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 max-w-md mx-4 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Add new measurement
              </h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCloseModal}
                className="p-1 h-8 w-8 hover:bg-gray-100 cursor-pointer"
                disabled={createMeasurementMutation.isPending}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Measurement Name <span className="text-red-500">*</span>
              </label>
              <Input
                placeholder="Example: Kg, Liter, Piece"
                value={newMeasurementName}
                onChange={handleInputChange} // Updated to use typed handler
                className="w-full"
                disabled={createMeasurementMutation.isPending}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                  if (e.key === 'Enter') {
                    handleSubmitMeasurement();
                  }
                }}
              />
              {createMeasurementMutation.isError && (
                <p className="text-red-500 text-sm mt-2">
                  Error:{' '}
                  {createMeasurementMutation.error?.message ||
                    'Failed to create measurement'}
                </p>
              )}
            </div>

            <div className="flex items-center gap-3 justify-end">
              <Button
                variant="outline"
                onClick={handleCloseModal}
                className="bg-red-500 hover:bg-red-600 text-white border-red-500 hover:border-red-600 cursor-pointer"
                disabled={createMeasurementMutation.isPending}
              >
                Cancel
              </Button>
              <Button
                onClick={handleSubmitMeasurement}
                className="bg-teal-500 hover:bg-teal-600 text-white cursor-pointer"
                disabled={
                  createMeasurementMutation.isPending ||
                  !newMeasurementName.trim()
                }
              >
                {createMeasurementMutation.isPending ? (
                  'Adding...'
                ) : (
                  <>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Measurement
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}