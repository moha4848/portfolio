<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProfileSetting;

class ProfileSettingController extends Controller
{
    public function index()
    {
        $settings = ProfileSetting::pluck('value', 'key');
        return response()->json($settings);
    }

    public function update(Request $request)
    {
        $data = $request->validate([
            'role' => 'nullable|string',
            'phone' => 'nullable|string',
            'email' => 'nullable|email',
            'address' => 'nullable|string',
            'about' => 'nullable|string',
            'school' => 'nullable|string',
        ]);

        foreach ($data as $key => $value) {
            ProfileSetting::updateOrCreate(['key' => $key], ['value' => $value]);
        }

        return redirect()->back()->with('success', 'Profile updated successfully!');
    }
}
