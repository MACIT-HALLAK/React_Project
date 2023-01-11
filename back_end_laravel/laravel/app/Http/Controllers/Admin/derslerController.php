<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Dersler;

class derslerController extends Controller
{
    public function dersEkle(Request $request){
        $result = Dersler::insert([
  
              "dersAdi"=>$request->dersAdi,
              "dersAciklama"=>$request->dersAciklama,
              "sinifAdi"=>$request->sinifAdi,
  
          ]);
          if($result){
              return 'data inserted';
          }else
          {return 'error';}
      }
}
