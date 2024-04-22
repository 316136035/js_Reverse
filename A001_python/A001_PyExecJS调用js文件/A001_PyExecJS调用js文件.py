import execjs
import os

# 获取当前脚本所在的文件夹路径（对于脚本来说就是项目主路径）
project_path = os.path.dirname(os.path.abspath(__file__))

# 加载 script.js 文件中的 JavaScript 代码
with open(project_path+'./script.js', 'r', encoding='utf-8') as f:
    js_code = f.read()

# 创建执行上下文并编译 JavaScript 代码
context = execjs.compile(js_code)

# 调用 addNumbers 函数
result_add = context.call('addNumbers', 3, 5)
print(f"Addition result: {result_add}")

# 调用 greet.sayHello 方法
greeting = context.call('greet.sayHello', 'User')
print(f"Greeting: {greeting}")