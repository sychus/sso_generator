import * as crypto from 'crypto';
import { getContextKey } from './utils/contextKeyGenerator';
import { encode64 } from './utils/encodeBase64';

export interface DecodedContext {
  /**
   * Optional org ID
   */
  orgId?: string;
  /**
   * Record ID of root context object
   */
  subjectId: string;
  /**
   * Optional code expiration as number of seconds since the UNIX epoch
   */
  expiresAt?: number;
}

export const encodeContext = (context: DecodedContext, secretKey: Buffer): string => {
  const iv = crypto.randomBytes(16);
  const plaintext = Buffer.from([ context.orgId, context.subjectId, context.expiresAt ].join('.'), 'utf8');
  const cipher = crypto.createCipheriv('aes256', secretKey, iv);
  const encrypted = Buffer.concat([iv,  cipher.update(plaintext), cipher.final() ]);

  return encrypted.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};


export const createSSOCode = (contactId: string, expiresIn: number, SSO_ENCRYPTION_KEY: Buffer): string => {
  return encodeContext({
    orgId: '', // not setting an org id to shorten the context code
    subjectId: contactId,
    expiresAt: Math.floor(Date.now() / 1000) + expiresIn
  }, SSO_ENCRYPTION_KEY);
};

const run = () => {
  const contextKey = getContextKey();
  const encode64Contextkey = encode64(contextKey);
  console.info('Context key with encode 64 should be sent to support: ', encode64Contextkey);
  const subjectId = process.argv[2]; // This is the contact Id example an orgId
  const expiresIn = 1 * 60 * 24 // expire after 24 hours
  const encryptionKey = Buffer.from(encode64Contextkey, 'base64');

  const ssoCode = createSSOCode(subjectId, expiresIn, encryptionKey);
  console.info(ssoCode)
}

run()