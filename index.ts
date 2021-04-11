import { compareSync, genSaltSync, hashSync } from "bcrypt";

/**
 * @method comparePWD: Compare password vs hash code
 * @param pwd
 * @param hash
 * @returns boolean
 */
export function comparePWD(pwd: string | undefined, hash: any): boolean {
    try {
        return compareSync(pwd, hash);
    } catch (error) {
        console.log(error);
        return false;
    }
}

/**
 * @method hashPWD: Hash password
 * @param pwd
 * @param salt
 * @returns string
 */
export function hashPWD(pwd: string | undefined, salt: string = genSaltSync()): string | undefined {
    try {
        return hashSync(pwd, salt);
    } catch (error) {
        console.log(error);
        return undefined;
    }
}
