import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createUser, deleteUser, getUsers, updateUser } from "./api";
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
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      console.error("Error deleting user:", error);
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

// update data 
export function useUpdateUser() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: { id: number; user: Partial<IUser> }) => updateUser(data.id, data.user),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["users"]});
    },
  });
}