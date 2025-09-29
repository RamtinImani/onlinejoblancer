import Loader from "./Loader";

function ConfirmDelete({ resourceName, onClose, onConfirm, isDeletingProject, disabled }) {
  return (
    <div>
      <p className="font-bold text-base mb-8 text-wrap">آیا از حذف {resourceName} مطمئن هستید؟</p>
      <div className="flex items-center gap-x-16">
        <button onClick={onClose} className="btn btn--primary flex-1" disabled={disabled}>
          لغو
        </button>
        <button onClick={onConfirm} className="btn btn--danger flex-1" disabled={disabled}>
          {isDeletingProject ? <Loader /> : "تایید"}
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
