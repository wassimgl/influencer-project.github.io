import {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { deleteCustomer, getCustomer } from '../action/customerAction';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import './listCustomer.css';
import Button from 'react-bootstrap/Button';
import EditCustomerModal from '../component/EditCustomerModal';
import ModalCustomer from '../component/ModalCustomer';
const ListCustomer = () => {
  const dispatch = useDispatch();

  const {customerList} = useSelector((state)=>state.customer);
  useEffect(()=> {
    dispatch(getCustomer())
  },[dispatch]);
  const handleDelete = (custId) => { 
    dispatch(deleteCustomer(custId))
   };
  
  return (
    <section className='tabo'>
     <div className='tableau'>
    <div className='tableHeader'>
      <p className='pip'>Customer Details</p>
      <div>
       
        <ModalCustomer/>
      </div>
    </div>
    <Table style={{'marginTop':"60px" }} striped bordered hover  >
  <thead style={{'padding': "15px"}}>
    <tr>
     
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Address</th>
      <th>Country</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
    </thead>
    {customerList.map(el=>(
        <>
        <tbody>
    <tr>
      
      <td>{el.firstName}</td>
      <td>{el.lastName}</td>
      <td>{el.email}</td>
      <td>{el.phone}</td>
      <td>{el.address}</td>
      <td>{el.country}</td>
      <td>
      <EditCustomerModal customer={el}/>
      </td>
      <td><Button variant="danger"  onClick={()=>handleDelete(el._id)}> delete </Button></td>
    </tr>
    </tbody>
  
    </>
    ))};
  </Table>

  <div className='pignation'>
 <Link to='/dashbordadmin'><button className='dash'>  Dashbord Admin </button> </Link>

 </div>

     

    </div>
    </section>
  )
};


export default ListCustomer