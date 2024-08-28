import { inject, injectable } from "inversify";
import type ISupportDataService from "../contracts/services/supportDataService";
import { Armament } from "../models/armament";
import { Engine } from "../models/engine";
import { Hull } from "../models/hull";
import SERVICE from "../IoC/types.service";

@injectable()
export default class SupportDataController {
    constructor(
        @inject(SERVICE.ISupportDataService) private _supportDataService: ISupportDataService,
    ) {}
    async getHulls(): Promise<Hull[]> {
        try {
            return await this._supportDataService.getHulls();
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    async getEngines(): Promise<Engine[]> {
        try {
            return await this._supportDataService.getEngines();
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    async getArmaments(): Promise<Armament[]> {
        try {
            return await this._supportDataService.getArmaments();
        } catch (error) {
            console.error(error);
            return [];
        }
    }

}