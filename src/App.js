import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <h1 style={{fontFamily: "Poppins, sans-serif"}}>Buttons</h1>

      <Button/>
      <Button label={{variant: 'outline'}} 
              variant="outline"/>
      <Button label={{variant: 'text'}} 
              variant="text"/>
      <Button label={{disableShadow: 'disableShadow'}} 
              color="primary" 
              disableShadow/>

      {/* Disable */}
      <section className="btn-section-section">
        <Button label={{disabled: 'disabled'}} 
                text="Disabled" 
                disabled />
        <Button label={{variant: 'text', disabled: 'disabled'}} 
                text="Disabled" 
                variant="text" 
                disabled/>
      </section>

      {/* Icons */}
      <section className="btn-icons-section">
        <Button label={{startIcon: 'local_grocery_store'}}  
                color="primary" 
                startIcon="add_shopping_cart"/>
        <Button label={{endIcon: 'local_grocery_store'}}  
                color="primary" 
                endIcon="add_shopping_cart"/>
      </section>

      {/* Sizes */}
      <section className="btn-sizes-section">
        <Button label={{size: 'sm'}} color="primary" size="sm"/>
        <Button label={{size: 'md'}} color="primary" size="md"/>
        <Button label={{size: 'lg'}} color="primary" size="lg"/>
      </section>

      {/* Colors */}
      <section className="btn-colors-section">
        <Button label={{color: 'default'}}/>
        <Button label={{color: 'primary'}} text="Primary" color="primary"/>
        <Button label={{color: 'secondary'}} text="Secondary" color="secondary"/>
        <Button  label={{color: 'danger'}} text="Danger" color="danger"/>
      </section>
    </div>
  );
}

export default App;
