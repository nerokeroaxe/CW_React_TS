import { SpaceShipDTO } from "../../contracts/DTOs/spaceShipDTO";
import ISpaceShipRepository from "../../contracts/repositories/spaceShipRepository";

const PREFIX: string = "spaceShip_";
export default class SpaceShipLSRepository implements ISpaceShipRepository {
    getList(): Promise<SpaceShipDTO[]> {
        let spaceShips: SpaceShipDTO[] = [];
        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i)!.startsWith(PREFIX)) {
                spaceShips.push(JSON.parse(localStorage.getItem(localStorage.key(i)!)!));
            }
        }
        return new Promise((resolve) => resolve(spaceShips))
    }
    get(name: string): Promise<SpaceShipDTO | null> {
        if (!localStorage.getItem(PREFIX + name)) {
            throw new Error("Space ship not found with name: " + name);
        }
        return new Promise((resolve) => resolve(JSON.parse(localStorage.getItem(PREFIX + name)!)))
    }
    save(spaceShip: SpaceShipDTO): void {
        let spaceShipExists = localStorage.getItem(PREFIX + spaceShip.name);
        if (spaceShipExists) {
            throw new Error("Space ship with name " + spaceShip.name + " already exists");
        }
        localStorage.setItem(PREFIX + spaceShip.name, JSON.stringify(spaceShip));
    }
    update(name: string, spaceShip: SpaceShipDTO): void {
        let oldSpaceShipJSON = localStorage.getItem(PREFIX + name);
        if (!oldSpaceShipJSON) {
            throw new Error("Space ship not found with name: " + name);
        }

        let oldSpaceShip = JSON.parse(oldSpaceShipJSON!);
        if (oldSpaceShip === spaceShip) {
            return;
        }
        
        if (oldSpaceShip.name !== spaceShip.name) {
            localStorage.removeItem(PREFIX + oldSpaceShip.name);
        }
        localStorage.setItem(PREFIX + spaceShip.name, JSON.stringify(spaceShip));
    }
    remove(name: string): void {
        localStorage.removeItem(PREFIX + name);
    }

}