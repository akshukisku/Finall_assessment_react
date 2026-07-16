"use client";

import { generateMetaTags } from "@/services/helper/generateMetaTags";
import { useMetaStore } from "@/store/useMetaStore";
import { toast } from "react-hot-toast";

const GeneratedMetaTags = () => {
  const metadata = useMetaStore((state) => state.metadata);
  if (!metadata) {
    return null;
  }
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(html);

      toast.success("Meta tags copied successfully!");
    } catch (error) {
      toast.error("Failed to copy meta tags.");
    }
  };
  const html = generateMetaTags(metadata);
  return (
    <section className="mt-8 rounded-xl bg-white p-6 shadow-md">
      <h2 className="text-2xl font-bold">Generated Meta Tags</h2>

      <pre className="overflow-x-auto rounded-lg bg-gray-900 p-5 text-sm text-green-400">
        <code>{html}</code>
      </pre>
      <div className="mt-4 flex justify-end">
        <button
          onClick={handleCopy}
          className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
        >
          📋 Copy Meta Tags
        </button>
      </div>
    </section>
  );
};

export default GeneratedMetaTags;
