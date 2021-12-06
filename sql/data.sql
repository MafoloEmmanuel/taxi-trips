/* insert data into region table*/

insert into region(id, region_name) values (1, 'Durban');
insert into region(id, region_name) values (2, 'Cape Town');
insert into region(id, region_name) values (3, 'Gauteng');

/* insert data into taxi table*/
insert into taxi(id,reg_number,trips_no,region_id) values (1,'ND 23451', 7, 1);
insert into taxi(id,reg_number,trips_no,region_id) values (2,'ND 22074', 13, 1);
insert into taxi(id,reg_number,trips_no,region_id) values (3,'ND 21559', 10, 1);

insert into taxi(id,reg_number,trips_no,region_id) values (4,'BGf 789 GP',9,3);
insert into taxi(id,reg_number,trips_no,region_id) values (5,'TYI 569 GP',12,3);
insert into taxi(id,reg_number,trips_no,region_id) values (6,'FGP 320 GP',15,3);

insert into taxi(id,reg_number,trips_no,region_id) values (7,'CA 25874',9,2);
insert into taxi(id,reg_number,trips_no,region_id) values (8,'CA 22778',10,2);
insert into taxi(id,reg_number,trips_no,region_id) values (9,'CA 20112',12,2);



/* insert data into routes table*/

insert into routes(id,name,fare) values (45,'Umlazi', 15.00);
insert into routes(id,name,fare) values (55,'Johannesburg', 18.00);
insert into routes(id,name,fare) values (65,'Ebenhaezer', 25.00);
insert into routes(id,name,fare) values (75,'Springs', 20.00);

/* insert data into trip table*/

insert into trip(id,taxi_id,routes_id) values (1,1,45);
insert into trip(id,taxi_id,routes_id) values (2,4,55);
insert into trip(id,taxi_id,routes_id) values (3,7,65);
insert into trip(id,taxi_id,routes_id) values (4,6,75);



