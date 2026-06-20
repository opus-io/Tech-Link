# ⚡ TinaCMS Cloud Setup Instructions

## Setup Manual di Web

Follow langkah-langkah ini di browser:

### **1. Go to TinaCMS Cloud**
- Buka: https://app.tina.io
- Click "Sign up" (atau login jika sudah punya akun)
- Use GitHub untuk login (click "Sign in with GitHub")

### **2. Create New Project**
- Click "+ New Project"
- Project name: `tech-link-final` (atau nama apapun)
- Select repository: `opus-io/Tech-Link`
- Branch: `main`
- Click "Create Project"

### **3. TinaCMS akan auto-detect schema**
- Jika tidak auto-detect, upload file ini ke `/tina/config.ts`:

```typescript
import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: "", // Akan di-generate TinaCMS
  token: "", // Akan di-generate TinaCMS
  build: {
    outputDir: "admin",
    publicDir: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      targetPath: "/images/",
    },
  },
  schema: {
    collections: [
      {
        label: "Products",
        name: "products",
        path: "content/products",
        format: "json",
        fields: [
          {
            type: "object",
            list: true,
            name: "products",
            label: "All Products",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Product Name",
                isTitle: true,
                required: true,
              },
              {
                type: "string",
                name: "imageAlt",
                label: "Image Alt Text",
                required: true,
              },
              {
                type: "image",
                name: "image",
                label: "Product Image",
                required: true,
              },
              {
                type: "boolean",
                name: "featured",
                label: "Featured?",
              },
              {
                type: "string",
                name: "badge",
                label: "Badge",
                required: true,
              },
              {
                type: "string",
                list: true,
                name: "tags",
                label: "Tags",
              },
              {
                type: "string",
                name: "defaultUrl",
                label: "Default URL",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "object",
                list: true,
                name: "links",
                label: "Links",
                fields: [
                  {
                    type: "string",
                    name: "label",
                    label: "Label",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "href",
                    label: "URL",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "color",
                    label: "Color",
                    options: ["amber", "green", "white"],
                  },
                ],
              },
              {
                type: "string",
                name: "variant",
                label: "Variant",
                options: ["featured", "standard"],
                required: true,
              },
            ],
          },
        ],
      },
    ],
  },
});
```

### **4. Get Client ID & Token**
- TinaCMS dashboard akan kasih `TINA_CLIENT_ID` dan `TINA_TOKEN`
- Copy dan save (kamu butuh ini)

### **5. Add GitHub Secrets**
Go to GitHub repo settings:
- Settings → Secrets and variables → Actions
- Add new secret:
  - Name: `TINA_CLIENT_ID`
  - Value: (paste dari TinaCMS)
- Add new secret:
  - Name: `TINA_TOKEN`
  - Value: (paste dari TinaCMS)

### **6. Setup GitHub Action (Auto Deploy)**
Create file `.github/workflows/tina-ci.yml`:

```yaml
name: TinaCMS CI

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - run: npm run deploy
        env:
          TINA_CLIENT_ID: ${{ secrets.TINA_CLIENT_ID }}
          TINA_TOKEN: ${{ secrets.TINA_TOKEN }}
```

### **7. Test Admin Panel**
- Buka: `https://app.tina.io/projects/{your-project}/overview`
- Click "Admin" atau "Content"
- Kamu akan lihat "Products" collection
- Click "Add" untuk tambah product baru
- Isi form, click "Save"
- TinaCMS akan auto commit ke GitHub

### **8. Verify Website Update**
- Check GitHub repo, products file sudah ter-update
- GitHub Pages rebuild otomatis
- Kunjungi website → product baru muncul!

---

## ✅ Setelah Setup:

**Cara pakai:**
1. Buka https://app.tina.io
2. Login dengan GitHub
3. Navigate ke "Tech-Link-Final" project
4. Click "Products"
5. Add/Edit/Delete products via GUI form
6. Click Save → auto commit to GitHub → website update

**Benefit:**
- ✅ GUI admin panel (no code)
- ✅ Auto GitHub commit
- ✅ Auto website deploy
- ✅ Gratis (TinaCMS free tier)
- ✅ Accessible from anywhere

---

## 🚨 Troubleshooting:

**Admin panel tidak muncul:**
- Check: Apakah `tina/config.ts` sudah di repo?
- Check: Apakah `TINA_CLIENT_ID` & `TINA_TOKEN` sudah di GitHub Secrets?

**Products tidak update di website:**
- Check: GitHub Pages deployment settings
- Verify: build command di Astro sudah correct

**Perlu bantuan?**
- Buka: https://tina.io/docs/
- atau hubungi support TinaCMS

---

## 📁 File Structure Setelah Setup:

```
Tech-Link-Final/
├── .github/
│   └── workflows/
│       └── tina-ci.yml (NEW)
├── content/
│   └── products/
│       ├── keyboard.json (dari TinaCMS)
│       ├── book.json (dari TinaCMS)
│       └── ... (product baru dari admin)
├── tina/
│   └── config.ts (TinaCMS schema)
├── src/
│   ├── data/
│   │   └── products.ts (read dari content/)
│   ├── components/
│   ├── pages/
│   └── ...
└── ... (rest of files)
```

---

## Kapan Selesai?

Setelah kamu:
1. ✅ Setup TinaCMS Cloud account
2. ✅ Connect ke GitHub repo
3. ✅ Add TINA secrets di GitHub
4. ✅ Setup GitHub Actions workflow
5. ✅ Test admin panel

**Done!** Kamu bisa mulai add products via GUI.

---

Sudah jelas? Kerjakan step-by-step, report progress! 👍
