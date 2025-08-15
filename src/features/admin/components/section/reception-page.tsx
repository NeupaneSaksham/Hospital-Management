import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"


// Mock data for appointments
const appointments = [
  {
    id: "11111",
    patientName: "Elizabeth Polson",
    avatar: "/woman-patient.png",
    date: "2025/7/6",
    time: "8:00 AM",
    doctor: "Amy",
    status: "Completed",
  },
  {
    id: "11111",
    patientName: "John David",
    avatar: "/man-patient.png",
    date: "2025/7/6",
    time: "8:00 AM",
    doctor: "Anu",
    status: "In Progress",
  },
  {
    id: "11111",
    patientName: "Krishtav Rajan",
    avatar: "/young-man-patient.png",
    date: "2025/7/6",
    time: "8:00 AM",
    doctor: "Amy",
    status: "In Progress",
  },
  {
    id: "11111",
    patientName: "Sumanth Tinson",
    avatar: "/middle-aged-man-patient.png",
    date: "2025/7/6",
    time: "8:00 AM",
    doctor: "Amy",
    status: "Cancelled",
  },
  {
    id: "11111",
    patientName: "EG Subramani",
    avatar: "/elderly-man-patient.png",
    date: "2025/7/6",
    time: "8:00 AM",
    doctor: "Amy",
    status: "Cancelled",
  },
  {
    id: "11111",
    patientName: "Ranjan Maari",
    avatar: "/man-patient-2.png",
    date: "2025/7/6",
    time: "8:00 AM",
    doctor: "Amy",
    status: "Cancelled",
  },
  {
    id: "11111",
    patientName: "Philipile Gopal",
    avatar: "/young-woman-patient.png",
    date: "2025/7/6",
    time: "8:00 AM",
    doctor: "Amy",
    status: "Cancelled",
  },
  {
    id: "11111",
    patientName: "Philipile Gopal",
    avatar: "/woman-patient-2.png",
    date: "2025/7/6",
    time: "8:00 AM",
    doctor: "Amy",
    status: "Cancelled",
  },
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Completed":
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">{status}</Badge>
    case "In Progress":
      return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">{status}</Badge>
    case "Cancelled":
      return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">{status}</Badge>
    default:
      return <Badge variant="secondary">{status}</Badge>
  }
}

export default function ReceptionPage() {
  return (
    <div className="flex flex-col h-full bg-gray-50/30">
      <div className="flex-1 p-6 space-y-6">
        {/* Section Title */}
        {/* <div className="space-y-4">
          <h1 className="text-md font-medium text-gray-900 mb-4 pb-2 border-b-2 border-[#0ABAB5] w-fit">
            Reception
          </h1>
        </div> */}

        {/* Top Section with Receptionist Profile and Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
          {/* Receptionist Profile Card */}
          <Card className="lg:col-span-2 border-[#e5e7eb] h-35 py-0">
            <CardContent className="p-0 flex h-full">
              {/* Image Section */}
              <div className="w-1/2 h-full rounded-l-lg">
                <img
                  src="https://media.istockphoto.com/id/1369118933/photo/doctor-with-computer-calling-on-phone-at-hospital.jpg?s=612x612&w=0&k=20&c=-n3pnetoZK0OsizePUod1X6gl5YHr9QLvuE2UFt8AH4="
                  alt="Amy Roy"
                  className="object-cover w-full h-full rounded-l-lg"

                />
              </div>


              {/* Info Section */}
              <div className="w-2/3 p-4 flex flex-col justify-center gap-2  from-gray-50 to-white">
                <h3 className="text-lg font-semibold text-gray-800">Amy Roy</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600 font-medium">ID:</span>
                  <span className="text-sm text-gray-500">12244</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">8:00 AM - 4:00 PM</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-5 gap-3">
            <Card className="bg-[#7EE5ED] border-cyan-100 justify-center items-center">
              <CardContent className="p-3 text-center ">
                <h3 className="text-xs font-medium text-cyan-800 mb-1">Today Patients</h3>
                <p className="text-xl font-bold text-cyan-900">45</p>
              </CardContent>
            </Card>

            <Card className="bg-[#534EE9] border-blue-100 justify-center items-center">
              <CardContent className="p-3 text-center">
                <h3 className="text-xs font-medium text-blue-800 mb-1">Current Queue</h3>
                <p className="text-xl font-bold text-blue-900">12</p>
              </CardContent>
            </Card>

            <Card className="bg-[#37BA57] border-green-100 justify-center items-center">
              <CardContent className="p-3 text-center">
                <h3 className="text-xs font-medium text-green-800 mb-1">Appointments</h3>
                <p className="text-xl font-bold text-green-900">20</p>
              </CardContent>
            </Card>

            <Card className="bg-[#D9D9D9] border-gray-100 justify-center items-center">
              <CardContent className="p-3 text-center">
                <h3 className="text-xs font-medium text-gray-800 mb-1">Pending</h3>
                <p className="text-xl font-bold text-gray-900">20</p>
              </CardContent>
            </Card>

            <Card className="bg-[#FF5353] border-red-100 justify-center items-center">
              <CardContent className="p-3 text-center">
                <h3 className="text-xs font-medium text-red-800 mb-1">Cancelled</h3>
                <p className="text-xl font-bold text-red-900">20</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Appointments Section */}
        <div className="flex-1 flex flex-col space-y-3 min-h-0 ">
          <h2 className="text-md font-medium text-gray-900 mb-4 pb-2 border-b-2 border-[#0ABAB5] w-fit">Today's Appointments</h2>

          {/* Appointments Table */}
          <div className="overflow-x-auto">
            <Table className="w-full min-w-[600px] text-sm sm:text-base">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-[#242222]">Patient ID</TableHead>
                  <TableHead className="text-[#242222]">Patient Name</TableHead>
                  <TableHead className="text-[#242222]">Date</TableHead>
                  <TableHead className="text-[#242222]">Time</TableHead>
                  <TableHead className="text-[#242222]">Doctor</TableHead>
                  <TableHead className="text-[#242222]">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {appointments.map((appointment, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-[#525252] font-light">{appointment.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="text-[#525252]">{appointment.patientName}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-[#525252] font-light">{appointment.date}</TableCell>
                    <TableCell className="text-[#525252] font-light">{appointment.time}</TableCell>
                    <TableCell className="text-[#525252] font-light">{appointment.doctor}</TableCell>
                    <TableCell>{getStatusBadge(appointment.status)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="flex justify-end pt-2">
            <Pagination>
              <PaginationContent className="gap-1">
                <PaginationItem>
                  <PaginationPrevious href="#" className="hover:text-[#0598A3] border-0 text-[#0598A3]" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive className="bg-[#0598A3] hover:bg-[#0598A3] text-white hover:text-white">
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" className="text-[#0598A3] hover:text-[#0598A3] border-0 hover:bg-transparent">
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" className="text-[#0598A3] border-0 hover:text-[#0598A3]">
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" className="text-[#0598A3] border-0 hover:text-[#0598A3]">
                    4
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" className="text-[#0598A3] border-0 hover:text-[#0598A3]" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  )
}
