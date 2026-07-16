"use client"
import GeneratedMetaTags from '@/components/GeneratedMetaTags';
import MetaEditor from '@/components/MetaEditor';
import PreviewSection from '@/components/PreviewSection';
import UrlInpput from '@/components/UrlInpput';
import { useMetaStore } from '@/store/useMetaStore';
import React from 'react'

const Home = () => {
  const metaData = useMetaStore()
  return (
   <main className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-7xl p-6">

        {/* Header */}

        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            Website Meta Tag Scraper
          </h1>

          <p className="mt-2 text-gray-600">
            Extract, edit and preview website metadata.
          </p>
        </div>

        {/* URL Input */}

        <UrlInpput />

        {/* Main Content */}

        <div className="mt-8 grid gap-6 lg:grid-cols-2">

          <MetaEditor />
          <GeneratedMetaTags/>

          <PreviewSection />

        </div>

      </div>
    </main>
  )
}

export default Home