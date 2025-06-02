FROM postgres
ARG POSTGRES_INITDB_ARGS=--auth-host=scram-sha-256
ADD ./dbscript.sql /docker-entrypoint-initdb.d