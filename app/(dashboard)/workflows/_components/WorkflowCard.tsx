"use client";

import TooltipWrapper from "@/components/TooltipWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import {
  DropdownMenuContent,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { WorkflowStatus } from "@/types/workflow";
import { Workflow } from "@prisma/client";

import { FileTextIcon, MoreHorizontalIcon, PlayIcon, ShuffleIcon, TrashIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import DeleteWorkflowDialog from "./DeleteWorkflowDialog";

const statusColor = {
  [WorkflowStatus.DRAFT]: "bg-yellow-400 text-yellow-600",
  [WorkflowStatus.PUBLISHED]: "bg-primary",
};

function WorkflowCard({ workflow }: { workflow: Workflow }) {
  const isDraft = workflow.status === WorkflowStatus.DRAFT;

  return (
    <div className="border-separate overflow-hidden rounded-lg border shadow-sm hover:shadow-md dark:shadow-primary/30">
      <CardContent className="flex h-[100px] items-center justify-between p-4">
        <div className="flex items-center justify-end space-x-3">
          <div
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full",
              statusColor[workflow.status as WorkflowStatus],
            )}
          >
            {isDraft ? (
              <FileTextIcon className="h-5 w-5" />
            ) : (
              <PlayIcon className="h-5 w-5 text-white" />
            )}
          </div>
          <div>
            <h3 className="flex items-center text-base font-bold text-muted-foreground">
              <Link
                href={`/workflow/editor/${workflow.id}`}
                className="flex items-center hover:underline"
              >
                {workflow.name}
              </Link>
              {isDraft && (
                <span className="ml-2 rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-800">
                  Draft
                </span>
              )}
            </h3>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Link
            href={`/workflow/editor/${workflow.id}`}
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "sm",
              }),
              "flex items-center gap-2",
            )}
          >
            <ShuffleIcon size={16} />
            Edit
          </Link>
          <WorkflowActions workflow={workflow} />
        </div>
      </CardContent>
    </div>
  );
}

function WorkflowActions({ workflow }: { workflow: Workflow }) {
  const [showDeleteDialog, setShowDeleteDialog] = React.useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <TooltipWrapper content="More actions">
            <div className="flex h-full w-full items-center justify-center">
              <MoreHorizontalIcon size={18} />
            </div>
          </TooltipWrapper>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onSelect={() => {
            setShowDeleteDialog((prev) => !prev);
          }}
        >
          <TrashIcon size={16} />
          Delete
        </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DeleteWorkflowDialog
        open={showDeleteDialog}
        setOpen={setShowDeleteDialog}
        workflowName={workflow.name}
        workflowId={workflow.id}
      />
    </>
  );
}

export default WorkflowCard;


