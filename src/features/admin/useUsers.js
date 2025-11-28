import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../services/authService";

export default function useUsers() {
  const { data, isLoading: isLoadingUsers } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  const { users } = data || {};

  return { users, isLoadingUsers };
}
