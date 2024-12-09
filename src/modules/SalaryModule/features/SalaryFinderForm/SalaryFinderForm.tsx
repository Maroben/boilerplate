import { MyComboInput } from '@components/form/MyComboInput'
import { MyDateInput } from '@components/form/MyDateInput'
import { MyFormSection } from '@components/form/MyFormSection'
import { MyTextInput } from '@components/form/MyTextInput'
import { MyCard } from '@components/layout/MyCard'
import { MyCardFooter } from '@components/layout/MyCardFooter'
import { ISalaryFinder, ISalaryFinderForm, SalaryFinderSchema } from '@modules/SalaryModule/interface'
import ResetIcon from '@mui/icons-material/Refresh'
import { Box, Button, Typography } from '@mui/material'
import { useGetJobsQuery } from '@store/api/salaryApi'
import { getJoiError } from '@util'
import { DateTime } from 'luxon'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

interface SalaryFinderFormProps {
  initForm: ISalaryFinderForm
  onSubmit: (form: ISalaryFinder) => void
  onReset: () => void
}

export function SalaryFinderForm({ initForm, onSubmit, onReset }: SalaryFinderFormProps) {
  const { t } = useTranslation('common')

  const [form, setForm] = useState<ISalaryFinderForm>(initForm)
  const [isValid, setIsValid] = useState(false)
  const [errors, setErrors] = useState<{ [key in keyof ISalaryFinderForm]?: string }>({})

  const jobsQuery = useGetJobsQuery()
  const jobs = useMemo((): string[] => {
    return (jobsQuery.error as string[]) ?? []
  }, [jobsQuery])

  useEffect(() => {
    setForm({ ...initForm })
    setIsValid(false)
    setErrors({})
  }, [initForm])

  const getPreparedForm = useCallback((form: ISalaryFinderForm): ISalaryFinder => {
    return {
      birthdate: form.birthdate?.toISO() ?? null,
      city: form.city,
      startDate: form.startDate?.toISO() ?? null,
      jobFunction: form.jobFunction ?? '',
      workhours: form.workhours,
      vacationDays: form.vacationDays,
      holidayDays: form.holidayDays,
    }
  }, [])

  const handleChange = <T extends ISalaryFinderForm>(value: T[keyof T], id: keyof ISalaryFinder) => {
    const newFormData = { ...form, [id]: value }
    const prepared = getPreparedForm(newFormData)

    const validationError = SalaryFinderSchema.extract(id).validate(prepared[id]).error
    const displayError = getJoiError(t, validationError, t(`salary.form.${id}`))
    const formIsValid = SalaryFinderSchema.validate(prepared).error === undefined

    setErrors({ ...errors, [id]: displayError })
    setIsValid(formIsValid)
    setForm(newFormData)
  }

  const handleSubmit = () => {
    if (isValid) {
      const prepared = getPreparedForm(form)
      onSubmit(prepared)
    }
  }

  return (
    <MyCard>
      <Box sx={{ mb: 4 }}>
        <Typography variant='h4'>{t('salary.title')}</Typography>
        <Typography variant='body1'>{t('salary.description')}</Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <MyFormSection sectionTitle={t('salary.form.employeeSection')}>
          <MyDateInput
            label={t('salary.form.birthdate')}
            value={form.birthdate}
            onChange={(v) => handleChange(v, 'birthdate')}
            displayError={errors?.birthdate}
            maxDate={DateTime.now()}
          ></MyDateInput>
        </MyFormSection>

        <MyFormSection sectionTitle={t('salary.form.jobSection')}>
          <MyTextInput
            id='city'
            label={t('salary.form.jobLocation')}
            value={form.city}
            onChange={(e) => handleChange(e.target.value, 'city')}
            displayError={errors?.city}
          ></MyTextInput>

          <MyDateInput
            label={t('salary.form.jobStartDate')}
            value={form.startDate}
            onChange={(v) => handleChange(v, 'startDate')}
            displayError={errors?.startDate}
          ></MyDateInput>

          <MyComboInput
            label={t('salary.form.JobFunction')}
            options={jobs}
            value={form.jobFunction}
            onChange={(v) => handleChange(v, 'jobFunction')}
          ></MyComboInput>
        </MyFormSection>

        <MyFormSection sectionTitle={t('salary.form.employmentSection')}>
          <MyTextInput
            id='workhours'
            label={t('salary.form.workhours')}
            value={form.workhours}
            onChange={(e) => handleChange(e.target.value, 'workhours')}
            displayError={errors?.workhours}
            type='number'
          ></MyTextInput>

          <MyTextInput
            id='holidayDays'
            label={t('salary.form.holidayDays')}
            value={form.holidayDays}
            onChange={(e) => handleChange(e.target.value, 'holidayDays')}
            displayError={errors?.holidayDays}
            type='number'
          ></MyTextInput>

          <MyTextInput
            id='vacationDays'
            label={t('salary.form.vacationDays')}
            value={form.vacationDays}
            onChange={(e) => handleChange(e.target.value, 'vacationDays')}
            displayError={errors?.vacationDays}
            type='number'
          ></MyTextInput>
        </MyFormSection>
      </Box>

      <MyCardFooter>
        <Button startIcon={<ResetIcon />} color='inherit' onClick={onReset}>
          {t('action.reset')}
        </Button>
        <Button variant='contained' disabled={!isValid} onClick={handleSubmit}>
          {t('salary.form.submit')}
        </Button>
      </MyCardFooter>
    </MyCard>
  )
}
