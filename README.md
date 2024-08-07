API FLOW

SIGNUP - https://folder-apis.onrender.com/api/auth/
METHOD - POST
TOKEN - NA
PAYLOAD - {
    "email": "vishal@gmail.com",
    "password": "123"
}



LOGIN - https://folder-apis.onrender.com/api/auth/login
METHOD - POST
TOKEN - NA
PAYLOAD - {
    "email": "vishal@gmail.com",
    "password": "123"
}


LOGOUT - https://folder-apis.onrender.com/api/auth/logout
METHOD - GET
TOKEN - REQUIRED TOKEN
PAYLOAD - NA


CREATE FOLDER - https://folder-apis.onrender.com/api/folders/
METHOD - POST
TOKEN - REQUIRED TOKEN
PAYLOAD - {
    "folder_name": "Sub Main 2",
    "parent_folder": "66b25d1bd0498af09933a289"   //NOT REQUIRED FOR FIRST TIME
}



GET FOLDERS - https://folder-apis.onrender.com/api/folders/
METHOD - GET
TOKEN - REQUIRED TOKEN
PAYLOAD - NA


GET ONE FOLDER - https://folder-apis.onrender.com/api/folders/66b25fb54c38595733b20c34  - ID IN PARAMS
METHOD - GET
TOKEN - REQUIRED TOKEN
PAYLOAD - NA


DELETE ONE FOLDER - https://folder-apis.onrender.com/api/folders/66b25fb54c38595733b20c34  - ID IN PARAMS
METHOD - DELETE
TOKEN - REQUIRED TOKEN
PAYLOAD - NA


UPLOAD AN IMAGE - https://folder-apis.onrender.com/api/images/
METHOD - POST
TOKEN - REQUIRED TOKEN
PAYLOAD - {
        folder_id - ID
        image - FILE IN FORM DATA
}


GET IMAGES - https://folder-apis.onrender.com/api/images/?name=167   WITH QUERY SEARCH BY NAME
METHOD - GET
TOKEN - REQUIRED TOKEN
PAYLOAD - NA

GET ONE IMAGE - https://folder-apis.onrender.com/api/images/66b262b52f06b52fc3ac7d41
METHOD - GET
TOKEN - REQUIRED TOKEN
PAYLOAD - NA


DELETE ONE IMAGE - https://folder-apis.onrender.com/api/images/66b262b52f06b52fc3ac7d41
METHOD - GET
TOKEN - REQUIRED TOKEN
PAYLOAD - NA




