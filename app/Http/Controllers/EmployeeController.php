<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends BaseController
{
    public function index () 
    {
        return BaseController::send_response(Employee::all(), 'Success');
    }

    public function show ($id) 
    {
        return BaseController::send_response(Employee::find($id), 'Success');
    }

    public function store (Request $request) 
    {
        $request->validate([
            'date_of_birth' => 'required|date',
            'part_time' => 'required',
            'salary' => 'required|numeric',
            'user_id' => 'required|integer|numeric'
        ]);
        return BaseController::send_response(Employee::create($request->all()), 'Success, created', 201);
    }

    public function update (Request $request, $id) 
    {
        $request->validate([
            'date_of_birth' => 'required|date',
            'part_time' => 'required', // TODO
            'salary' => 'required|numeric',
            'user_id' => 'required|integer|numeric'
        ]);
        $employee = Employee::find($id);
        $employee->date_of_birth = $request->input('date_of_birth');
        $employee->salary = $request->input('salary');
        $employee->user_id = $request->input('user_id');
        return BaseController::send_response($employee->update(), 'Success, updated');
    }

    public function destroy ($id) 
    {
        return BaseController::send_response(Employee::destroy($id), 'Success, deleted');
    }
}
