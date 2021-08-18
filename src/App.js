import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <h2 className="title">Buttons</h2>

      <h6 className="subtitle">&#60;Button /&#62;</h6>
      <Button/>

      <h6 className="subtitle">&#60;Button variant="outline" /&#62;</h6>
      <Button variant="outline"/>
      
      <h6 className="subtitle">&#60;Button variant="text" /&#62;</h6>
      <Button variant="text"/>
      
      <h6 className="subtitle">&#60;Button disableShadow /&#62;</h6>
      <Button color="primary" disableShadow/>

      {/* Disable */}
      <section className="btn-disable-section">
        <div>
          <h6 className="subtitle">&#60;Button disabled /&#62;</h6>
          <Button text="Disabled" disabled/>
        </div>
        
        <div>
          <h6 className="subtitle">&#60;Button variant="text" disabled /&#62;</h6>
          <Button text="Disabled" variant="text" disabled/>
        </div>
      </section>

      {/* Icons */}
      <section className="btn-icons-section">
        <div>
          <h6 className="subtitle">&#60;Button startIcon="add_shopping_cart" /&#62;</h6>
          <Button color="primary" startIcon="add_shopping_cart"/>
        </div>
        
        <div>
          <h6 className="subtitle">&#60;Button endIcon="add_shopping_cart" /&#62;</h6>
          <Button color="primary" endIcon="add_shopping_cart"/>
        </div>
      </section>

      {/* Sizes */}
      <section className="btn-sizes-section">
        <div>
          <h6 className="subtitle">&#60;Button size="sm" /&#62;</h6>
          <Button color="primary" size="sm"/>
        </div>

        <div>
          <h6 className="subtitle">&#60;Button size="md" /&#62;</h6>
          <Button color="primary" size="md"/>
        </div>

        <div>
          <h6 className="subtitle">&#60;Button size="lg" /&#62;</h6>
          <Button color="primary" size="lg"/>
        </div>
      </section>

      {/* Colors */}
      <section className="btn-colors-section">
        <div>
          <h6 className="subtitle">&#60;Button color="default" /&#62;</h6>
          <Button/>
        </div>

        <div>
          <h6 className="subtitle">&#60;Button color="primary" /&#62;</h6>
          <Button text="Primary" color="primary"/>
        </div>

        <div>
          <h6 className="subtitle">&#60;Button color="secondary" /&#62;</h6>
          <Button text="Secondary" color="secondary"/>
        </div>

        <div>
          <h6 className="subtitle">&#60;Button color="danger" /&#62;</h6>
          <Button text="Danger" color="danger"/>
        </div>
      </section>

      <h6 className="link">
        Icons: <a href="https://material.io/resources/icons/?style=round" target="_blank">https://material.io/resources/icons/?style=round</a>
      </h6>

      <footer>
        <span>created by <b><a href="https://github.com/cristhoper23" target="_blank">cristhoper23</a></b> - devChallenges.io</span>
      </footer>
    </div>
  );
}

export default App;
