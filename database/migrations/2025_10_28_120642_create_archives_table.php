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
        Schema::create('archives', function (Blueprint $table) {
            $table->string('typearchive');
            $table->string('description');
            $table->string('date_doc');
            $table->string('emplacement');
            $table->string('emplacement2');
            $table->string('rayon')->nullable();
            $table->string('travee')->nullable();
            $table->string('cote')->nullable();
            $table->string('format');
            $table->string('departement');
            $table->string('piece_jointe')->nullable();
            $table->string('orientation')->nullable();
            $table->string('zip_file')->nullable();
            $table->string('filepath')->nullable();

            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('archives');
    }
};
