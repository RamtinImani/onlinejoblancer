import useUser from "./useUser";

function UserAvatar() {
  const { user } = useUser();

  return (
    <div className="flex items-center gap-x-2 text-secondary-700">
      <img
        src="/images/user.jpg"
        alt="user-account"
        className="size-7 rounded-full bg-cover object-center"
      />
      <span>{user?.name}</span>
    </div>
  );
}

export default UserAvatar;
