interface HeaderProps {
  tabs: string[];
  activeTab: string;
  onChange: (tab: string) => void;
  right?: React.ReactNode;
}

export default function HeaderButton({ tabs, activeTab, onChange, right }: HeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex bg-white rounded-md p-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className={`rounded-md px-4 py-2 font-medium text-sm transition-all
              ${activeTab === tab
                ? "bg-[#0ABAB5] text-white shadow"
                : "text-gray-700 hover:bg-gray-200"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>
      {right ? (
        <div className="ml-4 bg-white rounded-md p-1 flex items-center border-2">
          {right}
        </div>
      ) : null}
    </div>
  );
}