<?php

namespace App\Http\Controllers;

use App\Models\Docarchives;
use App\Models\Sharedoc;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class ShareController extends Controller
{
    public function senddoc($id): Response
    {
        $elements = Docarchives::findOrFail($id);

        // recuperer les données avec la relation chargée
        $documents = Docarchives::with('user')->get();

        // Appliquer unique() sur la collection pour supprimer les doublons, basé sur l'attribut id
        $uniqueusers = $documents->unique('name');

        // reinitialiser les clés de la collection (Optionnel mais recommandé)
        $uniqueusers = $uniqueusers->values()->all();

        if (!$elements) {
            // Handle case where item is not found, e.g., redirect or show 404
            abort(404);
        }

        return Inertia::render('Consultation/Restreintes/Senddoc', [
            'elements' => $elements,
            'documents' => $uniqueusers,
            'paths' => Storage::url($elements->filepath)
        ]);
    }

    public function store (Request $request): RedirectResponse
    {
        $request->validate([
            'typearchive'=> 'required|string|max:255',
            'date_doc' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'format' => 'required|string|max:255',
            'emplacement' => 'required|string|max:255',
            'emplacement2' => 'required|string|max:255',
            'rayon' => 'nullable|string|max:255',
            'travee' => 'nullable|string|max:255',
            'cote' => 'nullable|string|max:255',
            'departement' => 'required|string|max:255',
            'note' => 'nullable|string|max:255',
            'share_with' => 'nullable|string|max:255',
            'filepath' => ['nullable', 'file', 'mimes:pdf', 'max:100000240'] // 100GB max,
        ]);

        // $filepath = $request->file('filepath')->store('folders', 'public');

        //Docarchives::create($validateData + ['filepath' => $filepath]);

        Sharedoc::create([
            'typearchive' => $request->typearchive,
            'date_doc' => $request->date_doc,
            'description' => $request->description,
            'format' => $request->input('format'),
            'emplacement' => $request->input('emplacement'),
            'emplacement2' => $request->input('emplacement2'),
            'rayon' => $request->input('rayon'),
            'travee' => $request->input('travee'),
            'cote' => $request->input('cote'),
            'departement' => $request->input('departement'),
            'user_id' => Auth::user()->id,
            'share_with' => $request->input('share_with'),
            'filepath' => $request->input('filepath'),
            'note' => $request->input('note'),
        ]);


        return redirect()->route('send.senddoc')->with([
            'toastMessage' => [
                'type' => 'success',
                'message' => 'Archive partagée avec succès.'
            ]
        ]);
    }

    public function sendview(): Response
    {
        $results = Sharedoc::paginate(10);

        return Inertia::render('Consultation/SendDoc', [
            'results' => $results
        ]);
    }
}
