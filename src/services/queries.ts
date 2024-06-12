import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createUser, deleteUser, getUsers } from "./api";
import { IUser } from "@/Interfaces/IUser";

export function useGetUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    retry: false,
    initialData: []
  });
}

export function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["users"]});
    },
  });
}

// post data 
export function useCreateUser() {
  const queryClient = useQueryClient();
  return useMutation<IUser, Error, IUser>({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["users"]});
    },
  });
}