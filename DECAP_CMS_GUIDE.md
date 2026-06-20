# Decap CMS Setup Selesai! 🎉

## Cara Akses Admin Panel

Buka: https://opus-io.github.io/Tech-Link/admin/

Click **"Login with GitHub"** → Masukkan token → **Selesai!**

---

## 🔑 Setup Token GitHub (3 menit)

Sebelum bisa login, buat token dulu:

### 1. Buka halaman token GitHub:
https://github.com/settings/tokens

### 2. Click "Generate new token (classic)"

### 3. Isi:
| Field | Isi |
|-------|-----|
| **Note** | `Decap CMS - Tech-Link` |
| **Expiration** | `No expiration` (atau 90 hari) |
| **Scopes** | Centang: **`repo`** (full control) |

### 4. Scroll bawah, click "Generate token"

### 5. **Copy token yang muncul!** (kalo ilang, bikin lagi)

### 6. Buka admin panel:
https://opus-io.github.io/Tech-Link/admin/

### 7. Click "Login with GitHub"
### 8. Paste token
### 9. **Masuk!** 🎉

---

## 📝 Cara Pakai Admin Panel

### Tambah Product Baru:
1. Buka `/admin/`
2. Click **"Products"** di sidebar
3. Click **"New Product"**
4. Isi form:
   - Product Name
   - Image URL
   - Featured? (centang)
   - Badge, Tags, dll
   - Access Links (bisa tambah beberapa)
   - Variant (featured/standard)
5. Click **"Publish"**
6. ✅ Auto commit ke GitHub
7. Website update otomatis

### Edit Product:
1. Click product → Ubah → "Publish"

### Hapus Product:
1. Click product → "Delete entry"

---

## ✅ File Structure:

```
Tech-Link/
├── public/admin/
│   ├── index.html   ← Admin panel
│   └── config.yml   ← Form fields
├── content/products/
│   ├── mechanical-keyboard-65.json
│   └── filosofi-teras.json
├── src/data/products.ts  ← Load products dari JSON
└── .github/workflows/deploy.yml
```
