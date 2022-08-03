import Card from "../Card/Card.component";
import './Body.styles.scss'
const Body = () => {
  return (
    <div className="container">
      <div className="text-container">
        <h1>A warm Welcome</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
          at dolore perspiciatis necessitatibus, amet quos quo inventore nobis
          tempore dolores quibusdam odit, neque ad assumenda maiores laborum
          nihil recusandae reiciendis?
        </p>
        <button className="btn btn-primary">Call to action!</button>
      </div>
      <div className="card-container">
            <Card/>
      </div>
    </div>
  );
};
export default Body;
