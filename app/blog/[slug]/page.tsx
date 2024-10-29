import Link from "next/link";
import { getArticlesData } from "@/lib/articles";

// Awaiting params object in the async function
const Article = async ({ params }: { params: Promise<{ slug: string }> }) => {
  // Await params here
  const { slug } = await params;
  const articleData = await getArticlesData(slug);

  return (
    <section className="mx-auto w-10/12 md:w-1/2 mt-20 flex flex-col gap-5">
      <div className="flex justify-between font-poppins">
        <Link href={"/"} className="flex flex-row gap-1 place-items-center">
          <p>back to home</p>
        </Link>
        <p>{articleData.date.toString()}</p>
      </div>
      <article
        className="article"
        dangerouslySetInnerHTML={{ __html: articleData.contentHtml }}
      />
    </section>
  );
};

export default Article;
