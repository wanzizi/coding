var barretTpl = function(str, data) {
  //获取元素
  var element = document.getElementById(str);
  if (element) {
    //textarea或input则取value，其它情况取innerHTML
    var html = /^(textarea|input)$/i.test(element.nodeName)
      ? element.value
      : element.innerHTML;
    return tplEngine(html, data);
  } else {
    //是模板字符串，则生成一个函数
    //如果直接传入字符串作为模板，则可能变化过多，因此不考虑缓存
    return TemplateEngine(str, data);
  }
};

var TemplateEngine = function(html, options) {
  var re = /<%([^%>]+)?%>/g,
    reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g,
    code = "var r=[];\n",
    //考虑定义模板时，可能 <% name%> or <%name %>
    trimReg = /(^\s+)|(\s+$)/g,
    cursor = 0;
  var add = function(line, js) {
    js
      ? (code += line.match(reExp)
          ? line + "\n"
          : "r.push(this." + line.replace(trimReg, "") + ");\n")
      : (code +=
          line != "" ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : "");
    return add;
  };
  while ((match = re.exec(html))) {
    add(html.slice(cursor, match.index))(match[1], true);
    cursor = match.index + match[0].length;
  }
  add(html.substr(cursor, html.length - cursor));
  code += 'return r.join("");';
  return new Function(code.replace(/[\r\t\n]/g, "")).apply(options);
};

var data = {
  posts: [
    {
      expert: "content 1",
      time: "yesterday"
    },
    {
      expert: "content 2",
      time: "today"
    },
    {
      expert: "content 3",
      time: "tomorrow"
    },
    {
      expert: "",
      time: "eee"
    }
  ]
};

var tpl =
  "<% for(var i = 0; i < this.posts.length; i++) {" +
  "var post = posts[i]; %>" +
  "<% if(!post.expert){ %>" +
  "<span>post is null</span>" +
  "<% } else { %>" +
  '<a href="#"><% post.expert %> at <% post.time %></a>' +
  "<% } %>" +
  "<% } %>";
TemplateEngine(tpl, data);

// 总共就三四十行代码，完成的东西肯定是一个简洁版的，不过对于一个简单的页面而言，这几行代码已经足够使用了，如果还想对他做优化，可以从这几个方面考虑：

// 优化获取的模板代码，比如去掉行尾空格等
// 符号转义，如果我们想输出<span>hehe</span>类似这样的源代码，在push之前必须进行转义
// 代码缓存，如果一个模板会经常使用，可以将它用一个数组缓存在barretTpl闭包内
// 用户自己设置分隔符

// 简易版本
render("我是{{name}}，年龄{{age}}", {
  name: "lucifer",
  age: 17
});

function render(tpl, data) {
  return tpl.replace(/\{\{(.+?)\}\}/g, function($1, $2) {
    // $1 分组为 类似 {{name}}
    // $2 分组为 类似 name
    // 加上面的小括号就是为了方便拿到key而已
    return data[$2];
  });
}
