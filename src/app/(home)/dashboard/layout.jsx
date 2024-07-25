import { SignedIn } from "@clerk/nextjs"
import DashboardSidebar from "../_components/DashboardSidebar"

const DashboardLayout = ({ children }) => {
  return (
    <div className="mr-14">
      <SignedIn>{children}</SignedIn>
    </div>
  )
}
export default DashboardLayout
