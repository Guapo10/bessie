import './Cardsection.css';
import img1 from './assets/img (46).jpg';
import img2 from './assets/img (45).jpg';
import img3 from './assets/img (44).jpg';
const App = () => {
  return (
    <div class="cards">
        <div class="card1">
            <div class="container">
        <div className='card-img'>
   <img src={img1} alt="furniture" className="image"/>
   </div>
        </div>
        <div className="details">
          <h3>Living Room</h3>
          <p>Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover how Lorem Ipsum went from scrambled Latin passage to ubiquitous.</p>
        </div>
      </div>
      <div class="card2">
            <div class="container">
        <div className='card-img'>
   <img src={img2} alt="floor" className="image"/>
   </div>
        </div>
        <div className="details">
          <h3>Living Room</h3>
          <p>Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover how Lorem Ipsum went from scrambled Latin passage to ubiquitous.</p>
        </div>
      </div>
      <div class="card3">
            <div class="container">
        <div className='card-img'>
   <img src={img3} alt="wall" className="image"/>
   </div>
        </div>
        <div className="details">
          <h3>Living Room</h3>
          <p>Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover how Lorem Ipsum went from scrambled Latin passage to ubiquitous.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
