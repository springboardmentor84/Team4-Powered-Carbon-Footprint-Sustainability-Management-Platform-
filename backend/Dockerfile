FROM eclipse-temurin:21-jdk

WORKDIR /app

COPY . .

RUN chmod +x mvnw
RUN ./mvnw clean package -DskipTests -Dmaven.compiler.failOnError=false

EXPOSE 8080

CMD ["/bin/sh", "-c", "/opt/java/openjdk/bin/java -Xms128m -Xmx512m -Dserver.port=$PORT -jar /app/target/backend-0.0.1-SNAPSHOT.jar"]
