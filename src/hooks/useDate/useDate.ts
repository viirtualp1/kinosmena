import { format, parseISO } from 'date-fns'

export function useDate() {
  function formatDate(date: string | null) {
    if (!date) {
      return
    }

    const formattedDate = parseISO(date)

    return format(formattedDate, 'dd.mm.yyyy')
  }

  function formatDateForDateInput(date: string | null) {
    if (!date) {
      return
    }

    return new Date(date)
  }

  return {
    formatDate,
    formatDateForDateInput,
  }
}
