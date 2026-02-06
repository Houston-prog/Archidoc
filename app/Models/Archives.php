<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Archives extends Model
{
    // protected fillable
    protected $fillable = [
        'typearchive',
        'description',
        'datedoc',
        'emplacement',
        'emplacement2',
        'rayon',
        'travee',
        'cote',
        'format',
        'departement',
        'piece_jointe',
        'orientation',
        'zip_file',
        'user_id',
        'filepath',
    ];
}
