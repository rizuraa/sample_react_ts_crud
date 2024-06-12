import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FilePenLine } from "lucide-react";
import { Button } from "../ui/button";
import { useGetUsers } from "@/services/queries";
import DeleteDialog from "./DeleteDialog";

export default function UserData() {
  const { data: users, isLoading, error, refetch } = useGetUsers(); // Added refetch for updating data after deletion

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading users data: {error.message}</div>;

  return (
    <Table>
      <TableCaption>List of Data</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>No</TableHead>
          <TableHead>Nama</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users && users.length > 0 ? (
          users.map((user, index) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{user.nama}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell className="text-right">
                <Button
                  variant="outline"
                  size="icon"
                  className="mr-2"
                >
                  <FilePenLine className="h-4 w-4" />
                </Button>
                {user.id !== undefined && (
                  <DeleteDialog
                    userId={user.id}
                    userName={user.nama}
                    onDelete={() => refetch()} // Refetch data after deletion
                  />
                )}
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell
              colSpan={5}
              className="text-center"
            >
              Data Unavailable
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
