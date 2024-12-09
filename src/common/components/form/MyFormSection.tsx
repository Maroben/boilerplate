import { Box, Typography } from '@mui/material'

interface MyFormSectionProps {
  sectionTitle?: string
  children: React.ReactNode
}

export function MyFormSection({ sectionTitle, children }: MyFormSectionProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 2 }}>
      {sectionTitle && <Typography variant='h6'>{sectionTitle}</Typography>}

      {children}
    </Box>
  )
}
