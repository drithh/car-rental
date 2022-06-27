<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Http\Requests\StoreCartRequest;
use App\Models\Booking_Armada;
use App\Models\Pembayaran;
use Carbon\Carbon;
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

  public function checkVA($id)
  {
    $checkVA = Pembayaran::where('booking_armada_id', $id)->first();
    return response()->json($checkVA);
  }

  public function createVA(Request $request)
  {
    Xendit::setApiKey($this->token);
    $params = [
      'external_id' => \uniqid(),
      'bank_code' => $request->bank_code,
      'name' => $request->user()->name,
      'expected_amount' => $request->harga_sewa,
      'is_closed' => true,
      'is_single_use' => true,
    ];

    $createVa = \Xendit\VirtualAccounts::create($params);



    $checkPembayaran = Pembayaran::where('booking_armada_id', $request->booking_armada_id)->first();
    if ($checkPembayaran) {
      $checkPembayaran->update([
        'booking_armada_id' => $request->booking_armada_id,
        'virtual_account' => $createVa['account_number'],
        'tanggal_bayar' => Carbon::now(),
        'jumlah_bayar' => $request->harga_sewa,
        'external_id' => $params['external_id'],
        'payment_channel' => $request->bank_code,
      ]);
    } else {
      $checkPembayaran = Pembayaran::create([
        'booking_armada_id' => $request->booking_armada_id,
        'tanggal_bayar' => Carbon::now(),
        'virtual_account' => $createVa['account_number'],
        'jumlah_bayar' => $request->harga_sewa,
        'external_id' => $params['external_id'],
        'payment_channel' => $request->bank_code,
      ]);
    }






    return response()->json($createVa);
  }

  public function callbackVA(Request $request)
  {
    $external_id = $request->external_id;

    $payment = Pembayaran::where('external_id', $external_id)->first();
    if ($payment) {
      Booking_Armada::where('id', $payment->booking_armada_id)->update([
        'keterangan' => 'Sudah Bayar',
      ]);
      return response()->json([
        'status' => 'success',
        'message' => 'Pembayaran Berhasil',
      ]);
    }

    return response()->json([
      'status' => 'failed',
      'message' => 'Pembayaran Gagal',
    ]);
  }
}
