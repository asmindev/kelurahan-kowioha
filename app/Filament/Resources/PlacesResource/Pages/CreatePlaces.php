<?php

namespace App\Filament\Resources\PlacesResource\Pages;

use App\Filament\Resources\PlacesResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreatePlaces extends CreateRecord
{
    protected static string $resource = PlacesResource::class;
    protected static ?string $title = 'Tambah Tempat';

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
}
