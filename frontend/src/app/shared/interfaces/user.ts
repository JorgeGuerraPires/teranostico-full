export interface User {
    //--------------------
    email: string;
    name: string;
    //---------------------

    //----------------------------
    //optional parameters
    password?: string;
    _id?: string;
    level?: string;
    lastLogin?: string;
    failedLogin?: [string];
    typeOfAccount?: string;
    resetpassword?: string;
    status?: boolean
    //------------------------
}
