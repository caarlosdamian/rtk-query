import { useContactsQuery } from './services/api'
import './App.css';
import { ContactDetail } from './components/ContactDetail';
import { AddContact } from './components/AddContact';

function App() {
  const {data,error,isLoading,isFetching,isSuccess} = useContactsQuery()

  return (
    <div className="App">
     <h1>React Redux Toolkit RTJ Query Tutorial</h1>
     <AddContact/>
     {isLoading && <h2>...Loading</h2>}
     {isFetching && <h2>...isFetching</h2>}
     {error && <h2>Something went Wrong</h2>}
     {isSuccess && (
       <div>
         {data?.map(contact =>{
           return <div className='data' key={contact.id}>
             <span>{contact.name}</span>
             <ContactDetail id={contact.id}/>
           </div>
         })}
         
       </div>
     )}
    </div>
  );
}

export default App;
