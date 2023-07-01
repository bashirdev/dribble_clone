export const getUserQuery=`
query GetUser($email:string){
  user(by:{email:$email}){
    id
    name
    email
    avaterUrl
    description
    githubUrl
    linkedinUrl
  }
}
`

export const createUserMutation=`
 mutation createUser($input:UserCreateInput!){
  userCreate(input:$input){
    user{
      id
      name
      email
      avaterUrl
      description
      githubUrl
      linkedinUrl
    }
  }
 }

`