<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

class Operateur extends Authenticatable
{
    use HasApiTokens;

    protected $primaryKey = 'operateur_id';

    protected $fillable = [
        'login',
        'password',
        'role',
    ];

    protected $hidden = [
        'password',
    ];
}
