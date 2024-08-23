import IEngineRepository from "../../contracts/repositories/engineRepository";
import { Engine } from "../../models/engine";

export class EngineDBRepository implements IEngineRepository {
    async getList(): Promise<Engine[]> {
        try {
            const response = await fetch(import.meta.env.VITE_API_URL + '/engines');
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const armaments = await response.json();
            return armaments;
        } catch (error) {
            throw new Error(`Error fetching engines: ${error}`);
        }
    }
    async get(name: string): Promise<Engine | null> {
        try {
            const response = await fetch(import.meta.env.VITE_API_URL + '/engines/' + name);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const armament = await response.json();
            return armament;
        } catch (error) {
            throw new Error(`Error fetching engine with name "${name}": ${error}`);
        }
    }
    
}