import { Assignment } from "../../types";
import assignments from "../../assignments.json";
export default async function AssignmentPage(
    { params }: { params: Promise<{ slug: number }> }) 
    {
    const fetchAssignment = async () => {
    const  { slug }: {slug: number}  = await params;
    const assignment = assignments[slug];
    return assignment;
  }
  const assignment: Assignment = await fetchAssignment();
  return (
    <h1 className="text-3xl font-bold underline">{assignment.title}</h1>
  )
}