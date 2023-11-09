# Swe_642_hw3

Spring boot application for swe 642 hw3

## Dependencies

- Install latest version of Java (21.x.x)
- (Optional) Install latest version of maven (3.9.5)
  - Or use the included `mvnw` wrapper in the repo

## Suggestions

- Use VS Code as your IDE
- Install the VS Code "Extension Pack for Java"
  - Includes "Maven for Java" among other things

## How to Run

PostgreSQL is the database dependency for this project. Either install
locally to your computer, run your own virtual server, or use the
docker-compose.yaml file to run the PostgreSQL server.

```shell
docker-compose up -d
```

> To shutdown the container and remove the volume:
>
> ```shell
> docker-compose down -v
> ```

With postgres running, go ahead and install the project dependencies with maven.
This will build out the necessary files in `target/` to run a minimal application.
This will also run the test which does nothing but ensures that an empty test is run.

```shell
mvn install
```

Run the application with the spring-boot plugin:

```shell
mvn spring-boot:run
```

The default port is 8080, so you can visit http://localhost:8080 and you will see an
ugly page with a 404 error because the webserver hasn't been configured to run anything
yet.
