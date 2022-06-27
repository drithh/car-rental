<?php

namespace App\Http\Controllers;

use App\Models\support;
use Illuminate\Http\Request;

class SupportController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $support = new support();
        $support->first_name = $request->firstName;
        $support->last_name = $request->lastName;
        $support->email = $request->email;
        $support->category = $request->category;
        $support->message = $request->message;
        $support->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\support  $support
     * @return \Illuminate\Http\Response
     */
    public function show(support $support)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\support  $support
     * @return \Illuminate\Http\Response
     */
    public function edit(support $support)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\support  $support
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, support $support)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\support  $support
     * @return \Illuminate\Http\Response
     */
    public function destroy(support $support)
    {
        //
    }
}
