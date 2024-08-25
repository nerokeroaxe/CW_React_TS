import IArmamentRepository from "../contracts/repositories/armamentRepostory";
import IEngineRepository from "../contracts/repositories/engineRepository";
import IHullRepository from "../contracts/repositories/hullRepository";
import { Armament } from "../models/armament";
import { Engine } from "../models/engine";
import { Hull } from "../models/hull";

export default class SupportDataController {
    constructor(
        private _hullRepos: IHullRepository,
        private _engineRepos: IEngineRepository,
        private _armamentRepos: IArmamentRepository
    ) {}
    async getHulls(): Promise<Hull[]> {
        try {
            return await this._hullRepos.getList();
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    async getEngines(): Promise<Engine[]> {
        try {
            return await this._engineRepos.getList();
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    async getArmaments(): Promise<Armament[]> {
        try {
            return await this._armamentRepos.getList();
        } catch (error) {
            console.error(error);
            return [];
        }
    }

}