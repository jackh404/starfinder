import assignments from "./assignments.json";
import AssignmentCard from "./components/assignmentCard";
export default function Home() {
  return (

    <div className="p-2 flex flex-col items-center justify-between bg-base-100 bg-opacity-40 relative overflow-scroll rounded-xl">
      <h1 className="text-2xl font-bold m-10 mt-0 text-center">
        Starfinder Assignments and Requests Interface (SARI)
      </h1>
      <div className="flex flex-col justify-center gap-4">
      {assignments.map(element =>(
        <AssignmentCard key={element.title} {...element} />
      ))}
</div>
    </div>
  );
}