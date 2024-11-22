"use client";

import { TaskParam, TaskParamType } from "@/types/task";
import StringParamField from "./StringParamField";
import { useReactFlow } from "@xyflow/react";
import { AppNode } from "@/types/appNode";
import { useCallback } from "react";
import BrowserInstanceParamField from "./BrowserInstanceParamField";

export function NodeParamField({ param, nodeId, disabled }: { param: TaskParam, nodeId: string, disabled: boolean }) {
  const { updateNodeData, getNode } = useReactFlow();
  const node = getNode(nodeId) as AppNode;
  const value = node?.data.inputs?.[param.name];

  const updateNodeParamValue = useCallback((newValue: string) => {
    updateNodeData(nodeId, {
      inputs: {
        ...node?.data.inputs,
        [param.name]: newValue,
      },
    });
  }, [nodeId, updateNodeData, param.name, node?.data.inputs]);

  switch (param.type) {
    case TaskParamType.STRING:
      return (
        <StringParamField
          param={param}
          value={value}
          updateNodeParamValue={updateNodeParamValue}
          disabled={disabled}
        />
      );
    case TaskParamType.BROWSER_INSTANCE:
      return (
        <BrowserInstanceParamField
          param={param}
          value={''}
          updateNodeParamValue={updateNodeParamValue}
        />
      );
    default:
      return (
        <div className="w-full">
          <p className="text-xs text-muted-foreground">Not implemented</p>
        </div>
      )
  }
}
