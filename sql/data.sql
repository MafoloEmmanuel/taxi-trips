/* insert data into region table*/

insert into region(id, region_name) values (1, 'Durban');
insert into region(id, region_name) values (2, 'Cape Town');
insert into region(id, region_name) values (3, 'Gauteng');

/* insert data into taxi table*/
insert into taxi(reg_number,trips_no,region_id) values ('ND 23451', 7, 1);
insert into taxi(reg_number,trips_no,region_id) values ('BGf 789 GP',3,3);
insert into taxi(reg_number,trips_no,region_id) values ('CA 25874',9,2);


/* insert data into routes table*/

insert into routes(name,fare) values ('Umlazi', 15.00);
insert into routes(name,fare) values ('Johannesburg', 18.00);
insert into routes(name,fare) values ('Ebenezer', 25.00);
insert into routes(name,fare) values ('Springs', 20.00);

/* insert data into trip table*/


