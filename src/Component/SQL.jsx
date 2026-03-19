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

 insert into
  customers (customer_id, full_name, address,phone, city)
values
  (1, 'Quanda Grant', '375 Stiles Blvd', 'Tampa'),
  (2, 'Autyum Heyward', '550 Stiles Blvd', 'Miami'),
  (3, 'Zoei Heyward', '675 Stiles Blvd', 'Tampa'),
  (4, 'Imani Heyward', '7700 Mountain View Rd', 'Venus'),
  (5, 'Alecya Heyward', '800 Fire Lane', 'Phoenix');

insert into
  customers (customer_id, full_name, address,phone, city)
values
  (6, 'Collin Grant', '7600 Xavier Rd','000-000-0000', 'Rembert'),
  (7,'Dexter Grant', '777 Heaven Hwy','000-000-0000', 'Myrtle Beach'),
  (8,'Dre Jamaician', '0021 Kings HWy','000-000-0000', 'North Myrtle Beach'),
  (9, 'Dazmon Liar', '221 Lake City Ave','000-000-0000', 'Lake City'),
  (10, 'Tristian Rivera', '6200 Paradise Lane','000-000-0000', 'Houston');
  
  insert into products (product_id,description, price) 
  values 
  (101, 'iphone', '799'), 
  (102, 'computer','2500'), 
  (103, 'laptop','1999'),
  (104, 'apple watch','799'),
  (105, 'earbud','249');

  insert into sales (sale_id, quantity, customer_id, product_id)
  values
  (500,1,1,101);
  
  insert into sales (sale_id, quantity, customer_id, product_id)
  values
  (501,1,2,102),
  (502,1,3,103),
  (503,1,4,104),
  (504,1,5,105);


  update sales
 set quantity= '10'
 where customer_id=4;

 update products
 set price=price * 1.15;
 
 delete from sales
 where sale_id = 504;

 delete from sales
 set quantity

 delete from sales;