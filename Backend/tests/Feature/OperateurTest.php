<?php

namespace Tests\Feature;

use App\Models\Operateur;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

class OperateurTest extends TestCase
{
    use RefreshDatabase;

    #[Test]
    public function register_operateur()
    {
        $response = $this->postJson('/api/auth/register', [
            'login' => 'nouveau@test.com',
            'password' => 'password123',
            'role' => 'administrateur',
        ]);

        $response->assertStatus(201)
            ->assertJsonStructure([
                'message',
                'operateur' => ['login', 'role'],
            ]);
    }

    #[Test]
    public function login_operateur()
    {
        Operateur::create([
            'login' => 'login@test.com',
            'password' => bcrypt('password123'),
            'role' => 'administrateur',
        ]);

        $response = $this->postJson('/api/auth/login', [
            'login' => 'login@test.com',
            'password' => 'password123',
        ]);

        $response->assertStatus(200)
            ->assertJsonStructure([
                'user',
                'access_token',
                'token_type',
            ]);
    }

    #[Test]
    public function login_mauvais_identifiants()
    {
        $response = $this->postJson('/api/auth/login', [
            'login' => 'inexistant@test.com',
            'password' => 'mauvais',
        ]);

        $response->assertStatus(401)
            ->assertJson(['message' => 'Identifiants invalides']);
    }
}
