import * as React from 'react';
import './VerticalTabMenu.css';

export interface IVerticalTabProps {
  label: string,
  setTab: (tabName: string) => void
}

function VerticalTab (props: IVerticalTabProps) {

  return (
    <div className='tab'>
      <button onClick={() => props.setTab(props.label)} className="btn">
        {props.label}
      </button>
    </div>
  );
}

export default VerticalTab;