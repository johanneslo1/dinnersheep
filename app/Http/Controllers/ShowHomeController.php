<?php


namespace App\Http\Controllers;


use Inertia\Inertia;

final class ShowHomeController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Home');
    }
}
