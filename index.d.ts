/**
 * @method comparePWD Compare password vs hash code
 * @param pwd any
 * @param hash any
 * @returns boolean
 */
export function comparePWD(pwd: any, hash: any): boolean;

/**
 * @method hashPWD: Hash password
 * @param pwd
 * @param salt
 * @returns string
 */
export function hashPWD(pwd: any, salt: string | number): string;
