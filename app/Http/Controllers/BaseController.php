<?php
namespace App\Http\Controllers;
use App\Http\Controllers\Controller as Controller;

class BaseController extends Controller
{
    public function send_response($data, $message, $code = 200)
    {
        $response = [
            'success' => true,
            'data' => $data,
            'message' => $message
        ];
        return response()->json($response, $code);
    }

    public function send_error($error, $error_messages = [], $code = 404)
    {
        $response = [
            'success' => false,
            'message' => $error,
        ];
        if(!empty($error_messages)){
            $response['data'] = $error_messages;
        }
        return response()->json($response, $code);
    }
}