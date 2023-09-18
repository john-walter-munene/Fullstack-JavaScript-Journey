// write a program that reads ten numbers and figures out which number is the third highest.

function checkNumbers (a, b, c, d, e, f) {
    if (a > b) {
        a = b; b = a;
    }
    if (b > c) {
        b = c; c = b;
    }
    if (c > d) {
        c = d; d = c;
    }
    if (d > e) {
        d = e; e = d;
    }
    if (e > f) {
        e = f; f = e;
    }

    return a, b, c, d, e, f;
}
checkNumbers (9, 8, 7, 6, 5, 4);
