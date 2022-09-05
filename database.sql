create TABLE todo( 
    id VARCHAR(255),
    todoText VARCHAR(255),
    isComplited BOOLEAN NOT NULL,
    parentId VARCHAR(255)
)


create table todo (
    id serial not null,
    todoText VARCHAR(255),
    isComplited BOOLEAN NOT NULL,
    parentid integer,
    constraint id_pk primary key (id)
)

-- insert into todo (todotext, iscomplited, parentid) values ('parent-todo', false, null);
-- insert into todo (todotext,iscomplited, parentid) values ('child-todo', false, 1);
-- insert into todo (todotext,iscomplited, parentid) values ('item2', false, 2);
-- insert into todo (todotext,iscomplited, parentid) values ('subitem1', false, 3);




insert into todo (todotext, iscomplited, parentid) values ('parent-todo-01', false, null);
insert into todo (todotext,iscomplited, parentid) values ('child-todo', false, 1);
insert into todo (todotext,iscomplited, parentid) values ('item2', false, 2);
insert into todo (todotext,iscomplited, parentid) values ('subitem1', false, 3);
insert into todo (todotext, iscomplited, parentid) values ('parent-todo-02', false, null);
insert into todo (todotext, iscomplited, parentid) values ('child-todo-01', false, 4);
insert into todo (todotext, iscomplited, parentid) values ('child-todo-02', false, 5);




ПОСЛЕДОВАТЕЛЬНЫЙ ПУТЬ


with recursive temp1 (id,todotext,iscomplited,parent_id, path) as (
select t1.id,t1.todotext,t1.iscomplited, t1.parent_id, cast (t1.todotext as varchar (50)) as path
from todo t1 where t1.todotext = 'parent-todo'
union
select t2.id, t2.todotext, t2.iscomplited, t2.parent_id, cast (temp1.path || '->'|| t2.todotext as varchar(50))
from todo t2 inner join temp1 on (temp1.parent_id = t2.id))
select * from temp1


РЕКУРСИВНОЕ УДААЛЕНИЕ 

DELETE FROM todo WHERE id IN (
    with recursive all_todo (id,parentid, root_id) as (
        select t1.id,
        t1.parentid as parentid,
        t1.id as root_id
        from todo t1

        union all

        select c1.id,
        c1.parentid as parentid,
        p.root_id
        from todo c1
        join all_todo p on p.id = c1.parentid
    )
    select id from all_todo ap where root_id=1
);