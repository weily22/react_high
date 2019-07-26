import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.scss'

const tabbarArr = [
  { icon: 'high-shouye', text: '首页', link: '/home' },
  { icon: 'high-sort', text: '分类', link: '/sort' },
  { icon: 'high-cart', text: '购物车', link: '/cart' },
  { icon: 'high-notlog', text: '未登录', link: '/user' },
];
class Tabbar extends Component {
  state = {
    active: 0,
  };
  render() {
    const url = window.location.href;
    return (
      <div className="tab-bar">
        <div className="tab-bar-content">
          {tabbarArr.map(({ icon, text, link }, index) => (
            <Link
              to={link}
              key={text}
              className={"tabbar-item " + (url.indexOf(link) > 0 ? 'active' : '')}
              onClick={() => this.setState({ active: index })}>
              <i className={`iconfont ${icon}`} />
              <div className="text">{text}</div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Tabbar;
