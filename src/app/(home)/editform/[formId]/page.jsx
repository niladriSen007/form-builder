/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { and, eq } from "drizzle-orm"
import { drizzleDb } from "../../../../config"
import { forms } from "../../../../config/schema"
import { useUser } from "@clerk/nextjs"
import { useEffect, useState } from "react"
import FormFields from "../_components/FormFields"

const EditFormPage = ({ params }) => {
  const { formId } = params

  const { user } = useUser()
  const [jsonFormData, setJsonFormData] = useState([])

  const getFormData = async () => {
    const res = await drizzleDb
      .select().from(forms)
      .where(
        and(
          eq(forms.id, formId),
          eq(forms.createdBy, user.primaryEmailAddress.emailAddress)
        )
      )

    console.log(JSON.parse(res[0]?.jsonform.split("```")[1].slice(4)))
    setJsonFormData(JSON.parse(res[0]?.jsonform.split("```")[1].slice(4)))
  }

  

  useEffect(() => {
    user && getFormData()
  }, [user])
  return <div>
    <div className="p-10">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div>
          Controller
        </div>
        <div className="md:col-span-2 border rounded-lg p-4">
            <FormFields {...{jsonFormData}} />
        </div>
      </div>
    </div>
  </div>
}
export default EditFormPage
