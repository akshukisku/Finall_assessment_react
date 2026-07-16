"use client";

import PreviewCard from "./PreviewCard";
import PreviewTabs from "./PreviewTabs";

const PreviewSection = () => {
  return (
    <section className="rounded-xl bg-white p-6 shadow-md">
      <h2 className="text-2xl font-bold">Live Preview</h2>

      <div className="mt-6">
        <PreviewTabs />
      </div>

      <div className="mt-6">
        <PreviewCard />
      </div>
    </section>
  );
};

export default PreviewSection;
