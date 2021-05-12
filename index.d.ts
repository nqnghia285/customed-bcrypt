/**
 * @method comparePWD Compare password vs hash code
 * @param pwd any
 * @param hash any
 * @returns boolean
 */
export declare function comparePWD(pwd: any, hash: any): boolean;

/**
 * @method hashPWD: Hash password
 * @param pwd
 * @param salt
 * @returns string | undefined
 */
export declare function hashPWD(pwd: any, salt: string | number): string | undefined;
