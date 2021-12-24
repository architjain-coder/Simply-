/*
PrivacyFlash Pro is licensed under the MIT License
Copyright (c) 2019 Rafael Goldstein, David Baraka, Sarah Jin, Sebastian Zimmeck
*/


/*
evidence.py
================================================================================
evidence.py is used for keeping track of privacy practice usages in an app's
    files.
*/


// from os import path


class Evidence{
    // def __init__(self, file_name, practice, used, classification, reason=None):
    constructor(file_name,practice,used,classification,reason=null){
        /*
        Creates an evidence object that stores where in a file
        a privacy practice is used.

        In general, we store this information to give the developer
        a better idea of where in their code they are using
        privacy-related functionality.

        :param file_name: name of file
        :param practice: which privacy practice is being used
        :param classification: classification of privacy practice use
                (i.e., which Framework is being used)
        :param reason: from info.plist, the reason for using a privacy
                practice
        :return:
        */
        self.file_name = file_name
        self.practice = practice
        self.used = used
        self.classification = classification
        self.reason = reason
    }

    
}