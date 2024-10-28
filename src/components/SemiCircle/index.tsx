import React from 'react';
import styles from './styles.less';

const SemiCircle = ({ percentage }) => {
    return (
        <div className={styles.circleContainer}>
          <div
            className={styles.circle}
            style={{
              background: `conic-gradient(#4caf50 ${percentage * 3.6}deg, #ddd 0deg)`,
            }}
          ></div>
          <div className={styles.centerText}>{percentage}%</div>
        </div>
      );
  
};

export default SemiCircle;
