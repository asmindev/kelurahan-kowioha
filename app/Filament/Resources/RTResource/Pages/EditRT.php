<?php

namespace App\Filament\Resources\RTResource\Pages;

use App\Filament\Resources\RTResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditRT extends EditRecord
{
    protected static string $resource = RTResource::class;
    protected static ?string $title = 'Edit Rukun Tetangga';

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
    public function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
}
