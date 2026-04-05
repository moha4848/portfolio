<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Visitor;

class VisitorController extends Controller
{
    public function track(Request $request)
    {
        $ip = $request->ip();
        
        // Default values
        $geo = [
            'city' => null,
            'region' => null,
            'country' => null,
            'country_code' => null,
            'continent' => null
        ];

        // Fetch Geo-location from external API (ip-api.com)
        try {
            if ($ip !== '127.0.0.1' && $ip !== '::1') {
                $response = \Illuminate\Support\Facades\Http::get("http://ip-api.com/json/{$ip}?fields=status,message,continent,country,countryCode,regionName,city");
                if ($response->successful() && $response->json('status') === 'success') {
                    $geo = [
                        'city' => $response->json('city'),
                        'region' => $response->json('regionName'),
                        'country' => $response->json('country'),
                        'country_code' => $response->json('countryCode'),
                        'continent' => $response->json('continent')
                    ];
                }
            }
        } catch (\Exception $e) {
            \Illuminate\Support\Facades\Log::error("Geo-tracking error: " . $e->getMessage());
        }

        $visitor = Visitor::create(array_merge([
            'ip_address' => $ip,
            'user_agent' => $request->userAgent(),
            'visited_at' => now(),
        ], $geo));

        return response()->json(['message' => 'Visit tracked successfully', 'visitor' => $visitor], 201);
    }
}
