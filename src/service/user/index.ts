import { httpClient } from "@/config";
export const getUsers = async (page: number, limit: number = 10) => {
  const response = await httpClient.get(`/users.json`, {
    params: {
      page,
      limit,
    },
  });
  return response.data;
};
