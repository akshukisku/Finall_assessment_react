"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { UrlSchema, urlvalidation } from "@/services/validation/meta.validation";
import { useMetaStore } from "@/store/useMetaStore";
import { useScrapeWebsite } from "@/hooks/useScrapeWebsite";

const UrlInput = () => {
  const [searchUrl, setSearchUrl] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UrlSchema>({
    resolver: yupResolver(urlvalidation),
  });

  const setMetadata = useMetaStore((state) => state.setMetadata);

  const { data, isLoading, error } = useScrapeWebsite(searchUrl);

  useEffect(() => {
    if (!data) return;

    setMetadata({
      title: data.title || "",
      description: data.description || "",
      image: data.images?.[0] || "",
      url: data.url || "",
      siteName: data.sitename || "",
      twitterCard: "summary_large_image",
    });
  }, [data, setMetadata]);

  const onSubmit = (formData: UrlSchema) => {
    setSearchUrl(formData.url);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto mt-20 space-y-4"
    >
      <input
        {...register("url")}
        placeholder="https://example.com"
        className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
      />

      {errors.url && (
        <p className="text-sm text-red-500">{errors.url.message}</p>
      )}

      {error && (
        <p className="text-sm text-red-500">
          Failed to fetch metadata.
        </p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700 disabled:opacity-60"
      >
        {isLoading ? "Checking Website..." : "Check Website"}
      </button>
    </form>
  );
};

export default UrlInput;