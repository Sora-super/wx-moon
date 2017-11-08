'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LjEuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJ1c2VySW5mbyIsIm5pY2tOYW1lIiwidGV4dCIsInVzZXIiLCJwc2QiLCJtZXRob2RzIiwidGV4dFRhcCIsImxvZ2luIiwiY29uc29sZSIsImxvZyIsInd4IiwicmVkaXJlY3RUbyIsInVybCIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwiaW5wdXRVc2VyIiwiZSIsImRldGFpbCIsInZhbHVlIiwiaW5wdXRQd2QiLCJzZWxmIiwiJHBhcmVudCIsImdldFVzZXJJbmZvIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFHYkMsSSxHQUFPO0FBQ0xDLGdCQUFVO0FBQ1JDLGtCQUFVO0FBREYsT0FETDtBQUlMQyxZQUFNLGFBSkQ7QUFLTEMsWUFBTSxFQUxEO0FBTUxDLFdBQUs7QUFOQSxLLFFBU1BDLE8sR0FBVTtBQUNSQyxhQURRLHFCQUNHO0FBQ1QsYUFBS0osSUFBTCxHQUFZLE9BQVo7QUFDRCxPQUhPO0FBSVJLLFdBSlEsbUJBSUM7QUFDUEMsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFLVCxRQUFMLENBQWNDLFFBQTFCO0FBQ0EsWUFBSSxLQUFLRSxJQUFMLEtBQWMsS0FBS0gsUUFBTCxDQUFjQyxRQUFoQyxFQUEwQztBQUN4QyxjQUFJLEtBQUtHLEdBQUwsS0FBYSxXQUFqQixFQUE4QjtBQUM1QjtBQUNBTSxlQUFHQyxVQUFILENBQWM7QUFDWkMsbUJBQUs7QUFETyxhQUFkO0FBR0QsV0FMRCxNQUtPO0FBQ0xGLGVBQUdHLFNBQUgsQ0FBYTtBQUNYQyxxQkFBTyxNQURJO0FBRVhDLG9CQUFNLE1BRks7QUFHWEMsd0JBQVU7QUFIQyxhQUFiO0FBS0Q7QUFDRixTQWJELE1BYU87QUFDTE4sYUFBR0csU0FBSCxDQUFhO0FBQ1hDLG1CQUFPLE1BREk7QUFFWEMsa0JBQU0sTUFGSztBQUdYQyxzQkFBVTtBQUhDLFdBQWI7QUFLRDtBQUNGLE9BMUJPOztBQTJCUkMsaUJBQVcsbUJBQVVDLENBQVYsRUFBYTtBQUN0QixhQUFLZixJQUFMLEdBQVllLEVBQUVDLE1BQUYsQ0FBU0MsS0FBckI7QUFDRCxPQTdCTztBQThCUkMsZ0JBQVUsa0JBQVVILENBQVYsRUFBYTtBQUNyQixhQUFLZCxHQUFMLEdBQVdjLEVBQUVDLE1BQUYsQ0FBU0MsS0FBcEI7QUFDRDtBQWhDTyxLOzs7Ozs2QkFtQ0Q7QUFDUCxVQUFJRSxPQUFPLElBQVg7QUFDQSxXQUFLQyxPQUFMLENBQWFDLFdBQWIsQ0FBeUIsVUFBVXhCLFFBQVYsRUFBb0I7QUFDM0MsWUFBSUEsUUFBSixFQUFjO0FBQ1pzQixlQUFLdEIsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDtBQUNEc0IsYUFBS0csTUFBTDtBQUNELE9BTEQ7QUFNRDs7OztFQTNEZ0MsZUFBS0MsSTs7a0JBQW5CL0IsSyIsImZpbGUiOiJpbmRleC4xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6I+p5o+Q5pys5peg5qCRJ1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50cyA9IHtcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICB1c2VySW5mbzoge1xyXG4gICAgICAgIG5pY2tOYW1lOiAn5Yqg6L295LitLi4uJ1xyXG4gICAgICB9LFxyXG4gICAgICB0ZXh0OiAn6L+Z5piv5LiA5Liq54K55Ye75Lya5Y+Y55qE5a2X5L2TJyxcclxuICAgICAgdXNlcjogJycsXHJcbiAgICAgIHBzZDogJydcclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICB0ZXh0VGFwICgpIHtcclxuICAgICAgICB0aGlzLnRleHQgPSAn5oiR5bey57uP5Y+Y5LqGJ1xyXG4gICAgICB9LFxyXG4gICAgICBsb2dpbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy51c2VySW5mby5uaWNrTmFtZSlcclxuICAgICAgICBpZiAodGhpcy51c2VyID09PSB0aGlzLnVzZXJJbmZvLm5pY2tOYW1lKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5wc2QgPT09ICc0NTM1NzA4NDcnKSB7XHJcbiAgICAgICAgICAgIC8vIOeZu+mZhuaIkOWKnyDot7Povazoh7PkuIvkuIDkuKrnlYzpnaJcclxuICAgICAgICAgICAgd3gucmVkaXJlY3RUbyh7XHJcbiAgICAgICAgICAgICAgdXJsOiAnd2VsY29tZSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICfnmbvlvZXlpLHotKUnLFxyXG4gICAgICAgICAgICAgIGljb246ICdmYWlsJyxcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ+eZu+W9leWksei0pScsXHJcbiAgICAgICAgICAgIGljb246ICdmYWlsJyxcclxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBpbnB1dFVzZXI6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdGhpcy51c2VyID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSxcclxuICAgICAgaW5wdXRQd2Q6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdGhpcy5wc2QgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICBsZXQgc2VsZiA9IHRoaXNcclxuICAgICAgdGhpcy4kcGFyZW50LmdldFVzZXJJbmZvKGZ1bmN0aW9uICh1c2VySW5mbykge1xyXG4gICAgICAgIGlmICh1c2VySW5mbykge1xyXG4gICAgICAgICAgc2VsZi51c2VySW5mbyA9IHVzZXJJbmZvXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGYuJGFwcGx5KClcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbiJdfQ==