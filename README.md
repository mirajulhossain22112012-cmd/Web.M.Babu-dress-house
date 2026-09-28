# M. Babu Dress House — Website

## ফাইল কাঠামো
- `index.html`, `collections.html`, `visit-us.html` — মূল পেজ
- `admin/` — Admin panel (Decap CMS)
- `data/products.json` — সব পণ্যের তালিকা (Admin panel থেকে এডিট হয়)
- `data/shop.json` — দোকানের তথ্য, ঠিকানা, ম্যাপ, ছবি (Admin panel থেকে এডিট হয়)
- `images/uploads/` — Admin panel থেকে আপলোড করা ছবি এখানে জমা হবে

## ধাপ ১: GitHub-এ আপলোড করুন
1. GitHub-এ একটা নতুন **repository** বানান (Public বা Private, দুটোই চলবে)।
2. এই পুরো ফোল্ডারের সব ফাইল সেই repository-তে push করুন।

## ধাপ ২: Netlify-তে Deploy করুন
1. [netlify.com](https://netlify.com) এ গিয়ে **Add new site → Import an existing project** সিলেক্ট করুন।
2. GitHub সিলেক্ট করে আপনার repository বেছে নিন।
3. Build settings খালি রাখুন (Build command ফাঁকা, Publish directory `.`) — এটা netlify.toml ফাইলে আগে থেকেই সেট করা আছে।
4. **Deploy** চাপুন। কিছুক্ষণের মধ্যে সাইট লাইভ হয়ে যাবে।

## ধাপ ৩: Admin Panel চালু করুন (Identity + Git Gateway)
Admin panel দিয়ে প্রোডাক্ট/ছবি অ্যাড করে সবার জন্য সাইটে দেখাতে হলে এই সেটিংস অন করতে হবে:
1. Netlify সাইটের Dashboard-এ যান → **Site configuration → Identity → Enable Identity**
2. Identity চালু হলে → **Registration preferences → Invite only** সিলেক্ট করুন (যাতে অন্য কেউ নিজে থেকে অ্যাকাউন্ট খুলতে না পারে)
3. নিচে **Services → Git Gateway → Enable Git Gateway** চাপুন
4. **Identity → Invite users** থেকে নিজের ইমেইল দিয়ে নিজেকে ইনভাইট করুন — ইমেইলে একটা লিংক আসবে, ওখান থেকে পাসওয়ার্ড সেট করুন
5. এবার আপনার সাইটের `yoursite.netlify.app/admin/` লিংকে গিয়ে লগইন করলেই Admin panel খুলে যাবে

## Admin Panel দিয়ে যা করা যাবে
- **Products** থেকে নতুন পণ্য add করা, দাম, ক্যাটাগরি, ছবি (মোবাইলে সরাসরি গ্যালারি/ক্যামেরা থেকে নেওয়া যাবে), বিবরণ যোগ করা, এডিট বা ডিলিট করা
- **Shop Details** থেকে ঠিকানা, ফোন, হোয়াটসঅ্যাপ, ফেসবুক লিংক, খোলার সময়, Google Maps লিংক এবং দোকানের ছবি পরিবর্তন করা

কোনো তথ্য save করার সাথে সাথে সেটা GitHub-এ কমিট হয়ে যায় এবং Netlify সাইট কয়েক সেকেন্ডের মধ্যে নিজে থেকেই আপডেট হয়ে যাবে — সবাই একই তথ্য দেখবে।

## Google Maps লিংক কীভাবে পাবেন
Google Maps-এ আপনার দোকান সার্চ করুন → **Share → Embed a map** → সেখানে যে `<iframe src="...">` কোড দেখাবে, শুধু `src="..."` এর ভেতরের লিংকটা কপি করে Admin panel-এর "Google Maps Embed URL" ফিল্ডে বসিয়ে দিন।
