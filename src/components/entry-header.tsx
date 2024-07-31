import style from "./entry-header.module.css";

type EntryHeaderProps = {
  title: string;
  date?: Date | string;
  author?: string;
};

export default function EntryHeader({ title, date, author }: EntryHeaderProps) {
  return (
    <div className={style.entry}>
      {title && <h2 className={style.title}>{title}</h2>}

      {date && author && (
        <div className={style.meta}>
          By {author} on <time>{new Date(date).toDateString()}</time>
        </div>
      )}
      <div className="bg-blue-500 text-white p-4">
        <h1 className="text-3xl font-bold">Welcome to My Faust.js Site</h1>
      </div>
    </div>
  );
}
