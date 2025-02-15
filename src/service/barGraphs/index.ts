import { httpClient } from "@/config";
export const getBars = async () => {
  const response = await httpClient.get(`/bar.json`);
  return response.data;
};
