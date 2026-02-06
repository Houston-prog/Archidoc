<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Accessgroup extends Model
{
    // protected fillable
    protected $fillable = [
        'sigle',
        'nom',
        'description',
        'sous_direction',
        'user_id'
    ];
}
