import * as React from 'react';
import './index.css';
import './styles.css';
//cmpts
import Header from './Header'
import MiddleMain from './MiddleMain'

//img
import starryBackground from './assets/backgrounds/starryBackground.png'
import greenBackground from './assets/backgrounds/greenBackground.png'
import guitarBackground from './assets/otherpics/otherForestGuitar.jpg'
//other



function App() {
  return (
    <div>
      <div style={{ backgroundImage:`url(${starryBackground})`,
      minHeight: '100vh',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      }}>
          <Header />
          <MiddleMain />
      </div>
      <div style={{ 
      background: "linear-gradient(#f8c3b0, #270707)",
      minHeight: '.5vh',
      
      }}>

      </div>
      <div style={{ backgroundImage:`url(${guitarBackground})`,
      minHeight: '100vh',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      }}>
      </div>
    </div>
    
  );
}

export default App;
