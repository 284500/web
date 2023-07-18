import api from './restful'
//调用案例
api.get('users', { page: 1 })
  .then((response) => {
    console.log(response.data)
  })

api.post('users', { name: 'John Doe', email: 'john.doe@example.com' })
  .then((response) => {
    console.log(response.data)
  })