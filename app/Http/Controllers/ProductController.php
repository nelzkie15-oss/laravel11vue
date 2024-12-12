<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
     {
        $products = Product::all();
        return Inertia::render('Main/Product/index', ['products' => $products]);
     }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Main/Product/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
             'name' => 'required|string|max:255',
             'price' => 'required|integer',
        ]);

        Product::create([
            'name' => $request->name,
            'price' => $request->price,
        ]);

        return redirect()->to('/products')->with('message', 'Product created Successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return Inertia::render('Main/Product/show', ['product' => $product]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        return Inertia::render('Main/Product/edit', ['product' => $product]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
