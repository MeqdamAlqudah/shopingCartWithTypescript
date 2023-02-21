const likesUrl = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/zSfqlcr6ZqRCddk10WHV/likes";
export const generateLikes = (data:{
    item_id:number
})=>{
    fetch(likesUrl,{
        method:"POST",
        headers: { 'Content-type': 'application/json' },
        body:JSON.stringify(data)
    }).then((res)=>{
        if(!res.ok){
            console.log(res)
        }
    });
};