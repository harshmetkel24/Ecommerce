import Caritems from "./CarAccessories";
import Houseitems from "./HouseWare";
import Kitchenitems from "./KitchenWare";

const myMap: Map<number, any[]> = new Map<number, any[]>();
myMap.set(1,Kitchenitems);
myMap.set(2,Caritems);
myMap.set(3,Houseitems);

export default myMap;