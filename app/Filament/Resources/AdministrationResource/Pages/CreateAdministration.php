<?php

namespace App\Filament\Resources\AdministrationResource\Pages;

use App\Filament\Resources\AdministrationResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateAdministration extends CreateRecord
{
    protected static string $resource = AdministrationResource::class;
    protected static ?string $title = 'Tambah Administrasi';

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
}
