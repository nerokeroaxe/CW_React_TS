import { Hull } from "../../models/hull";

export default interface HullRepository {
    getList(): Promise<Hull[]>
    get(name: string): Promise<Hull | null>
}