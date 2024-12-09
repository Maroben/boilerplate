import { Box } from '@mui/material'

interface MyCardFooterProps {
  children: React.ReactNode
}

export function MyCardFooter({ children }: MyCardFooterProps) {
  return <Box sx={{ display: 'flex', gap: 4, justifyContent: 'end' }}>{children}</Box>
}
