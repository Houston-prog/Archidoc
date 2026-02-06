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
        Schema::create('documents', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->string('date_doc');
            $table->string('nb_page')->nullable();
            $table->string('nature')->nullable();
            $table->string('orientation')->nullable();
            $table->string('description');
            $table->string('mots_cles')->nullable();
            $table->string('creation_dt')->default('now');
            $table->string('account');
            $table->string('emplacement');
            $table->string('emplacement_2');
            $table->string('departement');
            $table->string('zip_file')->nullable();
            $table->string('digital')->nullable();
            $table->string('code_chif')->nullable();
            $table->string('suivi_par')->nullable();
            $table->string('concu_pour')->nullable();
            $table->string('type_arh');

            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('documents');
    }
};
