/**
 * Data produk yang ditampilkan di halaman Linktree Affiliate.
 * 
 * Data dimuat secara dinamis dari folder `/content/products/`.
 * TinaCMS Cloud akan auto-generate/update JSON files saat edit via app.tina.io
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