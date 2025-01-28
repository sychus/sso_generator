import * as crypto from 'crypto';

export const getContextKey = (orgId: string) => {
  const hash = crypto.createHash('sha256').update(orgId).digest('hex');
  return hash.slice(0,32);
}

