export interface User {
    //--------------------
    email: string;
    name: string;
    //---------------------

    //----------------------------
    password?: string;
    _id?: String;
    level?: string;
    lastLogin?: string;
    failedLogin?: string;
    typeOfAccount?: string;
    resetpassword?: string;
    //------------------------
}
