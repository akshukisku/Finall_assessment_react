import { useQuery } from "@tanstack/react-query";
import { scrapeWebsite } from "@/api/meta.function";

export const useScrapeWebsite = (url: string) => {
  return useQuery({
    queryKey: ["metadata", url],
    queryFn: () => scrapeWebsite({ url }),
    enabled: !!url, 
  });
};