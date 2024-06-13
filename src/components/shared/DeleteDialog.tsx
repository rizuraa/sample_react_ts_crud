import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { Eraser } from "lucide-react";
import { useDeleteUser } from "@/services/queries";

interface DeleteDialogProps {
  userId: number;
  userName: string;
  onDelete?: () => void; // Optional prop for onDelete function
}

const DeleteDialog: React.FC<DeleteDialogProps> = ({
  userId,
  userName,
  onDelete,
}) => {
  const deleteUserMutation = useDeleteUser();

  const handleDelete = () => {
    deleteUserMutation.mutate(userId, {
      onSuccess: () => {
        if (onDelete) {
          onDelete();
        }
      },
    });
  };

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <span className="cursor-pointer">
            <Button
              variant="outline"
              size="icon"
            >
              <Eraser className="h-4 w-4" />
            </Button>
          </span>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              user {userName}.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default DeleteDialog;
