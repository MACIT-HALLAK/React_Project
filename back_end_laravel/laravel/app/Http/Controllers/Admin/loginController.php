<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Models\users;

use Illuminate\Http\Request;

use function PHPUnit\Framework\isEmpty;

class loginController extends Controller
{
    public function login($email, $password)
    {
        $result = users::where(['email' => $email, 'password' => $password])->get();


        if (!$result->isEmpty()) {
            return [$result[0]->id,$result[0]->role];
        } else {
            return 0;
        }

    }

        // $validated = $request->validate([
        //     'email' => 'required',
        //     'password' => 'required'
        // ]);
        // 
        // if (Auth::attempt(['email' => $email, 'password' => $password])) {
        //     return redirect("/");
        // } else {
        //     return redirect()->back();
        // }
    
}
