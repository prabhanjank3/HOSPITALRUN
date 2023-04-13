export const createMultipartFormData = (fileFieldName:string,data:any) => {
    const formData = new FormData();
    for(let x in data)
    {
        if(x === fileFieldName)
        {
            for (let i = 0; i < data[fileFieldName].length; i++) {
                formData.append(fileFieldName, data[fileFieldName][i]);
              }
        }
        else
        formData.append(x, data[x]);
    }
    return formData;
}
export const getMultipartFormRequestHeader = (body:any) =>{
    return {
        'accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': `multipart/form-data boundary=${body._boundary}`,
    }
}