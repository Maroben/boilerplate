import { Autocomplete } from '@mui/material'
import { MyTextInput } from './MyTextInput'

interface MyComboInputProps {
  label: string
  options: string[]
  value: string
  onChange: (value: string | null) => void
}

export function MyComboInput({ label, options, value, onChange }: MyComboInputProps) {
  return (
    <Autocomplete
      disablePortal
      options={options}
      value={value}
      onChange={(_, v) => onChange(v)}
      renderInput={(params) => <MyTextInput {...params} label={label} />}
    ></Autocomplete>
  )
}
