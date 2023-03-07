// tag::import[]
// Import the driver
import neo4j, { Driver, Integer, Node, Relationship } from "neo4j-driver";
import { getNeo4jCredentials } from "./utils.server";
// end::import[]

// tag::credentials[]
// Neo4j Credentials
const { NEO4J_URI, NEO4J_USERNAME, NEO4J_PASSWORD } = getNeo4jCredentials();
// end::credentials[]

export const driver = neo4j.driver(
  NEO4J_URI,
  neo4j.auth.basic(NEO4J_USERNAME, NEO4J_PASSWORD)
);
