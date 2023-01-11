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
        Schema::create('sorulars', function (Blueprint $table) {
            $table->id();
            $table->integer('ders_id');
            $table->integer('sinif_id');
            $table->text('soru');
            $table->string('sec1');
            $table->string('sec2');
            $table->string('sec3');
            $table->string('cevap');
            $table->text('cozumyontem');

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
        Schema::dropIfExists('sorulars');
    }
};
