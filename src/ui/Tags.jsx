import { TagsInput } from "react-tag-input-component";

function Tags({ label, name, tags, setTags }) {
  return (
    <div className="flex flex-col gap-y-2">
      <label className="block font-bold text-secondary-700">{label}</label>
      <TagsInput value={tags} onChange={setTags} name={name} />
    </div>
  );
}

export default Tags;
