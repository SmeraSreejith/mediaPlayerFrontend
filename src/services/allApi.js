import { serverUrl } from "./serverUrl"
import { commonApi } from "./commonApi"

//api to add video

export const addvideoApi = async(reqbody)=>{
  return  await commonApi('POST',`${serverUrl}/videos`,reqbody)
}

//api to get all video

export const getvideoApi = async()=>{
  return await commonApi('GET',`${serverUrl}/videos`,"")
}



//api to delete a video
export const deleteVideoApi =async(id)=>{
  return await commonApi('DELETE',`${serverUrl}/videos/${id}`,{})
}

//api to add video to watch history

export const addToHistoryApi = async(reqbody)=>{
  return await commonApi('POST',`${serverUrl}/history`,reqbody)
}

//api to get video from watch history
export const getvideofromHistoryApi = async()=>{
  return await commonApi('GET',`${serverUrl}/history`,"")
}

//api to video a video from history
export const deletevideofromHistory= async(id)=>{
  return await commonApi ('DELETE',`${serverUrl}/history/${id}`,{})
}

//api to add category
export const addCategoryApi = async (reqBody)=>{
   return await commonApi('POST',`${serverUrl}/category`,reqBody)
}
//api to get all category
export const AllCategoryApi = async()=>{
  return await commonApi('GET',`${serverUrl}/category`,"")
}
//api to delete category
export const deleteCategoryApi = async(id)=>{
  return await commonApi('DELETE',`${serverUrl}/category/${id}`,{})
}
//api to get a video 
export const AvideoApi = async(id)=>{
  return await commonApi('GET',`${serverUrl}/videos/${id}`,"")
}

//api to update category
export const updateCategoryApi = async (id,reqBody)=>{
  return await commonApi('PUT',`${serverUrl}/category/${id}`,reqBody)
}


