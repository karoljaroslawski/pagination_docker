# Stronicowanie w react + express.js
Repozytorium zawiera przykład implementacji stronicowania z wykorzystaniem frontend react, backend express oraz bazy danych postgreSQL.

## Uruchomienie
### Wymagania
Docker i Docker compose
### Sposób uruchomienia
Uruchomić aplikację przez przejście do katalogu z repozytorium np.: `cd pagination_docker`, a następnie wpisać `docker compose up`. Aplikacja powinna być dostępna pod adresem: http://localhost:3000.
Możliwe jest uruchomienie aplikacji w widoku odłączonym (ang. detached) przez wpisanie komendy `docker compse up -d`.
### Zatrzymywanie
Aplikację można zatrzymać poprzez naciśnięcie kombinacji klawiszy Ctrl+C w widoku podłączonym (ang. attached, w terminalu wyświetlane są logi aktualnie uruchomionej aplikacji).
Jeżeli aplikacja została uruchomiona w widoku odłączonym (ang. detached) należy przejść do katalogu z plikiem "docker-compose.yml" i wpisać komendę `docker compose stop`.<br>
Kontenery docker compose można usunąć wpisując komendę `docker compose down` w katalogu z plikiem "docker-compose.yml".
