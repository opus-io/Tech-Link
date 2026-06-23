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

// Logo mapping dari site config (fallback ke raw GitHub URLs)
let configLogos: Record<string, string> = {};
try {
  const config = await import("../../content/config.json", { assert: { type: "json" } });
  configLogos = (config as any).default?.logos || {};
} catch {}

export const logoMap: Record<string, string> = {
  SHOPEE: configLogos.SHOPEE || "https://raw.githubusercontent.com/opus-io/Tech-Link/main/public/logos/shopee.png",
  TOKOPEDIA: configLogos.TOKOPEDIA || "https://raw.githubusercontent.com/opus-io/Tech-Link/main/public/logos/tokopedia.png",
  TIKTOK: configLogos.TIKTOK || "https://raw.githubusercontent.com/opus-io/Tech-Link/main/public/logos/tiktok.png",
};
