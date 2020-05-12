/**Local storage */

import { InjectionToken } from "@angular/core"; //Uses the InjectionToken class

export const BROWSER_STORAGE = new InjectionToken<Storage>("Browser Storage", {
    //Creates a new InjectionToken
    providedIn: "root",
    factory: () => localStorage //factory function wrapping localStorage
});
