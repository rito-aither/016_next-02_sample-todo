use mydb ;

-- CreateTable
CREATE TABLE `todo` (
    `todo_id` INTEGER NOT NULL AUTO_INCREMENT,
    `todo` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `is_delete` BOOLEAN NOT NULL,

    PRIMARY KEY (`todo_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;


INSERT INTO todo (todo,status,is_delete) VALUE ("todo1","todo",false)
