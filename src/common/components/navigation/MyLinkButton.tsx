import { Button, ButtonProps } from '@mui/material'
import { Link } from 'react-router'

interface MyLinkButtonProps extends ButtonProps {
  to: string
}

export function MyLinkButton({ to, ...props }: MyLinkButtonProps) {
  return (
    <Link to={to}>
      <Button {...props} variant='text' size='large'></Button>
    </Link>
  )
}
