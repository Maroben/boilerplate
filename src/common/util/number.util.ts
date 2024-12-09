export function formatPercentage(percentage: number): string {
  return Intl.NumberFormat('de-CH', { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(percentage)
}

export function formatCurrency(amount: number): string {
  return Intl.NumberFormat('de-CH', { style: 'currency', currency: 'CHF' }).format(amount)
}
