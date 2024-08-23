import { SpaceShipDTO } from "../contracts/DTOs/spaceShipDTO";
import IArmamentRepository from "../contracts/repositories/armamentRepostory";
import IEngineRepository from "../contracts/repositories/engineRepository";
import IHullRepository from "../contracts/repositories/hullRepository";
import ISpaceShipRepository from "../contracts/repositories/spaceShipRepository";
import ISpaceShipService from "../contracts/services/spaceShipService";
import SpaceShip from "../models/spaceShip";

export default class SpaceShipService implements ISpaceShipService {
    constructor(
        private _spaceShipRepos: ISpaceShipRepository, 
        private _hullRepos: IHullRepository,
        private _engineRepos: IEngineRepository,
        private _armamentRepos: IArmamentRepository
    ) {}
    async getList(): Promise<SpaceShipDTO[]> {
        return await this._spaceShipRepos.getList();
    }
    async get(name: string): Promise<SpaceShip | null> {
        this._checkName(name);
        let spaceShipDTO = await this._spaceShipRepos.get(name);
        if (!spaceShipDTO) {
            return null;
        }

        let hull = await this._hullRepos.get(spaceShipDTO.hull);
        let engine = await this._engineRepos.get(spaceShipDTO.engine);
        let armament = await this._armamentRepos.get(spaceShipDTO.armament);
        if (!hull || !engine || !armament) {
            throw new Error("Hull or armament or engine for space ship" + name + "not found.");
        }

        let spaceShip = new SpaceShip(spaceShipDTO, hull, engine, armament);
        return spaceShip;
    }
    save(spaceShip: SpaceShipDTO): void {
        this._checkModel(spaceShip);

        this._spaceShipRepos.save(spaceShip);
    }
    update(name: string, spaceShip: SpaceShipDTO): void {
        this._checkName(name);
        this._checkModel(spaceShip);
        
        this._spaceShipRepos.update(name, spaceShip);
    }
    remove(name: string): void {
        this._checkName(name);

        this._spaceShipRepos.remove(name);
    }

    
    private _checkName(name: string) {
        if (!name.trim()) {
            throw new Error("Name is null or empty");
        }
    }
    private _checkModel(spaceShip: SpaceShipDTO) {
        this._checkName(spaceShip.name);
        if (!spaceShip.hull.trim() || !spaceShip.armament.trim() 
            || !spaceShip.engine.trim()) {
            throw new Error("Hull or armament or engine is null or empty");
        }
    }
}