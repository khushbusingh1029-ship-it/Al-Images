import "./history.css";

function History({ history }) {

  return (

    <div className="history">

      <h3>Prompt History</h3>

      {
        history.map((item, index) => (
          <p key={index}>{item}</p>
        ))
      }

    </div>
  );
}

export default History;

