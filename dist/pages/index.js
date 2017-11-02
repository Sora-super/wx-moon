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
          }
        } else {
          console.log('失败');
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwidXNlckluZm8iLCJuaWNrTmFtZSIsInRleHQiLCJ1c2VyIiwicHNkIiwibWV0aG9kcyIsInRleHRUYXAiLCJsb2dpbiIsImNvbnNvbGUiLCJsb2ciLCJ3eCIsInJlZGlyZWN0VG8iLCJ1cmwiLCJpbnB1dFVzZXIiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJpbnB1dFB3ZCIsInNlbGYiLCIkcGFyZW50IiwiZ2V0VXNlckluZm8iLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUdiQyxJLEdBQU87QUFDTEMsZ0JBQVU7QUFDUkMsa0JBQVU7QUFERixPQURMO0FBSUxDLFlBQU0sYUFKRDtBQUtMQyxZQUFNLEVBTEQ7QUFNTEMsV0FBSztBQU5BLEssUUFTUEMsTyxHQUFVO0FBQ1JDLGFBRFEscUJBQ0c7QUFDVCxhQUFLSixJQUFMLEdBQVksT0FBWjtBQUNELE9BSE87QUFJUkssV0FKUSxtQkFJQztBQUNQQyxnQkFBUUMsR0FBUixDQUFZLEtBQUtULFFBQUwsQ0FBY0MsUUFBMUI7QUFDQSxZQUFJLEtBQUtFLElBQUwsS0FBYyxLQUFLSCxRQUFMLENBQWNDLFFBQWhDLEVBQTBDO0FBQ3hDLGNBQUksS0FBS0csR0FBTCxLQUFhLFdBQWpCLEVBQThCO0FBQzVCO0FBQ0FNLGVBQUdDLFVBQUgsQ0FBYztBQUNaQyxtQkFBSztBQURPLGFBQWQ7QUFHRDtBQUNGLFNBUEQsTUFPTztBQUNMSixrQkFBUUMsR0FBUixDQUFZLElBQVo7QUFDRDtBQUNGLE9BaEJPOztBQWlCUkksaUJBQVcsbUJBQVVDLENBQVYsRUFBYTtBQUN0QixhQUFLWCxJQUFMLEdBQVlXLEVBQUVDLE1BQUYsQ0FBU0MsS0FBckI7QUFDRCxPQW5CTztBQW9CUkMsZ0JBQVUsa0JBQVVILENBQVYsRUFBYTtBQUNyQixhQUFLVixHQUFMLEdBQVdVLEVBQUVDLE1BQUYsQ0FBU0MsS0FBcEI7QUFDRDtBQXRCTyxLOzs7Ozs2QkF5QkQ7QUFDUCxVQUFJRSxPQUFPLElBQVg7QUFDQSxXQUFLQyxPQUFMLENBQWFDLFdBQWIsQ0FBeUIsVUFBVXBCLFFBQVYsRUFBb0I7QUFDM0MsWUFBSUEsUUFBSixFQUFjO0FBQ1prQixlQUFLbEIsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDtBQUNEa0IsYUFBS0csTUFBTDtBQUNELE9BTEQ7QUFNRDs7OztFQWpEZ0MsZUFBS0MsSTs7a0JBQW5CM0IsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6I+p5o+Q5pys5peg5qCRJ1xuICAgIH1cbiAgICBjb21wb25lbnRzID0ge1xuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICB1c2VySW5mbzoge1xuICAgICAgICBuaWNrTmFtZTogJ+WKoOi9veS4rS4uLidcbiAgICAgIH0sXG4gICAgICB0ZXh0OiAn6L+Z5piv5LiA5Liq54K55Ye75Lya5Y+Y55qE5a2X5L2TJyxcbiAgICAgIHVzZXI6ICcnLFxuICAgICAgcHNkOiAnJ1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB0ZXh0VGFwICgpIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gJ+aIkeW3sue7j+WPmOS6hidcbiAgICAgIH0sXG4gICAgICBsb2dpbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudXNlckluZm8ubmlja05hbWUpXG4gICAgICAgIGlmICh0aGlzLnVzZXIgPT09IHRoaXMudXNlckluZm8ubmlja05hbWUpIHtcbiAgICAgICAgICBpZiAodGhpcy5wc2QgPT09ICc0NTM1NzA4NDcnKSB7XG4gICAgICAgICAgICAvLyDnmbvpmYbmiJDlip8g6Lez6L2s6Iez5LiL5LiA5Liq55WM6Z2iXG4gICAgICAgICAgICB3eC5yZWRpcmVjdFRvKHtcbiAgICAgICAgICAgICAgdXJsOiAnd2VsY29tZSdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCflpLHotKUnKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaW5wdXRVc2VyOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB0aGlzLnVzZXIgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgfSxcbiAgICAgIGlucHV0UHdkOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB0aGlzLnBzZCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICB0aGlzLiRwYXJlbnQuZ2V0VXNlckluZm8oZnVuY3Rpb24gKHVzZXJJbmZvKSB7XG4gICAgICAgIGlmICh1c2VySW5mbykge1xuICAgICAgICAgIHNlbGYudXNlckluZm8gPSB1c2VySW5mb1xuICAgICAgICB9XG4gICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=