create TABLE todo( 
    id VARCHAR(255),
    todoText VARCHAR(255),
    isComplited BOOLEAN NOT NULL,
    subNotes text[] DEFAULT '{}',
    parentId VARCHAR(255)
)


