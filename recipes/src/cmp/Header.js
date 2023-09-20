import React from "react";

function Header(props){
return <div className="jumbotron">
<h3 className="top-heading">
🍃Health Crisp🍃
</h3>
<input class="input-group w-50 mx-auto form-control" id="inp1"/>
<button type="button" onClick={props.clicked}>GO!!</button>
</div>
}

export default Header;
