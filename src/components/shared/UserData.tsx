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
import { IUser } from "@/Interfaces/IUser";

interface UserDataProps {
  onEditUser: (user: IUser) => void;
}

const UserData: React.FC<UserDataProps> = ({ onEditUser }) => {
  const { data: users, isLoading, error } = useGetUsers();

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
            <TableRow key={user.id ?? index}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{user.nama}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell className="text-right">
                <Button
                  variant="outline"
                  size="icon"
                  className="mr-2"
                  onClick={() => onEditUser(user)}
                >
                  <FilePenLine className="h-4 w-4" />
                </Button>
                {user.id !== undefined && (
                  <DeleteDialog
                    userId={user.id}
                    userName={user.nama}
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
};

export default UserData;
