interface StatCardProps {
  title: string;
  value: string | number;
  containerClassName?: string;
  titleClassName?: string;
  valueClassName?: string;
  rightAdornment?: React.ReactNode;
}

export default function StatCard({
  title,
  value,
  containerClassName,
  titleClassName,
  valueClassName,
  rightAdornment,
}: StatCardProps) {
  return (
    <div className={`p-6 rounded-lg ${containerClassName || ''} relative`}>
      <h3 className={`text-sm font-medium ${titleClassName || ''}`}>{title}</h3>
      <p className={`text-2xl font-semibold mt-1 ${valueClassName || ''}`}>{value}</p>
      {rightAdornment ? (
        <div className="absolute bottom-4 right-4">{rightAdornment}</div>
      ) : null}
    </div>
  );
}



