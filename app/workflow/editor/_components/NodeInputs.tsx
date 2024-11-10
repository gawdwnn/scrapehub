"use client";

import { cn } from "@/lib/utils";
import { TaskParam } from "@/types/task";
import { Handle } from "@xyflow/react";
import { Position } from "@xyflow/react";
import React from "react";
import { NodeParamField } from "./NodeParamField";

function NodeInputs({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-2 divide-y">{children}</div>;
}

export function NodeInput({ input, nodeId }: { input: TaskParam, nodeId: string }) {
  return (
    <div className="relative flex w-full justify-start bg-secondary p-3">
      <NodeParamField param={input} nodeId={nodeId} />

      {!input.hideHandle && (
        <Handle
          type="target"
          position={Position.Left}
          id={input.name}
          className={cn("!bg-muted-foreground !border-2 !border-background !-left-2 !w-4 !h-4")}
        />
      )}
    </div>
  );
}

export default NodeInputs;
