import * as React from 'react';
import { Tab } from './tabMenu';
import VerticalTab from './VerticalTab';
import VerticalTabContent from './VerticalTabContent';
import { TabItem } from './tabItem';

export interface IVerticalTabMenuProps {
    tabs: Tab[]
}

function VerticalTabMenu ({ tabs }: IVerticalTabMenuProps) {
  const [activeLabelTab, setLabelActiveTab] = React.useState('');
  const [currentTab, setCurrentTab] = React.useState<Tab>();
  
  const findTab = React.useCallback(
    (label: string) => tabs.find(value => value.label === label),
    [tabs]
  );
  
  React.useEffect(() => {
    const tab = findTab(activeLabelTab);
    
    if (tab) {
      setCurrentTab(tab);
    }
    
  }, [activeLabelTab, findTab, currentTab]);

  return (
    <>
    <div>
      {tabs.map(tab => (
        <VerticalTab label={tab.label} 
          setTab={(tabName: string) => setLabelActiveTab(tabName)} 
          key={tab.label} />
      ))}
    </div>
    {currentTab ?
      <VerticalTabContent fetchData={currentTab.fetchItems} 
        parseTabItem={currentTab.parseTabItem}
      />
    : 'None selected'}
    </>
  );
}

export default VerticalTabMenu;