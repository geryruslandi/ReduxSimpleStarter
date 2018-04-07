import React from 'react';
import ReactDom from 'react-dom';

//component
import SearchComponent from './component/search_component';


const App = () =>{
	return (
		<div>
            <SearchComponent />
		</div>
	);
}

ReactDom.render(<App />,document.querySelector('.container'));