import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '../components/pharmacy-sidebar';
import { AppHeader } from '../components/pharmacy-header';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '@/features/receptions/components/headers/PageHeader';
import { SearchBar } from '@/features/receptions/components/search/SearchBar';
import { DateFilter } from '@/features/receptions/components/forms/DateFilter';
import StockTable, {
  type StockItem,
} from '@/features/receptions/components/tables/StockTable';

const pharmacyData: StockItem[] = [
  {
    name: 'Aspirin',
    category: 'Analgesic',
    quantity: 267,
    price: '$5.50',
    status: 'In Stock',
  },
  {
    name: 'Daina C',
    category: 'Antihistamine',
    quantity: 0,
    price: '$67',
    status: 'Out of Stock',
  },
  {
    name: 'wexy',
    category: 'Antibiotic',
    quantity: 567,
    price: '$7.5',
    status: 'In Stock',
  },
];

export default function StockList() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen w-full">
      <SidebarProvider>
        <AppSidebar />
        <div className="flex-1 flex flex-col min-h-screen w-full">
          <AppHeader title="Stock List" />
          <main className="p-6 flex-1 w-full">
            <div className="p-6 min-h-screen">
              <div className="w-full bg-white rounded-lg border border-gray-200 p-6">
                <PageHeader title="Pharmacy list" />

                {/* Controls */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6 w-full">
                  <SearchBar
                    value={searchTerm}
                    onChange={setSearchTerm}
                    placeholder="Search"
                    wrapperClassName="w-full md:max-w-sm"
                  />
                  <DateFilter />
                  <Button
                    className="bg-emerald-500 hover:bg-emerald-600 text-white w-full md:w-auto md:ml-auto"
                    onClick={() => navigate('/pharmacy/addstock')}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add
                  </Button>
                </div>

                <StockTable items={pharmacyData} />

                {/* Pagination */}
                <div className="flex items-center justify-end gap-2 mt-6">
                  <Button variant="ghost" className="text-gray-500" disabled>
                    Previous
                  </Button>
                  <Button className="bg-emerald-500 hover:bg-emerald-600 text-white h-8 w-8 p-0">
                    1
                  </Button>
                  <Button variant="ghost" className="text-gray-500 h-8 w-8 p-0">
                    2
                  </Button>
                  <Button variant="ghost" className="text-gray-500 h-8 w-8 p-0">
                    3
                  </Button>
                  <Button variant="ghost" className="text-gray-500 h-8 w-8 p-0">
                    4
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-emerald-500 hover:text-emerald-600"
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
}
