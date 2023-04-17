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