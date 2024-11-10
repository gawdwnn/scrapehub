"use client";

import TooltipWrapper from "@/components/TooltipWrapper";
import { ChevronLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";
import SaveButton from "./SaveButton";

interface TopBarProps {
  title: string;
  subtitle?: string;
  workflowId: string;
}

function TopBar({ title, subtitle, workflowId }: TopBarProps) {
  const router = useRouter();

  return (
    <header className="border-p-2 sticky top-0 z-10 flex h-[60px] w-full border-separate justify-between bg-background p-2">
      <div className="flex flex-1 gap-1">
        <TooltipWrapper content="Back">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <ChevronLeftIcon size={20} />
          </Button>
        </TooltipWrapper>
        <div className="truncate text-ellipsis font-bold">
          {title}
          {subtitle && (
            <p className="truncate text-ellipsis text-xs text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-1 flex-1 justify-end">
        <SaveButton workflowId={workflowId} />
      </div>
    </header>
  );
}

export default TopBar;
