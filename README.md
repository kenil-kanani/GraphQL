# Graph QL

# Introduction to Graph QL

REST ( Representational State Transfer ) → conventional way to building web services.

Some down side of REST : 

1. No by default type safety (we have to do it manually)
2. Over fetching and under fetching : 
    - **Over-fetching** is when you request more data than what's needed by a particular component or view. For example, fetching all the details of a blog post (content, author, comments, etc.) when you only need the titles on the homepage.
    - **Under-fetching** is when you don't fetch enough data with a single request, and you need to make multiple requests to retrieve the required information. For example, fetching the blog post content, author information, and comments separately instead of getting them all in a single response.

GRPC able to solve type safety, but it can not solve over fetching and under fetching. That’s where Graph QL is comes in the picture.

 

## Graph QL

- Single end point
- type system
- flexible queries (graphQl is not a database query language, it is kind of api query language )

graphQL is a specs, that describes a declarative api query language.

![Screenshot 2024-06-06 at 1.09.08 PM.png](Graph%20QL%20ce60f0e0e7a141b2af73ff6fac99a784/Screenshot_2024-06-06_at_1.09.08_PM.png)

Server → (types , resolvers , query definition , mutation definition) ⇒ schema

Client → queries (read) , mutation (create , delete , update)

- Client Query : in a client query we request some data from server.
- Server Query Definition : that defines, how clients can access data.

Query → query is also a type (but special one), that defines , operations client can perform & on server side resembles, what will be sent as response.