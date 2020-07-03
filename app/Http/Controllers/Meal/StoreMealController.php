<?php
namespace App\Http\Controllers\Meal;

use App\Http\Controllers\Controller;
use App\Http\Requests\MealStoreRequest;
use App\Models\Meal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

final class StoreMealController extends Controller
{
    public function __invoke(MealStoreRequest $request)
    {
        $data = $request->validated();

        // Ändere Dezimaltrennzeichen
        $data['price'] = str_replace(',', '.', $data['price']);


        $meal = Meal::create(
            $request->merge($data)
                ->except('is_favorite')
        );

        if($request->is_favorite) {
            // Pflege die Beziehung
            DB::table('user_meal')->insert([
                'user_id' => $request->user()->id,
                'meal_id' => $meal->id
            ]);
        }

        return redirect(route('meals.index'))->with('success', 'Das Gericht wurde erstellt.');
    }
}
