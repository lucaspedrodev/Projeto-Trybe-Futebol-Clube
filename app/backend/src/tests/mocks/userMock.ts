const validUser = {
    username: 'Admin',
    role: 'admin',
    email: 'admin@admin.com',
    password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
  }

  const InvalidUser = {
    username: 'User',
    role: 'user',
    email: '@user.com',
    password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO', 
  }

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJBZG1pbiIsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwicGFzc3dvcmQiOiIkMmEkMDgkeGkuSHhrMWN6QU8wblpSLi5CMzkzdTEwYUVEMFJRMU4zUEFFWFE3SHh0TGpLUEVaQnUuUFciLCJpYXQiOjE2ODA2MzQ0ODgsImV4cCI6MTY4MDYzNjU4OH0.5yL9qgj4PlNwjnBFhnwKwYWEkkFOs8z8laJ_wRQRYto"
  

  const validLogin = {
    email: 'admin@admin.com',
    password: 'secret_admin',
  }

  const invalidLogin = {
    email: 'lucas.lucas@gmail',
    password: 'lucas',
  }
  export { InvalidUser, validUser, validLogin, invalidLogin, token }