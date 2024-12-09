import { MyCard } from '@components/layout/MyCard'
import { Path } from '@config'
import { Box, Grid2 as Grid, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

export default function HomeView() {
  const { t } = useTranslation('common')

  return (
    <Box>
      <Box sx={{ p: { xs: 4, sm: 6, md: 10 } }}>
        <Typography variant='h1' sx={{ textAlign: 'center' }}>
          {t('home.title')}
        </Typography>
      </Box>

      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid size={{ xs: 12, md: 6, lg: 5, xl: 4 }}>
          <MyCard to={Path.salaryFinder}>
            <Typography variant='h2'>{t('salary.title')}</Typography>
            <Typography>{t('salary.description')}</Typography>
          </MyCard>
        </Grid>
      </Grid>
    </Box>
  )
}
