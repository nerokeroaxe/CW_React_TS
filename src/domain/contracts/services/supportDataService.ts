import { Armament } from "../../models/armament";
import { Engine } from "../../models/engine";
import { Hull } from "../../models/hull";

export default interface ISupportDataService {
    getHulls(): Promise<Hull[]>;
    getEngines(): Promise<Engine[]>;
    getArmaments(): Promise<Armament[]>;
}