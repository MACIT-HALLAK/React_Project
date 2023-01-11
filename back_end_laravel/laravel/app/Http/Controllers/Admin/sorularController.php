<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\sorular;
use Illuminate\Http\Request;

class sorularController extends Controller
{
    public function soruEkle(Request $request){
        $result = sorular::insert([
  
              "ders_id"=>$request->ders_id,
              "sinif_id"=>$request->sinif_id,
              "soru"=>$request->soru,
              "sec1"=>$request->sec1,
              "sec2"=>$request->sec2,
              "sec3"=>$request->sec3,
              "cevap"=>$request->cevap,
              "cozumyontem"=>$request->cozumyontem
              
          ]);
          if($result){
              return 'data inserted';
          }else
          {return 'error';}
      }
}
