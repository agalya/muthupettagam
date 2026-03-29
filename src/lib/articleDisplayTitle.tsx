import type { WritingItem } from "@/data/categories";

/** Default when `date` is not set on an item — day, month, and year. */
export const DEFAULT_ARTICLE_DATE = "28 மார்ச் 2026";

export function getArticleDateLabel(item: WritingItem): string {
  return item.date?.trim() || DEFAULT_ARTICLE_DATE;
}

/**
 * Plain string for search matching, image alt text, etc.
 */
export function articleDisplayTitle(item: WritingItem): string {
  return `${item.title} (${getArticleDateLabel(item)})`;
}

type ArticleTitleProps = {
  item: WritingItem;
  /** Tamil line uses heading font; date uses Latin sans + italic + maroon */
  titleClassName?: string;
};

export function ArticleTitle({ item, titleClassName = "font-tamil-heading" }: ArticleTitleProps) {
  const dateLabel = getArticleDateLabel(item);
  return (
    <span className="inline-flex flex-wrap items-baseline gap-x-2 gap-y-1">
      <span className={titleClassName}>{item.title}</span>
      <span className="font-sans italic font-normal text-[#800000] dark:text-[#c45c5c] text-[0.92em] sm:text-[0.95em] tracking-wide">
        ({dateLabel})
      </span>
    </span>
  );
}
