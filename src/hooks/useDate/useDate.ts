export function useDate() {
  function formatDate(date: string | null) {
    if (!date) {
      return
    }

    return new Date(date)
  }

  return {
    formatDate,
  }
}
