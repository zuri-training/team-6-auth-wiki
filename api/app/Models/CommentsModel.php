<?php

namespace App\Models;

use CodeIgniter\Model;

class CommentsModel extends Model
{
    protected $DBGroup          = 'default';
    protected $table            = 'comments';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $insertID         = 0;
    protected $returnType       = \App\Entities\Comment::class;
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = [
        'post_id',
        'user_id',
        'comment_text',
        'created_at',
        'updated_at'
    ];

    // Dates
    protected $useTimestamps = false;
    protected $dateFormat    = 'datetime';
    protected $createdField  = 'created_at';
    protected $updatedField  = 'updated_at';
    protected $deletedField  = 'deleted_at';

    // Validation
    protected $validationRules      = [];
    protected $validationMessages   = [];
    protected $skipValidation       = false;
    protected $cleanValidationRules = true;

    // Callbacks
    protected $allowCallbacks = true;
    protected $beforeInsert   = [];
    protected $afterInsert    = [];
    protected $beforeUpdate   = [];
    protected $afterUpdate    = [];
    protected $beforeFind     = [];
    protected $afterFind      = [];
    protected $beforeDelete   = [];
    protected $afterDelete    = [];

    protected function getLikes($commentId)
    {
        $likes = new \App\Models\CommentLikesModel();
        return count($likes->where('comment_id', $commentId)->findAll());
    }
    protected function getComments($postId)
    {
        $comments = new \App\Models\CommentsModel();
        return $comments->where('post_id', $postId)->findAll();
    }

    public function getAllCommentsByPost(int $post_id)
    {
        $comments = $this->where('post_id', $post_id)->findAll();
        foreach ($comments as $comment) {
            $comment->likes = $this->getLikes($comment->id);
        }
        return $comments;
    }
}
