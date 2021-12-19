<?php

namespace App\Http\Controllers;

use App\Models\Mail;
use Illuminate\Http\Request;

class MailController extends BaseController
{
    public function index ()
    {
        return BaseController::send_response(Mail::all(), 'Success');
    }

    public function show ($id) 
    {
        return BaseController::send_response(Mail::find($id), 'Success');
    }

    public function store (Request $request) 
    {
        $request->validate([
            'subject' => 'required|max:255',
            'content' => 'required|max:2047',
            'email' => 'required|email'
        ]);
        return BaseController::send_response(Mail::create($request->all()), 'Success, created', 201);
    }

    public function update (Request $request, $id) 
    {
        $request->validate([
            'subject' => 'required|max:255',
            'content' => 'required|max:2047',
            'email' => 'required|email'
        ]);
        $mail = Mail::find($id);
        $mail->subject = $request->input('subject');
        $mail->content = $request->input('content');
        $mail->email = $request->input('email');
        return BaseController::send_response($mail->update(), 'Success, updated');
    }

    public function destroy ($id) 
    {
        return BaseController::send_response(Mail::destroy($id), 'Success, deleted');
    }
}
