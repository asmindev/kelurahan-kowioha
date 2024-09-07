<?php

namespace App\Filament\Resources\PlacesResource\Pages;

use App\Filament\Resources\PlacesResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditPlaces extends EditRecord
{
    protected static string $resource = PlacesResource::class;
    protected static ?string $title = "Edit Tempat";

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }

    protected function getRedirectUrl(): string|null
    {
        return $this->getResource()::getUrl('index');
    }
}
