<?php

namespace App\Controllers;

use Team6\AuthWiki\Auth as AuthWikiAuth;
use CodeIgniter\API\ResponseTrait;
use Firebase\JWT\JWT;

class Auth extends RestController
{
    use ResponseTrait;

    /**
     * Handle requests to login
     */
    public function login()
    {
        $email = $this->request->getVar('email');
        $password = $this->request->getVar('password');

        if (empty($email) || empty($password)) {
            return $this->respond(
                [
                    "error" => "Credentials not submitted"
                ],
                400
            );
        }

        $attempt = AuthWikiAuth::login($email, $password);

        if ($attempt) {

            $user = AuthWikiAuth::getUserByEmail($email);

            unset($user->password_hash);

            $key = getenv('encryption.key');
            $payload = array(
                "iat" => time(),
                "nbf" => time(),
                "uid" => $user->id,
                "email" => $user->email
            );

            $token = JWT::encode($payload, $key, 'HS256');

            return $this->respond(
                [
                    "error" => false,
                    "token" => $token,
                    "user" => $user
                ],
                200
            );
        } else {
            return $this->respond(["error" => "Invalid credentials"], 403);
        }
    }

    /**
     * Handle requests to create new users
     */
    public function register()
    {
        if (!$this->validate(
            [
                'email' => "required|valid_email|is_unique[users.email]",
                'username' => 'required|alpha_numeric_space|is_unique[users.username]',
                'password' => 'required',
            ]
        )) {
            $error = \Config\Services::validation()->getErrors();
            $error = array_values($error);

            return $this->respond(
                [
                    "error" => implode(", ", $error)
                ],
                400
            );
        }

        $username = $this->request->getVar('username');
        $email = $this->request->getVar('email');
        $password = $this->request->getVar('password');

        $user_id = AuthWikiAuth::register($username, $password, $email, []);

        if ($user_id) {
            return $this->respond(["error" => false], 200);
        } else {
            return $this->respond(["error" => "Registration failed", "id" => $user_id], 500);
        }
    }

    // /**
    //  * The logout route
    //  *
    //  */
    // public function logout()
    // {
    //     AuthWikiAuth::logout();
    //     return $this->respond(["error" => false], 200);
    // }
}
