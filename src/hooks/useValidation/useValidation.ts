export function useValidation(fields: unknown) {
  const fieldsForValidation = {}

  if (!fields) {
    return null
  }

  for (const field in fields) {
    // @ts-ignore
    fieldsForValidation[field] = (value: string | null) =>
      !value ? 'Поле обязательно к заполнению' : null
  }

  return fieldsForValidation
}
