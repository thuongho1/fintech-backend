var db = connect("mongodb://localhost/admin");

db.createUser(
  {
    user: "yourAdminUserName",
    pwd: "yourAdminPassword",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)
