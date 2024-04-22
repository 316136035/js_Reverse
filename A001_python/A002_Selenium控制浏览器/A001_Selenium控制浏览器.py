from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import os

#获取当前脚本所在的目录
current_dir = os.path.dirname(os.path.abspath(__file__))

# 指定ChromeDriver路径
chrome_driver_path = current_dir+'/chromedriver.exe'  
# 创建Chrome服务实例，指定ChromeDriver路径
service = Service(chrome_driver_path) 

#指定Chrome浏览器路径
Chrome_location = current_dir +'/Chrome/Application/chrome.exe'  
# 创建Chrome浏览器实例，指定服务
options = webdriver.ChromeOptions()  # 可以在这里添加任何浏览器选项，如代理设置等
# 设置Chrome文件路径
options.binary_location = Chrome_location

# 创建Chrome浏览器实例
driver = webdriver.Chrome(service=service, options=options)
#绕过验证
driver .execute_cdp_cmd("Page.addScriptToEvaluateOnNewDocument", {
    "source": """
    Object.defineProperty(navigator, 'webdriver', {
        get: () => undefined
    })
    """
})


# 访问某个URL
url = 'https://passport.jd.com/uc/login?ReturnUrl=https%3A%2F%2Forder.jd.com%2Fcenter%2Flist.action#/'
# 打开浏览器
driver .get(url)

input_loginname = driver.find_element(By.ID, 'loginname') # 找到输入框
input_loginname.send_keys('username') # 输入账号

input_nloginpwd = driver.find_element(By.ID, 'nloginpwd') # 找到密码框
input_nloginpwd .send_keys('password') # 输入密码

print("浏览器已打开，按任意键退出程序...")
str=input()  # 控制台等待用户输入
browser.quit() # 退出浏览器
