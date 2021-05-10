import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'
import ConTent from './Content'
class Main extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Sidebar/>
                <div className="main-panel">
                    <Header/>
                    <ConTent/>
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default Main;