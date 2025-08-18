import { useState } from 'react';
import { Search, Plus, Check, Trash2, Edit, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import SharedSidebar from './Sidebar/Sidebar';
import { useMutation, useQuery } from '@tanstack/react-query';
import { categoryApi } from '../../services/api/categoryapi';
// import type { CheckedState } from '@radix-ui/react-checkbox';

// Define the Categories interface (assumed based on context)
interface Categories {
  id: string;
  name: string;
}

// Define the expected shape of the API response for fetching categories
interface CategoriesResponse {
  data: Categories[];
}

export default function Category() {
  // Changed type from number[] to string[] to match assumed Categories.id type
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [categoriesData, setCategoriesData] = useState<Categories[]>([
    { id: '1', name: 'Medicines' },
    { id: '2', name: 'Syrups' },
    { id: '3', name: 'Supplements' },
  ]);

  // Fetch categories (assuming an API call exists)
  const { isLoading, error } = useQuery<CategoriesResponse, Error>({
    queryKey: ['listCategories'],
    queryFn: categoryApi.listCategory, // Assumed API method
  });

  // Mutation for creating a new category (replaced useQuery with useMutation)
  const createCategoryMutation = useMutation<Categories, Error, string>({
    mutationFn: (name: string) => categoryApi.createCategory({ name }),
    onSuccess: (newCategory: Categories) => {
      console.log('New category added to state:', newCategory);
      setCategoriesData((prev) => [...prev, newCategory]);
      setShowAddModal(false);
      setNewCategoryName('');
    },
    onError: (error: Error) => {
      console.error('Error creating category:', error.message);
    },
  });

  // Handle Input onChange with proper typing
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCategoryName(e.target.value);
  };

  // Handle Checkbox onCheckedChange with proper typing
  // const handleCheckboxChange = (id: string) => {
  //   return () => handleSelectCategory(id);
  // };

  const handleSubmitCategory = () => {
    if (!newCategoryName.trim()) {
      console.error('Category name is required');
      return;
    }
    createCategoryMutation.mutate(newCategoryName.trim());
  };

  const handleAddCategory = () => setShowAddModal(true);

  const handleCloseModal = () => {
    setShowAddModal(false);
    setNewCategoryName('');
  };

  const handleSelectAll = () => {
    if (selectedCategories.length === categoriesData.length) {
      setSelectedCategories([]);
    } else {
      setSelectedCategories(categoriesData.map((cat) => cat.id));
    }
  };

  // Changed parameter type from number to string
  // const handleSelectCategory = (id: string) => {
  //   setSelectedCategories((prev) =>
  //     prev.includes(id) ? prev.filter((catId) => catId !== id) : [...prev, id],
  //   );
  // };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="flex">
          <SharedSidebar activePage="categories" />
          <div className="flex-1 p-6 flex items-center justify-center">
            <div className="text-lg text-gray-600">Loading categories...</div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="flex">
          <SharedSidebar activePage="categories" />
          <div className="flex-1 p-6 flex items-center justify-center">
            <div className="text-lg text-red-600">
              Error loading categories: {error.message}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <SharedSidebar activePage="categories" />

        <div className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6 border-b-2 border-teal-500 pb-2 inline-block">
              Categories list
            </h1>

            <div className="flex items-center justify-between mb-6">
              <div className="relative w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search"
                  className="pl-10 bg-gray-50 border-gray-200"
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex items-center gap-3">
                <Button
                  onClick={handleSelectAll}
                  className="bg-teal-500 hover:bg-teal-600 text-white cursor-pointer"
                  disabled={categoriesData.length === 0}
                >
                  <Check className="w-4 h-4 mr-2" />
                  {selectedCategories.length === categoriesData.length &&
                  categoriesData.length > 0
                    ? 'Deselect All'
                    : 'Select All'}
                </Button>

                <Button
                  variant="destructive"
                  className="bg-red-500 hover:bg-red-600 text-white cursor-pointer"
                  disabled={selectedCategories.length === 0} // Added disabled prop
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete ({selectedCategories.length})
                </Button>

                <Button
                  onClick={handleAddCategory}
                  className="bg-teal-500 hover:bg-teal-600 text-white cursor-pointer"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Category
                </Button>
              </div>
            </div>

            {/* Error State for Mutation */}
            {createCategoryMutation.isError && (
              <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4">
                <p className="text-red-800">
                  Error:{' '}
                  {createCategoryMutation.error?.message ||
                    'Failed to create category'}
                </p>
              </div>
            )}

            <div className="bg-white rounded-lg border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left border-b border-gray-200 w-12">
                        <Checkbox
                          checked={
                            categoriesData.length > 0 &&
                            selectedCategories.length === categoriesData.length
                          }
                          onCheckedChange={handleSelectAll}
                        />
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 border-b border-gray-200">
                        Category name
                      </th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900 border-b border-gray-200 pr-8">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {categoriesData.length === 0 ? (
                      <tr>
                        <td
                          colSpan={3}
                          className="px-4 py-8 text-center text-gray-500"
                        >
                          No categories found. Click "Add Category" to create
                          one.
                        </td>
                      </tr>
                    ) : (
                      categoriesData.map((category) => (
                        <tr
                          key={category.id}
                          className="border-b border-gray-200 hover:bg-gray-50"
                        >
                          <td className="px-4 py-3">
                            {/* <Checkbox
                              checked={selectedCategories.includes(category.id)}
                              onCheckedChange={(checked) =>
                                handleCheckboxChange(category.id)
                              }
                            /> */}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-900">
                            {category.name}
                          </td>
                          <td className="px-4 py-3 text-right pr-8">
                            <div className="flex items-center justify-end gap-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="p-1 h-8 w-8 cursor-pointer hover:bg-gray-100"
                                title="Edit category"
                              >
                                <Edit className="w-4 h-4 text-gray-600" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="p-1 h-8 w-8 cursor-pointer hover:bg-red-50"
                                title="Delete category"
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

      {showAddModal && (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 max-w-md mx-4 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Add new category
              </h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCloseModal}
                className="p-1 h-8 w-8 hover:bg-gray-100 cursor-pointer"
                disabled={createCategoryMutation.isPending}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category Name <span className="text-red-500">*</span>
              </label>
              <Input
                placeholder="Example: Medical"
                value={newCategoryName}
                onChange={handleInputChange}
                className="w-full"
                disabled={createCategoryMutation.isPending}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                  if (e.key === 'Enter') {
                    handleSubmitCategory();
                  }
                }}
              />
              {createCategoryMutation.isError && (
                <p className="text-red-500 text-sm mt-2">
                  Error:{' '}
                  {createCategoryMutation.error?.message ||
                    'Failed to create category'}
                </p>
              )}
            </div>

            <div className="flex items-center gap-3 justify-end">
              <Button
                variant="outline"
                onClick={handleCloseModal}
                className="bg-red-500 hover:bg-red-600 text-white border-red-500 hover:border-red-600 cursor-pointer"
                disabled={createCategoryMutation.isPending}
              >
                Cancel
              </Button>
              <Button
                onClick={handleSubmitCategory}
                className="bg-teal-500 hover:bg-teal-600 text-white cursor-pointer"
                disabled={
                  createCategoryMutation.isPending || !newCategoryName.trim()
                }
              >
                {createCategoryMutation.isPending ? (
                  'Adding...'
                ) : (
                  <>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Category
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
