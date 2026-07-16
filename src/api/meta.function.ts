import axios from "axios";

const apiKey= process.env.NEXT_PUBLIC_JSONLINK_API_KEY

export interface ScrapePayload {
  url: string;
}

export const scrapeWebsite = async ({ url }: ScrapePayload) => {
  const { data } = await axios.get(
    `https://jsonlink.io/api/extract?url=${url}&api_key=${apiKey}`
  );

  return data;
};