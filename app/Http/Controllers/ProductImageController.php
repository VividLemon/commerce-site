<?php

namespace App\Http\Controllers;

use App\Models\ProductImage;
use Illuminate\Http\Request;

class ProductImageController extends BaseController
{
    public function index () 
    {
        return BaseController::send_response(ProductImage::all(), 'Success');
    }

    public function show ($id) 
    {
        return BaseController::send_response(ProductImage::find($id), 'Success');
    }

    public function store (Request $request) 
    {
        $request->validate([
            'image_path' => 'required|url',
            'product_id' => 'required|numeric|integer'
        ]);
        return BaseController::send_response(ProductImage::create($request->all()), 'Success, created', 201);
    }

    public function update (Request $request, $id) 
    {
        $request->validate([
            'image_path' => 'required|url',
            'product_id' => 'required|numeric|integer'
        ]);
        $product_image = ProductImage::find($id);
        $product_image->image_path = $request->input('image_path');
        $product_image->product_id = $request->input('product_id');
        return BaseController::send_response($product_image->update(), 'Success, updated');
    }

    public function destroy ($id) 
    {
        return BaseController::send_response(ProductImage::destroy($id), 'Success, deleted');
    }
}
