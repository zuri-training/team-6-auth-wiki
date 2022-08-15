<?php

namespace Team6\AuthWiki;

use Medoo\Medoo;

/**
 * The Auth Class
 */
class Auth implements AuthInterface
{
    static $db = null;

    /**
     * Check if a session has been started; Start it if not
     * 
     * @return bool True if session has been started, false if not
     */
    public static function startSession()
    {
        if (session_status() == PHP_SESSION_NONE) {
            return session_start();
        }
        return true;
    }

    /**
     * Initialize the database connection
     * 
     * @param $connection The PDO connection
     * @param $type The type of database. Options are mysql, sqlite, mssql or postgresql
     * 
     * @return void
     */
    public static function initDb(\PDO $connection, string $type = 'mysql')
    {
        self::$db = new Medoo([
            'pdo' => $connection,
            'type' => $type
        ]);
    }

    /**
     * Get an instance of the database object
     *
     * @return $db
     */
    public static function getDb()
    {
        if (!(self::$db instanceof Medoo)) {
            throw new \Exception('Database not initialized');
        }
        return self::$db;
    }

    /**
     * Check if user is logged in
     * 
     * @return bool True if user is logged in, false if not
     */
    public static function isLoggedIn()
    {
        return isset($_SESSION['user_id']);
    }

    /**
     * Attempt to login user
     * 
     * @param string $email
     * @param string $password
     * 
     * @return int The id of the user or 0 if failed
     */
    public static function login(string $email, string $password)
    {
        $user = self::getUserByEmail($email);

        if ($user && password_verify($password, $user->password_hash)) {
            setcookie('user_id', $user->id, time() + (86400 * 30), "/");
            // $_SESSION['user_id'] = $user->id;
            return $user->id;
        }
        return 0;
    }

    /**
     * Logout user
     * 
     * @return bool True if logout was successful, false if not
     */
    public static function logout()
    {
        unset($_SESSION['user_id']);
        return !self::isLoggedIn();
    }

    /**
     * Get the currently logged in user
     * 
     * @return User
     */
    public static function getUser()
    {
        if (self::isLoggedIn()) {
            return self::getUserById($_SESSION['user_id']);
        }
        return null;
    }

    /**
     * Get the id of the currently logged in user or 0 if not logged in
     * 
     * @return int
     */
    public static function getUserId()
    {
        if (self::isLoggedIn()) {
            return $_SESSION['user_id'];
        }
        return 0;
    }

    /**
     * Get a user by id
     * 
     * @param int $id
     * 
     * @return User
     */
    public static function getUserById(int $id)
    {
        $user = self::getDb()->get('users', '*', ['id' => $id]);
        if ($user) {
            return new User($user);
        }
        return null;
    }

    /**
     * Get a user by email
     * 
     * @param string $email
     * 
     * @return User
     */
    public static function getUserByEmail(string $email)
    {
        $user = self::getDb()->get('users', '*', ['email' => $email]);
        if ($user) {
            return new User($user);
        }
        return null;
    }

    /**
     * Get a user by username
     * 
     * @param string $username
     * 
     * @return User
     */
    public static function getUserByUsername(string $username)
    {
        $user = self::getDb()->get('users', '*', ['username' => $username]);
        if ($user) {
            return new User($user);
        }
        return null;
    }

    /**
     * Get all the users
     * 
     * @return array
     */
    public static function getAllUsers()
    {
        $users = self::getDb()->select('users', '*');
        $users = array_map(
            function ($user) {
                return new User($user);
            },
            $users
        );
        return $users;
    }

    /**
     * Register a new user
     * 
     * @param string $username
     * @param string $password
     * @param string $email
     * @param array $extra_data
     * 
     * @return integer The registered user's id
     */
    public static function register(string $username, string $password, string $email, array $extra_data = [])
    {
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            throw new \Exception('Invalid email');
        }

        $user = self::getUserByUsername($username);
        if ($user) {
            throw new \Exception('Username already exists');
        }

        $user = self::getUserByEmail($email);
        if ($user) {
            throw new \Exception('Email already exists');
        }

        $db = self::getDb();

        $smt = $db->insert(
            'users',
            [
                'username' => $username,
                'password' => password_hash($password, PASSWORD_DEFAULT),
                'email' => $email,
                "extra_data" => json_encode($extra_data),
                'created_at' => time()
            ]
        );
        if ($smt) {
            return $db->id();
        }
        throw new \Exception($db->error, 1);

        return 0;
    }

    /**
     * Update a user
     * 
     * @param User $data
     * 
     * @return bool True if update was successful, false if not
     */
    public static function updateUser(User $data)
    {
        if (!filter_var($data->email, FILTER_VALIDATE_EMAIL)) {
            throw new \Exception('Invalid email');
        }

        $user = self::getUserById($data->id);
        if (!$user) {
            throw new \Exception('User not found');
        }

        $user = self::getUserByUsername($data->username);
        if ($user && $user->id != $data->id) {
            throw new \Exception('Username already exists');
        }

        $user = self::getUserByEmail($data->email);
        if ($user && $user->id != $data->id) {
            throw new \Exception('Email already exists');
        }

        $fields = [
            'username' => $data->username,
            'status' => $data->status,
            'email' => $data->email,
            'extra_data' => json_encode($data->extra_data),
            'created_at' => $data->created_at,
            'updated_at' => time()
        ];

        if (property_exists($data, 'password') && $data->password) {
            $fields['password'] = password_hash($data->password, PASSWORD_DEFAULT);
        }

        $smt = self::getDb()->update(
            'users',
            $fields,
            [
                'id' => $data->id
            ]
        );
        return ($smt) ? true : false;
    }

    /**
     * Delete a user
     * 
     * @param int $id
     * 
     * @return bool True if delete was successful, false if not
     */
    public static function deleteUser(int $id)
    {
        $smt = self::getDb()->delete('users', ['id' => $id]);
        return ($smt) ? true : false;
    }
}
