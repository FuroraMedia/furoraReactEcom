import React, {PropTypes} from 'react';
import Header from './common/Header';
import Footer from './common/footer/Footer';

class App extends React.Component {
    render() {
        return (
            <div className="container grid">
                <Header/>

                {this.props.children}
                <Footer/>
            </div>
        )
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};
export default App;
