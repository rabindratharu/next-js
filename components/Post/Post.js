import Link from "next/link";
import { FeaturedImage } from "../FeaturedImage";
import { PostInfo } from "../PostInfo";
import styles from "./Post.module.scss";

export default function Post({
  id,
  title,
  content,
  date,
  author,
  uri,
  featuredImage,
}) {
  return (
    <article className={styles.component} key={id}>
      {featuredImage && (
        <Link href={uri}>
          <a>
            <FeaturedImage
              image={featuredImage}
              layout="responsive"
              className={styles.featuredImage}
            />
          </a>
        </Link>
      )}

      <Link href={uri}>
        <a>
          <h2>{title}</h2>
        </a>
      </Link>
      <PostInfo date={date} author={author} className={styles.postInfo} />
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
}
