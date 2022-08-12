<?php

namespace App\Controllers;

use App\Controllers\RestController;
use CodeIgniter\API\ResponseTrait;

class Posts extends RestController
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
        $data = $this->parseToken();
        if (empty($data)) {
            return $this->respond(
                [
                    "error" => "Invalid credentials"
                ],
                403
            );
        }

        if (!$this->validate(
            [
                'language_id' => "required|is_not_unique[languages.id]",
                'content' => 'required'
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

        $user_id = $data['id'];
        $language_id = $this->request->getVar('language_id');
        $content = $this->request->getVar('content');

        $posts = new \App\Models\PostsModel();
        $post = new \App\Entities\Post();
        $post->user_id = $user_id;
        $post->language_id = $language_id;
        $post->content = $content;

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
            $post->likes = $post->getLikes();
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
        $posts = $posts->getAllPostsByLanguage((int)$language_id);
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
        $data = $this->parseToken();
        if (empty($data)) {
            return $this->respond(
                [
                    "error" => "Invalid credentials"
                ],
                403
            );
        }

        $posts = new \App\Models\PostsModel();
        $post = $posts->find((int)$post_id);
        if ($post) {
            $likes = new \App\Models\PostLikesModel();

            // note that findAll() return an array
            $like = $likes
                ->where('user_id', $data['id'])
                ->where('post_id', (int)$post_id)->findAll();

            if (empty($like)) {
                // create a new like
                $like = new \App\Entities\PostLike();
                $like->user_id = $data['id'];
                $like->post_id = (int)$post_id;
                $like->created_at = time();
                $likes->save($like);

                return $this->respond(
                    [
                        "error" => false
                    ],
                    200
                );
            } else {
                // like already exists, return a bad request
                return $this->respond(
                    [
                        "error" => "You have already liked this post"
                    ],
                    400
                );
            }
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
        $data = $this->parseToken();
        if (empty($data)) {
            return $this->respond(
                [
                    "error" => "Invalid credentials"
                ],
                403
            );
        }

        $posts = new \App\Models\PostsModel();
        $post = $posts->find((int)$post_id);

        if ($post) {
            $likes = new \App\Models\PostLikesModel();

            // note that findAll() return an array
            $like = $likes
                ->where('user_id', $data['id'])
                ->where('post_id', (int)$post_id)->findAll();

            if (empty($like)) {
                // like does not exists, return a bad request
                return $this->respond(
                    [
                        "error" => "You do not already like this post"
                    ],
                    400
                );
            } else {
                // delete the like
                $likes->delete($like[0]->id);

                return $this->respond(
                    [
                        "error" => false
                    ],
                    200
                );
            }
        } else {
            return $this->respond(
                [
                    "error" => "Post not found"
                ],
                404
            );
        }
    }

    /* public function comments($id)
    {
        $posts = new \App\Models\PostsModel();

        $post = $posts->find((int)$id);

        if ($post) {
            $comments = new \App\Models\CommentsModel();

            // note that findAll() return an array
            $comments = $comments
                ->where('post_id', (int)$post->id)->findAll();

            return $this->respond(
                [
                    "error" => false,
                    "comments" => $comments
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

    public function comment($post_id)
    {
        $data = $this->parseToken();
        if (empty($data)) {
            return $this->respond(
                [
                    "error" => "Invalid credentials"
                ],
                403
            );
        }

        if (!$this->validate(
            [
                'comment_text' => "required"
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

        $posts = new \App\Models\PostsModel();
        $post = $posts->find((int)$post_id);

        if ($post) {
            $comments = new \App\Models\CommentsModel();
            $comment = new \App\Entities\Comment();
            $comment->post_id = (int)$post_id;
            $comment->user_id = $data['id'];
            $comment->comment_text = $this->request->getVar('comment_text');
            $comment->created_at = time();
            $comments->save($comment);
        } else {
            return $this->respond(
                [
                    "error" => "Post not found"
                ],
                404
            );
        }
    }

    public function comment_like($comment_id)
    {
        $data = $this->parseToken();
        if (empty($data)) {
            return $this->respond(
                [
                    "error" => "Invalid credentials"
                ],
                403
            );
        }

        $comments = new \App\Models\CommentsModel();
        $comment = $comments->find((int)$comment_id);
        if ($comment) {
            $likes = new \App\Models\CommentLikesModel();

            // note that findAll() return an array
            $like = $likes
                ->where('user_id', $data['id'])
                ->where('comment_id', (int)$comment_id)->findAll();

            if (empty($like)) {
                // create a new like
                $like = new \App\Entities\CommentLike();
                $like->user_id = $data['id'];
                $like->comment_id = (int)$comment_id;
                $like->created_at = time();
                $likes->save($like);

                return $this->respond(
                    [
                        "error" => false
                    ],
                    200
                );
            } else {
                // like already exists, return a bad request
                return $this->respond(
                    [
                        "error" => "You have already liked this comment"
                    ],
                    400
                );
            }
        } else {
            return $this->respond(
                [
                    "error" => "Comment not found"
                ],
                404
            );
        }
    }

    public function comment_unlike($comment_id)
    {
        $data = $this->parseToken();
        if (empty($data)) {
            return $this->respond(
                [
                    "error" => "Invalid credentials"
                ],
                403
            );
        }

        $comments = new \App\Models\CommentsModel();
        $comment = $comments->find((int)$comment_id);

        if ($comment) {
            $likes = new \App\Models\CommentLikesModel();

            // note that findAll() return an array
            $like = $likes
                ->where('user_id', $data['id'])
                ->where('comment_id', (int)$comment_id)->findAll();

            if (empty($like)) {
                // like does not exists, return a bad request
                return $this->respond(
                    [
                        "error" => "You do not already like this comment"
                    ],
                    400
                );
            } else {
                // delete the like
                $likes->delete($like[0]->id);

                return $this->respond(
                    [
                        "error" => false
                    ],
                    200
                );
            }
        } else {
            return $this->respond(
                [
                    "error" => "Comment not found"
                ],
                404
            );
        }
    } */
}
