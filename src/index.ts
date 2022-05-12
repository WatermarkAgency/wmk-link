export interface ToGtmDataLayer {
  event: string;
  params: { [key: string]: string };
}

export type GtmDataLayer = { event: string; [key: string]: string }[];

export * from "./Anchor";
export * from "./WmkLink";
