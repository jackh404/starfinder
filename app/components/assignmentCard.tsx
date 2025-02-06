import { Assignment } from "../types";
import Link from "next/link";
export default function AssignmentCard(prop: Assignment) {
  return (
    <Link href={`/assignments/${prop.id}`}>
    <div key={prop.title} className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h3 className="card-title">{prop.title}</h3>
        <p className="line-clamp-3">{prop.text}</p>
      </div>
    </div>
    </Link>
  );
}
