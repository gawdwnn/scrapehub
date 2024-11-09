import { TaskType } from "@/types/task";
import { Node } from "@xyflow/react";

export interface AppNodeData {
  [key: string]: any;
  type: TaskType;
  inputs: Record<string, string>;
}

export interface AppNode extends Node {
  data: AppNodeData;
}