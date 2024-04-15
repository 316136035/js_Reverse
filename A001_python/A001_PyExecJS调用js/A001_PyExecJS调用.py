import execjs

# 创建 JavaScript 代码字符串
javascript_code = """
function add(a, b) {
    return a + b;
}
"""

# 获取 JavaScript 执行环境，这里会自动选择系统中存在的 JS 引擎
ctx = execjs.get()

# 编译 JavaScript 代码
compiled = ctx.compile(javascript_code)

# 执行 JavaScript 函数
result = compiled.call('add', 1, 2)

print(result)  # 输出：3