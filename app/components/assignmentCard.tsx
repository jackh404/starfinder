import { Assignment } from "../types";
import Link from "next/link";
export default function AssignmentCard(prop: Assignment) {
  return (
    <Link href={`/assignments/${prop.id}`}>
    <div key={prop.title} className="card bg-secondary text-secondary-content shadow-xl">
      <div className="card-body">
        <h3 className="card-title text-center">{prop.title}</h3>
        <p className="line-clamp-3">{prop.text}</p>
      </div>
    </div>
    </Link>
  );
}
