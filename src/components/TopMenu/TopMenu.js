import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { ReactComponent as Logo } from '../../assets/svg/logo.svg'
import Cart from '../Cart'

import './TopMenu.scss'

export default function TopMenu(props) {
    const { productsCart, getProductsCart, products } = props
    return (
        <Navbar bg="dark" variant='dark' className='top-menu'>
                <BrandNav />
                <MenuNav />
                <Cart productsCart={productsCart} getProductsCart={getProductsCart} products={products} />
        </Navbar>
    )
}

function BrandNav() {
    return (
        <Navbar.Brand className='navbar-brand'>
            {/* <Logo /> */}
            <h2>
                La casa de los helados
            </h2>
        </Navbar.Brand>
    )
}

function MenuNav() {
    return (
        <Nav className='mr-auto'>
            <Nav.Link href='#'>Aperitivos</Nav.Link>
            <Nav.Link href='#'>Helados</Nav.Link>
            <Nav.Link href='#'>Tortas</Nav.Link>
        </Nav>
    )
}