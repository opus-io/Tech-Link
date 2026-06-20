/**
 * Data produk yang ditampilkan di halaman Linktree Affiliate.
 * Ubah atau tambahkan entri di sini untuk memperbarui konten halaman.
 */
export const products: Product[] = [
  {
    id: "01",
    image:
      "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=150&h=150",
    imageAlt: "Mechanical Keyboard 65%",
    featured: true,
    badge: "FEATURED",
    title: "Mechanical Keyboard 65%",
    tags: ["SHOPEE", "TOKOPEDIA"],
    defaultUrl: "https://shopee.co.id",
    description:
      "Pre-lubed stabilisator, triple-mode. Komponen esensial untuk meja ringkas.",
    links: [
      { label: "ACCESS // SHOPEE", href: "#", color: "amber" },
      { label: "ACCESS // TOKOPEDIA", href: "#", color: "green" },
    ],
    variant: "featured",
  },
  {
    id: "02",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=150&h=150",
    imageAlt: "Buku Filosofi Teras",
    badge: "STANDARD_ISSUE",
    title: "Filosofi Teras",
    tags: ["TIKTOK"],
    defaultUrl: "https://tiktok.com",
    description:
      "Modul stoikisme praktis. Esensial untuk stabilitas sistem mental.",
    links: [{ label: "ACCESS // TIKTOK", href: "#", color: "white" }],
    variant: "standard",
  },
];