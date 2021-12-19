<?php

use App\Models\Department;
use App\Models\Employee;
use App\Models\Product;
use App\Models\ProductType;
use App\Models\Role;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('WelcomePage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'products' => Product::all()
    ]);
})->name('home');

Route::get('/about-us', function () {
    return Inertia::render('AboutUs', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('about-us');

Route::get('/cart', function () {
    return Inertia::render('ShoppingCart', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('cart');

Route::get('product-page/{id}', function (int $id) {
    return Inertia::render('ProductPage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'product' => Product::find($id)
    ]);
})->name('product-page');

Route::group(['middleware' => ['auth:sanctum']], function () {
   Route::get('/dashboard', function () {
       return Inertia::render('Dashboard', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register')
       ]);
   })->name('dashboard');
   
   Route::get('authenticated/departments', function () {
       return Inertia::render('authenticated/DepartmentsPage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'departments' => Department::all()
       ]);
   })->name('departments');
   
   Route::get('authenticated/employees', function () {
       return Inertia::render('authenticated/EmployeesPage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'employees' => Employee::all()
       ]);
   })->name('employees');
   
   Route::get('authenticated/products', function () {
       return Inertia::render('authenticated/ProductsPage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'products' => Product::all()
       ]);
   })->name('products');
   
   Route::get('authenticated/product-types', function () {
       return Inertia::render('authenticated/ProductTypesPage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'productTypes' => ProductType::all()
       ]);
   })->name('productTypes');
   
   Route::get('authenticated/roles', function () {
       return Inertia::render('authenticated/RolesPage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'roles' => Role::all()
       ]);
   })->name('roles');
   
   Route::get('authenticated/users', function () {
       return Inertia::render('authenticated/UsersPage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'users' => User::all()
       ]);
   })->name('users');
});