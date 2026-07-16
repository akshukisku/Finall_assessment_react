"use client";
import { useMetaStore } from "@/store/useMetaStore";
import React from "react";

const tabs = [
  {
    id: "facebook",
    label: "Facebook",
  },
  {
    id: "twitter",
    label: "Twitter",
  },
  {
    id: "discord",
    label: "Discord",
  },
  {
    id: "instagram",
    label: "Instagram",
  },
] as const;

const PreviewTabs = () => {
  const activeTab = useMetaStore((state) => state.activeTab);

  const setActiveTab = useMetaStore((state) => state.setActiveTab);
  return (
    <div className="flex flex-wrap gap-3">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`
    rounded-lg px-4 py-2 text-sm font-medium transition-all
    ${
      activeTab === tab.id
        ? "bg-blue-600 text-white"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }
  `}
        >
          {tab.label}
        </button>
      ))}
      <p>{activeTab}</p>
    </div>
  );
};

export default PreviewTabs;
