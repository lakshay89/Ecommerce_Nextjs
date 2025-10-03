"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./breadcrumbs.css";

export default function Breadcrumbs({ productTitle }) {
  const pathname = usePathname(); // e.g. "/Pages/singlecategoryproduct/laptops/78"
  const originalSegments = pathname.split("/").filter(Boolean); // ['Pages','singlecategoryproduct','laptops','78']

  const skip = ["pages", "singlecategoryproduct"];
  // base segments without the skipped ones
  let pathArray = originalSegments.filter((s) => !skip.includes(s.toLowerCase()));

  // if we're on singlecategoryproduct, ensure 'categories' appears before the category
  if (originalSegments.some((s) => s.toLowerCase() === "singlecategoryproduct") && !pathArray.includes("categories")) {
    pathArray = ["categories", ...pathArray];
  }

  return (
    <nav aria-label="breadcrumb" className="mb-3">
      <ol className="breadcrumb custom-breadcrumb">
        {/* Home (clickable) */}
        <li className="breadcrumb-item">
          <Link href="/">Home</Link>
        </li>

        {pathArray.map((segment, index) => {
          const isLast = index === pathArray.length - 1;
          const lower = segment.toLowerCase();

          // Product title support: if last item is numeric id and productTitle provided, show title
          const numericId = /^[0-9]+$/.test(segment);
          const label =
            numericId && isLast && productTitle
              ? productTitle
              : lower === "categories"
              ? "Categories"
              : segment.charAt(0).toUpperCase() + segment.slice(1);

          // "Categories" must be visible but NOT clickable
          if (lower === "categories") {
            return (
              <li key={index} className="breadcrumb-item">
                <span>{label}</span>
              </li>
            );
          }

          // Last item -> active (not clickable)
          if (isLast) {
            return (
              <li key={index} className="breadcrumb-item active" aria-current="page">
                <span>{label}</span>
              </li>
            );
          }

          // If this segment is a category that follows "categories", link to /Pages/categories/<category>
          const prev = pathArray[index - 1] ? pathArray[index - 1].toLowerCase() : null;
          let href;
          if (prev === "categories") {
            href = `/Pages/categories/${lower}`;
          } else {
            // fallback: build a Pages-prefixed path with remaining segments
            href = `/Pages/${pathArray.slice(0, index + 1).join("/")}`;
          }

          return (
            <li key={index} className="breadcrumb-item">
              <Link href={href}>{label}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
