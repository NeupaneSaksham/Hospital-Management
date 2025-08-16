interface PageHeaderProps {
  title: string;
  subtitle?: string;
  right?: React.ReactNode;
  className?: string;
}

export default function PageHeader({ title, subtitle, right, className = "" }: PageHeaderProps) {
  return (
    <div className={`flex justify-between items-start mb-6 ${className}`}>
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-1">{title}</h2>
        {subtitle && <p className="text-gray-500 text-sm">{subtitle}</p>}
      </div>
      {right && <div className="flex gap-3 items-center">{right}</div>}
    </div>
  );
}
