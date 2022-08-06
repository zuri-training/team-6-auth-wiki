<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\API\ResponseTrait;
use Team6\AuthWiki\Auth as AuthWikiAuth;

class Auth extends BaseController
{
    use ResponseTrait;

    /**
     * Handle requests to login
     */
    public function login()
    {
        $email = $this->request->getPost('email');
        $password = $this->request->getPost('password');

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

            return $this->respond(
                [
                    "error" => false,
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

        $username = $this->request->getPost('username');
        $email = $this->request->getPost('email');
        $password = $this->request->getPost('password');

        $user_id = AuthWikiAuth::register($username, $password, $email, []);

        if ($user_id) {
            return $this->respond(["error" => false], 200);
        } else {
            return $this->respond(["error" => "Registration failed"], 500);
        }
    }

    /**
     * The logout route
     *
     */
    public function logout()
    {
        AuthWikiAuth::logout();
        return $this->respond(["error" => false], 200);
    }
}
