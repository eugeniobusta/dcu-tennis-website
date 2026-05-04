import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "si2hfiqv",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-01-01"
});
