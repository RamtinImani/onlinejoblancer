import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutUser } from "../../services/authService";
import { useNavigate } from "react-router";

export default function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logoutUserAccount, isPending: isLoggingOut } = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/auth", { replace: true });
    },
  });

  return { logoutUserAccount, isLoggingOut };
}
