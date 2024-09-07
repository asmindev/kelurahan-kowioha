<?php

namespace App\Filament\Resources\CitizenResource\Pages;

use App\Filament\Resources\CitizenResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateCitizen extends CreateRecord
{
    protected static string $resource = CitizenResource::class;
    protected static ?string $title = 'Tambah Kepala Keluarga';
    public function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
}
