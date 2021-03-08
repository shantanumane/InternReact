import React, {Component} from 'react';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    Progress,
    Table,
    Container,
    Row,
    Col,
  } from "reactstrap";

class BookingTable extends Component {
    constructor() {
      super();
      
      this.state = {
        showMenu: false,
      }
      
    }
    
    showMenu(event) {
      
      this.setState({
        showMenu: !this.state.showMenu,
      });
    }
  
    render() {
      return (
        <div>
            <Table className="align-items-center table-dark" responsive>
                <thead class="thead-dark">
                  <tr>
                  <th scope="col">Action</th>
                    <th scope="col">Date</th>
                    <th scope="col">Total</th>
                    <th scope="col">Deluxe</th>
                    <th scope="col">Super Deluxe</th>
                    <th scope="col">Executive rooms</th>
                    <th scope="col">Suite rate</th>
                    <th scope="col">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><Button  onClick={()=>this.showMenu()}>Booking Details</Button></td>
                    <th scope="row">11/12/2020</th>
                    <td>4,569</td>
                    <td>340</td>
                    <td > 
                    <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                    340</td>
                    <td>340</td>
                    <td>30</td>
                    
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 46,53%
                    </td>

                  </tr>
                  <tr>
                    <td><Button  onClick={()=>this.showMenu()}>Booking Details</Button></td>
                    <th scope="row">12/12/2020</th>
                    <td>4,569</td>
                    <td>340</td>
                    <td > 
                    <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                    340</td>
                    <td>340</td>
                    <td>30</td>
                    
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 46,53%
                    </td>

                  </tr>

                  {
            this.state.showMenu? (
                <div className="menu">
                    <tr>
                </tr>
                 <thead> 
                <tr>
                    <td><Button  onClick={()=>this.showMenu()}>Close</Button></td>
                    <th scope="row">11/12/2020</th>
                    <th scope="row">12/12/2020</th>
                    <th scope="row">13/12/2020</th>
                    <th scope="row">14/12/2020</th>
                    <th scope="row">15/12/2020</th>
                    <th scope="row">16/12/2020</th>
                    <th scope="row">1712/2020</th>
                    <tr></tr>
                  
                </tr> 
                </thead>  
                <tbody>
                <tr scope="row">Deluxe</tr>
                <tr scope="row">Super Deluxe</tr>
                <tr scope="row">Executive rooms</tr>
                <tr scope="row">Suite rate</tr>
                <tr scope="row">Premium</tr>
                    
                </tbody>

                    
                </div>
                
              )
              : (
                null
              )
          }
                
                  
                </tbody>
          
              </Table>














          
         
        </div>
      );
    }
  }
  export default BookingTable;
