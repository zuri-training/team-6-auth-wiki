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
    public static function isLoggedIn(): bool;

    /**
     * Attempt to login user
     *
     * @param string $username
     * @param string $password
     * @return integer The id of the user or 0 if failed
     */
    public static function login(string $username, string $password): int;

    /**
     * Logout user
     *
     * @return boolean
     */
    public static function logout(): bool;

    /**
     * Get the currently logged in user
     *
     * @return User
     */
    public static function getUser(): User;

    /**
     * Get the id of the currently logged in user
     *
     * @return integer
     */
    public static function getUserId(): int;

    /**
     * Get a user by username
     *
     * @param string $username
     * 
     * @return User
     */
    public static function getUserByUsername(string $username): User;

    /**
     * Get all the users
     *
     * @return array
     */
    public static function getAllUsers(): array;

    /**
     * Register a new user
     * 
     * @param string $username
     * @param string $password
     * @param string $email
     * 
     * @return integer The registered user's id
     */
    public static function register(string $username, string $password, string $email): int;

    /**
     * Update a user's data
     * 
     * @param User $user
     * 
     * @return boolean
     */
    public static function updateUser(User $user): bool;

    /**
     * Delete a user
     *
     * @param integer $id
     * 
     * @return boolean
     */
    public static function deleteUser(int $id): bool;
}
