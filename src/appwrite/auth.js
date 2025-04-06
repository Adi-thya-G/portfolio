import conf from '../conf/conf.js';
import { Client, Account, ID,Databases,Storage } from "appwrite";


export class AuthService {
    client = new Client();
    databases
    account;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
        this.databases = new Databases(this.client);
        this.bucket=new Storage(this.client)
    }

   

    async getData(){
        try{
          return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId
            )
            
        }
        catch(error)
        {
          console.log(error)
        }
    }
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
    async getcourseData(){
        try{
            return this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCourseCollectionId
            )
        }
        catch(error)
        {
            console.log(error)
        }


    }
    get_project_file_preview(fileId="67a781670007beac9de9"){
        return this.bucket.getFilePreview(
            conf.appwriteBucketProjectId,
            fileId)

        }
       
    
}

const authService = new AuthService();

export default authService
