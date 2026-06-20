# Tech-Link-Final

Linktree Affiliate kustom bertema "Advanced Industrial OS" yang dibangun ulang dengan struktur **Astro** standar.

## Struktur Proyek

```
Tech-Link-Final/
├── astro.config.mjs        # Konfigurasi Astro + integrasi Tailwind
├── tailwind.config.mjs     # Konfigurasi Tailwind (font robotic, dll.)
├── tsconfig.json           # TypeScript strict mode
├── package.json
├── public/                 # Aset statis (favicon, gambar, dll.)
└── src/
    ├── env.d.ts            # Deklarasi tipe Product & LinkItem
    ├── data/
    │   └── products.ts     # Data produk (sumber tunggal konten kartu)
    ├── styles/
    │   └── global.css      # Gaya global + utilitas Tailwind
    ├── layouts/
    │   └── BaseLayout.astro
    ├── components/
    │   ├── DiagnosticCanvas.astro  # HUD canvas animasi
    │   ├── ProfileHeader.astro     # Header avatar & nama akun
    │   ├── SectionHeading.astro    # Judul bagian bergaya HUD
    │   └── ProductCard.astro       # Kartu produk dual-action
    └── pages/
        └── index.astro     # Halaman utama
```

## Cara Menjalankan

```bash
npm install
npm run dev      # mode pengembangan (http://localhost:4321)
npm run build    # build produksi ke folder dist/
npm run preview  # pratinjau hasil build
```

## Menambah / Mengubah Produk

Edit `src/data/products.ts` lalu tambahkan atau ubah entri pada array `products`. Struktur entri:

```ts
{
  id: "03",
  image: "https://...",
  imageAlt: "Nama Produk",
  featured: true,                // opsional, untuk highlight
  badge: "FEATURED",
  title: "Nama Produk",
  tags: ["SHOPEE"],
  defaultUrl: "https://...",
  description: "Deskripsi singkat...",
  links: [
    { label: "ACCESS // SHOPEE", href: "#", color: "amber" },
  ],
  variant: "featured",           // "featured" | "standard"
}
```

## Highlight Konversi dari HTML

- **Komponen terpisah** — setiap blok UI menjadi komponen `.astro` reusable.
- **Data terpusat** — konten kartu dipisah dari presentasi (`src/data/products.ts`).
- **TypeScript** — interface `Product` & `LinkItem` untuk type-safety.
- **Tailwind** — class Tailwind dipertahankan, dikonfigurasi via `tailwind.config.mjs`.
- **Client script** — script interaktif (canvas, accordion) dibungkus di komponen masing-masing dengan TypeScript.
- **Layout** — `<BaseLayout>` menjadi shell dengan meta tag, font, dan gaya global.
