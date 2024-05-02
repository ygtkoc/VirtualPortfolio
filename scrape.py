import requests
from bs4 import BeautifulSoup

# Veri çekeceğiniz web sitesinin URL'si
url = 'https://github.com/ygtkoc'

# Web sitesine GET isteği gönderme
response = requests.get(url)

# HTTP yanıt kodunu kontrol edin
if response.status_code == 200:
    # HTML içeriğini BeautifulSoup ile analiz edin
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # Örneğin, tüm başlıkları (h1 etiketleri) alalım
    headings = soup.find_all('user-content--socials')
    
    # Başlıkları ekrana yazdırma
    for heading in headings:
        print(heading.text)
else:
    print('Web sitesine erişilemedi. HTTP yanıt kodu:', response.status_code)