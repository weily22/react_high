import React, { Component } from 'react';
import './index.scss'

const tabbarArr = [
  { icon: 'high-shouye', text: '首页' },
  { icon: 'high-sort', text: '分类' },
  { icon: 'high-cart', text: '购物车' },
  { icon: 'high-notlog', text: '未登录' },
];
class Tabbar extends Component {
  render() {
    return (
      <div className="tab-bar">
        <div className="tab-bar-content">
          {tabbarArr.map(({ icon, text }) => (
            <div className="tabbar-item" key={text}>
              <i className={`iconfont ${icon}`} />
              <div className="text">{text}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Tabbar;
