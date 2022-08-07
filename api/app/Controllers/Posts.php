<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use Team6\AuthWiki\Auth as AuthWikiAuth;
use CodeIgniter\API\ResponseTrait;

class Posts extends BaseController
{
    use ResponseTrait;

    /**
     * Handle requests to get all languages
     */
    public function languages()
    {
        // Load the languages model
        $languages = new \App\Models\LanguagesModel();

        // resond with the languages
        return $this->respond($languages->findAll(), 200);
    }

    public function create()
    {
        if (!AuthWikiAuth::isLoggedIn()) {
            return $this->respond(
                [
                    "error" => "You must be logged in to create a post"
                ],
                403
            );
        }

        if (!$this->validate(
            [
                'language_id' => "required|is_not_unique[languages.id]",
                'title' => 'required|alpha_numeric_space',
                'content' => 'required',
                'media_location' => 'required|valid_url'
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

        $user_id = AuthWikiAuth::getUserId();
        $language_id = $this->request->getPost('language_id');
        $title = $this->request->getPost('title');
        $slug = url_title($title);
        $content = $this->request->getPost('content');
        $media_location = $this->request->getPost('media_location');

        $posts = new \App\Models\PostsModel();
        $post = new \App\Entities\Post();
        $post->user_id = $user_id;
        $post->language_id = $language_id;
        $post->title = $title;
        $post->slug = $slug;
        $post->content = $content;
        $post->media_location = $media_location;
        $post->likes_count = 0;

        if ($posts->save($post)) {
            return $this->respond(
                [
                    "error" => false
                ],
                200
            );
        } else {
            return $this->respond(
                [
                    "error" => "Could not create post"
                ],
                500
            );
        }
    }

    public function post($id)
    {
        $posts = new \App\Models\PostsModel();

        $post = $posts->find((int)$id);

        if ($post) {
            return $this->respond(
                [
                    "error" => false,
                    "post" => $post
                ],
                200
            );
        } else {
            return $this->respond(
                [
                    "error" => "Post not found"
                ],
                404
            );
        }
    }

    public function posts($language_id)
    {
        $posts = new \App\Models\PostsModel();
        $posts = $posts->where('language_id', (int)$language_id)->findAll();
        if ($posts) {
            return $this->respond(
                [
                    "error" => false,
                    "posts" => $posts
                ],
                200
            );
        } else {
            return $this->respond(
                [
                    "error" => "No posts found",
                    "posts" => []
                ],
                200
            );
        }
    }

    public function like($post_id)
    {
        if (!AuthWikiAuth::isLoggedIn()) {
            return $this->respond(
                [
                    "error" => "You must be logged in to like a post"
                ],
                403
            );
        }
        $posts = new \App\Models\PostsModel();
        $post = $posts->find((int)$post_id);
        if ($post) {
            $post->likes_count++;
            $posts->save($post);
            return $this->respond(
                [
                    "error" => false
                ],
                200
            );
        } else {
            return $this->respond(
                [
                    "error" => "Post not found"
                ],
                404
            );
        }
    }

    public function unlike($post_id)
    {
        if (!AuthWikiAuth::isLoggedIn()) {
            return $this->respond(
                [
                    "error" => "You must be logged in to unlike a post"
                ],
                403
            );
        }
        $posts = new \App\Models\PostsModel();
        $post = $posts->find((int)$post_id);
        if ($post) {
            $post->likes_count--;
            $posts->save($post);
            return $this->respond(
                [
                    "error" => false
                ],
                200
            );
        } else {
            return $this->respond(
                [
                    "error" => "Post not found"
                ],
                404
            );
        }
    }
}
