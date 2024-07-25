import { Input } from "../../../../components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select"
import { Textarea } from "../../../../components/ui/textarea"
import { Checkbox } from "../../../../components/ui/checkbox"
import { Button } from "../../../../components/ui/button"

const FormFields = ({ jsonFormData }) => {
  return (
    <div className="py-8">
      <div className="flex flex-col gap-1 items-center justify-center">
      <h2 className="text-2xl font-bold">{jsonFormData.formTitle}</h2>
      <h2>{jsonFormData.formSubheading}</h2>
      </div>
      <div className="flex flex-col gap-4 px-16 py-8">
        {jsonFormData?.fields?.map((field, index) => {
          return (
            <div key={index}>
              {field.type == "select" ? (
                <>
                <label htmlFor={field.name}>{field.label}</label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Grade" />
                  </SelectTrigger>
                  <SelectContent>
                    {field.options.map((option, index) => {
                      return (
                        <SelectItem key={index} value={option.value}>
                          {option.label}
                        </SelectItem>
                      )
                    })}
                  </SelectContent>
                </Select>
                </>
              ) : field.type == "textarea" ? (
                <>
                  <label htmlFor={field?.name}>{field?.label}</label>
                  <Textarea
                    placeholder={field.placeholder}
                    name={field.name}
                    label={field.label}
                  />
                </>
              ) : field.type == "checkbox" ? (
                field.options ? (
                  field?.options.map((option, index) => {
                    return (
                      <div key={index} className="flex items-center gap-2">
                        <Checkbox />
                        <label htmlFor={field?.name}>{option.label}</label>
                      </div>
                    )
                  })
                ) : (
                  <div className="flex items-center gap-2">
                    <Checkbox />
                    <label htmlFor={field?.name}>{field?.label}</label>
                  </div>
                )
              ) : field.type == "submit" ? <div className="mt-4"><Button  type="submit"> {field.value} </Button></div> : (
                <div>
                  <label htmlFor={field?.name}>{field?.label}</label>
                  <Input
                    type={field.types}
                    placeholder={field.placeholder}
                    name={field?.name}
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default FormFields
