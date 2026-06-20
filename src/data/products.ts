/**
 * Data produk yang ditampilkan di halaman Linktree Affiliate.
 * Data dikelola via Admin Panel (/admin) - JSON files di /content/products/
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
  rating?: number;
  sold?: number;
  shortDesc?: string;
}

export const products: Product[] = Object.values(productModules).map(
  (data: RawProduct, index: number) => ({
    id: String(index + 1).padStart(2, "0"),
    ...data,
  })
);

// Logo mapping untuk tag platform (raw GitHub URLs - reliable)
export const logoMap: Record<string, string> = {
  SHOPEE: "https://raw.githubusercontent.com/opus-io/Tech-Link/main/public/logos/shopee.png",
  TOKOPEDIA: "https://raw.githubusercontent.com/opus-io/Tech-Link/main/public/logos/tokopedia.png",
  TIKTOK: "https://raw.githubusercontent.com/opus-io/Tech-Link/main/public/logos/tiktok.png",
};