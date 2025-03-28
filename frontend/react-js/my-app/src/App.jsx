import Card from "./components/Card"

function App(){
  return (
   <div style={{display:"flex" , flexWrap:"wrap" , justifyContent:"center" , alignItems:"center" , gap:"20px"}}>

   <Card 

   imageUrl="https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8b7f70ef-b5a6-41e4-bbc0-858eba4bce4a_1472x832.jpeg"

   title="The New York Times"
   description="New York Times"
   />

   
<Card 
   
   imageUrl="https://media.daily.dev/image/upload/s--3S-UtfQH--/f_auto/v1742509418/posts/m3VRlGDlC"

   title="The Javascript Times"
   description="Javascript Times"
   />

      
<Card 
   
   imageUrl="https://media.daily.dev/image/upload/f_auto,q_auto/v1/posts/dd9a32f7ff8b6d8d23f39f99d8ab58f2?_a=AQAEuj9"

   title="The DeepSeek Clone"
   description="DeepSeek Clone"
   />
 
   </div>
  )
}

export default App