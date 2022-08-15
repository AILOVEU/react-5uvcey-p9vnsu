export type ISelectedKeys = string[];
export type ITreeData = any;
// folder,  connector , udf_jar , udf_func , sys_func
export type IResourceType = 0 | 1 | 2 | 3 | 4;

export type INodeData = {
  title: string;
  parentId: number;
  type: IResourceType;
  key: string;
  resourcePath: string;
  isLeaf?: boolean;
  selectable?: boolean;
  desc?: string;
  children?: INodeData[];
};
