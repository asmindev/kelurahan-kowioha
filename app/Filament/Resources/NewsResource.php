<?php

namespace App\Filament\Resources;

use App\Filament\Resources\NewsResource\Pages;
use App\Filament\Resources\NewsResource\RelationManagers;
use App\Models\News;
use DeepCopy\Filter\Filter;
use Filament\Forms;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Tabs\Tab;
use Filament\Forms\Form;
use Filament\Forms\Get;
use Filament\Forms\Set;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Filters\Filter as FiltersFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Str;

class NewsResource extends Resource
{
    protected static ?string $model = News::class;

    protected static ?string $navigationIcon = 'heroicon-o-newspaper';
    protected static ?string $navigationLabel = 'Berita';
    protected static ?string $navigationGroup = 'Aktivitas';


    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make("General")
                    ->columns(2)
                    ->columnSpan(2)
                    ->schema([
                        Forms\Components\TextInput::make('title')
                            ->label('Judul')
                            ->required()
                            ->live(onBlur: true)
                            ->afterStateUpdated(function (Get $get, Set $set, ?string $operation, ?string $old, ?string $state, ?Model $record) {
                                if ($operation == 'edit' && $record->isPublished()) {
                                    return;
                                }

                                if (($get('slug') ?? '') !== Str::slug($old)) {
                                    return;
                                }

                                $set('slug', Str::slug($state));
                            }),
                        Forms\Components\TextInput::make('slug')
                            ->label('Slug')
                            ->unique(News::class, 'slug', fn($record) => $record)
                            ->required(),
                        Forms\Components\TextInput::make('author')
                            ->label('Penulis')
                            ->default('admin')
                            ->required(),
                        Forms\Components\Toggle::make('is_published')
                            ->label('Dipublikasikan')
                            ->default(false)
                            ->required(),
                    ]),
                Section::make('Konten')
                    ->columns(1)
                    ->columnSpan(2)
                    ->schema([
                        Forms\Components\RichEditor::make('content')
                            ->label('Konten')
                            ->required(),
                        Forms\Components\FileUpload::make('image')
                            ->directory('news')
                            ->image()
                            ->disk('public')
                            ->label('Gambar')
                            ->required(),
                    ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([

                //
                Tables\Columns\ImageColumn::make('image')
                    ->label('Gambar'),
                Tables\Columns\TextColumn::make('title')
                    ->label('Judul')
                    ->searchable(),

                Tables\Columns\TextColumn::make('content')
                    ->label('Konten')
                    ->html()
                    ->words(8),

                Tables\Columns\TextColumn::make('author')
                    ->label('Penulis')
                    ->searchable(),
                Tables\Columns\ToggleColumn::make('is_published')
                    ->label('Dipublikasikan')
                    ->sortable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Dibuat')
                    ->sortable(),
            ])
            ->filters([
                //
                Tables\Filters\SelectFilter::make('is_published')
                    ->label('Dipublikasikan')
                    ->options([
                        true => 'Ya',
                        false => 'Tidak',
                    ]),

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
            'index' => Pages\ListNews::route('/'),
            'create' => Pages\CreateNews::route('/create'),
            'edit' => Pages\EditNews::route('/{record}/edit'),
        ];
    }
}
