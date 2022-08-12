<?php

namespace App\Models;

use CodeIgniter\Model;
use Team6\AuthWiki\Auth;

class PostsModel extends Model
{
    protected $DBGroup          = 'default';
    protected $table            = 'posts';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $insertID         = 0;
    protected $returnType       = \App\Entities\Post::class;
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = [
        'user_id',
        'language_id',
        'content'
    ];

    // Dates
    protected $useTimestamps = true;
    protected $dateFormat    = 'int';
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

    protected function getLikes($postId)
    {
        $likes = new \App\Models\PostLikesModel();
        return count($likes->where('post_id', $postId)->findAll());
    }

    public function getAllPostsByLanguage(int $language_id)
    {
        $posts = $this->where('language_id', $language_id)->findAll();
        foreach ($posts as $post) {
            $post->likes = $this->getLikes($post->id);
        }
        return $posts;
    }
}
