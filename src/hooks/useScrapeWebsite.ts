import { scrapeWebsite } from "@/api/meta.function";
import { useQuery } from "@tanstack/react-query";

export const useScrapeWebsite = (url: string) => {
  return useQuery({
    queryKey: ["metadata", url],
    queryFn: () => scrapeWebsite({ url }),
    enabled: false, 
  });
};