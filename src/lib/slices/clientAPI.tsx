import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserProfile } from "@/src/types/user";
import { RootState } from "../store";

export const clientAPI = createApi({
  reducerPath: "clientApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
   prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token
        if (token) {
            headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
    }, 
        
}),
  endpoints: (builder) => ({
    getProfile: builder.query<UserProfile, string>({
      query: (name) => `/profile/${name}`, //maybe have @me to get own profile
    }),
  }),
});

export const { useGetProfileQuery } = clientAPI;
