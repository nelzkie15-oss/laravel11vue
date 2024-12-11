<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class MainController extends Controller
{
    public function index(){
        return Inertia::render('Main/index');
    }

    public function aboutUs(){
        return Inertia::render('Main/aboutus',['title' => 'About Us']);
    }

    public function contactUs(){
        return Inertia::render('Main/contactus');
    }
}
