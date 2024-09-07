<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CitizenResource\Pages;
use App\Filament\Resources\CitizenResource\RelationManagers;
use App\Models\Citizen;
use App\Models\RT;
use App\Models\RW;
use Filament\Forms;
use Filament\Forms\Components\Hidden;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Section;
use Filament\Forms\Form;
use Filament\Forms\Get;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class CitizenResource extends Resource
{
    protected static ?string $model = Citizen::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationLabel = 'Kepala Keluarga';
    protected static ?string $navigationGroup = 'Kependudukan';



    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                //
                Section::make('Data Keluarga')
                    ->columns(1)
                    ->columnSpan(1)
                    ->schema([
                        Forms\Components\TextInput::make('kk')
                            ->label('Nomor KK')
                            ->numeric()
                            ->required()
                            ->unique(),
                        Repeater
                            ::make('Anggota Keluarga')
                            ->addActionLabel('Tambah Anggota')
                            ->label('Anggota Keluarga')
                            ->relationship('family')
                            ->schema([
                                Forms\Components\TextInput::make('name')
                                    ->label('Nama')
                                    ->required(),
                                Forms\Components\TextInput::make('nik')
                                    ->label('NIK')
                                    ->numeric()
                                    ->required()
                                    ->unique(),
                                Section::make()
                                    ->columns(2)
                                    ->columnSpan(1)
                                    ->schema([
                                        Forms\Components\Select::make('gender')
                                            ->label('Jenis Kelamin')
                                            ->options([
                                                'laki-laki' => 'Laki-laki',
                                                'perempuan' => 'Perempuan',
                                            ])
                                            ->required(),

                                        Forms\Components\Select::make('status')
                                            ->label('Status')
                                            ->options([
                                                'kepala keluarga' => 'Kepala Keluarga',
                                                'suami' => 'Suami',
                                                'istri' => 'Istri',
                                                'anak' => 'Anak',
                                                'saudara' => 'Saudara',
                                            ])
                                    ]),
                                Forms\Components\DatePicker::make('birth_date')
                                    ->label('Tgl. Lahir'),

                            ])
                    ]),
                Section::make('Data Penduduk')
                    ->columns(2)
                    ->columnSpan(1)
                    ->schema([
                        Forms\Components\Select::make('rw_id')
                            ->label('Rukun Warga')
                            ->required()
                            ->reactive()
                            ->prefix('RW')
                            ->options(RW::all()->pluck('number', 'id')),


                        Forms\Components\Select::make('rt_id')
                            ->label('Rukun Tetangga')
                            ->required()
                            ->prefix('RT')
                            ->reactive()
                            ->options(function (Get $get) {
                                return RT::where('rw_id', $get('rw_id'))->pluck('number', 'id');
                            }),

                    ]),

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                //
                Tables\Columns\TextColumn::make('kk')
                    ->label('Nomor KK')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('rt.number')
                    ->label('RT')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('rt.rw.number')
                    ->label('RW')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('family.name')
                    ->label('Nama Kepala Keluarga')
                    ->searchable()
                    ->sortable()
                    ->getStateUsing(function (Citizen $record) {
                        return $record->family->where('status', 'kepala keluarga')->first()->name;
                    }),

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
            'index' => Pages\ListCitizens::route('/'),
            'create' => Pages\CreateCitizen::route('/create'),
            'edit' => Pages\EditCitizen::route('/{record}/edit'),
        ];
    }
}
