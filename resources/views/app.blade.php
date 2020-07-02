<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <title>dinner.sheep</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
        <link href="{{ mix('/dist/css/app.css') }}" rel="stylesheet" />
        <script src="{{ mix('/dist/js/app.js') }}" defer></script>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css" integrity="sha256-nwNjrH7J9zS/Ti4twtWX7OsC5QdQHCIKTv5cLMsGo68=" crossorigin="anonymous" />

{{--        <script src="https://maps.googleapis.com/maps/api/js?key={{ config('services.google_maps.api_key') }}"></script>--}}
        <style>
            .pace {
                -webkit-pointer-events: none;
                pointer-events: none;

                -webkit-user-select: none;
                -moz-user-select: none;
                user-select: none;
            }

            .pace-inactive {
                display: none;
            }

            .pace .pace-progress {
                background: #29d;
                position: fixed;
                z-index: 2000;
                top: 0;
                right: 100%;
                width: 100%;
                height: 2px;
            }
        </style>

    </head>
    <body>
        @inertia
    </body>

    <script>
        window.googleMapsApiKey = '{{ config('services.google_maps.api_key') }}'
    </script>

    <script src="{{ mix('/dist/js/libs.js') }}" defer></script>
</html>

