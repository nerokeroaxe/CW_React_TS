import IArmamentRepository from "../../contracts/repositories/armamentRepostory";
import { Armament } from "../../models/armament";

export class ArmamentDBRepository implements IArmamentRepository {
    async getList(): Promise<Armament[]> {
        try {
            const response = await fetch(import.meta.env.VITE_API_URL + '/armaments');
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const armaments = await response.json();
            return armaments;
        } catch (error) {
            throw new Error(`Error fetching armaments: ${error}`);
        }
    }
    async get(name: string): Promise<Armament | null> {
        try {
            const response = await fetch(import.meta.env.VITE_API_URL + '/armaments/' + name);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const armament = await response.json();
            return armament;
        } catch (error) {
            throw new Error(`Error fetching armament with name "${name}": ${error}`);
        }
    }
    
}
