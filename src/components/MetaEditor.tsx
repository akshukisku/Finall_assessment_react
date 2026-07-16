"use client";
import { useMetaStore } from "@/store/useMetaStore";
import React from "react";
import MetaField from "./MetaField";

const MetaEditor = () => {
  const {metadata,updateField} = useMetaStore();

  if (!metadata) return null;
  return (
    <section className="mt-10 rounded-xl bg-white p-6 shadow-md">
      <h2 className="mb-6 text-2xl font-bold">Edit Metadata</h2>

      <div className="space-y-5">
        <MetaField
          label="Title"
          value={metadata.title}
          onChange={(value) => updateField("title", value)}
        />

        <MetaField
          label="Description"
          value={metadata.description}
          multiline
          onChange={(value) => updateField("description", value)}
        />

        <MetaField
          label="Image"
          value={metadata.image}
          onChange={(value) => updateField("image", value)}
        />

        <MetaField
          label="Site Name"
          value={metadata.siteName}
          onChange={(value) => updateField("siteName", value)}
        />

        <MetaField
          label="Website URL"
          value={metadata.url}
          onChange={(value) => updateField("url", value)}
        />
      </div>
    </section>
  );
};

export default MetaEditor;
