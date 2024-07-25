import { Input } from '../../../../components/ui/input'
const FormFields = ({ jsonFormData }) => {
  return (
    <div>
      <h2>{jsonFormData.formTitle}</h2>
      <h2>{jsonFormData.formSubheading}</h2>
      <div>
        {
          jsonFormData?.fields?.map((field, index) => {
            return (
              <div key={index}>
                <label htmlFor={field?.name}>{field?.label}</label>
                <Input type={field.types} placeholder={field.placeholder} name={field?.name} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default FormFields
