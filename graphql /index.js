import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { Query } from 'mongoose';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  type Book {
    title: String
    subtitle: String
    publisher:  String
    description: String
  }

  type Query {
    books: [Book]
  }

`;

const resolvers = {
   Mutation: {
    addBook: (_, { title, subtitle, publisher, description }) => {
      const newBook = {
        id: Date.now().toString(),  // Simple ID generation
        title,
        subtitle,
        publisher,
        description
      };
      return newBook;
    },
    Query: {
        books:()=>{
            return [{
                title: 'My Book',
                subtitle: 'My Subtitle',
                publisher :'Piyush',
                description: 'Nice descrioption'
            },
        ];
        },
    },
};


// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);