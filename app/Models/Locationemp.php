<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Locationemp extends Model
{
    // protected fillable
    protected $fillable = [
        'magasin',
        'description',
        'user_id'
    ];
}
