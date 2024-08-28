import { injectable } from "inversify";
import IHullRepository from "../../contracts/repositories/hullRepository";
import { Hull } from "../../models/hull";

@injectable()
export class HullDBRepository implements IHullRepository {
    async getList(): Promise<Hull[]> {
        try {
            const response = await fetch(import.meta.env.VITE_API_URL + '/hulls');
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const hulls = await response.json();
            return hulls;
        } catch (error) {
            throw new Error(`Error fetching hulls: ${error}`);
        }
    }
    async get(name: string): Promise<Hull | null> {
        try {
            const response = await fetch(import.meta.env.VITE_API_URL + '/hulls/' + name);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const hull = await response.json();
            return hull;
        } catch (error) {
            throw new Error(`Error fetching hulls with name "${name}": ${error}`);
        }
    }
    
}