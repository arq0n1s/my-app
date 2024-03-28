import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbars from './components/navbars';
import { useState } from 'react';
import CardComponent from './components/card';
import CreateCardForm from './components/CreateCardForm';
import { useLocalStorage } from '@uidotdev/usehooks';
import DeleteCardButton from './components/DeleteCardButton';

function App() {
  const [currentCard, setCurrentCard] = useState<any>(null);
  const [createFormIsActive, setCreateFormIsActive] = useState(false);
  const [cardList, setCardList] = useLocalStorage("cardList", []);

  const handleClick = () => {
    console.log('Click on delete button, nigga');
    const newList = [...cardList.filter((item : {ownerName: string}) => item.ownerName !== currentCard.ownerName)];
    setCurrentCard(null);
    setCardList(newList);
  }

  
  const Content: React.ElementType = () => {
    if (currentCard && !createFormIsActive) return(
      <> 
        <CardComponent currentCard = {currentCard}/>
        <DeleteCardButton onClick={handleClick}/>
      </>);
   else if (createFormIsActive) return <CreateCardForm
   cardList={cardList}
   setCardList = {setCardList}/>;
   else return null;
  }

  return (
    <div className="App">
        <Navbars
        currentCard = {currentCard}
        cardList = {cardList}
        setCreateFormIsActive = {setCreateFormIsActive}
        setCurrentCard = {setCurrentCard}/>
        <Content/>       
    </div>
  );
}

export default App;
