<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('armadas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('merk_id');
            $table->date('tanggal_pajak');
            $table->string('no_polisi');

            $table->smallInteger('kapasitas');
            $table->string('bahan_bakar');
            $table->string('tipe_transmisi');

            $table->string('tahun_perolehan');
            $table->bigInteger('harga_satuan');
            $table->bigInteger('harga_sewa');
            $table->binary('poto_kendaraan');


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('armadas');
    }
};
