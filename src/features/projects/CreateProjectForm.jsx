import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import SelectOption from "../../ui/SelectOption";
import { useState } from "react";
import Tags from "../../ui/Tags";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";
import useCreateProject from "./useCreateProject";
import Loader from "../../ui/Loader";
import useEditProject from "./useEditProject";

function CreateProjectForm({ onClose, projectToEdit = {} }) {
  const {
    _id: editId,
    title,
    description,
    budget,
    category,
    tags: prevTags,
    deadline,
  } = projectToEdit;

  const isEditMode = Boolean(editId);

  let editValues = {};

  if (isEditMode) {
    editValues = {
      title,
      description,
      budget,
      category: category._id,
    };
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: editValues });

  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(new Date(deadline || ""));
  const { categories } = useCategories();
  const { createProject, isCreatingProject } = useCreateProject();
  const { isEditingProject, editProject } = useEditProject();

  const onNewProjectFormSubmit = (data) => {
    const newProject = { ...data, tags, deadline: new Date(date).toISOString() };

    if (isEditMode) {
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        }
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
  };

  return (
    <div>
      <form className="flex flex-col gap-y-5" onSubmit={handleSubmit(onNewProjectFormSubmit)}>
        <TextField
          label="عنوان پروژه"
          name="title"
          register={register}
          required
          validationSchema={{
            required: "عنوان پروژه ضروری است",
            minLength: {
              value: 10,
              message: "حداقل 10 کاراکتر را وارد کنید",
            },
          }}
          errors={errors}
        />
        <TextField
          label="توضیحات پروژه"
          name="description"
          register={register}
          required
          validationSchema={{
            required: "توضیحات پروژه ضروری است",
            minLength: {
              value: 15,
              message: "حداقل 15 کاراکتر را وارد کنید",
            },
          }}
          errors={errors}
        />
        <TextField
          label="بودجه"
          name="budget"
          type="number"
          register={register}
          required
          validationSchema={{
            required: "بودجه پروژه ضروری است",
          }}
          errors={errors}
        />

        <SelectOption
          label="دسته بندی"
          name="category"
          required
          register={register}
          options={categories}
        />

        <Tags label="برچسب ها" name="tags" tags={tags} setTags={setTags} />

        <DatePickerField label="تاریخ تحویل" date={date} setDate={setDate} />

        <button type="submit" className="btn btn--primary w-full">
          {isCreatingProject || isEditingProject ? <Loader /> : "تایید"}
        </button>
      </form>
    </div>
  );
}

export default CreateProjectForm;
