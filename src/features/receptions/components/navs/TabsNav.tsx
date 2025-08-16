interface TabsNavProps {
  tabs: string[];
  activeTab: string;
  onChange: (tab: string) => void;
  right?: React.ReactNode;
}

export default function TabsNav({ tabs, activeTab, onChange, right }: TabsNavProps) {
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between border-b border-gray-200">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onChange(tab)}
              className={`px-6 py-4 font-medium text-sm transition-colors ${
                activeTab === tab
                  ? 'bg-teal-500 text-white'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        {right ? <div className="pr-4">{right}</div> : null}
      </div>
    </div>
  );
}


