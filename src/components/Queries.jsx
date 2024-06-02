
import { gql, request } from 'graphql-request';

const END_POINT = 'https://gql.hashnode.com'



export async function GET_ALL_POSTS(totalPost) {

  const query = gql`
 query{
  publication(host: "codezakiblog.hashnode.dev"){
    id
    title
    displayTitle
    url
    posts(first:${totalPost}){
      edges{
        node{
          id
          title
          readTimeInMinutes
          publishedAt
          brief
          tags{
            name
          }
          coverImage{
            url
          }
          content{
            html
          }
          
        }
      }
      totalDocuments
    }
  }
}`;
  try {
    const response = await request(END_POINT, query);
    const data = response.publication
    return data.posts;

  } catch (error) {
    console.error(error);
  }


}