export function concatenateStrings(str1, str2) {
    if (str1 !== null && str2 !== null) {
        return str1 + str2;
    } else if (str1 !== null) {
        return str1;
    } else if (str2 !== null) {
        return str2;
    } else {
        return null;
    }
}
