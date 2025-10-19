import { HiPencil } from "react-icons/hi";
import Table from "../../ui/Table";
import { toPersianNumbers, toPersianNumbersWithComma } from "../../utils/toPersianNumber";
import truncateText from "../../utils/truncateText";
import Modal from "../../ui/Modal";
import { useState } from "react";

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

function ProposalRow({ proposal, index }) {
  const { status, user, description, duration, price } = proposal;
  const [open, setOpen] = useState(false);

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>
        <p>{truncateText(description, 50)}</p>
      </td>
      <td>{toPersianNumbers(duration)} روز</td>
      <td>{toPersianNumbersWithComma(price)}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
      <td>
        <button onClick={() => setOpen(true)}>
          <HiPencil className="size-5 text-primary-900" />
        </button>
        <Modal title="تغییر وضعیت درخواست" open={open} onClose={() => setOpen(false)}>
          تغییر وضعیت درخواست
        </Modal>
      </td>
    </Table.Row>
  );
}

export default ProposalRow;
