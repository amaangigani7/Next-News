import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();

  console.log(router);
  const newsId = router.query.newsId;
  return <h1>Detail Page{newsId}</h1>;
}

export default DetailPage;
