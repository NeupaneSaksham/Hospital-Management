interface InfoItem {
  label: string;
  value: string | number | React.ReactNode;
}

interface InfoGridProps {
  items: InfoItem[];
  columns?: number;
}

export default function InfoGrid({ items, columns = 4 }: InfoGridProps) {
  return (
    <div className={[`grid`, `gap-4 mb-6 p-3 border-b border-gray-200`, `grid-cols-${columns}`].join(' ')}>
      {items.map((item, index) => (
        <div key={index}>
          <span className="text-gray-700 font-medium">{item.label} : </span>
          <span className="text-gray-500">{item.value}</span>
        </div>
      ))}
    </div>
  );
}


