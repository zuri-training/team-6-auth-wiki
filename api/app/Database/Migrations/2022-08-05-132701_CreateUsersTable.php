<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateUsersTable extends Migration
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
                'status' => [
                    'type'       => 'VARCHAR',
                    'constraint' => 5,
                    'null' => false,
                    'default' => 'user'
                ],
                'email' => [
                    'type' => 'VARCHAR',
                    'contraint' => 255,
                    'null' => false,
                    'unique' => true
                ],
                'password' => [
                    'type' => 'VARCHAR',
                    'contraint' => 255,
                    'null' => false
                ],
                'username' => [
                    'type' => 'VARCHAR',
                    'contraint' => 255,
                    'null' => false,
                    'unique' => true
                ],
                'extra_data' => [
                    'type' => 'TEXT',
                    'null' => false,
                    'default' => '{}'
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
        $this->forge->createTable('users');
    }

    public function down()
    {
        $this->forge->dropTable('users');
    }
}
