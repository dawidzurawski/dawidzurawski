import Link from "next/link";
import type { ArticleItem } from "@/types";

interface Props {
  category: string;
  articles: ArticleItem[];
}

const ArticleItemList = ({ category, articles }: Props) => {
  return (
    <div>
      <h2 className="text-2xl mt-8">{category}</h2>
      <div className="mt-2 text-zinc-400 hover:text-lime-400">
        {articles.map((article) => (
          <Link href={`/blog/${article.id}`} key={article.id}>
            {" "}
            {/* Use article.id for key */}
            {article.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArticleItemList;
