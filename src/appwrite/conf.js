import conf from '../conf/config';
import config from '../conf/config';
// import {Client,ID,Database,Storage,Query, Flag} from 'appwrite';
import { Client, ID, Databases, Storage, Query } from 'appwrite';
export class Service{

    client= new Client();
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);
        // this.databases=new Databases(this.client);
        this.databases = new Databases(this.client);
        this.bucket=new Storage(this.client);

    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,{
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }


            )
        } catch (error) {
            throw error;
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug){
try {
      await this.databases.deleteDocument(
         config.appwriteDatabaseId,
         config.appwriteCollectionId,
         slug
      )
      return true
} catch (error) {
    console.log("Appwrite service :: deletePOst :: error",error)
    return false
}
    }


    async getPost(slug){
        try {
           return  await this.databases.getDocument(
            config.appwriteDatabaseId,
            config.appwriteCollectionId,
            slug
           )
        } catch (error) {
            console.log("Appwrite erroe :: getpost ::error",error)
            return false
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries

            )
        } catch(error){
            console.log("Appwrite service :: getPosts :: error",error);
            return false
        }
    }

    //file uploads
    async uploadFile(file){
       try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
       } catch (error) {
        console.log("Appwrite service :: fileuploads :: error", error);
        return false
       }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            )            
        } catch (error) {
            console.log("Appwrite service :: deletefile :: error",error)
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId
        )
    }
}

const service= new Service()
export default service