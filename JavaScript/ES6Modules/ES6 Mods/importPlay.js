// Named import
import { myExport } from "/modules/my-module.js";

import { foo, bar } from "/modules/my-module.js";

import { reallyReallyLongModuleExportName as shortName } from "/modules/my-module.js";

// Default imports.
import myDefault from "/modules/my-module.js";

import myDefault, * as myModule from "/modules/my-module.js";
// myModule.default and myDefault point to the same binding

import myDefault, { foo, bar } from "/modules/my-module.js";

// Namespace import
import * as myModule from "/modules/my-module.js";

// Hoisted import
myModule.doAllTheAmazingThings(); // myModule.doAllTheAmazingThings is imported by the next line

import * as myModule from "/modules/my-module.js";

// Standard import.
import { getPrimes } from "./getPRIME.JS";

