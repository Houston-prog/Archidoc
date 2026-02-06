<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Docarchives extends Model
{
    use HasFactory;

    // protected fillable
    protected $fillable = [
        'typearchive',
        'description',
        'date_doc',
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

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
