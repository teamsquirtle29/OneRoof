Uncomment server/database/index.js to create database tables

API GUIDE:

ENDPOINTS THAT CAN BE USED BY MULTIPLE USER TYPES

  '/user'
    POST: creates a user in 'users' table
      expects 'pwd', 'name', 'apt_id', and 'role' in request body
      request body must have 'Content-Type' of 'application/json'
    GET: authenticates (stretch feature) user and finds their role if they exist 
      looks for 'name' and 'pwd' in request header

  '/events'
    POST: creates event in 'events' table
      don't send this request until you've checked the role of the current user.
      management and maintenance can send a post to this route, residents cannot.
      request body expects 'date', 'description', 'type', and 'resident_id'
        assign NULL to resident_id if the event is meant to be public
        assign the id of a specific resident to resident_id if the event is private and meant for a specific user
        (e.g. accepted maintenance request, apartment inspection, etc)
    GET: gets all events (only events in the future, ignores events that have passed) from table depending on role
      expects 'role' (role of current user) and 'user_id' (id of current user) in request header
      if the role is 'manager', display all events
      if the role is 'resident', display only public events (with resident_id of NULL) or private events where their id equals the event's 'resident_id'

ENDPOINTS THAT CAN BE USED ONLY BY MANAGERS

  '/allUsers'
    GET: gets a list of all users for managers

