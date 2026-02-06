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
        Schema::create('accreditations', function (Blueprint $table) {
            $table->id();
            $table->string('type_cre')->nullable();
            $table->string('type_mod')->nullable();
            $table->string('type_sup')->nullable();
            $table->string('doc_cre')->nullable();
            $table->string('doc_mod')->nullable();
            $table->string('doc_sup')->nullable();
            $table->string('emp_cre')->nullable();
            $table->string('emp_mod')->nullable();
            $table->string('emp_sup')->nullable();
            $table->string('dep_cre')->nullable();
            $table->string('dep_mod')->nullable();
            $table->string('dep_sup')->nullable();
            $table->string('con_cre')->nullable();
            $table->string('con_mod')->nullable();
            $table->string('con_sup')->nullable();

            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('accreditations');
    }
};
