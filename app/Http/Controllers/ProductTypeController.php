<?php

namespace App\Http\Controllers;

use App\Models\ProductType;
use Illuminate\Http\Request;

class ProductTypeController extends BaseController
{
    public function index () 
    {
        return BaseController::send_response(ProductType::all(), 'Success');
    }

    public function show ($id) 
    {
        return BaseController::send_response(ProductType::find($id), 'Success');
    }

    public function store (Request $request) 
    {
        $request->validate([
            'name' => 'required|max:255',
            'description' => 'required|max:2047'
        ]);
        return BaseController::send_response(ProductType::create($request->all()), 'Success, created', 201);
    }

    public function update (Request $request, $id) 
    {
        $request->validate([
            'name' => 'required|max:255',
            'description' => 'required|max:2047'
        ]);
        $product_type = ProductType::find($id);
        $product_type->name = $request->input('name');
        $product_type->description = $request->input('description');
        return BaseController::send_response($product_type->update(), 'Success, updated');
    }

    public function destroy ($id) 
    {
        return BaseController::send_response(ProductType::destroy($id), 'Success, deleted');
    }
}
