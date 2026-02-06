<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Dossiersrh extends Model
{
    // protected fillable
    protected $fillable = [
        'type_document',
        'name',
        'emplacement',
        'emplacement2',
        'rayon',
        'travee',
        'cote',
        'format',
        'accesgroup',
        'user_id',
        'filepath',
    ];
}
