import { httpClient } from "@/config";

export const getTotalPageViews = async () => {
  const response = await httpClient.get("/page_view.json");
  return response.data?.data ?? 0; // Default to 0 if undefined
};

export const getTotalUniqueVisitors = async () => {
  const response = await httpClient.get("/unique_visitors.json");
  return response.data?.data ?? 0;
};

export const getTotalBounceRate = async () => {
  const response = await httpClient.get("/bounce_rate.json");
  return response.data?.data ?? 0;
};

export const getTotalSessionDuration = async () => {
  const response = await httpClient.get("/session_duration.json");
  return response.data?.data ?? 0;
};

