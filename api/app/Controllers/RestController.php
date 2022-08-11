<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use Psr\Log\LoggerInterface;
use Team6\AuthWiki\Auth;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class RestController extends ResourceController
{
    /**
     * Constructor.
     */
    public function initController(RequestInterface $request, ResponseInterface $response, LoggerInterface $logger)
    {
        Auth::startSession();

        // Do Not Edit This Line
        parent::initController($request, $response, $logger);

        // Preload any models, libraries, etc, here.

        // E.g.: $this->session = \Config\Services::session();
        Auth::initDb(new \PDO("sqlite:" . WRITEPATH . "database.db"), 'sqlite');
    }

    public function parseToken()
    {
        $key = getenv('encryption.key');

        $header = $this->request->getServer('HTTP_AUTHORIZATION');

        if (!$header) {
            return 1;
        }

        $token = explode(' ', $header)[1];

        try {
            $decoded = JWT::decode($token, new Key($key, 'HS256'));
            $response = [
                'id' => $decoded->uid,
                'email' => $decoded->email
            ];
            return $response;
        } catch (\Throwable $th) {
            return false;
        }
    }
}
