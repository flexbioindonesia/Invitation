import {DiscussionEmbed} from "disqus-react"
  
const Comments = () => { 
  const disqusShortname = "invie"
  
  const disqusConfig = { 
    url: "http://localhost:3000", 
    identifier:'123',  
    title: "Invie Test" 
  } 
  
  return ( 
    <div> 
      <DiscussionEmbed 
        shortname={disqusShortname} 
        config={disqusConfig} 
      /> 
    </div> 
  ) 
} 
  
export default Comments;