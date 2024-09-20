import { TabItem } from "../components/verticalTabMenu/tabItem";
import { Tab } from "../components/verticalTabMenu/tabMenu";
import SupportDataController from "../domain/controllers/supportDataController";
import container from "../domain/IoC/inversify.config";
import CONTROLLER from "../domain/IoC/types.controller";
import { Armament } from "../domain/models/armament";
import { Engine } from "../domain/models/engine";

// import controllers
const supportDataController = container.get<SupportDataController>(CONTROLLER.SupportDataController);
// setup tabs for tab menu
const tabs: Tab[] = [
  {
    label: "engine",
    fetchItems: () => supportDataController.getEngines(),
    parseTabItem: (entity: Engine): TabItem => {
      return {
        name: entity.name,
        description: entity.description,
        img: entity.image,
        info: `Power: ${entity.power} | ${entity.price}$`
      }
    }
  },
  {
    label: "armament",
    fetchItems: () => supportDataController.getArmaments(),
    parseTabItem: (entity: Armament): TabItem => {
      return {
        name: entity.name,
        description: entity.description,
        img: entity.image,
        info: `Weight: ${entity.weight} | ${entity.price}$`
      }
    }
  }
]

export default tabs;