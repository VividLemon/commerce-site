<?php

use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\MailController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductImageController;
use App\Http\Controllers\ProductTypeController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/test', function () {
    echo 'abc';
});

// Protected
Route::group(['middleware' => ['auth:sanctum']], function () {
    // Mails TODO
    Route::get('mails', [MailController::class, 'index']);
    Route::get('mails/{id}', [MailController::class, 'show']);
    Route::post('mails', [MailController::class, 'store']);
    Route::put('mails', [MailController::class, 'update']);
    Route::delete('mails/{id}', [MailController::class, 'destroy']);
    // Departments
    Route::post('departments', [DepartmentController::class, 'store']);
    Route::put('departments', [DepartmentController::class, 'update']);
    Route::delete('departments/{id}', [DepartmentController::class, 'destroy']);
    // Employees
    Route::post('employees', [EmployeeController::class, 'store']);
    Route::put('employees', [EmployeeController::class, 'update']);
    Route::delete('employees/{id}', [EmployeeController::class, 'destroy']);
    // Products
    Route::post('products', [ProductController::class, 'store']);
    Route::put('products', [ProductController::class, 'update']);
    Route::delete('products/{id}', [ProductController::class, 'destroy']);
    // Product images
    Route::post('productImages', [ProductImageController::class, 'store']);
    Route::put('productImages', [ProductImageController::class, 'update']);
    Route::delete('productImages/{id}', [ProductImageController::class, 'destroy']);
    // Product Types
    Route::post('productTypes', [ProductTypeController::class, 'store']);
    Route::put('productTypes', [ProductTypeController::class, 'update']);
    Route::delete('productTypes/{id}', [ProductTypeController::class, 'destroy']);
    // Roles
    Route::post('roles', [RoleController::class, 'store']);
    Route::put('roles', [RoleController::class, 'update']);
    Route::delete('roles/{id}', [RoleController::class, 'destroy']);
    // Users
    Route::get('users', [UserController::class, 'index']);
    Route::get('users/{id}', [UserController::class, 'show']);
    Route::post('users', [UserController::class, 'store']);
    Route::put('users', [UserController::class, 'update']);
    Route::delete('users/{id}', [UserController::class, 'destroy']);
});

// Departments
Route::get('departments', [DepartmentController::class, 'index']);
Route::get('departments/{id}', [DepartmentController::class, 'show']);

// Employees
Route::get('employees', [EmployeeController::class, 'index']);
Route::get('employees/{id}', [EmployeeController::class, 'show']);

// Products
Route::get('products', [ProductController::class, 'index']);
Route::get('products/{id}', [ProductController::class, 'show']);

// ProductImages
Route::get('productImages', [ProductImageController::class, 'index']);
Route::get('productImages/{id}', [ProductImageController::class, 'show']);

// ProductTypes
Route::get('productTypes', [ProductTypeController::class, 'index']);
Route::get('productTypes/{id}', [ProductTypeController::class, 'show']);

// Roles
Route::get('roles', [RoleController::class, 'index']);
Route::get('roles/{id}', [RoleController::class, 'show']);
