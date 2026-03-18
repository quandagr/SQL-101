--First Table--
CREATE TABLE customers(
  customer_id int PRIMARY KEY,
  full_name TEXT,
  address varchar,
  phone varchar,
  city varchar
);

--Second table
CREATE TABLE products (
  product_id int PRIMARY KEY,
  description TEXT,
  price NUMERIC
);

--Third Table--
CREATE TABLE sales (
  sale_id int PRIMARY KEY,
  quantity Int,
  customer_id int references customers (customer_id),
  product_id int references products (product_id)
 );