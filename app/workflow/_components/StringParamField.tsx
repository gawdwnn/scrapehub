"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ParamProps } from "@/types/appNode";
import React, { useEffect, useId, useState } from "react";

function StringParamField({ param, value, updateNodeParamValue, disabled }: ParamProps) {
  const id = useId();
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  let Component: any = Input;
  if (param.variant === "textarea") {
    Component = Textarea;
  }

  return (
    <div className="w-full space-y-1 p-1">
      <Label htmlFor={id} className="flex text-xs">
        {param.name}
        {param.required && <span className="px-2 text-red-500">*</span>}
      </Label>
      <Component
        id={id}
        value={inputValue}
        onChange={(e: any) => setInputValue(e.target.value)}
        onBlur={(e: any) => updateNodeParamValue(e.target.value)}
        placeholder="Enter value here..."
        className="text-xs"
        disabled={disabled}
      />
      {param.helperText && (
        <p className="px-2 text-muted-foreground">{param.helperText}</p>
      )}
    </div>
  );
}

export default StringParamField;
