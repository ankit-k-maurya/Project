import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { FaIndianRupeeSign } from "react-icons/fa6";
import axios from "../axios.jsx";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import * as jose from 'jose'


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(Name, Product, Quantity, Subtotal) {
    return { Name, Product, Quantity, Subtotal };
}

export default function CustomizedTables() {
    const navigate = useNavigate();
    const [ResponseOrderItem, setResponseOrderItem] = useState()
    useEffect(() => {
        async function fetchData() {
            const token = document.cookie;
        const claims = jose.decodeJwt(token)
        const CustomerID = claims.CustomerID;
        console.log('CID', CustomerID)

        const Respons = await axios.get('/orderitem/' + CustomerID);
        setResponseOrderItem(Respons)
        }
        fetchData();
    }, [])
    
    if (ResponseOrderItem === undefined) {
        return 'Lodding...';

    } else {
        console.log('data',ResponseOrderItem.data.result)
        const Details = ResponseOrderItem.data.result[0];
        console.log('Details:', Details);
        Details.map(()=> (curElem) => {
            const { fullname, productname, quantity, sumamount } = curElem;
            createData(fullname, productname, quantity, sumamount)
        });
        return (
            <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="right">Product</StyledTableCell>
                            <StyledTableCell align="right">Quantity</StyledTableCell>
                            <StyledTableCell align="right">Subtotal</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Details.map((curElem) => {
                            const { fullname, productname, quantity, sumamount } = curElem;
                            return (
                                <>
                                    <StyledTableRow>
                                        <StyledTableCell component="th" scope="row"> {fullname}</StyledTableCell>
                                        <StyledTableCell align="right">{productname}</StyledTableCell>
                                        <StyledTableCell align="right">{quantity}</StyledTableCell>
                                        <StyledTableCell align="right"><FaIndianRupeeSign />{sumamount}</StyledTableCell>
                                    </StyledTableRow>
                                </>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <button className="buttone" onClick={() => (navigate(-1))}> go to Back</button>
        </>     
        );
    }
   
}
/*
import { useNavigate } from "react-router-dom";
import { FaIndianRupeeSign } from "react-icons/fa6";
import axios from "../axios.jsx";
import '../Customer/App.css'

let ResponseOrderItem = await axios.get('/orderitem/' + 2);
const OrderDetails = () => {
    const navigate = useNavigate();

    var Details = ResponseOrderItem.data.result[0];
    console.log('Details:', Details);
    let amount = Details.map((curElem) => curElem.sumamount);
    console.log("amount", amount)
    let sum = 0;
    for (let i = 0; i < amount.length; i++) { sum += amount[i]; }
    console.log("Sum", sum)
    return (
        <div className="Container">
            <h1 className="head" >-: CUSTOMERS DETAILS:-</h1>
            <div className="cardbox">
            <button className="button" onClick={() => (navigate(-1))}> go to Back</button>
            <table border={1}>
                <thead className='th'>
                    <th >Name</th>
                    <th >Product</th>
                    <th >Quantity</th>
                    <th >Subtotal</th>
                </thead>
            </table>
            {
                Details.map((curElem) => {
                    const { fullname, productname, quantity, sumamount } = curElem;
                    return (
                        <>
                            <table border={1}>
                                <tbody>
                                    <tr className='td'>
                                        <td >{fullname}</td>
                                        <td >{productname}</td>
                                        <td >{quantity}</td>
                                        <td ><FaIndianRupeeSign />{sumamount}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </>
                    );
                })}
           
         </div>
        </div>
    )
}

export default OrderDetails*/