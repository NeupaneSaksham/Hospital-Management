export default function AppointmentsTable() {
  const appointments = [
    { id: 1, patient: "John Doe", date:"2023-10-01", time: "10:00 AM", doctor: "Dr. Smith" },
    { id: 2, patient: "Jane Roe", date:"2023-10-01", time: "11:00 AM"},
    { id: 3, patient: "Sam Lee", date:"2023-10-01", time: "01:00 PM"},
  ]

  return (
    <div className="bg-white rounded-xl p-4 shadow">
      <h2 className="text-lg font-semibold mb-4">Upcoming Appointments</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500 border-b">
            <th className="pb-2">Patient ID</th>
            <th className="pb-2">Patient</th>
            <th className="pb-2">Date</th>
            <th className="pb-2">Time</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((a) => (
            <tr key={a.id} className="border-b last:border-0">
              <td className="py-2">{a.id}</td>
              <td className="py-2">{a.patient}</td>
              <td className="py-2">{a.date}</td>
              <td className="py-2">{a.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
