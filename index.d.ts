/**
 * @method comparePWD: Compare password vs hash code
 * @param pwd
 * @param hash
 * @returns boolean
 */
export function comparePWD(pwd: string | undefined, hash: any): boolean;

/**
 * @method hashPWD: Hash password
 * @param pwd
 * @param salt
 * @returns string
 */
export function hashPWD(pwd: string | undefined, salt?: string): string | undefined;
