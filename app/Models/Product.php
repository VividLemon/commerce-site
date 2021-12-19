<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'description',
        'price',
        'default_image_url',
        'type_id'
    ];

    public function product_image () 
    {
        return $this->hasMany(ProductImage::class);
    }

    public function product_type () 
    {
        return $this->hasOne(ProductType::class);
    }
}
