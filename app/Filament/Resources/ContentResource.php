<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ContentResource\Pages;
use App\Filament\Resources\ContentResource\RelationManagers;
use App\Models\Content;
use Filament\Forms;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Section;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ContentResource extends Resource
{
    protected static ?string $model = Content::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationLabel = 'Website';
    public static function canCreate(): bool
    {
        // jika telah ada data maka tidak bisa ditambahkan
        if (Content::count() > 0) {
            return false;
        }
        return true;
    }
    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make('General')
                    ->columns(2)
                    ->schema([
                        Forms\Components\TextInput::make('village_name')
                            ->label('Nama Kelurahan')
                            ->required()
                            ->maxLength(255),
                        Forms\Components\TextInput::make('head_of_village')
                            ->label('Nama Lurah')
                            ->maxLength(255)
                            ->required(),
                        Forms\Components\RichEditor::make('opening_remarks')
                            ->label('Sambutan Lurah')
                            ->required(),
                        Forms\Components\FileUpload::make('image_head_of_village')
                            ->label('Foto Lurah')
                            ->image()
                            ->required(),
                        Forms\Components\RichEditor::make('about_village')
                            ->required()
                            ->label('Tentang Kelurahan'),
                        Repeater::make('image_sliders')
                            ->relationship('image_sliders')
                            ->schema([
                                Forms\Components\FileUpload::make('image')
                                    ->image()
                                    ->label('Gambar Slider')
                                    ->required(),
                            ])
                    ]),
                Section::make('Visi & Misi')
                    ->columns(2)
                    ->schema([
                        Forms\Components\RichEditor::make('vision')
                            ->required()
                            ->label('Visi'),
                        Forms\Components\RichEditor::make('mission')
                            ->required()
                            ->label('Misi'),
                    ])

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('image_head_of_village')
                    ->label('Foto Lurah'),
                Tables\Columns\TextColumn::make('village_name')
                    ->label('Kelurahan')
                    ->searchable(),
                Tables\Columns\TextColumn::make('head_of_village')
                    ->label('Lurah'),

                Tables\Columns\TextColumn::make('about_village')
                    ->words(5)
                    ->html(),
                Tables\Columns\TextColumn::make('updated_at')
                    ->label('Diperbarui')
                    ->dateTime()
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
            'index' => Pages\ListContents::route('/'),
            'create' => Pages\CreateContent::route('/create'),
            'edit' => Pages\EditContent::route('/{record}/edit'),
        ];
    }
}
