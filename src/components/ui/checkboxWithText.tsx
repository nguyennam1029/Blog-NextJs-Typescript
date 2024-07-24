"use client"

import { Checkbox } from "@/components/ui/checkbox"

export function CheckboxWithText() {
  return (
    <div className="items-center flex space-x-2">
      <Checkbox id="terms1" disabled/>
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Duration
        </label>
        <p className="text-sm text-muted-foreground">
        3 days
        </p>
      </div>
    </div>
  )
}
