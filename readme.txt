API GUIDE:

/user
  POST: creates a user in database
  expects 'pwd', 'name', 'apt_id', and 'role' in request body
  request body must have 'Content-Type' of 'application/json'

  GET: authenticates user and finds their role if they exist 
  looks for 'name' and 'pwd' in request header