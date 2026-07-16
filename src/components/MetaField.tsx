"use client";

import { MetaFieldProps } from "@/types/type/metafield.type";

export default function MetaField({
  label,
  value,
  placeholder,
  onChange,
  multiline = false,
}: MetaFieldProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>

      {multiline ? (
        <textarea
          rows={4}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
        />
      ) : (
        <input
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
        />
      )}
    </div>
  );
}
