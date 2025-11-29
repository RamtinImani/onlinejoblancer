import { HiPencil } from "react-icons/hi";
import Table from "../../../ui/Table";
import { toPersianNumbers } from "../../../utils/toPersianNumber";
import truncateText from "../../../utils/truncateText";
import Modal from "../../../ui/Modal";
import { useState } from "react";
import ChangeUserStatus from "./ChangeUserStatus";

const statusStyle = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  {
    label: "در انتظار تایید",
    className: "badge--secondary",
  },
  {
    label: "تایید شده",
    className: "badge--success",
  },
];

function UserRow({ user, index }) {
  const { name, email, phoneNumber, role, status } = user;
  const [open, setOpen] = useState(false);

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{truncateText(email, 30)}</td>
      <td>{toPersianNumbers(phoneNumber)}</td>
      <td>{role}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
      <td>
        <button onClick={() => setOpen(true)}>
          <HiPencil className="size-5 text-primary-900" />
        </button>
        <Modal title="تغییر وضعیت کاربر" open={open} onClose={() => setOpen(false)}>
          <ChangeUserStatus userId={user._id} onClose={() => setOpen(false)} />
        </Modal>
      </td>
    </Table.Row>
  );
}

export default UserRow;
