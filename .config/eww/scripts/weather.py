import subprocess, json, os

def kelvinToCelsius(kelvin):
    return round(kelvin) - 273

path = os.path.dirname(os.path.abspath(__file__))
res = subprocess.run([f'{path}/getweather'], stdout=subprocess.PIPE)
decoded = json.loads(res.stdout.decode('utf-8'))

temp_k = decoded["main"]["temp"]
temp_c = round(kelvinToCelsius(temp_k))
weather = decoded["weather"][0]["main"]
print(f'''
(box :class "weather1" :space-evenly false :halign "center"
(image :path "./images/{decoded["weather"][0]["icon"]}.png" :image-width  "40")
(box :class "weather2" :orientation "h"
"{temp_c}°, {weather}"
)
)
''')
