/**
 * @method comparePWD: Compare password vs hash code
 * @param pwd
 * @param hash
 * @returns boolean
 */
export declare function comparePWD(pwd: string | undefined, hash: any): boolean;

/**
 * @method hashPWD: Hash password
 * @param pwd
 * @param salt
 * @returns string
 */
export declare function hashPWD(pwd: string | undefined, salt?: string): string | undefined;
