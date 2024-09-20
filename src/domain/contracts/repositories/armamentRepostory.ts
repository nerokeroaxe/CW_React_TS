import { Armament } from "../../models/armament"

export default interface IArmamentRepository {
    getList(): Promise<Armament[]>
    get(name: string): Promise<Armament | null>
}