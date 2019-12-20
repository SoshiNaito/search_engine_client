import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Form extends React.Component {
    render() {
        return (
            <div class="form">
                <div class="search-box">
                    <input class="search-txt" type="text" name="" placeholder="Type to search" />
                    <a class="search-btn" href="#">
                        <FontAwesomeIcon class="icon" icon={['fab', 'search']} />
                    </a>
                </div>
                <div class="wholeapp">
                    <div class="app1">
                        <a class="btn--blue" href="#">
                        </a>
                        <a class="btn--lightblue" href="#">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </div>
                    <div class="app2">
                        <a class="btn--yellow" href="#">
                            <i class="fab fa-slack"></i>
                        </a>
                        <a class="btn--red" href="#">
                            <i class="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>

        );
    }
}

export default Form;