import { TextField, TextFieldProps } from '@mui/material'

interface MyTextInputProps extends Omit<TextFieldProps<'outlined'>, 'variant'> {
  displayError?: string
}

export function MyTextInput({ displayError, ...props }: MyTextInputProps) {
  return <TextField {...props} variant='outlined' helperText={displayError} error={!!displayError}></TextField>
}
