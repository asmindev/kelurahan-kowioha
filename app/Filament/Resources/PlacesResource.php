<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PlacesResource\Pages;
use App\Filament\Resources\PlacesResource\RelationManagers;
use App\Models\Place;
use App\Models\Places;
use Filament\Forms;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\ViewField;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class PlacesResource extends Resource
{
    protected static ?string $model = Place::class;

    protected static ?string $navigationIcon = 'heroicon-o-globe-asia-australia';
    protected static ?string $navigationLabel = 'Wisata dan Sejarah';
    protected static ?string $navigationGroup = 'Lainnya';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                // $table->string('name');
                // $table->string('address');
                // $table->string('image');
                // $table->string('description');
                // $table->string('latitude');
                // $table->string('longitude');
                Section::make('General')
                    ->columns(1)
                    ->columnSpan(1)
                    ->schema([
                        Section::make()
                            ->columns(2)
                            ->columnSpan(1)
                            ->schema([
                                Forms\Components\TextInput::make('name')
                                    ->label('Nama')
                                    ->required(),
                                Forms\Components\TextInput::make('address')
                                    ->label("Alamat")
                                    ->required(),
                            ]),
                        Section::make('Koordinat')
                            ->columns(2)
                            ->columnSpan(1)
                            ->schema([

                                Forms\Components\TextInput::make('latitude')
                                    ->label('Latitude')
                                    ->id('lat')
                                    ->required(),
                                Forms\Components\TextInput::make('longitude')
                                    ->label('Longitude')
                                    ->id('lng')
                                    ->required(),
                            ]),
                        Forms\Components\Textarea::make('description')
                            ->label('Deskripsi')
                            ->required(),
                        Forms\Components\FileUpload::make('image')
                            ->image()
                            ->disk('public')
                            ->label("Gambar"),

                    ]),
                Section::make('Maps')
                    ->columns(1)
                    ->columnSpan(1)
                    ->schema([
                        ViewField::make("")
                            ->view('forms.components.maps')
                    ])

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('image')
                    ->label("Gambar"),
                Tables\Columns\TextColumn::make('name')
                    ->label("Nama")
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make("address")
                    ->label("Alamat")
                    ->sortable()
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
            'index' => Pages\ListPlaces::route('/'),
            'create' => Pages\CreatePlaces::route('/create'),
            'edit' => Pages\EditPlaces::route('/{record}/edit'),
        ];
    }
}
