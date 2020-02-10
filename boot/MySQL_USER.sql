-- CREATE SCHEMA
CREATE SCHEMA vegetor;
USE vegetor;

-- CREATE ACCESS USER
CREATE USER 'vegetor'@'localhost' IDENTIFIED WITH mysql_native_password BY 'vegetor';
CREATE USER 'vegetor'@'%' IDENTIFIED WITH mysql_native_password BY 'vegetor';
GRANT ALL PRIVILEGES ON vegetor.* TO 'vegetor'@'localhost';
GRANT ALL PRIVILEGES ON vegetor.* TO 'vegetor'@'%';
FLUSH PRIVILEGES;
COMMIT;