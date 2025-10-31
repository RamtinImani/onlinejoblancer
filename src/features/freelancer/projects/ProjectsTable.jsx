import useProjects from "../../../hooks/useProjects";
import Empty from "../../../ui/Empty";
import Loader from "../../../ui/Loader";
import Table from "../../../ui/Table";
import ProjectRow from "./ProjectRow";

function ProjectsTable() {
  const { projects, isLoadingProjects } = useProjects();

  if (isLoadingProjects) return <Loader />;
  if (!projects.length) return <Empty resourceName="پروژه ای" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>بودجه</th>
        <th>تاریخ تحویل</th>
        <th>وضعیت</th>
        <th>عملیات</th>
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
