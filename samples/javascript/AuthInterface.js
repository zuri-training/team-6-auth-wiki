/**
 * Auth Interface
 */
class AuthInterface {
    /**
     * Check if user is logged in
     *
     * @return {boolean}
     */
    static isLoggedIn() {}

    /**
     * Attempt to login user
     *
     * @param {string} username
     * @param {string} password
     *
     * @return {number} The id of the user or 0 if failed
     */
    static login(username, password) {}

    /**
     * Logout user
     *
     * @return {boolean}
     */
    static logout() {}

    /**
     * Get the currently logged in user
     *
     * @return {User}
     */
    static getUser() {}

    /**
     * Get the id of the currently logged in user
     *
     * @return {number}
     */
    static getUserId() {}

    /**
     * Get a user by username
     *
     * @param {string} username
     *
     * @return {User}
     */
    static getUserByUsername(username) {}

    /**
     * Get all the users
     *
     * @return {object}
     */
    static getAllUsers() {}

    /**
     * Register a new user
     *
     * @param {string} username
     * @param {string} password
     * @param {string} email
     *
     * @return {number} The registered user's id
     */
    static register(username, password, email) {}

    /**
     * Update a user's data
     *
     * @param {User} user
     *
     * @return {boolean}
     */
    static updateUser(user) {}

    /**
     * Delete a user
     *
     * @param {number} id
     *
     * @return {boolean}
     */
    static deleteUser(id) {}
}
