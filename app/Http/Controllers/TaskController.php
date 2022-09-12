<?php

namespace App\Http\Controllers;

use App\Http\Resources\TaskResource;
use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        $selectedToys = $request->query("selectedToys");
        $selectedCategories = $request->query("selectedCategories");
        // $tasks = Task::whereIn("id",);
//        clock()->info($selectedToys);
//        clock()->info($selectedCategories);
        // $query = Task;

        $tasks = Task::where(function ($query) use ($selectedToys, $selectedCategories) {

            if ($selectedToys && is_array($selectedToys)) {
                clock()->info($selectedToys);

                $query->whereHas('toys', function ($query) use ($selectedToys) {
                    $query->whereIn('toy_id', $selectedToys);
                });
            }

            if ($selectedCategories && is_array($selectedCategories)) {
                clock()->info($selectedCategories);

                $query->whereHas('categories', function ($query) use ($selectedCategories) {
                    $query->whereIn('category_id', $selectedCategories);
                });
            }
        })->get();


//
//        foreach ($request as $key => $value) {
//            $query->when(is_array($value), function($query)
//            {
//                return $query->whereIn($key, $value);
//            }, function($query) use($key, $value)
//            {
//                return $query->where($key, $value);
//            });
//        }

        // $tasks = $query->get();
//        $tasks = Task::whereHas('toys', function($query) use ($selectedToys) {
//            /**
//             * Now querying the Tags relation. So anything in this closure will query the Tags
//             * relation, but outside of the closure, you're back to querying the Articles.
//             */
//            $query->whereIn('id', $selectedToys);
//        })->get();
        clock()->info($tasks);
        return TaskResource::collection($tasks);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Task $task
     * @return \Illuminate\Http\Response
     */
    public function show(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Task $task
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Task $task)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Task $task
     * @return \Illuminate\Http\Response
     */
    public function destroy(Task $task)
    {
        //
    }
}
