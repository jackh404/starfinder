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
    <div className="flex flex-col items-center justify-between bg-base-100 bg-opacity-40 relative overflow-scroll rounded-xl p-2">
    <h1 className="text-2xl font-bold underline">{assignment.title}</h1>
    <div className="m-2 p-2 bg-primary text-primary-content rounded-xl w-fit">
    <p className="m-2 text-lg">Sector: {assignment.sector}</p>
    <p className="m-2 text-lg">Duration: {assignment.duration}</p>
    <p className="m-2 text-lg">Requestor: {assignment.requestor}</p>
    <p className="m-2 text-lg">Funds: {assignment.funds}</p></div>
    <p className="m-2 bg-accent rounded-xl p-2 text-accent-content">{assignment.text}</p>
    <p className="m-2 text-lg">Notes:</p><ul className="m-2 list-disc"> {assignment.notes.map((note) => (
      <li key={note}>{note}</li>
    ))}</ul>
    </div>
  )
}