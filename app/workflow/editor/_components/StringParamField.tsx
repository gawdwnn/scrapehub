"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ParamProps } from "@/types/appNode";
import React, { useId, useState } from "react";

function StringParamField({ param, value, updateNodeParamValue }: ParamProps) {
  const id = useId();
  const [inputValue, setInputValue] = useState(value);

  return (
    <div className="w-full space-y-1 p-1">
      <Label htmlFor={id} className="flex text-xs">
        {param.name}
        {param.required && <span className="px-2 text-red-500">*</span>}
      </Label>
      <Input
        id={id}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={(e) => updateNodeParamValue(e.target.value)}
        placeholder="Enter value here..."
        className="text-xs"
      />
      {param.helperText && (
        <p className="px-2 text-muted-foreground">{param.helperText}</p>
      )}
    </div>
  );
}

export default StringParamField;
