import * as React from 'react';
import DirectoryTree from './DirectoryTree';
import { FontSizeOutlined } from '@ant-design/icons';
const initTreeData = [
  {
    title: '1',
    key: '0',
  },
  {
    title: '2.js',
    key: '1',
    children: [
      {
        title: '21.jsx',
        key: '21',
        // icon: <FontSizeOutlined />,
        isLeaf: true,
      },
    ],
  },
  {
    title: '3.html',
    key: '2',
    isLeaf: true,
    // icon: <FontSizeOutlined />,
  },
];
const App = () => {
  const [selectedKeys, setSelectedKeys] = React.useState([]);
  return (
    <div>
      <DirectoryTree
        initTreeData={initTreeData}
        selectedKeys={selectedKeys}
        setSelectedKeys={setSelectedKeys}
        // iconRender={(title) => {
        //   console.log(title);
        // }}
      />
    </div>
  );
};
export default App;
