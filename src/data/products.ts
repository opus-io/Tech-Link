/**
 * Data produk yang ditampilkan di halaman Linktree Affiliate.
 * Data dikelola via Decap CMS (/admin) - JSON files di /content/products/
 */

// Dynamic import semua JSON files dari content/products/
const productModules = import.meta.glob("../../content/products/*.json", {
  eager: true,
  import: "default",
});

interface RawProduct {
  title: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  badge: string;
  tags: string[];
  defaultUrl: string;
  description: string;
  links: LinkItem[];
  variant: "featured" | "standard";
}

export const products: Product[] = Object.values(productModules).map(
  (data: RawProduct, index: number) => ({
    id: String(index + 1).padStart(2, "0"),
    ...data,
  })
);