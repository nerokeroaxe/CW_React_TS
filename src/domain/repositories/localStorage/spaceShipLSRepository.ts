import { SpaceShipDTO } from "../../contracts/DTOs/spaceShipDTO";
import ISpaceShipRepository from "../../contracts/repositories/spaceShipRepository";

const PREFIX: string = "spaceShip_";
export default class SpaceShipLSRepository implements ISpaceShipRepository {
    getList(): Promise<SpaceShipDTO[]> {
        var spaceShips: SpaceShipDTO[] = [];
        for (var i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i)!.startsWith(PREFIX)) {
                spaceShips.push(JSON.parse(localStorage.getItem(localStorage.key(i)!)!));
            }
        }
        return new Promise((resolve) => resolve(spaceShips))
    }
    get(name: string): Promise<SpaceShipDTO | null> {
        if (localStorage.getItem(PREFIX + name) === null) {
            throw new Error("Space ship not found with name: " + name);
        }
        return new Promise((resolve) => resolve(JSON.parse(localStorage.getItem(PREFIX + name)!)))
    }
    save(spaceShip: SpaceShipDTO): void {
        localStorage.setItem(PREFIX + spaceShip.name, JSON.stringify(spaceShip));
    }
    update(name: string, spaceShip: SpaceShipDTO): void {
        var oldSpaceShipJSON = localStorage.getItem(PREFIX + name);
        if (oldSpaceShip === null) {
            throw new Error("Space ship not found with name: " + name);
        }
        var oldSpaceShip = JSON.parse(oldSpaceShipJSON!);
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