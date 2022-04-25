# Tutorial Bang

## Tools

-   PHP (https://www.php.net/)
-   Laravel (https://laravel.com/docs/9.x/installation)
-   Webserver (http://www.apache.org/)
-   Composer (https://getcomposer.org/)
-   Relational Database (mariadb/mysql/postgresql)
-   NodeJS (https://nodejs.org/)

## Setup Project

### Clone Repository

1. Clone atau download repository ini  
   `git clone https://github.com/Drithh/rental-mobil.git`
2. Buka folder project
3. Buka Terminal atau command prompt
4. Ketik `composer install`

### Setup file .env

1. Copy file .env.example ke .env
2. Edit file .env terutama bagian database configuration, jika menggunakan mysql maka default-nya seperti dibawah ini
    ```
     DB_CONNECTION=mysql
     DB_HOST=127.0.0.1
     DB_PORT=3306
     DB_DATABASE=rental_mobil
     DB_USERNAME=root
     DB_PASSWORD=
    ```
    Pastikan database `rental_mobil` sudah dibuat sebelumnya
3. Ketik `php artisan migrate:fresh --seed`

### Jalankan Project

1. ketik `php artisan key:generate`
2. ketik `php artisan serve`

Setelah semua sudah tersetting, seharusnya website sudah jalan dan bisa diakses di http://127.0.0.1:8000 atau http://localhost:8000

### Install Front End

1. Ketik `npm install`
2. Buka file .env ubah nilai `WEBSERVER_URL` sesuai dengan alamat yang server yang tadi diberikan (contoh: http://127.0.0.1:8000)
3. Ketik `npm run dev` (compile) atau `npm run watch` (compile setiap ada update). pastikan `php artisan serve` sudah berjalan di terminal lain.
