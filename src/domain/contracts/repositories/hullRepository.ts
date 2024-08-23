import { Hull } from "../../models/hull";

export default interface IHullRepository {
    getList(): Promise<Hull[]>
    get(name: string): Promise<Hull | null>
}