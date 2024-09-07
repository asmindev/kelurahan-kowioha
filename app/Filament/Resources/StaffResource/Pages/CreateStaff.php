<?php

namespace App\Filament\Resources\StaffResource\Pages;

use App\Filament\Resources\StaffResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateStaff extends CreateRecord
{
    protected static string $resource = StaffResource::class;
    protected static ?string $title = 'Tambah Organisasi';
    public function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
}
