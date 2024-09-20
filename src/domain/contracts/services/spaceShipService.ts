import SpaceShip from "../../models/spaceShip"
import { SpaceShipDTO } from "../DTOs/spaceShipDTO"

export default interface ISpaceShipService {
    getList(): Promise<SpaceShipDTO[]>
    get(name: string): Promise<SpaceShip | null>
    save(spaceShip: SpaceShipDTO): void
    update(name: string, spaceShip: SpaceShipDTO): void
    remove(name: string): void
}