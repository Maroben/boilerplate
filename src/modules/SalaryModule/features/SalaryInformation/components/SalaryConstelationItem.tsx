import { Box, Typography } from '@mui/material'
import { formatCurrency, formatPercentage } from '@util'
import { useMemo } from 'react'

interface SalaryConstelationItemProps {
  label: string
  percentage?: number
  salary: number
  primary?: boolean
}

export default function SalaryConstelationItem({ label, percentage, salary, primary = false }: SalaryConstelationItemProps) {
  const textColor = useMemo(() => (primary ? 'textPrimary' : 'textSecondary'), [primary])

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', gap: 4 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant='h6' color={textColor}>
          {label} {percentage ? `(${formatPercentage(percentage)})` : ''}
        </Typography>
      </Box>

      <Typography variant='h6' color={textColor}>
        {formatCurrency(salary)}
      </Typography>
    </Box>
  )
}
