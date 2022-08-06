<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateLanguagesTable extends Migration
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
                'language' => [
                    'type'       => 'VARCHAR',
                    'constraint' => 255,
                    'null' => false,
                    'unique' => true
                ]
            ]
        );
        $this->forge->addKey('id', true);
        $this->forge->createTable('languages');

        // Dump data
        $language = new \App\Entities\Language();
        $languages = new \App\Models\LanguagesModel();

        $language->language = 'PHP';
        $languages->save($language);

        $language->language = 'JavaScript';
        $languages->save($language);

        $language->language = 'Python';
        $languages->save($language);
    }

    public function down()
    {
        $this->forge->dropTable('languages');
    }
}
