import InternationalCuisine from './classObjects/InternationalCuisine';
declare class WhatToEat {
    DishClassification: string[];
    InternationalCuisines: Array<InternationalCuisine>;
    InternationalCuisineList: {
        name: string;
        desc: string;
    }[];
    constructor();
    test(): void;
    whatToEat(): String;
    whatToEat_InternationalCuisine(): InternationalCuisine;
}
export default WhatToEat;
