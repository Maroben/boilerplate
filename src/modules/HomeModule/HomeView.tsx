import { MyCard } from '@components/layout/MyCard'
import { Path } from '@config'
import { Box, Grid2 as Grid, Typography } from '@mui/material'

export default function HomeView() {
  return (
    <Box>
      <Box sx={{ p: { xs: 4, sm: 6, md: 10 } }}>
        <Typography variant='h1' sx={{ textAlign: 'center' }}>
          ELaw Tool
        </Typography>
      </Box>

      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid size={{ xs: 12, md: 6, lg: 5, xl: 4 }}>
          <MyCard to={Path.salaryFinder}>
            <Typography variant='h2'>Salary Finder</Typography>
            <Typography>Wie viel kostet es, eine Stelle zu besetzen?</Typography>
          </MyCard>
        </Grid>
      </Grid>
    </Box>
  )
}
