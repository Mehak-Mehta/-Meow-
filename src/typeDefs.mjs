import { gql } from "apollo-server-express";

export const typeDefs = gql
`
type Query{
    hello : String!
    cat : [Cat!]!
    cat2 : [Cat2!]!
    

}

type Cat {
    id :ID!
    name : String!
}
type Cat2 {
    id : ID!
    name : String!
}
type Mutation{
    createCat(name: String!) : Cat!
}

`
