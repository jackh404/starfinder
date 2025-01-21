import { Assignment } from "./types";
import AssignmentCard from "./components/assignmentCard";
export default function Home() {
  const requests:Assignment[] = 
  [
    {
      title : "Retrieve Device from Deep Space",
      sector: "Near Pact Space",
      duration: "20 to 40 days",
      funds: "Stipend: 12,000 credits",
      text: "A Chamari-class probe, designated L-79-Phi, was in a deep elliptical orbit over Aucturn for 13 months before unexpectedly going dark `3` days ago. It appeared briefly in the sightline of the Tazuni orbital telescope's viewfinder, apparently having escaped Aucturn's orbit to travel into deep space. Other Society telescopes have since successfully spotted it, suggesting that it has not changed its trajectory again since. The Forum requests that the probe be retrieved for study and data recovery to understand what caused it to lose contact and veer so far off course.",
      notes: [
        "Suitable for provisional members."
      ]
    }
  ]
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        Welcome to the Starfinder Assignments and Requests Interface (SARI)
      </h1>
      {requests.map(element =>(
        <AssignmentCard key={element.title} {...element} />
      ))}

    </main>
  );
}