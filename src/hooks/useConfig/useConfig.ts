export function useConfig() {
  const isDev = import.meta.env.DEV
  const isProd = import.meta.env.PROD
  const testTid = import.meta.env.TEST_TID

  return {
    isDev,
    isProd,
    testTid,
  }
}
