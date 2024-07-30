import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = () => {
    return (
        <div className='layout bg-black px-60 text-white'>
            <div>
                <header>
                    <Header />
                </header>
                <main>
                    <Outlet />
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </div>
    )
}

export default Layout