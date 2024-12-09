import { Box, Link } from '@mui/material'
import { Link as ReactLink } from 'react-router'

interface MyCardProps {
  to?: string
  children: React.ReactNode
}

export function MyCard({ to, children }: MyCardProps) {
  const card = (
    <Box
      sx={{
        p: 4,
        backgroundColor: 'rgba(255, 255, 255, 0.65)',
        borderRadius: '20px',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        '&:hover': to
          ? {
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
            }
          : undefined,
      }}
    >
      {children}
    </Box>
  )

  if (to) {
    return (
      <Link
        component={ReactLink}
        to={to}
        sx={{
          color: 'inherit',
          textTransform: 'none',
          textDecoration: 'none',
        }}
      >
        {card}
      </Link>
    )
  }

  return card
}
