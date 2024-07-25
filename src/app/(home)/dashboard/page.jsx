import { Button } from "../../../components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog"
import  CreateForm  from "./_components/CreateForm"

const page = () => {
  return (
    <div>
      <div className="flex items-cente justify-between gap-3 p-6">
        <div className="font-bold text-3xl">Dashboard</div>
        <CreateForm />
    
      </div>
    </div>
  )
}
export default page
