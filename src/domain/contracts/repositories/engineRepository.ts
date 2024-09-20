import { Engine } from "../../models/engine"

export default interface IEngineRepository {
    getList(): Promise<Engine[]>
    get(name: string): Promise<Engine | null>
}