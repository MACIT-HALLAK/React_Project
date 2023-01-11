<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class sorular extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function dersler_sorular()
    {
        return $this->belongsTo(Dersler::class);
    }
    public function siniflar_sorular()
    {
        return $this->belongsTo(siniflar::class);
    }
}
