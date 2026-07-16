"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  UrlSchema,
  urlvalidation,
} from "@/services/validation/meta.validation";
import { useMetaStore } from "@/store/useMetaStore";
import { useScrapeWebsite } from "@/hooks/useScrapeWebsite";

const UrlInput = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UrlSchema>({
    resolver: yupResolver(urlvalidation),
  });

  const url = watch("url");

  const setMetadata = useMetaStore((state) => state.setMetadata);

  const {
    data,
    isFetching,
    error,
    refetch,
  } = useScrapeWebsite(url);

  useEffect(() => {
    if (!data) return;

    setMetadata({
      title: data.title || "",
      description: data.description || "",
      image: data.images?.[0] || "",
      url: data.url || "",
      siteName: data.sitename || "",
      domain: data.domain || "",
      twitterCard: "summary_large_image",
    });
  }, [data, setMetadata]);

  const onSubmit = async () => {
    await refetch();
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
        <p className="text-sm text-red-500">
          {errors.url.message}
        </p>
      )}

      {error && (
        <p className="text-sm text-red-500">
          Failed to fetch metadata.
        </p>
      )}

      <button
        type="submit"
        disabled={isFetching}
        className="w-full rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700 disabled:opacity-60"
      >
        {isFetching ? "Checking Website..." : "Check Website"}
      </button>
    </form>
  );
};

export default UrlInput;