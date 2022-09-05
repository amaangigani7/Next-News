import Link from "next/link";
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/one">One</Link>
        </li>
        <li>
          <Link href="/news/two">Two</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
