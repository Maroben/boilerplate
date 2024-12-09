import Joi from 'joi'
import { DateTime } from 'luxon'

export interface ISalaryFinderForm {
  birthdate: DateTime | null
  city: string
  startDate: DateTime | null
  jobFunction: string
  workhours: number
  vacationDays: number
  holidayDays: number
}

export interface ISalaryFinder {
  birthdate: string | null
  city: string
  startDate: string | null
  jobFunction: string
  workhours: number
  vacationDays: number
  holidayDays: number
}

export const SalaryFinderSchema = Joi.object({
  birthdate: Joi.date().iso().max('now').required(),
  city: Joi.string().required(),
  startDate: Joi.date().iso().required(),
  jobFunction: Joi.string().required(),
  workhours: Joi.number().max(45).required(),
  vacationDays: Joi.number().min(20).max(365).required(),
  holidayDays: Joi.number().min(9).max(365).required(),
})
