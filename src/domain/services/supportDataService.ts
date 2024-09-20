import { inject, injectable } from "inversify";
import type IArmamentRepository from "../contracts/repositories/armamentRepostory";
import type IEngineRepository from "../contracts/repositories/engineRepository";
import type IHullRepository from "../contracts/repositories/hullRepository";
import ISupportDataService from "../contracts/services/supportDataService";
import { Armament } from "../models/armament";
import { Engine } from "../models/engine";
import { Hull } from "../models/hull";
import REPO from "../IoC/types.repo";

@injectable()
export default class SupportDataService implements ISupportDataService {
    constructor(
        @inject(REPO.IHullRepository)       private _hullRepos: IHullRepository,
        @inject(REPO.IEngineRepository)     private _engineRepos: IEngineRepository,
        @inject(REPO.IArmamentRepository)   private _armamentRepos: IArmamentRepository
    ) {}

    async getHulls(): Promise<Hull[]> {
        return await this._hullRepos.getList();
    }
    async getEngines(): Promise<Engine[]> {
        return await this._engineRepos.getList();
    }
    async getArmaments(): Promise<Armament[]> {
        return await this._armamentRepos.getList();
    }

}