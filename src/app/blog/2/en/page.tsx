import React from "react";
import CodeBlock from "@/app/components/CodeBlock";
import Image from "next/image";


export default function BlogPost() {
    return (
        <section className="py-5">
            <div className="container px-5 my-5">
                <div className="row gx-5">
                    <div className="col-lg-12">
                        <article>
                            <header className="mb-4">
                                <h1 className="fw-bolder mb-1">Spring IoC & Dependency Injection: A Beginner’s Guide with Diagrams</h1>
                                <div className="text-muted fst-italic mb-2">February 19, 2025</div>
                                <a className="badge bg-dark text-decoration-none link-light" href="#!">Spring</a>
                                <a className="badge mx-2 bg-dark text-decoration-none link-light" href="#!">Java</a>
                                <a className="badge mx-2 bg-dark text-decoration-none link-light" href="#!">Inversion of Control</a>
                                <a className="badge mx-2 bg-dark text-decoration-none link-light" href="#!">Dependency Injection</a>
                            </header>

                            <section className="mb-5">
                                <p className="fs-5 mb-4">This blog documents my learning journey about Spring&apos; Inversion of Control and Dependency Injection. I hope this helps you as much as it is helping for me. In this blog, I&apos;ll walk you through:

                                </p>
                                <ul className="fs-5 mb-4">
                                    <li>Spring IoC and Dependency Injection explained visually</li>
                                    <li>UML Class Diagrams to model DI relationships</li>
                                    <li> Sequence Diagrams to show how Spring initializes beans</li>
                                    <li>Maven Project Setup for building and packaging a Spring IoC application</li>
                                </ul>
                                <p className="fs-5 mb-4">
                                    Let&apos;s create an example where we have a <code>Car</code> class that depends on an <code>Engine</code> class. We&apos;ll use Spring IoC and Dependency Injection (DI) using Spring&apos;s ApplicationContext.

                                    ApplicationContext is an IoC container that manages beans. The <code>Car</code> class does not create an Engine object itself. Instead, it gets the Engine object from the ApplicationContext. This is called Dependency Injection (DI).
                                </p>
                                <p className="fs-5 mb-4">
                                    Here is the UML Class Diagram for the Car and Engine classes and sequence diagram to show the flow of dependency injection in Spring:
                                </p>
                                <div className="row gx-5">
                                    <div className="col-lg-6">
                                        <figure className="mb-4">


                                            <Image src="/blog2_uml.png" alt={""} width={400} height={600}></Image>

                                        </figure>
                                    </div>
                                    <div className="col-lg-6">
                                        <figure className="mb-4"> <Image src="/blog2_sequence.png" alt={""} width={600} height={400}></Image></figure>
                                    </div>
                                </div>
                                <p className="fs-5 mb-4">
                                    Let&apos;s create a Maven project with the following structure:
                                </p>
                                {/* ✅ Use the CodeBlock component */}
                                <CodeBlock code={`.
                                    ├── README.md
                                    ├── pom.xml
                                    └── src
                                        ├── main
                                        │   ├── java
                                        │   │   └── org
                                        │   │       └── example
                                        │   │           ├── AppConfig.java (Spring configuration)
                                        │   │           ├── Car.java (depends on Engine)
                                        │   │           ├── Engine.java (dependency)
                                        │   │           └── Main.java
                                        │   └── resources
                                        └── test
                                            └── java
                                    `} />
                                <p className="fs-5 mb-4">
                                    Let&apos;s define the <code>Engine</code> class.
                                </p>
                                <CodeBlock code={`
                                public class Engine {
                                    private String type;

                                    public Engine(String type) {
                                        this.type = type;
                                    }

                                    public String getType() {
                                        return type;
                                    }
                                }
                                `} />
                                <CodeBlock code={`
                                public class Car {
                                        private Engine engine;
                                         // Constructor-based Dependency Injection
                                        public Car(Engine engine) {
                                            this.engine = engine;
                                        }

                                        public void drive() {
                                            System.out.println("Car is driving with " + engine.getType() + " engine");
                                        }
                                    }
                                `} />
                                <p className="mt-3 fs-5 mb-4">
                                    We configure Spring with Java-based configuration.

                                </p>
                                <CodeBlock code={`
                                        import org.springframework.context.annotation.Bean;
                                        import org.springframework.context.annotation.Configuration;

                                        @Configuration
                                        public class AppConfig {
                                            @Bean
                                            public Engine engine() {
                                                return new Engine("V8");
                                            }

                                            @Bean
                                            public Car car() {
                                                return new Car(engine()); // Injecting Engine bean
                                            }
                                        }
                                    `} />
                                <p className="mt-3 fs-5 mb-4">
                                    Let&apos;s define <code>Main</code> class to run the Spring IoC container.

                                </p>
                                <CodeBlock code={`
                                        import org.springframework.context.ApplicationContext;
                                        import org.springframework.context.annotation.AnnotationConfigApplicationContext;

                                        public class Main {
                                            public static void main(String[] args) {
                                                // Load Spring IoC container using Java-based configuration
                                                ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);

                                                // Get the Car bean
                                                Car myCar = context.getBean(Car.class);

                                                // Use the Car object
                                                myCar.drive();
                                            }
                                        }
                                                                            `} />

                                <p className="mt-3 fs-5 mb-4">
                                    You can clone the project from my GitHub repository: <a className="fs-5 link-dark" href="https://github.com/YagmurGULEC/spring-practices/tree/dependency-inj" target="_blank"
                                        rel="noopener noreferrer"> GitHub Repository</a>

                                </p>


                            </section>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}
