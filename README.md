# Fotoin Pictures - Website Marketing

Website statis profesional untuk layanan fotografi, videografi, dan event organization.

![Fotoin Pictures](https://img.shields.io/badge/Status-Ready-success)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)

## 📋 Deskripsi

Website marketing modern dan profesional untuk **Fotoin Pictures** yang menyediakan layanan:
- 📸 **Photography** - Wedding, Prewedding, Product, Portrait
- 🎥 **Videography** - Cinematic, Company Profile, Commercial
- 🎉 **Event Organization** - Wedding Planning, Corporate Events, Exhibition

## ✨ Fitur

- ✅ Design modern dan profesional
- ✅ Fully responsive (Desktop, Tablet, Mobile)
- ✅ Smooth scrolling navigation
- ✅ Portfolio gallery dengan filter
- ✅ Testimonial section
- ✅ Contact form
- ✅ Animated interactions
- ✅ SEO friendly
- ✅ Fast loading
- ✅ Clean code

## 🚀 Cara Menggunakan

### Metode 1: Buka Langsung (Paling Mudah)

1. Buka file `index.html` dengan double-click
2. Atau klik kanan → Open With → Browser pilihan Anda

### Metode 2: Live Server (Recommended untuk Development)

Jika menggunakan VS Code:

1. Install extension "Live Server" di VS Code
2. Klik kanan pada `index.html`
3. Pilih "Open with Live Server"
4. Website akan terbuka di `http://localhost:5500`

### Metode 3: Python HTTP Server

```bash
# Masuk ke folder project
cd e:\fotoin-pictures

# Python 3
python -m http.server 8000

# Buka browser ke http://localhost:8000
```

### Metode 4: Node.js HTTP Server

```bash
# Install http-server (sekali saja)
npm install -g http-server

# Jalankan server
http-server

# Buka browser ke http://localhost:8080
```

## 📁 Struktur Project

```
fotoin-pictures/
│
├── index.html              # Halaman utama
├── styles.css              # Styling website
├── script.js               # JavaScript interaktivity
├── README.md               # Dokumentasi (file ini)
│
├── context/
│   └── instrunctions.md    # Konteks project
│
└── assets/
    └── images/
        └── portfolio/      # Gambar portfolio
            ├── photo-1.jpg
            ├── photo-2.jpg
            ├── photo-3.jpg
            ├── video-1.jpg
            ├── video-2.jpg
            └── event-1.jpg
```

## 🎨 Kustomisasi

### 1. Mengganti Gambar Portfolio

Ganti file gambar di folder `assets/images/portfolio/` dengan foto Anda sendiri:
- Gunakan format JPG atau PNG
- Resolusi minimum: 1920x1080px
- Ukuran file maksimal: 2MB per gambar

### 2. Mengubah Warna Brand

Edit file `styles.css`, ubah variabel di bagian `:root`:

```css
:root {
    --primary-color: #D4AF37;    /* Warna utama (gold) */
    --secondary-color: #1a1a1a;  /* Warna sekunder (hitam) */
    --accent-color: #C9A961;     /* Warna aksen */
}
```

### 3. Mengubah Konten

Edit file `index.html` untuk mengubah:
- Nama perusahaan
- Deskripsi layanan
- Informasi kontak
- Testimoni
- dll

### 4. Menambah/Mengurangi Portfolio Item

Di file `index.html`, tambahkan atau hapus block:

```html
<div class="portfolio-item" data-category="photography">
    <div class="portfolio-image">
        <img src="assets/images/portfolio/your-image.jpg" alt="Description">
        <div class="portfolio-overlay">
            <h3>Project Name</h3>
            <p>Category</p>
        </div>
    </div>
</div>
```

## 📱 Responsif Breakpoints

- **Desktop**: > 968px
- **Tablet**: 768px - 968px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🔧 Teknologi yang Digunakan

- **HTML5** - Struktur website
- **CSS3** - Styling dan animasi
- **JavaScript (Vanilla)** - Interaktivitas
- **Google Fonts** - Typography (Poppins & Playfair Display)

## 📞 Kontak Form Integration

Form kontak saat ini menggunakan `alert()` untuk demo. Untuk integrasi dengan backend:

### Option 1: FormSpree (Paling Mudah)
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: EmailJS
```javascript
// Tambahkan EmailJS library dan konfigurasi
```

### Option 3: Custom Backend
Integrasikan dengan backend PHP, Node.js, atau Python

## 🌐 Deployment

### GitHub Pages (Gratis)

1. Push ke GitHub repository
2. Settings → Pages
3. Source: main branch
4. Save

### Netlify (Gratis)

1. Drag & drop folder ke Netlify
2. Custom domain (opsional)

### Vercel (Gratis)

```bash
npm i -g vercel
vercel
```

## 📊 Optimasi

### Untuk Loading Lebih Cepat:

1. **Compress Gambar**
   - Gunakan TinyPNG atau ImageOptim
   - Target: < 200KB per gambar

2. **Minify CSS & JS**
   - Gunakan tool online atau build tools

3. **Enable Caching**
   - Konfigurasi di server

4. **CDN**
   - Host gambar di CDN (Cloudinary, ImgIX)

## 🐛 Troubleshooting

### Gambar Tidak Muncul
- Pastikan path gambar benar
- Periksa nama file (case-sensitive)
- Cek apakah file ada di folder

### Form Tidak Bekerja
- Buka Console (F12) untuk error
- Pastikan JavaScript enabled
- Implementasikan backend untuk form submission

### Style Tidak Apply
- Clear browser cache (Ctrl + F5)
- Periksa path file CSS
- Cek console untuk errors

## 📈 TODO / Pengembangan Selanjutnya

- [ ] Integrasi contact form dengan backend
- [ ] Tambahkan blog section
- [ ] Image lightbox untuk portfolio
- [ ] Video player integration
- [ ] Multi-language support (ID/EN)
- [ ] Admin panel untuk manage content
- [ ] Booking system
- [ ] Payment gateway integration

## 📄 License

© 2026 Fotoin Pictures. All Rights Reserved.

## 🤝 Support

Untuk pertanyaan atau bantuan:
- Email: info@fotoinpictures.com
- Phone: +62 812-3456-7890

---

**Dibuat dengan ❤️ untuk Fotoin Pictures**

*Website ini siap untuk dipublish dan dapat langsung digunakan!*
