import React from 'react'

class Footer extends React.Component {
    render() {
        return (
                    <footer className="footer">
                        <div className="container-fluid">
                            <nav className="pull-left">
                                <ul>
                                    <li>
                                        <a href="#">
                                            Home
                            </a>
                                    </li>

                                </ul>
                            </nav>
                            <p className="copyright pull-right">
                                &copy;
                        <script>
                                    document.write(new Date().getFullYear())
                        </script> <a href="http://www.facebook.com/kt.isokids">isokids</a>, made with love for a better web
                    </p>
                        </div>
                    </footer>
        )
    }
}

export default Footer;