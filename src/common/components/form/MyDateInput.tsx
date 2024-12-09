import { DatePicker, DatePickerProps } from '@mui/x-date-pickers'
import { DateTime } from 'luxon'

interface MyDateInputProps extends DatePickerProps<DateTime> {
  displayError?: string
}

export function MyDateInput({ displayError, ...props }: MyDateInputProps) {
  return (
    <DatePicker
      {...props}
      slotProps={{
        textField: {
          helperText: displayError,
          error: !!displayError,
        },
      }}
    ></DatePicker>
  )
}
