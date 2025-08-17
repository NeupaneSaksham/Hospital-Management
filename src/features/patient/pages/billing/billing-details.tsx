import DownloadButton from "@/features/doctor/components/patient/medical-history/download-button";
import DetailsForm from "../../components/details-form";

export default function BillingDetails() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Payment Details</h1>
          <p className="text-sm text-gray-500">
            Record of All Patient Billings
          </p>
        </div>
        <div className="flex gap-2">
          <DownloadButton />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <DetailsForm />
      </div>
    </div>
  );
}
