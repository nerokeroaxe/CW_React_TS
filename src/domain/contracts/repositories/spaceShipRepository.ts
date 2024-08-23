import { SpaceShipDTO } from "../DTOs/spaceShipDTO";

export default interface ISpaceShipRepository {
    getList(): Promise<SpaceShipDTO[]>
    get(name: string): Promise<SpaceShipDTO | null>
    save(spaceShip: SpaceShipDTO): void
    update(name: string, spaceShip: SpaceShipDTO): void
    remove(name: string): void
}