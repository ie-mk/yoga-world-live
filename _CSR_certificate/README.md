openssl genrsa 2048 > private.key

openssl req -new -key private.key > yogaworld.csr
