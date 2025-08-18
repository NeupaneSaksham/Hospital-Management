import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, Printer } from "lucide-react";

export default function Createcard() {


  const patient = {
    id: "10001",
    name: "Baburao G. Aapte",
    phone: "9812345678",
    doctor: "Dr. Ramesh",
    disease: "Disease",
    appointment_date: "2019/2/14",
    appointement_type: "OPD",
    status: "Active",
    email: "baburao@example.com",
    bloodType: "O+",
    age: 45,
    gender: "Male",
    primaryDoctor: "Dr. Ramesh",
  };

  const [symptoms, setSymptoms] = useState("");

  const [newLabTest, setNewLabTest] = useState("");

  const [labTests, setLabTests] = useState([
    "Complete Blood Count (CBC)",
    "Blood Sugar (Fasting / PP)",
    "Liver Function Test (LFT)",
    "Kidney Function Test (KFT)",
  ]);

  const [medicineName, setMedicineName] = useState("");

  const [medicineNote, setMedicineNote] = useState("");

  const [medicines, setMedicines] = useState([
    { name: "Paracetamol 500mg", note: "Take 1 tablet every 6-8 hours for 3-5 days." },
  ]);

  const addLabTest = () => {
    if (newLabTest.trim()) {
      setLabTests([...labTests, newLabTest]);
      setNewLabTest("");
    }
  };

  const addMedicine = () => {
    if (medicineName.trim() && medicineNote.trim()) {
      setMedicines([...medicines, { name: medicineName, note: medicineNote }]);
      setMedicineName("");
      setMedicineNote("");
    }
  };

  const handleDone = () => {
    const formData = {
      patientId: patient.id,
      symptoms,
      labTests,
      medicines,
    };
    console.log("Submitting to backend:", formData);
  };


  return (
    <div className="p-4 sm:p-6 flex flex-col gap-4 min-h-screen bg-white">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Create Card</h2>
            <Button variant="outline" size="icon" className="ml-2">
              <Printer className="h-5 w-5" />
            </Button>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Symptom Description :</label>
            <Textarea
              placeholder="Write Symptoms"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              className="mt-1 w-full"
              rows={4}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Lab Tests</label>
            <div className="flex gap-2 mt-1">
              <div className="relative flex-1">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search"
                  value={newLabTest}
                  onChange={(e) => setNewLabTest(e.target.value)}
                  className="pl-8 w-94"
                />
              </div>
              <Button onClick={addLabTest} className="bg-teal-500 hover:bg-teal-600">
                <Plus className="h-4 w-4 mr-1" /> Add
              </Button>
            </div>
            <div className="border-2 mt-5 mb-5 border-gray-300 rounded">
              <ol className="list-decimal ml-6 mt-3 space-y-1 mb-3">
                {labTests.map((test, index) => (
                  <li key={index}>{test}</li>
                ))}
              </ol>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name of Medicine</label>
                <Input
                  placeholder="Enter The Name"
                  value={medicineName}
                  onChange={(e) => setMedicineName(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Note :</label>
                <Input
                  placeholder="Note"
                  value={medicineNote}
                  onChange={(e) => setMedicineNote(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div className="flex items-end justify-end">
                <Button onClick={addMedicine} className="bg-teal-500 hover:bg-teal-600">
                  <Plus className="h-4 w-4 mr-1" /> Add
                </Button>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Medicine :</label>
            <Table className="mt-1">
              <TableHeader>
                <TableRow>
                  <TableHead>S.N</TableHead>
                  <TableHead>Medicine Name</TableHead>
                  <TableHead>Note</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {medicines.map((med, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}.</TableCell>
                    <TableCell>{med.name}</TableCell>
                    <TableCell>{med.note}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="flex flex-col sm:flex-row justify-end gap-4">
            <Button variant="destructive" className="w-full sm:w-auto">Cancel</Button>
            <Button onClick={handleDone} className="w-full sm:w-auto bg-teal-500 hover:bg-teal-600">Done</Button>
          </div>
        </div>
      </div>
    </div>
  );
}