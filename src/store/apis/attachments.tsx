import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getMultipartFormRequestHeader, createMultipartFormData } from "../../components/forms/helpers";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;
export const attachmentApi = createApi({
  reducerPath: "attachments",
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_URL
  }),
  tagTypes: ["fetch"],
  endpoints: (builder) => {
    return {
      fetchAttachments: builder.query<any, void>({
        providesTags: () => {
          return ["fetch"];
        },
        query: (patientid) => {
          return {
            url: "/getDocuments/"+patientid,
            method: "GET"
          };
        }
      }),
      addAttachment: builder.mutation({
        invalidatesTags: () => {
          return ["fetch"];
        },
        query: ({fileFieldName,data}) => {
            const formData = createMultipartFormData(fileFieldName,data);            
            const body = {
                fileFieldName: formData,
            }
          return {
            url: "/attach/"+data.patientid,
            method: "POST",
            mode:'no-cors',
            body: formData,
            prepareHeaders: (headers:any) => {
                headers.set('accept', "application/json");
                headers.set('Accept-Language', 'en-US,en;q=0.8');
                headers.set("Content-Type", `multipart/form-data boundary=${body._boundary}`);
                
                return headers;
            }
          };
        }
      })
    };
  }
});
export const { useFetchAttachmentsQuery, useAddAttachmentMutation } = attachmentApi;
