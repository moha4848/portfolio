<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Visitor;

class VisitorController extends Controller
{
    public function track(Request $request)
    {
        $visitor = Visitor::create([
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
            'visited_at' => now(),
        ]);

        return response()->json(['message' => 'Visit tracked successfully', 'visitor' => $visitor], 201);
    }
}
