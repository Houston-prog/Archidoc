<?php

namespace App\Http\Controllers;

use App\Models\Locationemp;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class EmplacementController extends Controller
{
    public function store (Request $request): RedirectResponse
    {
        $request->validate([
            'magasin' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);

        Locationemp::create([
            'magasin' => $request->input('magasin'),
            'description' => $request->input('description'),
            'user_id' => Auth::user()->id,
        ]);

        return redirect()->route('emplacement.view')->with([
            'toastMessage' => [
                'type' => 'success',
                'message' => 'Emplacement créé avec succès.'
            ]
        ]);
    }

    public function view (Request $request): Response
    {
        return Inertia::render('Creation/Emplacement');
    }
}
