create table trip (
id serial not null primary key,
taxi_id int,
routes_id int,
foreign key (routes_id) references routes(id),
foreign key (taxi_id) references taxi(id)
);
create table routes (
    id serial not null primary key,
    name text,
    fare decimal(10,2)
);

create table taxi (
id serial not null primary key,
reg_number varchar(10),
trips_no int, 
region_id int,
foreign key (region_id) references region(id)
);

create table region (
    id serial not null primary key,
    region_name text
);
