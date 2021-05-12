# Customed Bcrypt [![Build Status](https://github.com/Links2004/arduinoWebSockets/workflows/CI/badge.svg?branch=master)](https://github.com/nqnghia285/customed-bcrypt.git)

### Functions:

```typescript
/**
 * @method comparePWD Compare password vs hash code
 * @param pwd any
 * @param hash any
 * @returns boolean
 */
function comparePWD(pwd: any, hash: any): boolean;
```

```typescript
/**
 * @method hashPWD: Hash password
 * @param pwd
 * @param salt
 * @returns string
 */
function hashPWD(pwd: any, salt: string | number = genSaltSync()): string;
```
