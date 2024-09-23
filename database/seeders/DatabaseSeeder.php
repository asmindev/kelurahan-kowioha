<?php

namespace Database\Seeders;

use App\Models\Citizen;
use App\Models\Family;
use App\Models\News;
use App\Models\RT;
use App\Models\RW;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@tes.com',
            'password' => bcrypt('123'),
        ]);

        $this->call(NewsSeeder::class);
        $this->call(ActivitySeeder::class);
        $this->call(PlaceSeeder::class);

        $rw = RW::factory(4)->create();
        $rw->each(function ($rw) {
            $rt = RT::factory(4)->create(['rw_id' => $rw->id]);
            $rt->each(function ($rt) {
                $citizen = Citizen::factory(5)->create(['rt_id' => $rt->id]);
                $citizen->each(function ($citizen) {
                    Family::factory(5)->create(['citizen_id' => $citizen->id]);
                });
            });
        });
    }
}
