# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_05_31_151046) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "marked_options", force: :cascade do |t|
    t.bigint "quiz_id"
    t.bigint "question_id"
    t.bigint "user_id"
    t.integer "marked_option"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "options", force: :cascade do |t|
    t.string "option_text", null: false
    t.boolean "correct", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "question_id"
    t.index ["question_id"], name: "index_options_on_question_id"
  end

  create_table "questions", force: :cascade do |t|
    t.text "question", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "quiz_id"
    t.index ["quiz_id"], name: "index_questions_on_quiz_id"
  end

  create_table "quiz_settings", force: :cascade do |t|
    t.float "correct_mark", default: 1.0
    t.boolean "negative_marking", default: false
    t.float "negative_mark", default: 0.0
    t.datetime "start_time"
    t.datetime "end_time"
    t.integer "duration", default: 300
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "quiz_id"
    t.index ["quiz_id"], name: "index_quiz_settings_on_quiz_id"
  end

  create_table "quizzes", force: :cascade do |t|
    t.string "title", null: false
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.integer "questions_count"
    t.index ["user_id"], name: "index_quizzes_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
