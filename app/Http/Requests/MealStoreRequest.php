<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MealStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string|min:3|max:64',
            'shorthand' => 'nullable|string|min:1|max:10',
            'price' => 'required|regex:/^\d+(\,\d{1,2})?$/',
            'note' => 'nullable|string|min:3|max:256',
            'is_favorite' => 'boolean',
        ];
    }
}
