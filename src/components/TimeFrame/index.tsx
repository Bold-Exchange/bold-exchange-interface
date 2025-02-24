import React from 'react';
import { Button } from 'antd';
import { FireOutlined } from '@ant-design/icons';
import './styles.less';
import { TimeFrameType } from '@/api/param_types';

interface TimeFrameProps {
  onTimeFrameChange: (timeFrame: TimeFrameType) => void;
  selectedTimeFrame?: TimeFrameType;
}

const TimeFrame: React.FC<TimeFrameProps> = ({ onTimeFrameChange, selectedTimeFrame = '5m' }) => {
  const timeFrames: TimeFrameType[] = ['5m', '1h', '6h', '24h'];

  return (
    <div className="time-frame-container">
      <div className="trending-label">
        <FireOutlined className="fire-icon" />
        <span>Trending</span>
        <span className="info-icon">i</span>
      </div>
      {timeFrames.map((frame) => (
        <Button
          key={frame}
          className={`time-frame-button ${selectedTimeFrame === frame ? 'selected' : ''}`}
          onClick={() => onTimeFrameChange(frame)}
        >
          {frame}
        </Button>
      ))}
    </div>
  );
};

export default TimeFrame;
