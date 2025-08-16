import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import AppointmentFormSection from "../../components/forms/appointmentform/AppointmentFormSection"
import SpecialFields from "../../components/inputfields/SpecialFields"
import { PrintButton } from "../../components/buttons/PrintButton"
import BackButton from "../../components/buttons/BackButton"
import { appointmentFormConfig } from "../../config/appointmentFormConfig"
import { Icon } from '@iconify/react';
import { useReactToPrint } from "react-to-print";
import HospitalHeader from "@/features/receptions/components/HospitalHeader";
import PatientDetails from "@/features/receptions/components/PatientDetails";
import AppointmentDetails from "@/features/receptions/components/AppointmentDetails";
import MedicalInfo from "@/features/receptions/components/MedicalInfo";
import BillingSummary from "@/features/receptions/components/BillingSummary";
import ReportFooter from "@/features/receptions/components/ReportFooter";
import AppointmentTypeDetails from "@/features/receptions/components/AppointmentTypeDetails";

interface AppointmentPrintLayoutProps {
  formData: Record<string, any>;
}

function AppointmentPrintLayout({ formData, generatedDate }: AppointmentPrintLayoutProps & { generatedDate: string }) {
  // Determine section title and notes based on appointment type
  let sectionTitle = "Inpatient Details";
  let notesLabel = "Inpatient Notes";
  if (formData.appointmentType === "OPD") {
    sectionTitle = "Outpatient Details";
    notesLabel = "Outpatient Notes";
  } else if (formData.appointmentType === "Emergency") {
    sectionTitle = "Emergency Details";
    notesLabel = "Emergency Notes";
  }

  // Collect inpatient/outpatient/emergency details
  const details = [];
  if (formData.section) details.push({ label: sectionTitle === "Emergency Details" ? "Ward/Room" : sectionTitle === "Outpatient Details" ? "Consultation Room" : "Section", value: formData.section });
  if (formData.bedNumber) details.push({ label: sectionTitle === "Emergency Details" ? "Time Duration" : sectionTitle === "Outpatient Details" ? "Follow-Up Required" : "Bed Number", value: formData.bedNumber });
  if (formData.startingDate) details.push({ label: "Starting Date", value: formData.startingDate });

  // Notes field
  const notes = formData.admissionNotes || "No notes provided.";

  return (
    <div className="print-single-page min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto bg-white">
        <HospitalHeader
          hospitalName="Makalu Everest Hospital"
          hospitalSubtitle="PVT LTD"
          location={formData.address || "Location"}
          contact={formData.phone || "Contact"}
          website="www.user@email.com"
          billCode={formData.billCode || "9274855962"}
          panNo={formData.panNo || "ABCDEFGHIJ"}
        />
        <div className="text-sm text-gray-600 mb-6 border-b pb-2 text-left">
          Report Generated: {generatedDate}
        </div>
        <div className="mb-8">
          <PatientDetails
            id={formData.userId || "11111"}
            name={formData.name}
            age={formData.age}
            password={formData.password || "-"}
            phone={formData.phone}
            address={formData.address}
          />
        </div>
        <div className="mb-8">
          <AppointmentDetails
            date={formData.appointmentDate}
            doctor={formData.doctorName}
            appointment_type={formData.appointmentType}
            department={formData.department}
            room={formData.section || "-"}
          />
        </div>
        {/* Use reusable component for dynamic details */}
        <AppointmentTypeDetails
          sectionTitle={sectionTitle}
          notesLabel={notesLabel}
          details={details}
          notes={notes}
        />
        <div className="mb-8">
          <MedicalInfo
            disease={formData.diseases}
            consultationNotes={[
              formData.admissionNotes || "No notes provided."
            ]}
          />
        </div>
        <div className="mb-8">
          <BillingSummary
            items={[
              { label: "Doctor Charge:", value: `Rs.${formData.doctorCharge || 0}` },
              { label: "Service Charges:", value: `Rs.${formData.billCharge || 0}` },
              { label: "Other Charges:", value: `Rs.${formData.otherCharges || 0}` },
            ]}
            subtotal={`Rs.${(
              Number(formData.doctorCharge || 0) +
              Number(formData.billCharge || 0) +
              Number(formData.otherCharges || 0)
            ).toString()}`}
            total_price={`Rs.${(
              Number(formData.doctorCharge || 0) +
              Number(formData.billCharge || 0) +
              Number(formData.otherCharges || 0)
            ).toString()}`}
          />
        </div>
        <ReportFooter
          receptionist={formData.receptionist || "No receptionist found"}
          thankYouMessage="Thank You For Choosing MAKALU EVEREST HOSPITAL"
        />
      </div>
    </div>
  );
}

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "Raman Mohan Acharya",
    email: "Ram Mohan Acharya",
    age: "35",
    phone: "9812345678",
    address: "Itahari,Sunsari",
    gender: "Male",
    department: "Neurology",
    doctorName: "Ram Mohan Acharya",
    appointmentDate: "2025/4/7",
    diseases: "Fever",
    appointmentType: ["IPD", "OPD", "Emergency"].includes('IPD') ? 'IPD' : 'OPD',
    section: "Ward",
    bedNumber: "1111",
    startingDate: "2025/4/10",
    admissionNotes: "",
    doctorCharge: "500",
    billCharge: "100",
    otherCharges: "",
  })

  const printRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: `Appointment_${formData.name || "patient"}`,
  });

  const isIPDSelected = formData.appointmentType === 'IPD'
  const isOPDSelected = formData.appointmentType === 'OPD'
  const isEmergencySelected = formData.appointmentType === 'Emergency';

  const dynamicInpatientFields = appointmentFormConfig.inpatientDetails.fields.map((field) => {
    if (isOPDSelected) {
      if (field.name === 'section' && field.type === 'select') {
        return {
          ...field,
          label: 'Consultation Room',
          options: [{ value: 'Neurology', label: 'Neurology' }],
        }
      }
      if (field.name === 'bedNumber' && field.type === 'select') {
        return {
          ...field,
          label: 'Follow-Up Required',
          icon: undefined,
          customIcon: <i className="ri-chat-follow-up-fill text-lg text-gray-500" />,
          options: [
            { value: 'Yes', label: 'Yes' },
            { value: 'No', label: 'No' },
          ],
        }
      }
    } else if (isIPDSelected) {
      if (field.name === 'section' && field.type === 'select') {
        return {
          ...field,
          label: 'Choose Section',
          options: [
            { value: 'Ward', label: 'Ward' },
            { value: 'Cabin', label: 'Cabin' },
            { value: 'ICU', label: 'ICU' },
            { value: 'NICU', label: 'NICU' },
          ],
        }
      }
      if (field.name === 'bedNumber' && field.type === 'select') {
        const isCabin = formData.section === 'Cabin'
        return {
          ...field,
          label: isCabin ? 'Cabin Number' : 'Bed Number',
          icon: field.icon,
          customIcon: undefined,
          options: [{ value: '1111', label: '1111' }],
        }
      }
    } else if (isEmergencySelected) {
      if (field.name === 'section' && field.type === 'select') {
        return {
          ...field,
          label: 'Ward/Room',
          icon: undefined,
          customIcon: <Icon icon="ic:sharp-meeting-room" className="w-4 h-4 text-gray-500" />,
          options: [
            { value: 'Neurology', label: 'Neurology' },
          ],
        };
      }
      if (field.name === 'startingDate' && field.type === 'date') {
        return {
          ...field,
          label: 'Time Duration',
          icon: undefined,
          customIcon: <Icon icon="uiw:time" className="w-4 h-4 text-gray-500" />,
        };
      }
    }
    return field
  })

  const inpatientSectionTitle = isOPDSelected
    ? 'Outpatient Details'
    : isEmergencySelected
    ? 'Emergency Details'
    : appointmentFormConfig.inpatientDetails.title;

  // Get the current date/time for the PDF
  const generatedDate = new Date().toLocaleString();

  return (
    <div className="min-h-screen bg-white">
      {/* Hidden printable area */}
      <div style={{ display: "none" }}>
        <div ref={printRef}>
          <AppointmentPrintLayout formData={formData} generatedDate={generatedDate} />
        </div>
      </div>
      {/* Header - Attached to top */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BackButton to="/reception/patients" label="Back" />
            <h1 className="text-2xl font-semibold text-gray-800">Make An Appointment</h1>
          </div>
          <div>
            <PrintButton onClick={handlePrint} />
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="px-8 py-8 space-y-8">
        {/* Personal Details Section with collapsible Gender/Appointment Type/Notes */}
        <AppointmentFormSection
          title={appointmentFormConfig.personalDetails.title}
          fields={appointmentFormConfig.personalDetails.fields}
          formData={formData}
          onChange={handleInputChange}
          extraContent={<SpecialFields formData={formData} onChange={handleInputChange} />}
        />
        {/* Appointment Details Section */}
        <AppointmentFormSection
          title={appointmentFormConfig.appointmentDetails.title}
          fields={appointmentFormConfig.appointmentDetails.fields}
          formData={formData}
          onChange={handleInputChange}
        />
        {/* Inpatient/Outpatient Details Section */}
        <AppointmentFormSection
          title={inpatientSectionTitle}
          fields={dynamicInpatientFields}
          formData={formData}
          onChange={handleInputChange}
        />
        {/* Bill and Charges Section */}
        <AppointmentFormSection
          title={appointmentFormConfig.billAndCharges.title}
          fields={appointmentFormConfig.billAndCharges.fields}
          formData={formData}
          onChange={handleInputChange}
        />
        {/* Action Buttons */}
        <div className="flex justify-center gap-4 pt-6">
          <Button variant="destructive" className="px-8 py-2 bg-red-500 hover:bg-red-600 text-white rounded">
            Cancel
          </Button>
          <Button className="px-8 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded">
            <FileText className="w-4 h-4 mr-2" />
            Create
          </Button>
        </div>
      </div>
    </div>
  )
}
