-- USERS
create table Users (
	userId int identity(1,1) primary key,
	userName nvarchar(50) not null,
	email nvarchar(255) not null,
	passwordHash nvarchar(255) not null,
	fullName nvarchar(100) not null,
	avatar nvarchar(500) null,
	bio nvarchar(1000) null,
	gitHubUrl nvarchar(500) null,
	linkedinUrl nvarchar(500) null,
	facebookUrl nvarchar(500) null,
	instagramUrl nvarchar(500) null,
	lastLoginAt datetime2 null,
	isActive bit not null default 1,
	createdAt datetime2 not null default getutcdate(),
	updatedAt datetime2 not null default getutcdate(),
	isDeleted bit not null default 0,
	constraint UQ_Users_username unique (username),
	constraint UQ_Users_email unique (email)
)

-- ROLES
create table Roles (
	roleId int identity(1,1) primary key,
	roleName nvarchar(50) not null,
	description nvarchar(255) null,
	constraint UQ_Roles_roleName unique (roleName)
)

--USER ROLES
create table UserRoles (
	userRoleId int identity(1,1) primary key,
	userId int not null,
	roleId int not null,
	createAt datetime2 not null default getutcdate(),
	constraint FK_UserRoles_Users foreign key (userId) references Users(userId) on delete cascade,
	constraint FK_UserRoles_Roles foreign key (roleId) references Roles(roleId) on delete cascade
)

-- PROJECTS
create table Projects (
	projectId int identity(1,1) primary key,
	title nvarchar(200) not null,
	slug nvarchar(200) not null,
	summary nvarchar(500) null,
	description nvarchar(max) null,
	githubUrl nvarchar(500) null,
	demoUrl nvarchar(500) null,
	thumbnail nvarchar(500) null,
	status nvarchar(20) not null default 'Draft',
	displayOrder int not null default 0,
	featured bit not null default 0,
	createdBy int null,
	createdAt datetime2 not null default getutcdate(),
	updatedAt datetime2 not null default getutcdate(),
	isDeleted bit not null default 0,
	constraint UQ_Projects_Slug unique (slug),
	constraint CK_Projects_Status check (status in ('Draft', 'Published', 'Archived')),
	constraint FK_Projects_Users foreign key (createdBy) references Users(userId) on delete set null
)

-- PROJECTS CATEGORIES
create table ProjectCategories (
	categoryId int identity(1,1) primary key,
	name nvarchar(100) not null,
	description nvarchar(255) null,
	displayOrder int not null default 0,
	constraint UQ_ProjectCategories_Name unique (name)
)

-- PROJECT CATEGORIES MAPPING
create table ProjectCategoryMappings (
	projectId int not null,
	categoryId int not null,
	constraint PK_ProjectCategoryMappings primary key (projectId, categoryId),
	constraint FK_ProjectCategoryMappings_Projects foreign key (projectId) references Projects(projectId) on delete cascade,
	constraint FK_ProjectCategoryMappings_Categories foreign key (categoryId) references ProjectCategories(categoryId) on delete cascade
)

---------- todo ------------------

-- TECHNOLOGIES
create table technologies (
	technologyId int identity(1,1) primary key,
	name nvarchar(100) not null,
	iconUrl nvarchar(500) not null,
	website nvarchar(500) not null,
	displayOrder int not null default 0,
	constraint UQ_Technologies unique (name),
)

-- PROJECT TECHNOLOGIES

-- PROJECT IMAGES

-- ARTICLES

-- ARTICLE CATEGORIES

-- ARTICLE CATEGORY MAPPINGS

-- TAGS

-- ARTICLE TAGS

-- PAGES

-- MEDIA FIELS

-- CONTACTS

-- AUDIT LOGS