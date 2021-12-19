<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;
    protected $fillable = [
        'part_time',
        'salary',
        'date_of_birth',
        'user_id'
    ];

    public function department () {
        return $this->belongsTo(Department::class);
    }

    public function user () {
        return $this->hasOne(User::class);
    }
}
