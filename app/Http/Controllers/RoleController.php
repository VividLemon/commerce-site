<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;

class RoleController extends BaseController
{
    public function index () 
    {
        return BaseController::send_response(Role::all(), 'Success');
    }

    public function show ($id) 
    {
        return BaseController::send_response(Role::find($id), 'Success');
    }

    public function store (Request $request) 
    {
        $request->validate([
            'name' => 'required|max:255',
            'description' => 'required|max:2047'
        ]);
        return BaseController::send_response(Role::create($request->all()), 'Success, created', 201);
    }

    public function update (Request $request, $id) 
    {
        $request->validate([
            'name' => 'required|max:255',
            'description' => 'required|max:2047'
        ]);
        $role = Role::find($id);
        $role->name = $request->input('name');
        $role->description = $request->input('description');
        return BaseController::send_response($role->update(), 'Success, updated');
    }

    public function destroy ($id) 
    {
        return BaseController::send_response(Role::destroy($id), 'Success, deleted');
    }
}
