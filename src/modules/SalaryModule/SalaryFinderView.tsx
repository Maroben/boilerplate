import { Box, Grid2 as Grid } from '@mui/material'
import { useLazyGetMinimumSalaryQuery } from '@store/api/salaryApi'
import { useState } from 'react'
import { SalaryFinderForm } from './features/SalaryFinderForm/SalaryFinderForm'
import { SalaryInformationCard } from './features/SalaryInformation/SalaryInformationCard'
import { ISalaryFinder, ISalaryFinderForm } from './interface'

const baseData: ISalaryFinderForm = {
  birthdate: null,
  city: '',
  startDate: null,
  jobFunction: '',
  workhours: 40,
  vacationDays: 25,
  holidayDays: 11,
}

export default function SalaryFinderView() {
  const [initForm, setInitForm] = useState<ISalaryFinderForm>(baseData)
  const [salary, setSalary] = useState<number>()
  const [employmentData, setEmploymentData] = useState<ISalaryFinder | null>(null)

  const [getSalary] = useLazyGetMinimumSalaryQuery()

  const handleReset = () => {
    setInitForm({ ...baseData })
    setSalary(20)
    setEmploymentData(null)
  }

  const handleSubmit = (salaryFinder: ISalaryFinder) => {
    setEmploymentData(salaryFinder)

    getSalary(salaryFinder)
      .unwrap()
      .catch((salary) => setSalary(salary))
  }

  return (
    <Box sx={{ py: 5 }}>
      <Grid container spacing={8}>
        <Grid size={{ xs: 12, md: 6 }}>
          <SalaryFinderForm initForm={initForm} onSubmit={handleSubmit} onReset={handleReset}></SalaryFinderForm>
        </Grid>

        {salary && employmentData && (
          <Grid size={{ xs: 12, md: 6 }}>
            <SalaryInformationCard salary={salary} employmentData={employmentData} onReset={handleReset}></SalaryInformationCard>
          </Grid>
        )}
      </Grid>
    </Box>
  )
}
