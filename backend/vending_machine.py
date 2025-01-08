import webview
from datetime import datetime

class Api:
    def get_current_time(self) -> dict :
        self.current_time = datetime.now()
        self.abbreviated_day_name = {
        "Monday": "Mon",
        "Tuesday": "Tue",
        "Wednesday": "Wed",
        "Thursday": "Thu",
        "Friday": "Fri",
        "Saturday": "Sat",
        "Sunday": "Sun"
        }
        return {
                "month_name": self.current_time.strftime("%B"), # month name specifier -> %B
                "day_name": self.abbreviated_day_name[self.current_time.strftime("%A")], # weekday name specifier -> %A
                "day_date": self.current_time.day,
                "hour": self.current_time.hour,
                "minute": self.current_time.minute
        }
    
api = Api()
webview.create_window("muchangi", url="file:///home/andrew/python/vending_machine/frontend/assets/html/home.html", width=1024, height=600, js_api=api, frameless=True)
webview.start()