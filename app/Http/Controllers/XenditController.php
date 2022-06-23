<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Http\Requests\StoreCartRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Xendit\Xendit;

class XenditController extends Controller
{
  private $token = 'xnd_development_yg408X6nXGkjKD0q2KIqhMR5nEVRug5OVg2rJrjLcO2YInQ82Ib0Gw4h3r6i9vX';

  public function getListVa()
  {
    Xendit::setApiKey($this->token);

    $getVaBanks = \Xendit\VirtualAccounts::getVABanks();

    return response()->json($getVaBanks);
  }

  public function createVA(Request $request)
  {
    Xendit::setApiKey($this->token);
    $params = [
      'external_id' => \uniqid(),
      'bank_code' => 'BNI',
      'name' => 'John Doe',

    ];

    $createVa = \Xendit\VirtualAccounts::create($params);

    return response()->json($createVa);
  }
}
