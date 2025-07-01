import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="bg-white border-t py-4 text-center text-sm text-gray-600">
        <p className="font-medium">
          Collaborators: Pramesh, Samir Adhikari, Nishant Thapa, Bibek Thapa, Sudhan Khadka
        </p>
      </footer>
    </div>
  )
}
