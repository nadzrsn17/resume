# Resume Website — Template Elegan (Dark + Luxury Accents)

Ringkasan:
- Tema gelap dengan aksen emas / rose-gold
- Tipografi: Playfair Display (judul), Inter (isi)
- Animasi halus: fade-in on scroll, tilt 3D ringan untuk kartu profil, skill bar animasi, modal portofolio
- Responsif dan minimalis

Cara pakai:
1. Simpan file `index.html`, `styles.css`, dan `script.js` di folder proyek.
2. Buka `index.html` di browser.
3. Ganti teks placeholder dengan data Anda (nama, ringkasan, pengalaman, tautan, gambar).
4. Ganti avatar SVG dengan tag `<img src="path/to/photo.jpg" alt="Nama Anda">` jika ingin foto nyata.
5. Untuk mengubah warna aksen, edit variabel di bagian `:root` pada `styles.css` (`--accent` dan `--accent-2`).

Kustomisasi lanjutan:
- Tambahkan PDF CV: perbarui tautan "Unduh CV (PDF)" di `index.html`.
- Tambah item portofolio: duplikat `.portfolio-item` dan tambahkan atribut `data-title` & `data-desc`.
- Integrasikan form backend: ganti handler form dengan endpoint Anda; hapus `onsubmit="return false;"` dan tambahkan fetch/AJAX sesuai kebutuhan.

Catatan aksesibilitas:
- Fokus keyboard pada elemen interaktif, modal bisa ditutup dengan Esc.
- Pastikan kontras teks & latar sesuai bila Anda mengubah warna.

Jika Anda ingin:
- Versi siap deploy (ZIP) atau memasukkan gambar placeholder berkualitas,
- Menambahkan halaman cetak (print CSS) untuk CV PDF,
- Mengonversi ke template statis (Jekyll / Hugo / Next.js),

beritahu saya dan saya bantu kodenya.