import { RaitingBlock } from './components/RaitingBlock';
import { RaitingState } from './context/raiting/RaitingState';
import { ThankBlock } from './components/ThankBlock';

function App() {
    return (
        <RaitingState>
            <div className='wrapper'>
                <div className='container'>
                    <RaitingBlock />
                    <ThankBlock />
                </div>
            </div>
        </RaitingState>
    );
}

export default App;
