import * as React from 'react';
import { IeOutlined, Html5Outlined, WindowsOutlined } from '@ant-design/icons';
export const getFileType = (fileName: string) => {
  const lastDotIndex = fileName.lastIndexOf('.');
  if (lastDotIndex !== -1) {
    return fileName.substring(lastDotIndex + 1);
  }
  return '';
};

export const getFileTypeNode = (ext) => {
  const EXT_MAP = {
    js: <IeOutlined />,
    html: <Html5Outlined />,
    default: <WindowsOutlined />,
  };
  if (EXT_MAP[ext]) {
    return EXT_MAP[ext];
  }
  return EXT_MAP.default;
};
