import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const doctors = [
  {
    id: "D001",
    name: "Rohit prasad Yadav",
    specialization: "Neurosurgeon",
    patientCount: "1,245",
    experience: "5+ years",
    avatar: "/placeholder.svg?height=32&width=32"
  },
  {
    id: "D002",
    name: "Sanup Timsina",
    specialization: "Cardiologist", 
    patientCount: "1,120",
    experience: "7+ years",
    avatar: "/placeholder.svg?height=32&width=32"
  },
  {
    id: "D003",
    name: "Prajwal Thapa",
    specialization: "Pathologist",
    patientCount: "982", 
    experience: "4+ years",
    avatar: "/placeholder.svg?height=32&width=32"
  },
  {
    id: "D004",
    name: "Aaman Limbu",
    specialization: "Radiologist",
    patientCount: "845",
    experience: "3+ years", 
    avatar: "/placeholder.svg?height=32&width=32"
  }
]

const TopDoctorsTable = () => {
  return (
    <div className="flex flex-col h-full bg-[#ffffff] p-4">
      <div className="flex-1">
        {/* Section Title */}
                 <CardTitle className="text-lg font-semibold text-gray-900">Top Doctors</CardTitle>


        {/* Table */}
        <div className="overflow-x-auto">
          <Table className="w-full min-w-[600px] text-sm">
            <TableHeader>
              <TableRow>
                <TableHead className="text-[#242222]">ID</TableHead>
                <TableHead className="text-[#242222]">Doctor Name</TableHead>
                <TableHead className="text-[#242222]">Specialization</TableHead>
                <TableHead className="text-[#242222]">Patient Count</TableHead>
                <TableHead className="text-[#242222]">Experience</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {doctors.map((doctor) => (
                <TableRow key={doctor.id}>
                  <TableCell className="text-[#525252] font-light">{doctor.id}</TableCell>
                  <TableCell className="text-[#525252] font-light">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-7 h-7">
                        <AvatarImage src={doctor.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="bg-blue-100 text-blue-600 text-[10px]">
                          {doctor.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <span className="truncate">{doctor.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-[#525252] font-light">{doctor.specialization}</TableCell>
                  <TableCell className="text-[#525252] font-light">{doctor.patientCount}</TableCell>
                  <TableCell className="text-[#525252] font-light">{doctor.experience}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default TopDoctorsTable
