import { useState } from "react";
import FileUpload from "../components/file-upload";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Save } from "lucide-react";

export default function PatientUpload() {
  const [patientId, setPatientId] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleSave = () => {
    if (patientId && file) {
      // logic will be added here
      console.log("Saving:", { patientId, fileName: file.name });
      setPatientId("");
      setFile(null);
    }
  };

  return (
    <div className="max-h-screen p-4 sm:p-6 md:p-8 bg-white-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 w-full max-w-md sm:max-w-lg md:max-w-xl">
        <div className="space-y-6">
          <div>
            <label className="block text-sm sm:text-base font-medium text-gray-700">Patient ID</label>
            <Input
              type="text"
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
              placeholder="Enter Patient ID"
              className="mt-2 w-full"
            />
          </div>
          <div>
            <label className="block text-sm sm:text-base font-medium text-gray-700">Upload PDF</label>
            <FileUpload onFileSelect={setFile} />
          </div>
          <div className="flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
            <Button variant="default" onClick={() => { setPatientId(""); setFile(null); }} className="bg-[#FF5353] text-white w-full sm:w-auto">
              Cancel
            </Button>
            <Button variant="default" onClick={handleSave} disabled={!patientId || !file} className="bg-[#36B8B4] text-white w-full sm:w-auto">
              <Save className=" h-4 w-2" /> Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}