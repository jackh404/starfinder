import { Article } from "../../../types";
import articles from "../../articles.json";
import Image from "next/image";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: number }>;
}) {
  const fetchArticle = async () => {
    const { slug }: { slug: number } = await params;
    const article = articles[slug];
    return article;
  };
  const article: Article = await fetchArticle();
  return (
    <div className="flex flex-col items-center justify-between bg-base-100 bg-opacity-40 overflow-scroll rounded-xl p-2">
      <Image src={article.image} alt={article.title} width={500} height={500}/>
      <h1 className="text-2xl font-bold underline">{article.title}</h1>
      <div className="m-2 p-2 bg-primary text-primary-content rounded-xl w-fit">
        <p className="m-2 bg-accent rounded-xl p-2 text-accent-content">
          {article.text}
        </p>
      </div>
    </div>
  );
}
