import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

import * as actions from './shopcar/shopcarAction.js'

import './cdf.scss'
import jQuery from 'jquery'

class CdfComponent extends React.Component{
    componentDidMount(){
        var self = this;
        this.props.requestData({
            url:'showShopcart',
        })
        jQuery(function($){
            var $cdf_footer = $('#cdf_footer');
            //更新根据路由跳转
            var type = self.props.location.pathname;
            switch(type){
                case '/':
                    $cdf_footer.find('li').eq(0).addClass('active').siblings().removeClass('active')
                    break;
                case '/brand':
                    $cdf_footer.find('li').eq(1).addClass('active').siblings().removeClass('active')
                    break;
                case '/classify':
                    $cdf_footer.find('li').eq(2).addClass('active').siblings().removeClass('active')
                    break;
                case '/shopcar':
                    $cdf_footer.find('li').eq(3).addClass('active').siblings().removeClass('active')
                    break;
                case '/owner':
                    $cdf_footer.find('li').eq(4).addClass('active').siblings().removeClass('active')
                    break;                    
            }

            //点击跳转
            $cdf_footer.on('click','li',function(){
                $(this).addClass('active');
                $(this).siblings().removeClass('active');
            })
        })
    }
    render(){
        return (
            <div id="cdf" className="animate-route">
                <div id="cdf_main">
                    {this.props.children}
                </div>
                <footer id="cdf_footer">
                    <ul>   
                        <li className="active"><Link to="/"><i className="iconfont icon-weibiaoti1"></i><span>首页</span></Link></li>
                        <li><Link to="brand"><i className="iconfont icon-pinpai"></i><span>品牌</span></Link></li>
                        <li><Link to="classify"><i className="iconfont icon-fenlei"></i><span>分类</span></Link></li>
                        <li><Link to="shopcar"><i className="iconfont icon-gouwudai"></i><span>购物袋</span></Link></li>
                        <li><Link to="owner"><i className="iconfont icon-wode"></i><span>我的中免</span></Link></li>
                    </ul>
                </footer>                  
            </div>
        )
    }
} 

const mapStatesToProps = (state) => {
    return {
        
    }
}

export default connect(mapStatesToProps, actions)(CdfComponent)
