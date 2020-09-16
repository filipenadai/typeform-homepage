import React from 'react';

import GlobalStyles from './styles/global';
import { Main, Sticky, Section } from './styles';
function App() {
  return (
    <>
		<GlobalStyles />
		<Main style={{height: '1610vh'}}>

			<Section style={{height: '72.7%'}}>
				<Sticky className="first"/>
				<Sticky className="second"/>
			</Section>

			<Section>
				<Sticky className="third"/>
			</Section>
			
		</Main>
    </>
  );
}

export default App;
