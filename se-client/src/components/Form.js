import React from 'react';
import logo from '../pic/logo.jpg';


class Form extends React.Component {
    render() {
        return (
            <div class="form">
                <div class="pic">
                <img src={logo} alt="search-logo" width="550px" height="360px"/>
                </div>
                <div class="search-box">
                    <input class="search-txt" type="text" name="" placeholder="Type to search" />
                    <a class="search-btn" href="#">
                    <i class="fab fa-facebook"></i>
                    </a>
                </div>
                <div class="wholeapp">
                    <a class="btn--blue" href="#">
                        </a>
                        <a class="btn--lightblue" href="#">
                            <i class="fab fa-twitter"></i>
                        </a>
                    <a class="btn--yellow" href="#">
                            <i class="fab fa-slack"></i>
                        </a>
                        <a class="btn--red" href="#">
                            <i class="fab fa-youtube"></i>
                        </a>
            </div>
        </div>

        );
    }
}

export default Form;