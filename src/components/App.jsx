import React, {PropTypes} from 'react';
import Header from './common/header/Header';
import Footer from './common/footer/Footer';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <main>
                <div>
                {this.props.children}

                </div>
                </main>
                <Footer/>
            </div>
        )
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};
export default App;
