export function useProjectFormStyles() {
  const textareaStyles = {
    input: {
      padding: 12,
    },
  }

  const inputStyles = {
    input: {
      height: 42,
    },
  }

  const dateTimeStyles = {
    input: {
      fontSize: 14,
    },
  }

  return {
    textareaStyles,
    dateTimeStyles,
    inputStyles,
  }
}
