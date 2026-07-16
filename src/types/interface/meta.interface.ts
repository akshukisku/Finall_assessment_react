export type PreviewPlatform =
  | "facebook"
  | "twitter"
  | "discord"
  | "instagram";

export interface MetaData {
  title: string;
  description: string;
  image: string;
  url: string;
  siteName: string;
  twitterCard: string;
  domain?:string
}
export interface MetaState {
  metadata: MetaData | null;

  activeTab: PreviewPlatform;

  setMetadata: (data: MetaData) => void;

  updateField: (
    key: keyof MetaData,
    value: string
  ) => void;

  setActiveTab: (
    tab: PreviewPlatform
  ) => void;
}