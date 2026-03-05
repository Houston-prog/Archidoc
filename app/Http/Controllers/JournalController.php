<?php

namespace App\Http\Controllers;

use App\Models\Docarchives;
use App\Models\Typedocs;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class JournalController extends Controller
{
    public function journalview(): Response
    {
        $type = Typedocs::latest()->get();

        return Inertia::render('Administration/Journal', [
            'types' => $type
        ]);
    }

    public function show(Request $request): Response
    {
        $description = $request->input('description');
        $typearchive = $request->input('typearchive');
        $date_doc = $request->input('date_doc');
        $created_at = $request->input('created_at');

        $query = Docarchives::query();

        if (Auth::check()) {
            // filter based on from fields
            if ($request->has('description') && $description) {
                $query->whereRaw('LOWER(description) LIKE ?', ['%' . mb_strtolower($description) . '%']);
            }

            if ($request->has('typearchive') && $typearchive) {
                $query->where('typearchive', 'like', '%' . $typearchive . '%');
            }

            if ($request->has('date_doc') && $date_doc) {
                $query->where('date_doc', 'like', '%' . $date_doc . '%');
            }

            if ($request->has('created_at') && $created_at) {
                $query->where('created_at', 'like', '%' . $created_at . '%');
            }

            // add more filter

            $results = $query->paginate(10);
        }

        return Inertia::render('Administration/Journal/JournalView', [
            'results' => $results,
            'searchParams' => $request->all()
        ]);
    }
}
