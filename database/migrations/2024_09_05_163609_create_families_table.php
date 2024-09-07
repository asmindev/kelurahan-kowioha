<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('families', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name');
            $table->enum("status", ["kepala keluarga", 'suami', "istri", "anak", "saudara"]);
            $table->enum("gender", ["laki-laki", "perempuan"]);
            $table->date('birth_date')->nullable();
            $table->string('nik')->unique()->nullable();
            $table->foreignUuid('citizen_id')->references('id')->on('citizens')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('families');
    }
};
