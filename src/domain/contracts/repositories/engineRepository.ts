import { Engine } from "../../models/engine"

export default interface EngineRepository {
    getList(): Promise<Engine[]>
    get(name: string): Promise<Engine | null>
}