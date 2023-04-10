import { Box, Button, Grid, HStack, Heading, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import cursor from "../../../assets/images/cursor.png";
import Sidebar from '../Sidebar';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import {deleteUser, getAllUsers, updateUserRole} from '../../../redux/actions/admin';
// import Loader from "../../Layout/Loader/Loader";
import { toast } from 'react-hot-toast';
const Users = () => {
  // const users=[
  //   {
  //     _id:'1212321',
  //     name:"sid",
  //     email:"sidjain@gmail.com",
  //     role:'admin',
  //     subscription:{
  //       status:"active"
  //     }
  //   }
  // ]
  const dispatch = useDispatch();
  const {users,loading,error,message} = useSelector(state=>state.admin);
  const updateHandler = (userId)=>{
    dispatch(updateUserRole(userId));
    // console.log(userId);
  }
  const deleteButtonHandler = (userId)=>{
    // console.log(userId)
    dispatch(deleteUser(userId));
  }
  useEffect(()=>{
    if(error){
      toast.error(error);
      dispatch({type:'clearError'});
    }
    if(message){
      toast.success(message);
      dispatch({type:'clearMessage'});
    }
    dispatch(getAllUsers());
  },[dispatch,error,message])
  return (
    <Grid css={{cursor:`url(${cursor}), default`}} minH={'100vh'} templateColumns={['1fr','5fr 1fr']}>
        <Box p={["0","16"]} overflowX={"auto"}>
          <Heading textTransform={'uppercase'} my='16' textAlign={['center','left']}>All Users</Heading>
          <TableContainer w={['100vw','full']}>
            <Table variant={'simple'}>
              <TableCaption>
                All available user in the database
              </TableCaption>
              <Thead>
                <Tr>
                  <Th>Id</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Role</Th>
                  <Th>Subscription</Th>
                  <Th isNumeric>Actions</Th>
                </Tr>

              </Thead>
              <Tbody>
                { users &&
                  users.map((item)=>(

                    <Row loading={loading} item={item} key={item._id} deleteButtonHandler={deleteButtonHandler} updateHandler={updateHandler}  />
                  ))
                }
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        
        <Sidebar/>
    </Grid>
  )
}

export default Users

function Row({item,updateHandler,deleteButtonHandler,loading}){
  return(
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>{item.subscription && item.subscription.status === 'active'? 'Active' :'Not Active'}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button isLoading={loading} onClick={()=>updateHandler(item._id)} variant={'outline'} color={'purple.500'}>Change Role</Button>
          <Button isLoading={loading} color={'purple.600'} onClick={()=>deleteButtonHandler(item._id)}> 
            <RiDeleteBin7Fill/>
          </Button>
        </HStack>
      </Td>

    </Tr>
  )
}