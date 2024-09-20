import * as React from 'react';
import { TabItem } from './tabItem';
import VerticalTabItem from './VerticalTabItem';
import './VerticalTabContent.css';

export interface IVerticalTabContentProps {
    fetchData: <T>() => Promise<T[]>,
    parseTabItem: <T>(entity: T) => TabItem
}

function VerticalTabContent({ fetchData, parseTabItem }: IVerticalTabContentProps) {
    const [list, setList] = React.useState<TabItem[]>();

    const getEntityList = async (): Promise<TabItem[]> => {
        const response = await fetchData();
        return response.map(value => parseTabItem(value));
    };

    React.useEffect(() => {
        if (!fetchData) return;

        getEntityList()
            .then(data => setList(data))
            .catch(error => console.error('Error fetching data:', error));
    }, [fetchData]);

    return (
        <div className='content'>
            {list ? (
                list.map(value => (
                    <VerticalTabItem
                        img={value.img}
                        title={value.name}
                        description={value.description}
                        info={value.info}
                        key={value.name}
                    />
                ))
            ) : (
                'Loading...'
            )}
        </div>
    );
}

export default VerticalTabContent;
