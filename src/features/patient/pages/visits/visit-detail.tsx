import AppointmentDetailsSection from "../../components/Visit-details/appointment-detail"
import BillingSummarySection from "../../components/Visit-details/billing-summary"
import HospitalInfoHeader from "@/features/receptions/components/headers/HospitalInfoHeader"
import MedicalInfoSection from "../../components/Visit-details/medical-info"
import PatientDetailsSection from "../../components/Visit-details/patient-details"
import HospitalLogo from "../../../../assets/hospital-logo/MAKALU-LOGO 1.svg"
import BackButton from "@/features/receptions/components/buttons/BackButton"
import { PrintButton } from "@/features/receptions/components/buttons/PrintButton"

const visitData = {
  patient: {
    userId: "11111",
    name: "Patient Name",
    age: "Patient Age",
    password: "Patient Name",
    phone: "981234567",
    address: "Someone",
  },
  appointment: {
    date: "2025/4/7",
    doctor: "Doctor Name",
    type: "OPD",
    department: "Department Name",
    room: "2001",
  },
  medical: {
    diseases: "Common Cold, Fever",
    consultationNotes: [
      "Patient shows signs of improvement",
      "Take 8h gap",
      "Blood Pressure (BP) Normal",
      "Respiratory Rate (RR) Normal",
    ],
  },
  billing: {
    doctorCharge: 800,
    serviceCharges: 100,
    otherCharges: 0,
    subtotal: 900,
    totalAmount: 900,
  },
}

export default function VisitDetail() {

  const handlePrint = () => {
    console.log("Print")
  }

  return (
    <div className="p-6 bg-gray-50 min-h-fit mb-5">
      <div className="w-full h-full p-0 m-0">
        <div className="bg-white rounded shadow mb-6 px-6 py-4 relative flex flex-col">
          <div className="flex items-center justify-between">
            <BackButton to="/patient/visit"/>
          </div>
          <HospitalInfoHeader
            logoSrc={HospitalLogo}
            name="Makalu Everest Hospital"
            typeText="PVT LTD"
            location="Location-1"
            contact="9800101011"
            email="www.user@email.com"
            billCode="9274855952"
            panNo="ABCDEFGHIJ"
          />
          <div className="flex items-center justify-between mt-2 gap-2">
            <span className="text-gray-600 text-xs">
              Report Generated : 2025/4/7 at 11:09:33 AM
            </span>
            <PrintButton onClick={handlePrint} />
          </div>
        </div>

        <PatientDetailsSection patientData={visitData.patient} />
        <AppointmentDetailsSection appointmentData={visitData.appointment} />
        <MedicalInfoSection medicalData={visitData.medical} />
        <BillingSummarySection billingData={visitData.billing} />

        <div className="text-center text-gray-600 text-sm mt-8 border-t pt-4">
          <p className="mb-2">Receptionist: Hari Mohan Acharya</p>
          <p className="font-medium">Thank You For Choosing MAKALU EVEREST HOSPITAL</p>
        </div>
      </div>
    </div>
  )
}
