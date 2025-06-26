/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Text
} from '@chakra-ui/react';

function CustomTabs({ tabData, currentTab, onTabChange }) {
  return (
    <Box>
      <Tabs index={currentTab} onChange={onTabChange} isFitted variant="enclosed">
        <TabList>
          {tabData?.map((tab, index) => (
            <Tab
              key={index}
              sx={{
                width: '826px',
                height: '41px',
                padding: '12px 44px',
                gap: '10px',
                borderRadius: '30px',
                background: currentTab === index
                  ? 'var(--Turquoise-Blue-dark, #60C3CE)'
                  : null,
                color: currentTab === index
                  ? 'white' : 'rgb(87, 87, 87)',
                fontWeight: 'bold',
                _selected: { boxShadow: 'none' }
              }}
            >
              {tab.label}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {tabData?.map((tab, index) => (
            <TabPanel key={index}>
              <Text>{tab.content}</Text>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default CustomTabs;
