export function phoneNumberFormat(value: string) {
  let formatedValue = ''

  if (value.length === 10) {
    formatedValue = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
    return formatedValue
  }

  if (value.length > 10) {
    formatedValue = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
    return formatedValue
  }

  return value
}
