import { Label } from "../../../../components/ui/label";
import { Input } from "../../../../components/ui/input";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export default function FormInput({ label, className, ...props }: FormInputProps) {
    return (
        <div>
            <Label className="text-gray-700 mb-2 block">{label}</Label>
            <Input 
                className={`border-gray-300 ${className || ''}`}
                {...props} 
            />
        </div>
    );
}
