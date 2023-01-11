<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Dersler;
use Illuminate\Http\Request;

class dersGetirController extends Controller
{
    public function dersGetir(Request $request)
    {
        $result = Dersler::all();
        return $result;
    }
}
