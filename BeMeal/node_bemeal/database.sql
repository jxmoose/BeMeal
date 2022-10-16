CREATE DATABASE BeMeal;

CREATE TABLE users(
    username varchar(25),
    password varchar100
);

CREATE TABLE comments(
    ID int, 
    username varchar(25),
    text varchar(500)
)

CREATE TABLE images (
    username varchar(25), 
    image_id int, 
    location varchar(100)
)