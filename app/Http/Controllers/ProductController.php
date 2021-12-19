<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends BaseController
{
    public function index () 
    {
        return BaseController::send_response(Product::all(), 'Success');
    }

    public function show ($id) 
    {
        return BaseController::send_response(Product::find($id), 'Success');
    }

    public function store (Request $request) 
    {
        $request->validate([
            'name' => 'required|max:255',
            'description' => 'required|max:2047',
            'price' => 'required|numeric',
            'photo' => 'required',
            'type_id' => 'required|numeric|integer'
        ]);
        return BaseController::send_response(Product::create(
            [
                'name' => $request->input('name'),
                'description' => $request->input('description'),
                'price' => $request->input('price'),
                // TODO see if this works. 
                'default_image_url' => Storage::putFile('product_photos', new File($request->file('photo'))),
                'type_id' => $request->input('type_id'),
            ]
        ), 'Success, created', 201);
    }

    public function update (Request $request, $id) 
    {
        $request->validate([
            'name' => 'required|max:255',
            'description' => 'required|max:2047',
            'price' => 'required|numeric',
            'default_image_url' => 'required',
            'type_id' => 'required|numeric|integer'
        ]);
        $product = Product::find($id);
        $product->name = $request->input('name');
        $product->description = $request->input('description');
        $product->price = $request->input('price');
        $product->default_image_url = Storage::putFile('product_photos', new File($request->file('photo')));
        $product->type_id = $request->input('type_id');
        return BaseController::send_response($product->update(), 'Success, updated');
    }

    public function destroy ($id) 
    {
        return BaseController::send_response(Product::destroy($id), 'Success, deleted');
    }
}
