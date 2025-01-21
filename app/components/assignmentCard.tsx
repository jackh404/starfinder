import { Assignment } from "../types";
export default function AssignmentCard(prop: Assignment) {
  return (
    <div key={prop.title} className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h3 className="card-title">{prop.title}</h3>
        <p>{prop.text}</p>
      </div>
    </div>
  );
}
