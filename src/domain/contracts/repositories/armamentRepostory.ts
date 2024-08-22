import { Armament } from "../../models/armament"

export default interface ArmamentRepository {
    getList(): Promise<Armament[]>
    get(name: string): Promise<Armament | null>
}