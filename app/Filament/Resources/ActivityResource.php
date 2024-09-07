<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ActivityResource\Pages;
use App\Filament\Resources\ActivityResource\RelationManagers;
use App\Models\Activity;
use Filament\Forms;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Tabs\Tab;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ActivityResource extends Resource
{
    protected static ?string $model = Activity::class;

    protected static ?string $navigationIcon = 'heroicon-o-star';
    protected static ?string $navigationLabel = 'Kegiatan';
    protected static ?string $navigationGroup = 'Aktivitas';


    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                //
                Section::make('Aktivitas')
                    ->columnSpan(1)
                    ->columns(1)
                    ->schema([

                        Forms\Components\TextInput::make('title')
                            ->label('Judul')
                            ->required(),
                        Forms\Components\FileUpload::make('image')
                            ->label('Gambar')
                            ->disk('public')
                            ->directory('activity')
                            ->required()
                    ])

            ]);
    }

    public static function table(Table $table): Table
    {
        //
        // $table->uuid('id')->primary();
        // $table->string('title');
        // $table->string('image');
        // $table->timestamps();
        return $table
            ->columns([

                ImageColumn::make('image')
                    ->label('Gambar'),
                TextColumn::make('title')
                    ->sortable()
                    ->searchable()
                    ->label('Judul'),
                TextColumn::make('created_at')
                    ->sortable()
                    ->label('Tanggal'),
            ])
            ->filters([
                // filter by date
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
            'index' => Pages\ListActivities::route('/'),
            'create' => Pages\CreateActivity::route('/create'),
            'edit' => Pages\EditActivity::route('/{record}/edit'),
        ];
    }
}
