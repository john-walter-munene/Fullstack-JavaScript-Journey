// Why hash maps matter.
// let map = new Map();
// map.set("hello", "world");
// console.log(map.get("hello"));

// Finding anagrams.
let words = [
    "antlers",
    "rentals",
    "sternal",
    "article",
    "recital",
    "flamboyant",
];

let map = new Map();

for (let word of words) {
    let key = word.split("").sort().join("");

    if (!map.has(key)) {
        map.set(key, []);
    }

    map.get(key).push(word);
}

console.log(map);
// Ouput...
/*
{
  "aelnrst": ["antlers", "rentals", "sternal"],
  "aceilrt": ["article", "recital"],
  "aabflmnoty": ["flamboyant"]
}
*/

// Implementing a single hashmap.
class HashMap {
    constructor() {
        this.bucketSpace = [[], [], []];
    }

    bucket(key) {
        let hashCode = murmurHash3(key);
        return this.bucketSpace[hashCode % this.bucketSpace.length];
    }

    entry(bucket, key) {
        for (let entry of bucket) {
            if (entry.key === key) {
                return entry;
            }
        }

        return null;
    }

    set(key, value) {
        let targetBucket = this.bucket(key);
        let targetEntry = this.entry(targetBucket, key);
        if (targetEntry) {
            targetEntry.value = value;
            return;
        }

        targetBucket.push({ key, value });
    }

    get(key) {
        let targetBucket = this.bucket(key);
        let targetEntry = this.entry(targetBucket, key);

        if (targetEntry) {
            return targetEntry.value;
        }
    }
}

function murmurHash3(key, seed = 0) {
    let remainder = key.length & 3; // key.length % 4
    let bytes = key.length - remainder;
    let h1 = seed;
    let c1 = 0xcc9e2d51;
    let c2 = 0x1b873593;
    let i = 0;

    while (i < bytes) {
        let k1 = (key.charCodeAt(i) & 0xff) |
                 ((key.charCodeAt(++i) & 0xff) << 8) |
                 ((key.charCodeAt(++i) & 0xff) << 16) |
                 ((key.charCodeAt(++i) & 0xff) << 24);
        ++i;

        k1 = Math.imul(k1, c1);
        k1 = (k1 << 15) | (k1 >>> 17);
        k1 = Math.imul(k1, c2);

        h1 ^= k1;
        h1 = (h1 << 13) | (h1 >>> 19);
        h1 = Math.imul(h1, 5) + 0xe6546b64;
    }

    let k1 = 0;

    switch (remainder) {
        case 3: k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16;
        case 2: k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
        case 1: k1 ^= (key.charCodeAt(i) & 0xff);
                k1 = Math.imul(k1, c1);
                k1 = (k1 << 15) | (k1 >>> 17);
                k1 = Math.imul(k1, c2);
                h1 ^= k1;
    }

    h1 ^= key.length;

    // Finalization mix - force all bits of a hash block to avalanche
    h1 ^= h1 >>> 16;
    h1 = Math.imul(h1, 0x85ebca6b);
    h1 ^= h1 >>> 13;
    h1 = Math.imul(h1, 0xc2b2ae35);
    h1 ^= h1 >>> 16;

    return h1 >>> 0; // Return unsigned 32-bit integer
}

// Example usage
let key = "hello world";
let hash = murmurHash3(key);
console.log(`Hash for '${key}': ${hash}`);
