<?php

namespace App\Http\Controllers;

use App\Models\Accessgroup;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class GroupeController extends Controller
{
    public function store (Request $request): RedirectResponse
    {
        $request->validate([
            'sigle' => 'required|string|max:255',
            'nom' => 'required|string|max:255',
            'description' => 'nullable|string',
            'sous_direction' => 'nullable|string|max:255',
        ]);

        Accessgroup::create([
            'sigle' => $request->input('sigle'),
            'nom' => $request->input('nom'),
            'sous_direction' => $request->input('sous_direction'),
            'description' => $request->input('description'),
            'user_id' => Auth::user()->id,
        ]);

        return redirect()->route('groupeacces.view')->with([
            'toastMessage' => [
                'type' => 'success',
                'message' => 'Emplacement créé avec succès.'
            ]
        ]);
    }

    public function view (Request $request): Response
    {
        return Inertia::render('Creation/GroupAccess');
    }
}
