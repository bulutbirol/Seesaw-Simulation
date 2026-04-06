Seesaw Simulation

Bu proje, saf JavaScript, HTML ve CSS kullanılarak geliştirilmiş basit bir fizik tabanlı tahterevalli (seesaw) simülasyonudur.

Kullanıcı, plank üzerine tıklayarak rastgele ağırlıkta (1–10 kg) objeler ekleyebilir. Sistem bu objelere göre dengeyi (torque) hesaplar ve tahterevallinin eğimini dinamik olarak günceller.

---

Canlı Demo

https://bulutbirol.github.io/Seesaw-Simulation/


---

Proje Amacı

Bu projede amaç, gerçek bir tahterevallinin çalışma mantığını simüle etmektir.

Kullanıcı her tıkladığında:
- Yeni bir obje oluşturulur
- Obje 1–10 kg arasında rastgele ağırlığa sahiptir
- Konumuna göre merkeze olan uzaklığı belirlenir
- Sistem torque hesaplayarak dengeyi günceller

---

Nasıl Çalışır?

1. Obje Yerleştirme
- Kullanıcı plank üzerine tıklar
- Tıklanan konum `offsetX` ile alınır
- O noktaya yeni bir ağırlık eklenir

2. Ağırlık Hesaplama
- Tüm objeler bir dizi içinde tutulur
- Sol ve sağ tarafın toplam ağırlıkları ayrı ayrı hesaplanır

3. Torque (Moment) Hesabı
- torque = ağırlık × merkeze uzaklık
- Her obje için merkezden uzaklık hesaplanır
- Sol ve sağ torque değerleri ayrı ayrı toplanır

4. Eğim (Tilt) Hesabı
- Hesaplanan açı **-30° ile +30° arasında sınırlandırılır**
- Bu sayede gerçekçi bir hareket elde edilir

5. Görselleştirme
- Objeler plank üzerinde daire olarak gösterilir
- Plank, CSS `transform: rotate()` ile döndürülür

---

Veri Saklama (Persistence)

Simülasyon durumu `localStorage` ile saklanır.

Saklanan veriler:
- Eklenen tüm objeler
- Konumları ve ağırlıkları

Sayfa yenilendiğinde:
- Önceki durum geri yüklenir
- Simülasyon kaldığı yerden devam eder
