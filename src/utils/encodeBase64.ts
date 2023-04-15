export const encode64 = (contextKey: string) => {
  return Buffer.from(contextKey).toString('base64')
}