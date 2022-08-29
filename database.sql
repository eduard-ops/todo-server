create TABLE todo( 
    id SERIAL PRIMARY KEY,
    todoText VARCHAR(255),
    isComplited BOOLEAN NOT NULL,
    subNotes text[] DEFAULT '{}',
    parentId VARCHAR(255)
)



ALTER TABLE public.accounts 
    ALTER COLUMN pwd_history SET DEFAULT array[]::varchar[];


ALTER TABLE todo 
    ALTER COLUMN subnotes SET DEFAULT array[]::integer[];


ALTER TABLE todo

  RENAME COLUMN todotext TO todoText