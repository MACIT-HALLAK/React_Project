<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Dersler;
use Illuminate\Http\Request;

class cartController extends Controller
{
    public function cartGetir()
    {
        $result = Dersler::all();
        return $result;
    }
}
