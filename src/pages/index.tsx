import { useState } from 'react';
import styled from 'styled-components';
// import IndexAll from './tabs/indexAll';
// import IndexFollow from './tabs/indexFollow';

// 自定义Tab组件（替代createMaterialTopTabNavigator）
const TabsContainer = styled.div`
  width: 100%;
  padding: 20px;
  background: white;
`;

const TabList = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const TabButton = styled.button<{ active: boolean }>`
  padding: 8px 16px;
  border: none;
  background: ${props => props.active ? '#98D98E' : 'transparent'};
  color: ${props => props.active ? 'white' : 'black'};
  border-radius: 20px;
  cursor: pointer;
`;

export default function Home() {
  const [activeTab, setActiveTab] = useState('discover');

  return (
    <TabsContainer>
      <TabList>
        <TabButton 
          active={activeTab === 'discover'} 
          onClick={() => setActiveTab('discover')}
        >
          发现
        </TabButton>
        <TabButton 
          active={activeTab === 'follow'} 
          onClick={() => setActiveTab('follow')}
        >
          关注
        </TabButton>
      </TabList>
      {/* {activeTab === 'discover' && <IndexAll />}
      {activeTab === 'follow' && <IndexFollow />} */}
    </TabsContainer>
  );
}