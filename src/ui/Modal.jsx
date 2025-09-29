import { HiOutlineX } from "react-icons/hi";
import useOutsideClick from "../hooks/useOutSideClick";

function Modal({ open, onClose, title, children }) {
  const modalRef = useOutsideClick(onClose);
  
  return (
    open && (
      <div className="backdrop-blur-sm fixed top-0 left-0 w-full h-full flex items-center justify-center bg-secondary-500/30 z-50">
        <div
          ref={modalRef}
          className="w-[calc(100vw-2rem)] md:max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto bg-secondary-0 p-8 rounded-2xl shadow-md shadow-primary-300 transition-all duration-300"
        >
          <div className="flex items-center justify-between border-b-2 border-b-secondary-300 pb-2 mb-6">
            <p className="font-bold text-secondary-700 text-base">{title}</p>
            <button onClick={onClose}>
              <HiOutlineX className="size-5 text-secondary-500" />
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  );
}

export default Modal;
