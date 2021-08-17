import Button from './components/Button';
import { MdAddShoppingCart } from 'react-icons/md'

function App() {
  return (
    <div className="App">
      <h1 style={{fontFamily: "Poppins, sans-serif"}}>Buttons</h1>

      <Button classes={['btn-default']}/>
      <Button heading={{variant: 'outline'}} classes={['outline']} />
      <Button heading={{variant: 'text'}} classes={['text']} />
      <Button heading={{disableShadow: 'disableShadow'}} classes={['btn-primary', 'disable-shadow']} />
      
      {/* Disable */}
      <section className="btn-disable-section">
        <Button text='Disabled' heading={{disabled: 'disabled'}} classes={['disabled']}/>
        <Button text='Disabled' heading={{variant: 'text', disabled: 'disabled'}} classes={['text', 'disabled']}/>
      </section>

      {/* Icon */}
      <section className="btn-icons-section">
        <Button heading={{startIcon: 'local_grocery_store'}} 
                classes={['btn-primary', 'btn-icon-start']} 
                icon={<MdAddShoppingCart style={{fontSize: '16px'}}/>}
                />
        <Button heading={{endIcon: 'local_grocery_store'}} 
                classes={['btn-primary', 'btn-icon-end']} 
                icon={<MdAddShoppingCart style={{fontSize: '16px'}} />}
                />
      </section>
      
      {/* Sizes */}
      <section className="btn-sizes-section">
        <Button heading={{size: 'sm'}} classes={['btn-sm btn-primary']}/>
        <Button heading={{size: 'md'}} classes={['btn-md btn-primary']}/>
        <Button heading={{size: 'lg'}} classes={['btn-lg btn-primary']}/>
      </section>

      {/* Colors */}
      <section className="btn-colors-section">
        <Button heading={{color: 'default'}} classes={['btn-default']}/>
        <Button heading={{color: 'primary'}} classes={['btn-primary']}/>
        <Button text="Secondary" heading={{color: 'secondary'}} classes={['btn-secondary']}/>
        <Button text="Danger" heading={{color: 'danger'}} classes={['btn-danger']}/>
      </section>
    </div>
  );
}

export default App;
