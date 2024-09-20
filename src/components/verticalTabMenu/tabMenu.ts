import { TabItem } from "./tabItem"

export type Tab = {
    label: string,
    fetchItems: () => Promise<any[]>,
    parseTabItem: (entity: any) => TabItem
}