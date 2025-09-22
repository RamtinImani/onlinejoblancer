import { LoaderIcon } from "react-hot-toast";

function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoaderIcon className="loader" />
    </div>
  );
}

export default Loader;
