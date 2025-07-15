import articles from "./articles.json";
import ArticleCard from "../components/articleCard";

export default function News() {
    
  return (
    <div className="flex min-h-screen flex-col items-center gap-4 p-8 bg-base-100 bg-opacity-40">
      <h1 className="text-2xl font-bold m-10 mt-0 text-center">
        News
      </h1>
      {articles.map(element =>(
        <ArticleCard key={element.id} {...element} />
      ))};
    </div>
  )
}
