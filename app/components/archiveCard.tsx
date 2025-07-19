import { Archive } from "../types";
import Link from "next/link";
export default function ArchiveCard(prop: Archive) {
  return (
    <Link href={`/archives/${prop.id}`}>
      <div
        key={prop.title}
        className="card bg-secondary text-secondary-content shadow-xl"
      >
        <div className="card-body">
          <h3 className="card-title text-center">{prop.title}</h3>
          <p className="line-clamp-3" dangerouslySetInnerHTML={{ __html: prop.text }} />
        </div>
      </div>
    </Link>
  );
}
