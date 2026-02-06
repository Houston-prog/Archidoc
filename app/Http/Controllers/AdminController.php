<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function showaccount(): Response
    {
        $accounts = User::paginate(10);

        return Inertia::render('Administration/ListAccount', [
            'lists' => $accounts
        ]);
    }
}
