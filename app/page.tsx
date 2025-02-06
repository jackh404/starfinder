import assignments from "./assignments.json";
import AssignmentCard from "./components/assignmentCard";
export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        Welcome to the Starfinder Assignments and Requests Interface (SARI)
      </h1>
      {assignments.map(element =>(
        <AssignmentCard key={element.title} {...element} />
      ))}

    </main>
  );
}