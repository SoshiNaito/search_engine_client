import React from 'react';


class Button extends React.Component {
  render() {
    return (
	    <form class="textbox"action="result.html" method="post">
            <div class="flex">
                <label class="text"><span class="color">Y</span>andex</label>   
                <input type="text" class="text-type" maxlength="50"></input>
                <div class="button-wrpper" > 
                    <div class="button" onclick="location.href='result.html'">
                        <p> Search </p>
                    </div>
                </div>
            </div>
        </form>
    );
  }
}

export default Button;