import { TFunction } from 'i18next'
import { ValidationError } from 'joi'

export function getJoiError(t: TFunction, error?: ValidationError, label?: string): string | undefined {
  if (!error) {
    return undefined
  }

  if (error.details?.length > 0) {
    const detail = error.details[0]
    if (detail?.context?.limit !== undefined) {
      return t('error.' + detail.type, { limit: detail.context.limit, label: label })
    }

    return t('error.' + detail.type, { label: label })
  }

  return t('error.form_error')
}
