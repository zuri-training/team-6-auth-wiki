<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreatePostsTable extends Migration
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
                'user_id' => [
                    'type'       => 'INT',
                    'constraint' => 5,
                    'null' => false
                ],
                'language_id' => [
                    'type'       => 'INT',
                    'constraint' => 5,
                    'null' => false
                ],
                'title' => [
                    'type' => 'VARCHAR',
                    'contraint' => 255,
                    'null' => false
                ],
                'slug' => [
                    'type' => 'VARCHAR',
                    'contraint' => 255,
                    'null' => false,
                    'unique' => true
                ],
                'content' => [
                    'type' => 'TEXT',
                    'null' => false
                ],
                'media_location' => [
                    'type' => 'VARCHAR',
                    'contraint' => 255,
                    'null' => true
                ],
                'likes_count' => [
                    'type' => 'INT',
                    'contraint' => 255,
                    'null' => false,
                    'default' => 0
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
                ],
                'deleted_at' => [
                    'type' => 'INT',
                    'constraint' => 255,
                    'null' => true
                ]
            ]
        );
        $this->forge->addKey('id', true);
        $this->forge->createTable('posts');
    }

    public function down()
    {
        $this->forge->dropTable('posts');
    }
}
