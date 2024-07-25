
import Navbar from "../../components/Navbar"
import DashboardSidebar from "./_components/DashboardSidebar"
import { SignedIn } from "@clerk/nextjs"

const HomeLayout = ({ children }) => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="flex gap-6 items-start">
        <div>
          <DashboardSidebar />
        </div>
        <div className="flex-1">
          <SignedIn>{children}</SignedIn>
        </div>
      </div>
    </div>
  )
}
export default HomeLayout
