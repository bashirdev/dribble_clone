import { createUserMutation, getUserQuery } from "@/grapql";
import { GraphQLClient } from "graphql-request";


const isProduction=process.env.NODE_ENV === 'production'
//npx grafbase@0.24 dev by the command het graphql endpont
const apiUrl=isProduction ? process.env.NEXT_PUBLIC_GRAFBASE_API_URL || '' : 'http://127.0.0.1:4000/graphql'

const apiKey = isProduction ? process.env.NEXT_PUBLIC_GRAFBASE_API_KEY || '' : 'letmein'

const serverUrl = isProduction ? process.env.NEXT_PUBLIC_SERVER_URL : 'http://localhost:3000'

const client=new GraphQLClient(apiUrl)

const makeGraphQLRequest=async(query:string, variable={})=>{
  try {
    //client request
    return await client.request(query, variable)


  } catch (error) {
    throw  error
  }
}


export const getUser = (email:string)=>{
  return makeGraphQLRequest(getUserQuery, {email})
}

export const createUser=(name:string, email:string, avaterUrl:string,)=>{
  const variables= {
    input:{
      name,email, avaterUrl
    }
  }
  return makeGraphQLRequest(createUserMutation, variables)
}