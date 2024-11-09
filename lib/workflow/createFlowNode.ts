import { AppNode } from "@/types/appNode";
import { TaskType } from "@/types/task";

export function CreateFlowNode(
  nodeType: TaskType,
  postion?: { x: number; y: number },
): AppNode {
  return {
    id: crypto.randomUUID(),
    type: "ScrapeNode",
    dragHandle: ".drag-handle",
    data: {
      type: nodeType,
      inputs: {},
    },
    position: postion ?? { x: 0, y: 0 },
  };
}
