"use client";
import GeneratedMetaTags from "@/components/GeneratedMetaTags";
import MetaEditor from "@/components/MetaEditor";
import PreviewSection from "@/components/PreviewSection";
import UrlInpput from "@/components/UrlInpput";
import { useMetaStore } from "@/store/useMetaStore";
import React from "react";

const Home = () => {
  const { metadata } = useMetaStore();

  return (
    <main className="min-h-screen bg-[#F7F8FA]">
      <div className="mx-auto max-w-7xl p-6">
        {/* Hero / Header */}
        <div className="mb-8 rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8">
          <span className="mb-3 inline-block rounded-full bg-[#12141C] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-white">
            og:title · description · keywords
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Website Meta Tag Scraper
          </h1>
          <p className="mt-2 max-w-xl text-slate-600">
            Extract, edit, and preview website metadata — see exactly how your
            link will look on Google, Slack, and social media before you ship
            it.
          </p>
        </div>

        {/* URL Input */}
        <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <UrlInpput />
        </div>

        {/* Main Content — all three panels in one row on desktop */}
        {metadata && (
          <div className="grid gap-6 lg:grid-cols-3">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-teal-500" />
                <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Meta Editor
                </h2>
              </div>
              <MetaEditor />
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-indigo-500" />
                <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Generated Tags
                </h2>
              </div>
              <GeneratedMetaTags />
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Live Preview
                </h2>
              </div>
              <PreviewSection />
            </section>
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
