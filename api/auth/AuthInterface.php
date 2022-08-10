<?php

namespace Team6\AuthWiki;

/**
 * Auth Interface
 */
interface AuthInterface
{
    /**
     * Check if user is logged in
     *
     * @return boolean
     */
    public static function isLoggedIn();

    /**
     * Attempt to login user
     *
     * @param string $email
     * @param string $password
     * @return integer The id of the user or 0 if failed
     */
    public static function login(string $email, string $password);

    /**
     * Logout user
     *
     * @return boolean
     */
    public static function logout();

    /**
     * Get the currently logged in user
     *
     * @return User
     */
    public static function getUser();

    /**
     * Get the id of the currently logged in user
     *
     * @return integer
     */
    public static function getUserId();

    /**
     * Get a user by id
     *
     * @param int $id
     * 
     * @return User
     */
    public static function getUserById(int $id);


    /**
     * Get a user by email
     * 
     * @param string $email
     * 
     * @return User
     */
    public static function getUserByEmail(string $email);

    /**
     * Get a user by username
     *
     * @param string $username
     * 
     * @return User
     */
    public static function getUserByUsername(string $username);

    /**
     * Get all the users
     *
     * @return array
     */
    public static function getAllUsers();

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
    public static function register(string $username, string $password, string $email, array $extra_data = []);

    /**
     * Update a user's data
     * 
     * @param User $user
     * 
     * @return boolean
     */
    public static function updateUser(User $user);

    /**
     * Delete a user
     *
     * @param integer $id
     * 
     * @return bool
     */
    public static function deleteUser(int $id);
}
