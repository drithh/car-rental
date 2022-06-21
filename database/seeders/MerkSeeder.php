<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MerkSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // sql file get contens
        $sql = file_get_contents(__DIR__ . '/../sql/merk.sql');
        DB::unprepared($sql);
    }
}
