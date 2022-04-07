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
        Schema::create('booking__armadas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('armada_id');
            $table->foreignId('booking_id');

            $table->bigInteger('harga');
            $table->date('tanggal_pengembalian');
            $table->date('tanggal_harus_kembali');
            $table->date('tanggal_mulai');
            
            $table->string('durasi');
            $table->boolean('status')->default(false);
            $table->text('keterangan');

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
        Schema::dropIfExists('booking__armadas');
    }
};
