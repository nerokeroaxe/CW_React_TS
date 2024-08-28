import { inject, injectable } from "inversify";
import { SpaceShipDTO } from "../contracts/DTOs/spaceShipDTO";
import type ISpaceShipService from "../contracts/services/spaceShipService";
import SpaceShip from "../models/spaceShip";
import SERVICE from "../IoC/types.service";
@injectable()
export default class SpaceShipController {
    constructor(
        @inject(SERVICE.ISpaceShipService) private _spaceShipService: ISpaceShipService
    ) {}

    async getList(): Promise<SpaceShipDTO[]> {
        try {
            return await this._spaceShipService.getList();
        } catch(error) {
            console.error(error);
            return [];
        }
    }

    async get(name: string): Promise<SpaceShip | null> {
        try {
            return await this._spaceShipService.get(name);
        } catch(error) {
            console.error(error);
            return null;
        }
    }

    create(spaceShip: SpaceShipDTO): void {
        try {
            this._spaceShipService.save(spaceShip);
        } catch(error) {
            console.error(error);
        }
    }

    update(name: string, spaceShip: SpaceShipDTO): void {
        try {
            this._spaceShipService.update(name, spaceShip);
        } catch(error) {
            console.error(error);
        }
    }

    delete(name: string) {
        try {
            this._spaceShipService.remove(name);
        } catch(error) {
            console.error(error);
        }
    }
}