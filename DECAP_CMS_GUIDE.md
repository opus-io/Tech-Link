# Custom Admin Panel ✅

**Decap CMS sudah diganti dengan custom admin panel!**

## Cara Pakai

### 1. Buat Token GitHub:
https://github.com/settings/tokens

**"Generate new token (classic)"**
- Note: `Tech-Link Admin`
- Scopes: centang **`repo`** (full control)
- **Generate** → **Copy token!**

### 2. Buka Admin Panel:
https://opus-io.github.io/Tech-Link/admin/

- Paste token → **LOGIN**
- Token tersimpan otomatis (gak perlu login lagi)

### 3. Manage Products:
- **Tambah:** Click "+ NEW PRODUCT" → isi form → PUBLISH
- **Edit:** Click "EDIT" → ubah → PUBLISH
- **Hapus:** Click "DEL" → confirm

### Cara Kerja:
```
Admin panel (browser)
    ↓ (GitHub API + token)
Commit JSON file ke repo
    ↓
GitHub Actions rebuild
    ↓
Website update (~1 menit)
```

### Catatan:
- Token disimpan di localStorage browser
- Aman untuk personal use
- Gak perlu setup OAuth / proxy apapun
- Bisa akses dari HP juga
