import { getCategorisedArticles } from "@/lib/articles";
import ArticleItemList from "../components/ArticleListItem";

const page = () => {
  const articles = getCategorisedArticles();

  console.log(articles);
  return (
    <div>
      <section>
        {articles !== null &&
          Object.keys(articles).map((article) => (
            <ArticleItemList
              category={article}
              articles={articles[article]}
              key={article}
            />
          ))}
      </section>
    </div>
  );
};

export default page;
