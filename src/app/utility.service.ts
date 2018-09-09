import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UtilityService {
    sortArrayOfObjectOnStringKeyAsc = (key) => {
        return (a, b) => {
            if (a[key].trim() < b[key].trim()) return -1;
            else if (a[key].trim() > b[key].trim()) return 1;
            return 0;
        }
    };

    sortArrayOfObjectOnFloatKeyDec = (key) => {
        return (a, b) => {
            if (parseFloat(a[key]) - parseFloat(b[key]) < 0) return 1;
            else if (parseFloat(a[key]) - parseFloat(b[key]) > 0) return -1;
            return 0;
        }
    }

    sortArrayOfObjectOnFloatKeyAsc = (key) => {
        return (a, b) => {
            if (parseFloat(a[key]) - parseFloat(b[key]) > 0) return 1;
            else if (parseFloat(a[key]) - parseFloat(b[key]) < 0) return -1;
            return 0;
        }
    }
}
