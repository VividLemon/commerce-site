<?php

namespace App\Http\Controllers;

use App\Models\Department;
use Illuminate\Http\Request;

class DepartmentController extends BaseController
{
    public function index () 
    {
        return BaseController::send_response(Department::all(), 'Success');
    }

    public function show ($id) 
    {
        return BaseController::send_response(Department::find($id), 'Success');
    }

    public function store (Request $request) 
    {
        $request->validate([
            'staff_count' => 'required|integer|numeric',
            'manager_id' => 'required|integer|numeric'
        ]);
        return BaseController::send_response(Department::create($request->all()), 'Success, created', 201);
    }

    public function update (Request $request, $id) 
    {
        $request->validate([
            'staff_count' => 'required|integer|numeric',
            'manager_id' => 'required|integer|numeric'
        ]);
        $department = Department::find($id);
        $department->staff_count = $request->input('staff_count');
        $department->manager_id = $request->input('manager_id');
        return BaseController::send_response($department->update(), 'Success, updated');
    }

    public function destroy ($id) 
    {
        return BaseController::send_response(Department::destroy($id), 'Success, deleted');
    }
}
