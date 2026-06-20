# Decap CMS Setup Selesai! 🎉

## Cara Akses Admin Panel

Buka: https://opus-io.github.io/Tech-Link/admin/

Tapi sebelum bisa login, kamu perlu buat **GitHub OAuth App** dulu:

---

## 🔑 Setup GitHub OAuth App (5 menit)

### 1. Buka halaman OAuth Apps:
https://github.com/settings/developers

### 2. Click "New OAuth App"

### 3. Isi form:
| Field | Isi |
|-------|-----|
| **Application name** | `Tech-Link CMS` |
| **Homepage URL** | `https://opus-io.github.io/Tech-Link` |
| **Authorization callback URL** | `https://oauth.decap-cms.netlify.app` |

### 4. Click "Register application"

### 5. Copy **Client ID** yang muncul

### 6. Click "Generate a new client secret", copy secretnya

### 7. Update config.yml di repo:
- Buka file: `public/admin/config.yml`
- Di bagian `backend:`, tambahkan 2 baris:

```yaml
backend:
  name: github
  branch: main
  repo: opus-io/Tech-Link
  base_url: https://oauth.decap-cms.netlify.app
  auth_endpoint: /auth
```

- Di bagian paling bawah, tambahkan:

```yaml
site_url: https://opus-io.github.io/Tech-Link/
display_url: https://opus-io.github.io/Tech-Link/
```

### 8. Selesai! Buka https://opus-io.github.io/Tech-Link/admin/
- Click "Login with GitHub"
- Authorize app
- Admin panel muncul!

---

## 📝 Cara Pakai Admin Panel

### Tambah Product Baru:
1. Buka `/admin/`
2. Click "Products" di sidebar
3. Click "New Product"
4. Isi form
5. Click "Publish"
6. ✅ Auto commit ke GitHub
7. Website update dalam 1-2 menit

### Edit Product:
1. Click product yang mau diedit
2. Ubah field
3. Click "Publish"

### Hapus Product:
1. Click product
2. Click "Delete entry"

---

## ✅ File Structure Saat Ini:

```
Tech-Link/
├── public/
│   └── admin/
│       ├── index.html     ← Decap CMS admin panel
│       └── config.yml     ← Collection config
├── content/
│   └── products/
│       ├── mechanical-keyboard-65.json
│       └── filosofi-teras.json
├── src/
│   └── data/
│       └── products.ts    ← Load JSON files dynamically
├── .github/workflows/deploy.yml
└── ...
```

---

Sudah selesai! Cuma 5 langkah di atas, admin panel langsung bisa dipakai. Report progress! 👍
