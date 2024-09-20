import { Container } from "inversify";
import "reflect-metadata";
import REPO from "./types.repo";
import ISpaceShipRepository from "../contracts/repositories/spaceShipRepository";
import SpaceShipLSRepository from "../repositories/localStorage/spaceShipLSRepository";
import IArmamentRepository from "../contracts/repositories/armamentRepostory";
import { ArmamentDBRepository } from "../repositories/database/armamentDBRepository";
import IEngineRepository from "../contracts/repositories/engineRepository";
import { EngineDBRepository } from "../repositories/database/engineDBRepository";
import IHullRepository from "../contracts/repositories/hullRepository";
import { HullDBRepository } from "../repositories/database/hullDBRepository";
import ISpaceShipService from "../contracts/services/spaceShipService";
import SERVICE from "./types.service";
import SpaceShipService from "../services/spaceShipService";
import ISupportDataService from "../contracts/services/supportDataService";
import SupportDataService from "../services/supportDataService";
import SpaceShipController from "../controllers/spaceShipController";
import CONTROLLER from "./types.controller";

const container = new Container();

// Repositories
container.bind<ISpaceShipRepository>(REPO.ISpaceShipRepository).to(SpaceShipLSRepository);
container.bind<IArmamentRepository>(REPO.IArmamentRepository).to(ArmamentDBRepository);
container.bind<IEngineRepository>(REPO.IEngineRepository).to(EngineDBRepository);
container.bind<IHullRepository>(REPO.IHullRepository).to(HullDBRepository)

// Services
container.bind<ISpaceShipService>(SERVICE.ISpaceShipService).to(SpaceShipService);
container.bind<ISupportDataService>(SERVICE.ISupportDataService).to(SupportDataService);

// Controllers
container.bind<SpaceShipController>(CONTROLLER.SpaceShipController)
    .to(SpaceShipController)
    .inSingletonScope();
container.bind<SupportDataService>(CONTROLLER.SupportDataController)
    .to(SupportDataService)
    .inSingletonScope();

export default container