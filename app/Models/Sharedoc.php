<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sharedoc extends Model
{
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
        'filepath',
        'share_with',
        'note',
        'user_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
