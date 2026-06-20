/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface LinkItem {
  label: string;
  href: string;
  color?: "amber" | "green" | "white";
}

interface Product {
  id: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  badge: string;
  title: string;
  tags: string[];
  defaultUrl: string;
  description: string;
  links: LinkItem[];
  variant: "featured" | "standard";
  rating?: number;
  sold?: number;
  shortDesc?: string;
}