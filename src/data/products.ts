/**
 * Data produk yang ditampilkan di halaman Linktree Affiliate.
 * 
 * Data dimuat dari folder `/content/products/` (dikelola via TinaCMS).
 * TinaCMS akan auto-generate JSON files saat edit via admin panel.
 * 
 * Development: Data di-import langsung dari JSON files
 * Build-time: Astro akan compile semua JSON ke static HTML
 */

// Import product JSON files dari content/products
import keyboardData from "../../content/products/keyboard.json";
import bookData from "../../content/products/book.json";

// Helper function untuk generate unique ID
function generateProductId(index: number): string {
  return String(index + 1).padStart(2, "0");
}

// Load products dari JSON files dengan ID auto-generate
const productDataArray = [keyboardData, bookData];

export const products: Product[] = productDataArray.map((data, index) => ({
  id: generateProductId(index),
  ...data,
}));

/**
 * Catatan Penting:
 * 
 * Setelah TinaCMS setup:
 * 1. Setiap file JSON baru di /content/products/ perlu di-import di sini
 * 2. Atau: Gunakan dynamic import di Astro untuk auto-load (lihat komentar di bawah)
 * 
 * Future improvement: Auto-load semua JSON di /content/products/:
 * 
 * import { glob } from "astro/loaders";
 * const allProducts = await glob("../../content/products/*.json");
 * export const products = allProducts.map(file => ({...}));
 */