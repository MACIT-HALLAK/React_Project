<?php

namespace App\Http\Controllers\Admin;
use App\Models\sorular;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class dersExampleController extends Controller
{
    public function sorularGetir(Request $request)
    {
        $result = sorular::all();
        return $result;
    }
}
