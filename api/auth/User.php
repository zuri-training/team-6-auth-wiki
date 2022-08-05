<?php

namespace Team6\AuthWiki;

/**
 * The User Class
 */
class User
{
    /**
     * Initialize the user class with values
     * 
     * @param $user_data The user data
     */
    public function __construct($user_data = null)
    {
        if ($user_data) {
            foreach ($user_data as $key => $value) {
                if ($key == 'extra_data') {
                    $this->{$key} = json_decode($value, true);
                } else if ($key !== 'password') {
                    $this->{$key} = $value;
                } else if ($key == 'password') {
                    $this->password_hash = $value;
                }
            }
        }
    }
}
