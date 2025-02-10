import logo from './logo.svg';
import './App.css';
// import MyInfo from './Components/MyInfo'

import Header from './Components/Header';
import Footer from './Components/Footer';
import MainContent from './Components/MainContent';
import Card from './Components/Card';
import todoItems from './Components/todoItems'
import TodoItem from './Components/TodoItem';

function App() {
  const todoComponets = todoItems.map(item => <TodoItem key={item.id} todo={item}/>);
  return (
    <div className="App">
     <Header />
     <MainContent />

     <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <Card cardInfo={{
              imgUrl: 'https://placehold.co/600x400/EEE/31343C',
              name: 'Card Title',
              text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
              link: 'http://placehold.co/600x400/EEE/'
            }}
            />
          </div>
          <div className="col-lg-4">
            <Card cardInfo={{
              imgUrl: 'https://placehold.co/600x400/EEE/31343C',
              name: 'Card Title 2',
              text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
              link: 'http://placehold.co/600x400/EEE/'
            }}
            />
          </div>
          <div className="col-lg-4">
            <Card cardInfo={{
              imgUrl: 'https://placehold.co/600x400/EEE/31343C',
              name: 'Card Title 3',
              text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
              link: 'http://placehold.co/600x400/EEE/'
            }}
            />
          </div>
        </div>

        {todoComponets}
     </div>

     
     <Footer />
    </div>
  );
}

export default App;
