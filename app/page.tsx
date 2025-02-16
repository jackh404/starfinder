import assignments from "./assignments.json";
import AssignmentCard from "./components/assignmentCard";
export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-bold m-10 mt-0 text-center">
        Welcome to the Starfinder Assignments and Requests Interface (SARI)
      </h1>
      <div className="flex flex-col justify-center gap-4 w-96">
      {assignments.map(element =>(
        <AssignmentCard key={element.title} {...element} />
      ))}
</div>
    </main>
  );
}