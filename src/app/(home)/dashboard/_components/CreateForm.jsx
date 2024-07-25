"use client"
import { Textarea } from "../../../../components/ui/textarea"
import { AiChatSession } from "../../../../config/AiModel"
import { drizzleDb } from "../../../../config/index"
import { useState } from "react"
import { Button } from "../../../../components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../components/ui/dialog"
import { desc } from "drizzle-orm"
import { Loader2 } from "lucide-react"
import { useUser } from "@clerk/nextjs"
import moment from "moment"
import { forms } from "../../../../config/schema"
import { useRouter } from "next/navigation"

const PROMPT =
  ",On the basis of description please give form in json format with form title, form subheading, Form field, form name, placeholder name, and form label, In Json format"
const CreateForm = () => {
  const { user } = useUser()
  const [openDialog, setOpenDialog] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formInput, setFormInput] = useState({
    description: "",
  })

  const router = useRouter()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormInput({
      ...formInput,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault()
    try {
      const result = await AiChatSession.sendMessage(
        `Description:${formInput?.description}${PROMPT}`
      )
      setOpenDialog(false)
      console.log(result.response.text())

      if (result.response.text()) {
        const res = await drizzleDb
          .insert(forms)
          .values({
            jsonform: result.response.text(),
            createdBy: user?.primaryEmailAddress?.emailAddress,
            createdAt: moment().format("YYYY-MM-DD"),
          })
          .returning({ id: forms.id })

        console.log(res[0]?.id)
        router.push(`/editform/${res[0]?.id}`)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div>
      <Button onClick={() => setOpenDialog(true)}>Create form </Button>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create new form</DialogTitle>
            <DialogDescription>
              <Textarea
                className="my-6"
                placeholder="Write form description"
                name={"description"}
                value={formInput?.description}
                onChange={handleChange}
              />
              <div className="flex justify-end gap-4 mt-4  ">
                <Button
                  className=""
                  onClick={() => setOpenDialog(false)}
                  type="button"
                >
                  Cancel
                </Button>
                {loading ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <Button type="submit" onClick={handleSubmit}>
                    Submit
                  </Button>
                )}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}
export default CreateForm
