import HospitalHeader from "@/features/receptions/components/HospitalHeader";
import PatientDetails from "@/features/receptions/components/PatientDetails";
import AppointmentDetails from "@/features/receptions/components/AppointmentDetails";
import MedicalInfo from "@/features/receptions/components/MedicalInfo";
import BillingSummary from "@/features/receptions/components/BillingSummary";
import ReportFooter from "@/features/receptions/components/ReportFooter";

export default function HospitalReport() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto bg-white">
        {/* Header Section */}
        <HospitalHeader
          hospitalName="Makalu Everest Hospital"
          hospitalSubtitle="PVT LTD"
          location="Location"
          contact="Contact"
          website="www.user@email.com"
          billCode="9274855962"
          panNo="ABCDEFGHIJ"
        />
        
        {/* Patient Details */}
        <PatientDetails
          id="11111"
          name="Patient Name"
          age="Patient Age"
          password="Patient Name"
          phone="981234567.."
          address="Someone.."
        />
        {/* Appointment Details */}
        <AppointmentDetails
          date="2025/4/7"
          doctor="Doctor Name"
          appointment_type="OPD"
          department="Department Name"
          room="2001"
        />
        {/* Medical Information */}
        <MedicalInfo
          disease="Common Cold, Fever"
          consultationNotes={[
            "Temperature: 101°F (38.3°C)",
            "Pulse: 88 bpm",
            "Blood Pressure: 120/80 mmHg",
            "Respiratory Rate: 18/min",
          ]}
        />
        {/* Billing Summary */}
        <BillingSummary
          items={[
            { label: "Doctor Charge:", value: "Rs.800" },
            { label: "Service Charges:", value: "Rs.100" },
            { label: "Other Charges:", value: "Rs.0" },
          ]}
          subtotal="Rs.900"
          total_price="Rs.900"
        />
        {/* Footer */}
        <ReportFooter
          receptionist="Hari Mohan Acharya"
          thankYouMessage="Thank You For Choosing MAKALU EVEREST HOSPITAL"
        />
      </div>
    </div>
  );
}
// minor logic update 4501
