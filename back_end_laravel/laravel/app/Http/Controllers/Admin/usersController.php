<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\users;

class usersController extends Controller
{
    public function user(Request $request){
      $result = users::insert([

            "name"=>$request->name,
            "email"=>$request->email,
            "role"=>$request->role,
            "password"=>$request->password,

        ]);
        if($result){
            return 'data inserted';
        }else
        {return 'error';}
    }

    public function userArama(){
       $result = users::orderBy('id','desc')->first();
       if($result){
        return $result->id;
       }
       else {
        return 'error';
       }
          
      }
}
