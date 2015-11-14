<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tags', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->timestamps();
        });

        Schema::create('image_tag', function(Blueprint $table) {
            $table->increments('id');
            $table->integer('image_id', false, true)->length(10)->index();
            $table->integer('tag_id', false, true)->length(10)->index();
            $table->timestamps();

            $table->foreign('image_id')
            ->references('id')
            ->on('images')
            ->onDelete('cascade');

            $table->foreign('tag_id')
            ->references('id')
            ->on('tags')
            ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('tags');
        Schema::drop('image_tag');
    }
}
