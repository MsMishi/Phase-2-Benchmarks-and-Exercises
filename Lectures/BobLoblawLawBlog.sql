CREATE TABLE posts (
  id SERIAL Primary Key,
  Body text,
  category_id INTEGER References categories(id) -- {singularized_table_name}_ {column_name}
);


CREATE TABLE posts_users (
  post_id INTEGER References post(id),
  user_id INTEGER References user(id),
  Primary KEY(post_id, user_id))
  
CREATE TABLE users (
  id SERIAL Primary Key,
  email VARCHAR(100),
  password VARCHAR(100),
  post_id INTEGER References posts(id),
  post_id2 INTEGER References posts2(id));


CREATE TABLE comments (
  id SERIAL Primary Key,
  Body text,
  post_id INTEGER References posts(id),
  user_id INTEGER References users(id));


CREATE TABLE categories (
  id SERIAL Primary Key,
  Body text);

-- SAMPLE QUERIES
-- Get all comments from a given user

Select comments. *
From comments
Join users On (users.id = comments.user_id)
Where users.email = 'amy@example.com'

-- Get count of posts in each category_id LEFT INNER JOIN

Select categories.name,
         count(*)
From categories
Join posts On (categories.id = posts.category_id)
Group By categories.name;


Order By Count Desc
Limit 1;

-- Get all posts by a User by email

Select posts.*
From posts
Join posts_authors On (posts.id = posts_authors.post_id)
Join users On (posts_authors.author_id = users.id)
Where users.email = 'amy@example.com';
