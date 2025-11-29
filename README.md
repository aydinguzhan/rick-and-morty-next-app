# Rick and Morty Next.js Project

Bu proje, **Next.js 13**, **React 18**, **TypeScript**, **TailwindCSS**, **Framer Motion** ve **Zustand** kullanılarak geliştirilmiş bir Rick and Morty karakter görüntüleme uygulamasıdır.

Kullanıcılar karakterleri filtreleyebilir, sayfalayabilir ve favori karakterlerini işaretleyebilir.

---

## Teknolojiler

- **Next.js 13** – App Router ve Server/Client Components ile modern web uygulama mimarisi
- **React 18**
- **TypeScript**
- **TailwindCSS** – Responsive ve modern UI için
- **Framer Motion** – Animasyon ve sliderlar
- **Zustand** – Global state management (favoriler için)
- **Lucide React** – İkonlar

---

## Kurulum ve Çalıştırma

1. Depoyu klonlayın:

````bash
git clone https://github.com/aydinguzhan/rick-and-morty-next-app.git
cd rick-and-morty-next-app
npm install
npm run dev

```Tarayicida acin
http://localhost:3000

````

## Deployment

Proje Vercel üzerine deploy edilmiştir.

Canlı sürüme aşağıdaki adresten ulaşabilirsiniz:

https://rick-and-morty-next-app-eight.vercel.app/

## Özellikler

Karakter listesi görüntüleme

Karakter filtresi (name, status, species)

Pagination

Favori karakter ekleme

Animasyonlu slider (Framer Motion)

Responsive tasarım (TailwindCSS)

## Geliştirilmesi Gereken Özellikler

1. Filtreleme sistemi Next.js 13 App Router yapısında daha efektif ve URL query ile senkronize şekilde uygulanabilir.
2. Daha esnek Url base bir yapi kurgulanabilirdi. ( Sorgulama urllerine gore response render edilebilir sayfalar). Bunu tercih etmedim cunku kucuk bir proje ve zaman merfumu
3. Yerel zamanı bulamadığımdan, tarih/saat ile ilgili özellikler ve bazı UI iyileştirmeleri eksik olabilir.
