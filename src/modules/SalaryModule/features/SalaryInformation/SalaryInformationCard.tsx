import { MyCard } from '@components/layout/MyCard'
import { MyCardFooter } from '@components/layout/MyCardFooter'
import { Constants } from '@config'
import { ISalaryFinder } from '@modules/SalaryModule/interface'
import { Box, Button, Typography } from '@mui/material'
import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import SalaryConstelationItem from './components/SalaryConstelationItem'

interface SalaryInformationCardProps {
  salary: number
  employmentData: ISalaryFinder
  onReset: () => void
}

export function SalaryInformationCard({ salary, employmentData, onReset }: SalaryInformationCardProps) {
  const { t } = useTranslation('common')

  const getItemSalary = useCallback(
    (percent: number) => {
      return salary * percent
    },
    [salary],
  )

  const vacationCompensation = useMemo(() => {
    return employmentData.vacationDays / Constants.DaysAYear
  }, [employmentData.vacationDays])

  const holidayCompensation = useMemo(() => {
    return employmentData.holidayDays / Constants.DaysAYear
  }, [employmentData.holidayDays])

  const bruttoSalaryHour = useMemo(() => {
    const vacation = getItemSalary(vacationCompensation)
    const holiday = getItemSalary(holidayCompensation)
    const additionalMonth = getItemSalary(Constants.Month13)

    return salary + vacation + holiday + additionalMonth
  }, [salary, getItemSalary, vacationCompensation, holidayCompensation])

  const bruttoSalaryMonth = useMemo(() => {
    return salary * employmentData.workhours * Constants.WeeksAMonth
  }, [salary, employmentData.workhours])

  return (
    <MyCard>
      <Typography variant='h4' sx={{ mb: 2 }}>
        {t('salary.info.title')}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: 4,
          gap: 1,
        }}
      >
        <>
          <SalaryConstelationItem label={t('salary.info.baseSalary')} salary={salary} primary />
          <SalaryConstelationItem
            label={t('salary.info.vacationCompensation')}
            percentage={vacationCompensation}
            salary={getItemSalary(vacationCompensation)}
          />
          <SalaryConstelationItem
            label={t('salary.info.holidayCompensation')}
            percentage={holidayCompensation}
            salary={getItemSalary(holidayCompensation)}
          />
          <SalaryConstelationItem
            label={t('salary.info.additionalMonthCompensation')}
            percentage={Constants.Month13}
            salary={getItemSalary(Constants.Month13)}
          />
        </>

        <SalaryConstelationItem label={t('salary.info.bruttoHour')} salary={bruttoSalaryHour} primary />

        <SalaryConstelationItem label={t('salary.info.bruttoMonth')} salary={bruttoSalaryMonth} primary />
      </Box>

      <MyCardFooter>
        <Button onClick={onReset} variant='outlined' size='large'>
          {t('action.newCalculation')}
        </Button>
      </MyCardFooter>
    </MyCard>
  )
}
