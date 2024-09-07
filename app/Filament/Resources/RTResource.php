<?php

namespace App\Filament\Resources;

use App\Filament\Resources\RTResource\Pages;
use App\Filament\Resources\RTResource\RelationManagers;
use App\Models\RT;
use Filament\Forms;
use Filament\Forms\Components\Section;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class RTResource extends Resource
{
    protected static ?string $model = RT::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationGroup = 'Kependudukan';
    protected static ?string $navigationLabel = 'Rukun Tetangga';



    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                //
                Section::make('Rukun Tetangga')
                    ->label('Rukun Tetangga')
                    ->columns(1)
                    ->columnSpan(1)
                    ->schema([
                        Forms\Components\Select::make('rw_id')
                            ->relationship('rw', 'number')
                            ->prefix('RW-')
                            ->label('RW')
                            ->required(),
                        Forms\Components\TextInput::make('number')
                            ->required()
                            ->numeric()
                            ->prefix('RT-')
                            ->label('RT'),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                //
                Tables\Columns\TextColumn::make('number')
                    ->label('RT')
                    ->prefix('RT-')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('rw.number')
                    ->label('RW')
                    ->prefix('RW-')
                    ->searchable()
                    ->sortable(),

            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListRTS::route('/'),
            'create' => Pages\CreateRT::route('/create'),
            'edit' => Pages\EditRT::route('/{record}/edit'),
        ];
    }
}
