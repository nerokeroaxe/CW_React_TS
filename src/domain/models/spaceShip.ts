import { SpaceShipDTO } from "../contracts/DTOs/spaceShipDTO"
import { Armament } from "./armament"
import { Engine } from "./engine"
import { Hull } from "./hull"

export default class SpaceShip {
    name: string
    description: string | null
    
    private _hull: Hull
    private _engine: Engine
    private _armament: Armament
    
    private _weight: number = 0
    private _price: number = 0
    constructor(dto: SpaceShipDTO) {
        this.name = dto.name
        this.description = dto.description
        this._hull = dto.hull
        this._engine = dto.engine
        this._armament = dto.armament
        this.updateWeightAndPrice()
    }

    private updateWeightAndPrice() {
        this._weight = this._hull.weight + this._armament.weight
        this._price = this._hull.price + this._engine.price + this._armament.price
    }

    get weight(): number {
        return this._weight
    }
    get price(): number {
        return this._price
    }

    get hull(): Hull {
        return this._hull
    }
    set hull(hull: Hull) {
        this._hull = hull
        this.updateWeightAndPrice()
    }

    get engine(): Engine {
        return this._engine
    }
    set engine(engine: Engine) {
        this._engine = engine
        this.updateWeightAndPrice()
    }

    get armament(): Armament {
        return this._armament
    }
    set armament(armament: Armament) {
        this._armament = armament
        this.updateWeightAndPrice()
    }
    getDTO(): SpaceShipDTO {
        return {
            name: this.name,
            description: this.description,
            engine: this.engine,
            armament: this.armament,
            hull: this.hull,
            weight: this.weight,
            price: this.price
        }
    }
}