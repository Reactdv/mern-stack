

const createData = "http://localhost:5000/post"

const getData = "http://localhost:5000/get"

const deleteData =(id)=> 
`http://localhost:5000/delete/:${id}`

const updateData = "http://localhost:5000/update"

export { 
      
      createData,
      getData,
      deleteData,
      updateData
  
}
