import React, { useState } from 'react';
import './Tabs.scss';
import { useAppTheme } from 'hooks';

import SlidingSteps from '../SlidingSteps/SlidingSteps';

export interface Tab {
  id: number;
  label: React.ReactElement;
  view: React.ReactElement;
  defaultTabIndex?: number;
  maxHeight?: string,
}

export const Tabs: React.FC<{
  data: Tab[],
  onChangeTab?: (activeTab: number) => void;
  defaultTabIndex?: number,
  isCentered?: boolean;
  maxHeight?: 'calc(100% - 3rem)',
}> = ({
  data,
  onChangeTab,
  defaultTabIndex,
  isCentered,
  maxHeight
}) => {
  const { theme, name: themeName } = useAppTheme();

  const [activeTab, setActiveTab] = useState<number>(defaultTabIndex || 0);

  const handleTabClick = (tabId: number): void => {
    setActiveTab(tabId);
    onChangeTab?.(tabId);
  };

  return (
    <div className="tabs-container no-scrollbar">
      <div className={`tabs ${isCentered ? 'centered' : ''}  no-scrollbar`}>
        {data?.map((tab: Tab) => (
          <div
            key={tab.id}
            className={`tab ${themeName} ${activeTab === tab.id ? 'active opacity-100' : 'opacity-60'}`}
            style={{
              borderBottomColor: activeTab === tab?.id ? theme?.PRIMARY : 'transparent',
              color: activeTab === tab?.id ? theme?.PRIMARY : theme?.TEXT
            }}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </div>
        ))}
        <div className={` ${activeTab === 1 ? 'first' : activeTab === 2 ? 'second' : 'third'}`} />
      </div>

      {/* Content for the active tab only */}
      <div className="tab-content no-scrollbar" style={{
        maxHeight
      }}>
        <SlidingSteps
          activeStep={activeTab}
          steps={data?.map((tab: Tab) => (
            <div key={tab.id} className={`content ${activeTab === tab.id ? 'active' : 'hidden'}`}>
              {tab.view}
            </div>
          ))}
        />
      </div>
    </div>
  );
};

export default Tabs;
