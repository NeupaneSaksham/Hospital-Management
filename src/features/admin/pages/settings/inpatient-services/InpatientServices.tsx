"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus, ChevronDown, ChevronRight, Trash, Edit } from "lucide-react"

interface RoomCategory {
  id: string
  name: string
  rooms: number
  expanded?: boolean
  beds: Bed[]
}

interface Bed {
  id: string
  number: string
  facility: string
  description: string
  price: string
  expanded?: boolean
}

export default function InpatientServices() {
  const [roomCategories, setRoomCategories] = useState<RoomCategory[]>([
    { 
      id: "1", 
      name: "ICU", 
      rooms: 3,
      expanded: false,
      beds: []
    },
    { 
      id: "2", 
      name: "NICU", 
      rooms: 3,
      expanded: true,
      beds: [
        {
          id: "b1",
          number: "112",
          facility: "Included",
          description: "An ICU Room Is A Specialized Hospital Room Equipped With Advanced Life-Support Systems And Monitoring Devices. Designed To Provide Intensive Care For Critically Ill Patients Under The Constant Supervision Of Trained Medical Professionals.",
          price: "Rs.123",
          expanded: false
        },
        {
          id: "b2",
          number: "112",
          facility: "Included",
          description: "",
          price: "Rs.123",
          expanded: false
        },
        {
          id: "b3",
          number: "112",
          facility: "Included",
          description: "",
          price: "Rs.123",
          expanded: false
        }
      ]
    },
    { 
      id: "3", 
      name: "Cabin", 
      rooms: 3,
      expanded: false,
      beds: []
    },
    { 
      id: "4", 
      name: "Ward", 
      rooms: 3,
      expanded: false,
      beds: []
    }
  ]);

  const totalRooms = roomCategories.reduce((acc, category) => acc + category.rooms, 0);

  const toggleCategory = (categoryId: string) => {
    setRoomCategories(roomCategories.map(category => 
      category.id === categoryId 
        ? { ...category, expanded: !category.expanded } 
        : category
    ));
  };
  
  const addCategory = () => {
    const newCategoryId = String(roomCategories.length + 1);
    const newCategory: RoomCategory = {
      id: newCategoryId,
      name: `New Category ${newCategoryId}`,
      rooms: 0,
      expanded: true,
      beds: []
    };
    
    setRoomCategories([...roomCategories, newCategory]);
  };
  
  const addBed = (categoryId: string) => {
    const category = roomCategories.find(c => c.id === categoryId);
    if (!category) return;
    
    const bedNumber = category.beds.length > 0 ? category.beds[0].number : "101";
    const newBed: Bed = {
      id: `b${Date.now()}`,
      number: bedNumber,
      facility: "Included",
      description: "",
      price: "Rs.123",
      expanded: false
    };
    
    setRoomCategories(roomCategories.map(c => 
      c.id === categoryId 
        ? { 
            ...c, 
            rooms: c.rooms + 1, 
            beds: [...c.beds, newBed] 
          }
        : c
    ));
  };
  
  const deleteCategory = (categoryId: string) => {
    setRoomCategories(roomCategories.filter(c => c.id !== categoryId));
  };
  
  const deleteBed = (categoryId: string, bedId: string) => {
    setRoomCategories(roomCategories.map(c => 
      c.id === categoryId 
        ? { 
            ...c, 
            rooms: c.rooms - 1,
            beds: c.beds.filter(b => b.id !== bedId) 
          }
        : c
    ));
  };
  
  const toggleBedExpansion = (categoryId: string, bedId: string) => {
    setRoomCategories(roomCategories.map(c => 
      c.id === categoryId 
        ? { 
            ...c, 
            beds: c.beds.map(b => 
              b.id === bedId 
                ? { ...b, expanded: !b.expanded } 
                : b
            ) 
          }
        : c
    ));
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50/30">
      <div className="flex-1 p-4 space-y-4 overflow-auto">
        {/* Header with title, count, and action buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 border border-gray-200 rounded-md">
          <div className="flex flex-col">
            <h1 className="text-md font-medium text-gray-900 pb-1 border-b-2 border-[#0ABAB5] w-fit">
              Room Management
            </h1>
            <p className="text-sm text-gray-500 mt-1">Total room : {totalRooms}</p>
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              size="sm" 
              className="bg-[#0ABAB5] hover:bg-[#0ABAB5]/90 text-white h-9"
              onClick={addCategory}
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Category
            </Button>
            <Button 
              size="sm" 
              className="bg-gray-400 hover:bg-gray-500 text-white h-9"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Room
            </Button>
          </div>
        </div>

        {/* Room Categories List */}
        <div className="space-y-2">
          {roomCategories.map(category => (
            <div key={category.id} className="border border-gray-200 rounded-md overflow-hidden">
              {/* Category Header */}
              <div 
                className="flex items-center justify-between p-3 bg-white cursor-pointer hover:bg-gray-50"
                onClick={() => toggleCategory(category.id)}
              >
                <div className="flex items-center gap-2">
                  {category.expanded ? (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-500" />
                  )}
                  <span className="font-medium">{category.name}</span>
                  <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full text-gray-600">
                    {category.rooms} Rooms
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteCategory(category.id);
                  }}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>

              {/* Beds List */}
              {category.expanded && (
                <div className="border-t border-gray-200">
                  {category.beds.map((bed, index) => (
                    <div 
                      key={bed.id} 
                      className={`${index !== 0 ? "border-t border-gray-100" : ""}`}
                    >
                      {/* Bed Header - Always visible */}
                      <div 
                        className="flex items-center justify-between p-3 cursor-pointer hover:bg-gray-50"
                        onClick={() => toggleBedExpansion(category.id, bed.id)}
                      >
                        <button className="flex items-center text-[#0ABAB5] hover:text-[#0ABAB5]/80 font-medium">
                          <Plus className="h-4 w-4 mr-1" />
                          Bed No. {bed.number}
                        </button>
                        <div className="ml-auto flex items-center gap-2">
                          <p className="font-medium">{bed.price}</p>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-7 w-7 p-0 text-red-500 hover:text-red-700"
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteBed(category.id, bed.id);
                            }}
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Bed Details - Only visible when expanded */}
                      {bed.expanded && (
                        <div className="p-3 pt-0">
                          <div className="space-y-1 pl-5">
                            <p className="text-sm">
                              <span className="font-medium">Facility:</span> <span className="text-green-500">{bed.facility}</span>
                            </p>
                            {bed.description && (
                              <p className="text-xs text-gray-600 mt-1">
                                {bed.description}
                              </p>
                            )}
                            <div className="flex justify-end items-center gap-2 mt-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-7 w-7 p-0 text-gray-500 hover:text-gray-700"
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {/* Add Bed Button */}
                  <div className="flex items-center p-3 border-t border-gray-100">
                    <button 
                      className="flex items-center text-[#0ABAB5] hover:text-[#0ABAB5]/80 font-medium"
                      onClick={() => addBed(category.id)}
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Add Bed
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
