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
        console.log("Error: ", error);
        return false;
    }
}

/**
 * @method hashPWD: Hash password
 * @param pwd
 * @param salt
 * @returns string | undefined
 */
export function hashPWD(pwd: any, salt: string | number = genSaltSync()): string | undefined {
    try {
        return hashSync(pwd, salt);
    } catch (error) {
        console.log("Error: ", error);
        return undefined;
    }
}
