import AuthContainer from "../features/authentication/AuthContainer";

function Auth() {
  return (
    <div className="container xl:max-w-7xl">
      <div className="flex justify-center items-center pt-10 md:pt-48">
        <AuthContainer />
      </div>
    </div>
  );
}

export default Auth;
