<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreatePostsLikesTable extends Migration
{
    public function up()
    {
        $this->forge->addField(
            [
                'id' => [
                    'type'           => 'INT',
                    'constraint'     => 5,
                    'unsigned'       => true,
                    'auto_increment' => true,
                ],
                'post_id' => [
                    'type'       => 'INT',
                    'constraint' => 255,
                    'null' => false
                ],
                'user_id' => [
                    'type'       => 'INT',
                    'constraint' => 255,
                    'null' => false
                ],
                'created_at' => [
                    'type' => 'INT',
                    'constraint' => 255,
                    'null' => false
                ],
                'updated_at' => [
                    'type' => 'INT',
                    'constraint' => 255,
                    'null' => true
                ]
            ]
        );
        $this->forge->addKey('id', true);
        $this->forge->createTable('posts_likes');
    }

    public function down()
    {
        $this->forge->dropTable('posts_likes');
    }
}
