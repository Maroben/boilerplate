import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

export default function FeatureView() {
  const { t } = useTranslation('common')

  return (
    <Box sx={{ p: { xs: 4, sm: 6, md: 10 } }}>
      <Typography variant='h1' sx={{ textAlign: 'center' }}>
        {t('feature.title')}
      </Typography>
    </Box>
  )
}
