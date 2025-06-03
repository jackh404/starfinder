import { Article } from "../types";
import Link from "next/link";
import Image from "next/image";

export default function ArticleCard(prop: Article) {
  return (
    <Link href={`/news/article/${prop.id}`}>
      <div
        key={prop.title}
        className="card bg-secondary text-secondary-content shadow-xl"
      >
        <figure className="relative h-48">
          <Image
            src={prop.image}
            alt={prop.title}
            className="rounded-xl"
            fill={true}
            objectFit="cover"
          />
        </figure>
        <div className="card-body">
          <h3 className="card-title text-center">{prop.title}</h3>
          <p className="line-clamp-3" dangerouslySetInnerHTML={{ __html: prop.text }}/>
        </div>
      </div>
    </Link>
  );
}
