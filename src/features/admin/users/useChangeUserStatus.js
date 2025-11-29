import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserStatus } from "../../../services/authService";
import toast from "react-hot-toast";

export default function useChangeUserStatus() {
  const queryClient = useQueryClient();

  const { mutate: changeUserStatus, isPending: isChangingUserStatus } = useMutation({
    mutationFn: updateUserStatus,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
      toast.success(data.message);
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { changeUserStatus, isChangingUserStatus };
}
