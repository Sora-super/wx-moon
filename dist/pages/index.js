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
      navigationBarTitleText: 'test'
    }, _this.components = {}, _this.data = {
      userInfo: {
        nickName: '加载中...'
      },
      text: '这是一个点击会变的字体'
    }, _this.methods = {
      textTap: function textTap() {
        this.text = '我已经变了';
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
        console.log(self);
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwidXNlckluZm8iLCJuaWNrTmFtZSIsInRleHQiLCJtZXRob2RzIiwidGV4dFRhcCIsInNlbGYiLCIkcGFyZW50IiwiZ2V0VXNlckluZm8iLCIkYXBwbHkiLCJjb25zb2xlIiwibG9nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFHYkMsSSxHQUFPO0FBQ0xDLGdCQUFVO0FBQ1JDLGtCQUFVO0FBREYsT0FETDtBQUlMQyxZQUFNO0FBSkQsSyxRQU9QQyxPLEdBQVU7QUFDUkMsYUFEUSxxQkFDRztBQUNULGFBQUtGLElBQUwsR0FBWSxPQUFaO0FBQ0Q7QUFITyxLOzs7Ozs2QkFNRDtBQUNQLFVBQUlHLE9BQU8sSUFBWDtBQUNBLFdBQUtDLE9BQUwsQ0FBYUMsV0FBYixDQUF5QixVQUFVUCxRQUFWLEVBQW9CO0FBQzNDLFlBQUlBLFFBQUosRUFBYztBQUNaSyxlQUFLTCxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEO0FBQ0RLLGFBQUtHLE1BQUw7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWUwsSUFBWjtBQUNELE9BTkQ7QUFPRDs7OztFQTdCZ0MsZUFBS00sSTs7a0JBQW5CaEIsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAndGVzdCdcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgdXNlckluZm86IHtcbiAgICAgICAgbmlja05hbWU6ICfliqDovb3kuK0uLi4nXG4gICAgICB9LFxuICAgICAgdGV4dDogJ+i/meaYr+S4gOS4queCueWHu+S8muWPmOeahOWtl+S9kydcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgdGV4dFRhcCAoKSB7XG4gICAgICAgIHRoaXMudGV4dCA9ICfmiJHlt7Lnu4/lj5jkuoYnXG4gICAgICB9XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICB0aGlzLiRwYXJlbnQuZ2V0VXNlckluZm8oZnVuY3Rpb24gKHVzZXJJbmZvKSB7XG4gICAgICAgIGlmICh1c2VySW5mbykge1xuICAgICAgICAgIHNlbGYudXNlckluZm8gPSB1c2VySW5mb1xuICAgICAgICB9XG4gICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgY29uc29sZS5sb2coc2VsZilcbiAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=