"use client";

import { useMetaStore } from "@/store/useMetaStore";
import Image from "next/image";

const previewStyle = {
  facebook: {
    imageHeight: "h-64",
  },
  twitter: {
    imageHeight: "h-52",
  },
  discord: {
    imageHeight: "h-44",
  },
  instagram: {
    imageHeight: "h-72",
  },
};

const PreviewCard = () => {
  const metadata = useMetaStore((state) => state.metadata);
  const activeTab = useMetaStore((state) => state.activeTab);
  

  if (!metadata) {
    return (
      <div className="rounded-lg border border-dashed border-gray-300 p-10 text-center text-gray-500">
        No preview available.
      </div>
    );
  }

  const style = previewStyle[activeTab];

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300">
      <div
        className={`relative w-full ${style.imageHeight} bg-gray-100`}
      >
        {metadata.image ? (
          <Image
            src={metadata.image}
            alt={metadata.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-400">
            No Image
          </div>
        )}
      </div>

      <div className="space-y-2 p-5">
        <p className="text-xs uppercase tracking-wide text-gray-500">
          {metadata.domain}
        </p>

        <h3 className="text-xl font-semibold">
          {metadata.title}
        </h3>

        <p className="line-clamp-3 text-sm text-gray-600">
          {metadata.description}
        </p>
      </div>
    </div>
  );
};

export default PreviewCard;