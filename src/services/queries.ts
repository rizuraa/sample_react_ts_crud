import { useQuery } from "@tanstack/react-query";
import { getUsers } from "./api";

export function useGetUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
}
