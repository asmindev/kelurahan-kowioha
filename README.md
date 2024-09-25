![App Screenshot](https://socialify.git.ci/asmindev/kelurahan-kowioha/image?description=1&language=1&name=1&owner=1&pattern=Plus&stargazers=1&theme=Light)

# Kelurahan Kowioha

**Kelurahan Kowioha** adalah aplikasi berbasis web yang dirancang untuk membantu administrasi dan pengelolaan data warga di Kelurahan Kowioha. Aplikasi ini memberikan kemudahan dalam mengelola data warga, keluarga, serta statistik penduduk berdasarkan struktur RT/RW. Aplikasi ini dibangun menggunakan Laravel untuk backend dan React untuk frontend, dengan Inertia.js sebagai penghubung antara keduanya.

## Fitur Utama

-   Pengelolaan data warga berdasarkan RT/RW.
-   Statistik jumlah laki-laki dan perempuan per RT/RW.
-   Pengelolaan data kepala keluarga.
-   Pengelolaan Berita dan Kegiatan dan Administrasi Kelurahan

## Teknologi yang Digunakan

-   **Laravel**: Framework PHP untuk backend.
-   **Filament**: Admin Panel Dashboard.
-   **React**: Library JavaScript untuk frontend.
-   **Inertia.js**: Alat untuk komunikasi antara Laravel dan React.
-   **MySQL**: Database untuk menyimpan data warga.

## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```

## Langkah Instalasi

### 1. Clone Repository

Clone repository dari GitHub ke direktori lokal:

```bash
git clone https://github.com/asmindev/kelurahan-kowioha.git
```

### 2. Masuk ke Direktori Proyek

Navigasi ke direktori proyek:

```bash
cd kelurahan-kowioha
```

### 3. Install Dependencies

Install dependencies PHP menggunakan Composer dan dependencies JavaScript menggunakan NPM:

```bash
composer install
npm install
```

### 4. Salin File Konfigurasi `.env`

Buat file `.env` dengan menyalin dari template `.env`.example:

```bash
cp .env.example .env

```

### 5. Generate Application Key

Generate application key untuk Laravel:

```bash
php artisan key:generate

```

### 6. Konfigurasi Database

Edit file `.env` untuk mengatur konfigurasi database, contohnya:

```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nama_database
DB_USERNAME=username
DB_PASSWORD=password
```

### 7. Migrasi Database

Jalankan migrasi untuk membuat tabel di database:

```bash
php artisan migrate # seed available
```

### 8. Build Frontend

Compile assets frontend menggunakan Laravel Mix:

```bash
npm run dev
```

Untuk build produksi:

```bash
npm run build
```

### 9. Jalankan Server

Jalankan server Laravel:

```bash
php artisan serve
```
