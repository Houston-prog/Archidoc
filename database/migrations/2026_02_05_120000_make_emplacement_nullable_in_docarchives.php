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
        Schema::table('docarchives', function (Blueprint $table) {
            // Make columns nullable (requires doctrine/dbal for change())
            $table->string('emplacement')->nullable()->change();
            $table->string('emplacement2')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('docarchives', function (Blueprint $table) {
            $table->string('emplacement')->nullable(false)->change();
            $table->string('emplacement2')->nullable(false)->change();
        });
    }
};
