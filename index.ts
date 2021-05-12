import { compareSync, genSaltSync, hashSync } from "bcrypt";

/**
 * @method comparePWD Compare password vs hash code
 * @param pwd any
 * @param hash any
 * @returns boolean
 */
export function comparePWD(pwd: any, hash: any): boolean {
    try {
        return compareSync(pwd, hash);
    } catch (error) {
        throw Error(error);
    }
}

/**
 * @method hashPWD: Hash password
 * @param pwd
 * @param salt
 * @returns string
 */
export function hashPWD(pwd: any, salt: string | number = genSaltSync()): string {
    try {
        return hashSync(pwd, salt);
    } catch (error) {
        throw Error(error);
    }
}
