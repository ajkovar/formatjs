IntlMessageFormat.__addLocaleData({locale:"fi", messageformat:{pluralFunction:function (n) { var i=Math.floor(Math.abs(n)),v=n.toString().replace(/^[^.]*\.?/,"").length;n=Math.floor(n);if(i>=0&&i<=1&&v===0)return"one";return"other"; }}});