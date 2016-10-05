Create table species
(
	id bigserial primary key,
	common text,
	binomial text,
	edible text,
	warnings text,
	impact text
	
);

create table species_relationships
( 
	id bigserial primary key,
	parent_id bigint,
	child_id bigint
);

create table species_image
(
	id bigserial primary key,
	species_fk bigint,
	file_path text,
	image_caption text,
	height integer,
	width integer
);

create table species_content
(
	id bigserial primary key,
	species_fk bigint,
	title text,
	sp_order integer,
	sp_content text
);