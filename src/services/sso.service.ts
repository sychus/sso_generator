import * as crypto from 'crypto';
import { getContextKey } from '../utils/contextKeyGenerator';
import { encode64 } from '../utils/encodeBase64';
import { DecodedContext } from '../types/sso-context';


const encodeContext = (context: DecodedContext, secretKey: Buffer): string => {
  const iv = crypto.randomBytes(16);
  const plaintext = Buffer.from([ context.orgId, context.subjectId, context.expiresAt ].join('.'), 'utf8');
  const cipher = crypto.createCipheriv('aes256', secretKey, iv);
  const encrypted = Buffer.concat([iv,  cipher.update(plaintext), cipher.final() ]);

  return encrypted.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};


const createSSOCode = (contactId: string, expiresIn: number, SSO_ENCRYPTION_KEY: Buffer): string => {
  return encodeContext({
    orgId: '', // not setting an org id to shorten the context code
    subjectId: contactId,
    expiresAt: Math.floor(Date.now() / 1000) + expiresIn
  }, SSO_ENCRYPTION_KEY);
};

export const generate = (subject: string, expirationDays: number) => {
  const contextKey = getContextKey();
  const encode64Contextkey = encode64(contextKey);
  const subjectId = subject;
  const expiresIn = expirationDays * 24 * 60 * 60; // days until expiration
  const encryptionKey = Buffer.from(encode64Contextkey, 'base64');
  return {
    contextKeyForSupportTeam: encode64Contextkey,
    ssoToken: createSSOCode(subjectId, expiresIn, encryptionKey)
  }
}
