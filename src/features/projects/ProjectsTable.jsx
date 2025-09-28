import Loader from "../../ui/Loader";
import Empty from "../../ui/Empty";
import useOwnerProjects from "./useOwnerProjects";
import Table from "../../ui/Table";
import ProjectRow from "./ProjectRow";

function ProjectsTable() {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <Loader />;
  if (!projects.length) return <Empty resourceName="پروژه ای" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>دسته بندی</th>
        <th>بودجه</th>
        <th>تاریخ تحویل</th>
        <th>برچسب ها</th>
        <th>فریلنسر</th>
        <th>وضعیت</th>
        <th>عملیات</th>
        <th>درخواست ها</th>
      </Table.Header>

      <Table.Body>
        {projects.map((project, index) => (
          <ProjectRow key={project._id} project={project} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProjectsTable;
