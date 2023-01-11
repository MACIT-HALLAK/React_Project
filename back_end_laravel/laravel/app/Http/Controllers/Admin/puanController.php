<?php

namespace App\Http\Controllers\Admin;

use App\Models\puan;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class puanController extends Controller
{
    public function puanlama(Request $request)
    {
        $result = puan::insert([

            "user_id" => $request->user_id,
            "puan" => $request->puan,

        ]);
        if ($result) {
            return 'data inserted';
        } else {
            return 'error';
        }
    }

    public function puanGetir($ID)
    {
        $id = $ID;
        $result = puan::where('user_id', $id)->get();

        return $result[0]->puan;
    }

    public function puanUpdate($userId, $puan)
    {
        $result = puan::where('user_id', $userId)->update(['puan' => $puan]);
        if ($result) {
            return 'updated';
        }
    }
}
