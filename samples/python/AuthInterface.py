class AuthInterface:
    def isLoggedIn(self) -> bool:
        """Check if user is logged in"""
        pass

    def login(self, username: str, password: str) -> int:
        """Attempt to login user"""
        pass

    def logout(self) -> bool:
        """Logout user"""
        pass

    def getUser(self) -> User:
        """Get the currently logged in user"""
        pass

    def getUserId(self) -> int:
        """Get the currently logged in user's id"""
        pass

    def getUserByUsername(self, username: str) -> User:
        """Get a user by their username"""
        pass

    def getAllUsers(self) -> list:
        """Get all users"""
        pass

    def register(self, username: str, password: str, email: str) -> int:
        """Register a new user"""
        pass

    def updateUser(self, user: User) -> bool:
        """Update a user's data"""
        pass

    def deleteUser(self, id: int) -> bool:
        """Delete a user"""
        pass
