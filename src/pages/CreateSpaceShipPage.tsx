import * as React from 'react';
import './CreateSpaceShipPage.css';
import VerticalTabMenu from '../components/verticalTabMenu/VerticalTabMenu';
import { Tab } from '../components/verticalTabMenu/tabMenu';
import { Engine } from '../domain/models/engine';
import { TabItem } from '../components/verticalTabMenu/tabItem';
import container from '../domain/IoC/inversify.config';
import CONTROLLER from '../domain/IoC/types.controller';
import SupportDataController from '../domain/controllers/supportDataController';
import SpaceShipController from '../domain/controllers/spaceShipController';
import { Armament } from '../domain/models/armament';
import tabs from './tabs.createSpacesShip'
import { HorizontalMenu } from '../components/horizontalMenu/HorizontalMenu';

const spaceShipController = container.get<SpaceShipController>(CONTROLLER.SpaceShipController);

export interface ICreateSpaceShipPageProps {
}

function CreateSpaceShipPage (props: ICreateSpaceShipPageProps) {
  return (
    <div className={'main-container'}>
      <input className={'input-name'} type='text' placeholder='Name' />
      <HorizontalMenu />
      <div className={'menu'}>
        <VerticalTabMenu tabs={tabs}/>
      </div>
    </div>
  );
}


export default CreateSpaceShipPage;