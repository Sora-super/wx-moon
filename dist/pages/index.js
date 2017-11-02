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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwidXNlckluZm8iLCJuaWNrTmFtZSIsInRleHQiLCJ1c2VyIiwicHNkIiwibWV0aG9kcyIsInRleHRUYXAiLCJsb2dpbiIsImNvbnNvbGUiLCJsb2ciLCJ3eCIsInJlZGlyZWN0VG8iLCJ1cmwiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsImlucHV0VXNlciIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsImlucHV0UHdkIiwic2VsZiIsIiRwYXJlbnQiLCJnZXRVc2VySW5mbyIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBR2JDLEksR0FBTztBQUNMQyxnQkFBVTtBQUNSQyxrQkFBVTtBQURGLE9BREw7QUFJTEMsWUFBTSxhQUpEO0FBS0xDLFlBQU0sRUFMRDtBQU1MQyxXQUFLO0FBTkEsSyxRQVNQQyxPLEdBQVU7QUFDUkMsYUFEUSxxQkFDRztBQUNULGFBQUtKLElBQUwsR0FBWSxPQUFaO0FBQ0QsT0FITztBQUlSSyxXQUpRLG1CQUlDO0FBQ1BDLGdCQUFRQyxHQUFSLENBQVksS0FBS1QsUUFBTCxDQUFjQyxRQUExQjtBQUNBLFlBQUksS0FBS0UsSUFBTCxLQUFjLEtBQUtILFFBQUwsQ0FBY0MsUUFBaEMsRUFBMEM7QUFDeEMsY0FBSSxLQUFLRyxHQUFMLEtBQWEsV0FBakIsRUFBOEI7QUFDNUI7QUFDQU0sZUFBR0MsVUFBSCxDQUFjO0FBQ1pDLG1CQUFLO0FBRE8sYUFBZDtBQUdELFdBTEQsTUFLTztBQUNMRixlQUFHRyxTQUFILENBQWE7QUFDWEMscUJBQU8sTUFESTtBQUVYQyxvQkFBTSxNQUZLO0FBR1hDLHdCQUFVO0FBSEMsYUFBYjtBQUtEO0FBQ0YsU0FiRCxNQWFPO0FBQ0xOLGFBQUdHLFNBQUgsQ0FBYTtBQUNYQyxtQkFBTyxNQURJO0FBRVhDLGtCQUFNLE1BRks7QUFHWEMsc0JBQVU7QUFIQyxXQUFiO0FBS0Q7QUFDRixPQTFCTzs7QUEyQlJDLGlCQUFXLG1CQUFVQyxDQUFWLEVBQWE7QUFDdEIsYUFBS2YsSUFBTCxHQUFZZSxFQUFFQyxNQUFGLENBQVNDLEtBQXJCO0FBQ0QsT0E3Qk87QUE4QlJDLGdCQUFVLGtCQUFVSCxDQUFWLEVBQWE7QUFDckIsYUFBS2QsR0FBTCxHQUFXYyxFQUFFQyxNQUFGLENBQVNDLEtBQXBCO0FBQ0Q7QUFoQ08sSzs7Ozs7NkJBbUNEO0FBQ1AsVUFBSUUsT0FBTyxJQUFYO0FBQ0EsV0FBS0MsT0FBTCxDQUFhQyxXQUFiLENBQXlCLFVBQVV4QixRQUFWLEVBQW9CO0FBQzNDLFlBQUlBLFFBQUosRUFBYztBQUNac0IsZUFBS3RCLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0Q7QUFDRHNCLGFBQUtHLE1BQUw7QUFDRCxPQUxEO0FBTUQ7Ozs7RUEzRGdDLGVBQUtDLEk7O2tCQUFuQi9CLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfoj6nmj5DmnKzml6DmoJEnXHJcbiAgICB9XHJcbiAgICBjb21wb25lbnRzID0ge1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIHVzZXJJbmZvOiB7XHJcbiAgICAgICAgbmlja05hbWU6ICfliqDovb3kuK0uLi4nXHJcbiAgICAgIH0sXHJcbiAgICAgIHRleHQ6ICfov5nmmK/kuIDkuKrngrnlh7vkvJrlj5jnmoTlrZfkvZMnLFxyXG4gICAgICB1c2VyOiAnJyxcclxuICAgICAgcHNkOiAnJ1xyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIHRleHRUYXAgKCkge1xyXG4gICAgICAgIHRoaXMudGV4dCA9ICfmiJHlt7Lnu4/lj5jkuoYnXHJcbiAgICAgIH0sXHJcbiAgICAgIGxvZ2luICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXJJbmZvLm5pY2tOYW1lKVxyXG4gICAgICAgIGlmICh0aGlzLnVzZXIgPT09IHRoaXMudXNlckluZm8ubmlja05hbWUpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnBzZCA9PT0gJzQ1MzU3MDg0NycpIHtcclxuICAgICAgICAgICAgLy8g55m76ZmG5oiQ5YqfIOi3s+i9rOiHs+S4i+S4gOS4queVjOmdolxyXG4gICAgICAgICAgICB3eC5yZWRpcmVjdFRvKHtcclxuICAgICAgICAgICAgICB1cmw6ICd3ZWxjb21lJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ+eZu+W9leWksei0pScsXHJcbiAgICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn55m75b2V5aSx6LSlJyxcclxuICAgICAgICAgICAgaWNvbjogJ2ZhaWwnLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGlucHV0VXNlcjogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB0aGlzLnVzZXIgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9LFxyXG4gICAgICBpbnB1dFB3ZDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB0aGlzLnBzZCA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgIGxldCBzZWxmID0gdGhpc1xyXG4gICAgICB0aGlzLiRwYXJlbnQuZ2V0VXNlckluZm8oZnVuY3Rpb24gKHVzZXJJbmZvKSB7XHJcbiAgICAgICAgaWYgKHVzZXJJbmZvKSB7XHJcbiAgICAgICAgICBzZWxmLnVzZXJJbmZvID0gdXNlckluZm9cclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZi4kYXBwbHkoKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuIl19