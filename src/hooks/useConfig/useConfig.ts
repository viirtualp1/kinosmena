export function useConfig() {
  const isDev = import.meta.env.DEV
  const isProd = import.meta.env.PROD

  return {
    isDev,
    isProd,
  }
}
