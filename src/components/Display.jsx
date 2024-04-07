import styles from './Display.module.css';

const Display = ({ calVal }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <input
            type="text"
            name=""
            value={calVal}
            className={styles.display}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default Display;
