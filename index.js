const { ApolloServer } = require("apollo-server");
const typeDefs = require("./src/schema");
const resolvers = require("./src/resolvers");
const models = require("./models");
const { PubSub } = require("apollo-server");
const pubsub = new PubSub();
const cron = require("node-cron");

cron.schedule("* * * * *", () => {
  console.log("CRONNING");
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models, pubsub },
});

server.listen().then(({ url }) => console.log(`🚀 Listening on port: ${url}`));
