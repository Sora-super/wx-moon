'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '菩提本无树'
    }, _this.components = {}, _this.data = {
      userInfo: {
        nickName: '加载中...'
      },
      text: '这是一个点击会变的字体',
      user: '',
      psd: ''
    }, _this.methods = {
      textTap: function textTap() {
        this.text = '我已经变了';
      },
      login: function login() {
        console.log(this.userInfo.nickName);
        if (this.user === this.userInfo.nickName) {
          if (this.psd === '453570847') {
            // 登陆成功 跳转至下一个界面
            wx.redirectTo({
              url: 'welcome'
            });
          } else {
            wx.showToast({
              title: '登录失败',
              icon: 'fail',
              duration: 2000
            });
          }
        } else {
          wx.showToast({
            title: '登录失败',
            icon: 'fail',
            duration: 2000
          });
        }
      },

      inputUser: function inputUser(e) {
        this.user = e.detail.value;
      },
      inputPwd: function inputPwd(e) {
        this.psd = e.detail.value;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      this.$parent.getUserInfo(function (userInfo) {
        if (userInfo) {
          self.userInfo = userInfo;
        }
        self.$apply();
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/map'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsInVzZXJJbmZvIiwibmlja05hbWUiLCJ0ZXh0IiwidXNlciIsInBzZCIsIm1ldGhvZHMiLCJ0ZXh0VGFwIiwibG9naW4iLCJjb25zb2xlIiwibG9nIiwid3giLCJyZWRpcmVjdFRvIiwidXJsIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJpbnB1dFVzZXIiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJpbnB1dFB3ZCIsInNlbGYiLCIkcGFyZW50IiwiZ2V0VXNlckluZm8iLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUdiQyxJLEdBQU87QUFDTEMsZ0JBQVU7QUFDUkMsa0JBQVU7QUFERixPQURMO0FBSUxDLFlBQU0sYUFKRDtBQUtMQyxZQUFNLEVBTEQ7QUFNTEMsV0FBSztBQU5BLEssUUFTUEMsTyxHQUFVO0FBQ1JDLGFBRFEscUJBQ0c7QUFDVCxhQUFLSixJQUFMLEdBQVksT0FBWjtBQUNELE9BSE87QUFJUkssV0FKUSxtQkFJQztBQUNQQyxnQkFBUUMsR0FBUixDQUFZLEtBQUtULFFBQUwsQ0FBY0MsUUFBMUI7QUFDQSxZQUFJLEtBQUtFLElBQUwsS0FBYyxLQUFLSCxRQUFMLENBQWNDLFFBQWhDLEVBQTBDO0FBQ3hDLGNBQUksS0FBS0csR0FBTCxLQUFhLFdBQWpCLEVBQThCO0FBQzVCO0FBQ0FNLGVBQUdDLFVBQUgsQ0FBYztBQUNaQyxtQkFBSztBQURPLGFBQWQ7QUFHRCxXQUxELE1BS087QUFDTEYsZUFBR0csU0FBSCxDQUFhO0FBQ1hDLHFCQUFPLE1BREk7QUFFWEMsb0JBQU0sTUFGSztBQUdYQyx3QkFBVTtBQUhDLGFBQWI7QUFLRDtBQUNGLFNBYkQsTUFhTztBQUNMTixhQUFHRyxTQUFILENBQWE7QUFDWEMsbUJBQU8sTUFESTtBQUVYQyxrQkFBTSxNQUZLO0FBR1hDLHNCQUFVO0FBSEMsV0FBYjtBQUtEO0FBQ0YsT0ExQk87O0FBMkJSQyxpQkFBVyxtQkFBVUMsQ0FBVixFQUFhO0FBQ3RCLGFBQUtmLElBQUwsR0FBWWUsRUFBRUMsTUFBRixDQUFTQyxLQUFyQjtBQUNELE9BN0JPO0FBOEJSQyxnQkFBVSxrQkFBVUgsQ0FBVixFQUFhO0FBQ3JCLGFBQUtkLEdBQUwsR0FBV2MsRUFBRUMsTUFBRixDQUFTQyxLQUFwQjtBQUNEO0FBaENPLEs7Ozs7OzZCQW1DRDtBQUNQLFVBQUlFLE9BQU8sSUFBWDtBQUNBLFdBQUtDLE9BQUwsQ0FBYUMsV0FBYixDQUF5QixVQUFVeEIsUUFBVixFQUFvQjtBQUMzQyxZQUFJQSxRQUFKLEVBQWM7QUFDWnNCLGVBQUt0QixRQUFMLEdBQWdCQSxRQUFoQjtBQUNEO0FBQ0RzQixhQUFLRyxNQUFMO0FBQ0QsT0FMRDtBQU1EOzs7O0VBM0RnQyxlQUFLQyxJOztrQkFBbkIvQixLIiwiZmlsZSI6Im1hcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iPqeaPkOacrOaXoOagkSdcclxuICAgIH1cclxuICAgIGNvbXBvbmVudHMgPSB7XHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgdXNlckluZm86IHtcclxuICAgICAgICBuaWNrTmFtZTogJ+WKoOi9veS4rS4uLidcclxuICAgICAgfSxcclxuICAgICAgdGV4dDogJ+i/meaYr+S4gOS4queCueWHu+S8muWPmOeahOWtl+S9kycsXHJcbiAgICAgIHVzZXI6ICcnLFxyXG4gICAgICBwc2Q6ICcnXHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgdGV4dFRhcCAoKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gJ+aIkeW3sue7j+WPmOS6hidcclxuICAgICAgfSxcclxuICAgICAgbG9naW4gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudXNlckluZm8ubmlja05hbWUpXHJcbiAgICAgICAgaWYgKHRoaXMudXNlciA9PT0gdGhpcy51c2VySW5mby5uaWNrTmFtZSkge1xyXG4gICAgICAgICAgaWYgKHRoaXMucHNkID09PSAnNDUzNTcwODQ3Jykge1xyXG4gICAgICAgICAgICAvLyDnmbvpmYbmiJDlip8g6Lez6L2s6Iez5LiL5LiA5Liq55WM6Z2iXHJcbiAgICAgICAgICAgIHd4LnJlZGlyZWN0VG8oe1xyXG4gICAgICAgICAgICAgIHVybDogJ3dlbGNvbWUnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAn55m75b2V5aSx6LSlJyxcclxuICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgdGl0bGU6ICfnmbvlvZXlpLHotKUnLFxyXG4gICAgICAgICAgICBpY29uOiAnZmFpbCcsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgaW5wdXRVc2VyOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHRoaXMudXNlciA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGlucHV0UHdkOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHRoaXMucHNkID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzXHJcbiAgICAgIHRoaXMuJHBhcmVudC5nZXRVc2VySW5mbyhmdW5jdGlvbiAodXNlckluZm8pIHtcclxuICAgICAgICBpZiAodXNlckluZm8pIHtcclxuICAgICAgICAgIHNlbGYudXNlckluZm8gPSB1c2VySW5mb1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxmLiRhcHBseSgpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=