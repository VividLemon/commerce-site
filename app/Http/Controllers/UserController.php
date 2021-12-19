<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends BaseController
{
    public function index ()
    {
        return BaseController::send_response(User::all(), 'Success');
    }

    public function show ($id) 
    {
        return BaseController::send_response(User::find($id), 'Success');
    }

    public function store (Request $request) 
    {
        $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6',
            'role_id' => 'required|numeric|integer'
        ]);
        return BaseController::send_response(User::create(
            [
                'name' => $request->input('name'), 
                'email' => $request->input('email'), 
                'password' => Hash::make($request->input('password')),
                'role_id' => $request->input('role_id')
            ]
        ), 'Success, created', 201);
    }

    public function update (Request $request, $id) 
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique',
            'password' => 'required|min:6',
            'role_id' => 'required|numeric|integer'
        ]);
        $user = User::find($id);
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = Hash::make($request->input('password'), ['rounds' => 15]);
        $user->role_id = $request->input('role_id');
        return BaseController::send_response($user->update(), 'Success, updated');
    }

    public function destroy ($id)
    {
        return BaseController::send_response(User::destroy($id), 'Success, deleted');
    }
}
