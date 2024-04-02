import { format, parseISO } from 'date-fns'

export function useDate() {
  function formatDate(date: string | null, options?: { withTime: boolean }) {
    if (!date) {
      return
    }

    const formattedDate = parseISO(date)

    let formatStr = 'dd.MM.yyyy'

    if (options?.withTime) {
      formatStr += ' HH:mm'
    }

    return format(formattedDate, formatStr)
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
