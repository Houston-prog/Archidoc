<?php

namespace App\Http\Controllers;

use App\Models\Typedocs;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class TypeArchiveController extends Controller
{
    public function store (Request $request): RedirectResponse
    {
        $request->validate([
            'intitule' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);

        Typedocs::create([
            'intitule' => $request->input('intitule'),
            'dua' => $request->input('dua'),
            'user_id' => Auth::user()->id,
        ]);

        return redirect()->route('typearchives.view')->with([
            'toastMessage' => [
                'type' => 'success',
                'message' => 'Type d\'archive créé avec succès.'
            ]
        ]);
    }

    public function view (Request $request): Response
    {
        return Inertia::render('Creation/TypeArchives');
    }
}
