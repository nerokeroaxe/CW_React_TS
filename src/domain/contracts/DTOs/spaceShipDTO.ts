import { Armament } from "../../models/armament"
import { Engine } from "../../models/engine"
import { Hull } from "../../models/hull"

export type SpaceShipDTO = {
    name: string
    description: string | null
    engine: Engine
    armament: Armament
    hull: Hull
    weight: number
    price: number
}