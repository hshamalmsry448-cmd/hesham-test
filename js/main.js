const events = [
    {
        id: 'flower-show',
        title: 'Damascus International Flower Show',
        tayp: 'Culture & Art',
        data: 'Usually held in the summer (July/August)',
        location: 'Tishreen Park',
        description: 'Features displays of different types of flowers, flower arranging competitions, and lectures on plants.',
        image:'img/Damascus International Flower Show.jpg'
    },
    {
        id: 'international-fair',
        title: 'Damascus International Fair',
         tayp: 'Trade & Economy',
        data:  'Late summer or early fall (August to September), lasts for two weeks',
       location: 'At the International Exhibition Center located in the Exhibition City area of Damascus',
        description: 'The most important and oldest international trade fair in the region, it was launched in 1954 and attracts dozens of countries and companies from around the world. This fair is considered an important economic and commercial destination, providing an opportunity for local and international companies in many fields to showcase and exchange products and services.',
        image:'img/Damascus International Fair.jpg'
    },
    {
        id: 'book-fair',
        title: 'Damascus International Book Fair',
        tayp: 'Culture & Literature',
        data:  'Held annually in late summer or early fall (August-September)',
       location: 'National Library',
        description: 'Many Arab and international publishing houses participate in this event, showcasing books in various fields ranging from literature to science and technology. The event also features book signings and cultural lectures.',
        image:'img/Damascus International Book Fair.jpg'
    },
    {
        id: 'calligraphy-exhibition',
        title: 'Arabic Calligraphy Exhibition entitled “Letters in the Face of Bullets”',
         tayp: 'Art & Culture',
        data:  'June',
       location: 'National Library',
        description: 'An important cultural event focusing on the art of Arabic calligraphy, where local and international calligraphers compete in creating their artistic works using different types of fonts.',
        image:'img/Arabic Calligraphy Exhibition entitled.jpg'
    },
    {
        id: 'film-festival',
        title: 'Sham Film Festival',
        tayp: 'Art & Culture',
        data:  'March',
         location: 'Damascus Opera House',
        description: 'A festival dedicated to Syrian and Arab cinema, featuring numerous documentaries and short and feature-length films. It also includes workshops and specialized lectures.',
        image:'img/Sham Film Festival.jpg'
    },
    {
        id: 'poetry-evenings',
        title: 'Poetry Evenings',
        tayp: 'Culture & Literature',
         data:  'March',
        location: 'Damascus Opera House',
        description: 'One of the most prominent cultural and artistic events held in the Syrian capital, celebrating literature and poetry in particular. These evenings combine literary art with music and melody, making them a unique cultural experience.',
        image:'img/Poetry Evenings.jpg'
    },
    {
        id: 'equestrian-championships',
        title: 'Equestrian Championships',
        tayp: 'Sport',
        data:  'October',
        location: 'Equestrian Field, Damascus',
        description: 'This is one of the most distinctive sporting events held in Damascus, attracting a wide audience of equestrian enthusiasts, athletes, and families. Equestrianism is a traditional sport in Syria and has a long history in Arab culture. These championships combine sport, art, and culture, making them an event worth following and paying attention to.',
        image:'img/Equestrian Championships.jpg'
    },
    {
        id: 'family-trips',
        title: 'Family field trips',
        tayp: 'Family & Culture',
        data:  'April',
        location:'Old Damascus',
        description: 'These trips are often organized as part of sightseeing tours that include visits to the most prominent historical and religious landmarks in the Old City. They are a golden opportunity to explore the citys rich history and participate in fun educational and cultural activities. They are a combination of entertainment and learning, where all family members, from children to adults, can enjoy a unique experience that enhances their understanding of Syrian culture and its rich history.',
        image:'img/Family field trips.jpg'
    },
    {
        id: 'water-games-festival',
        title: 'Water Games Festival',
        tayp: 'Family & Sport',
        data: 'August',
        location: 'Damar Water Resort',
        description: 'The event includes a range of water activities, including areas for children equipped with safe pools and water games suitable for all ages. Interactive competitions and live water shows are also organized to promote a spirit of competition and fun among family members. This event is an ideal opportunity for families to enjoy quality time together, where everyone can come together in an atmosphere of joy and delight, with all services provided to ensure the comfort and satisfaction of visitors.',
        image:'img/Water Games Festival.jpg'
    },
    {
        id: 'bicycle-race',
        title: 'Bicycle Race',
         tayp: 'Sport',
        data: 'April',
        location: 'Starting from Tishreen Park',
        description: 'The race aims to promote sports activities and encourage a healthy lifestyle among citizens. It is supervised by a team of professional organizers, with all safety and medical care requirements provided to ensure a safe and enjoyable experience for all participants.',
        image:'img\Bicycle Race.jpg'
    }
];

// ---------------------------------------------------------------------------------

// Dark Mode تبديل النمط الداكن مع حفظ التفضيل في 
const toggle = document.getElementById('darkModeToggle');
const body = document.body;

// التحقق من التفضيل المحفوظ عند تحميل الصفحة
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
}

// مستمع الحدث للزر
toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // حفظ التفضيل
    localStorage.setItem('darkMode', body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
});

// ---------------------------------------------------------------------------------

// زر العودة لأعلى الصفحة
const scrollBtn = document.getElementById('scrollToTop');

//ظهار/إخفاء زر العودة 
window.onscroll = () => {
    scrollBtn.style.display = (document.documentElement.scrollTop > 100) ? 'block' : 'none';
};

//العودة إلى أعلى الصفحة 
scrollBtn.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
});

// ---------------------------------------------------------------------------------
//لأنشاء بطاقة الفعاليات 

function createEventCard(event) {
    return `
        <div class="col-md-4">
            <div class="card h-100 fade-in">
                <img src="${event.image}" class="card-img-top" alt="${event.title}" loading="lazy">
                <div class="card-body">
                    <h5 class="card-title">${event.title} <span class="badge bg-primary">${event.type}</span></h5>
                    <p class="card-text"><i class="fas fa-calendar-alt"></i> ${event.date} | <i class="fas fa-map-marker-alt"></i> ${event.location}</p>
                </div>
                <div class="card-footer">
                    <a href="event.html?id=${event.id}" class="btn btn-primary">التفاصيل <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    `;
}

// ---------------------------------------------------------------------------------

if (document.getElementById('featuredEvents')) {

    const sortedEvents = events.sort((a, b) => new Date(a.date) - new Date(b.date)).slice(0, 3);
    document.getElementById('featuredEvents').innerHTML = sortedEvents.map(createEventCard).join('');
}

// ---------------------------------------------------------------------------------

if (document.getElementById('eventsList')) {
    function renderEvents(filteredEvents) {
        if (filteredEvents.length === 0) {
             document.getElementById('eventsList').innerHTML = '<div class="alert alert-info" role="alert">لا توجد فعاليات مطابقة للمعايير المحددة.</div>';
             return;
        }
        document.getElementById('eventsList').innerHTML = filteredEvents.map(createEventCard).join('');
    }

    // عرض جميع الفعاليات عند تحميل الصفحة
    renderEvents(events);

    const searchInput = document.getElementById('searchInput');
    const filterType = document.getElementById('filterType');
    const filterDate = document.getElementById('filterDate');

    function filterEvents() {
        let filtered = events;
        
        // 1.فلترة حسب البحث
        const query = searchInput.value.toLowerCase();
        if (query) {
            filtered = filtered.filter(e => e.title.toLowerCase().includes(query) || e.description.toLowerCase().includes(query));
        }

        // 2.فلترة حسب التصنيف
        const type = filterType.value;
        if (type) {
            filtered = filtered.filter(e => e.type === type);
        }

        // 3.فلترة حسب التاريخ
        const date = filterDate.value;
        if (date) {
            filtered = filtered.filter(e => e.date === date);
        }

        // إعادة عرض النتائج
        renderEvents(filtered);
    }


    searchInput.addEventListener('input', filterEvents);
    filterType.addEventListener('change', filterEvents);
    filterDate.addEventListener('change', filterEvents);
}

// ---------------------------------------------------------------------------------


if (document.getElementById('eventDetails')) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const event = events.find(e => e.id === id);

    if (event) {
        document.getElementById('eventDetails').innerHTML = `
            <div class="col-md-6">
                <img src="${event.image}" alt="${event.title}" class="img-fluid rounded shadow mb-4" loading="lazy">
            </div>
            <div class="col-md-6">
                <h1 class="mb-3">${event.title}</h1>
                <p><strong>التاريخ:</strong> ${event.date} <span class="badge bg-info">${event.type}</span></p>
                <p><strong>المكان:</strong> ${event.location}</p>
                <p>${event.description}</p>
            </div>
        `;
     
        document.getElementById('shareLink').textContent = window.location.href;
    } else {
      
        document.getElementById('eventDetails').innerHTML = '<div class="alert alert-warning">الفعالية غير موجودة.</div>';
    }
}

// ---------------------------------------------------------------------------------

// لـ contact.html: التحقق من نموذج الاتصال وعرض رسائل التنبيه (Alerts)
const form = document.getElementById('contactForm');
if (form) {
    const alertPlaceholder = document.getElementById('alertPlaceholder');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // التحقق من صحة جميع الحقول المطلوبة في HTML5
        if (form.checkValidity()) {
            // رسالة النجاح (Bootstrap Alert)
            alertPlaceholder.innerHTML = '<div class="alert alert-success fade-in">تم إرسال الرسالة بنجاح! شكراً لاتصالك.</div>';
            form.reset(); // تفريغ النموذج
        } else {
            // رسالة الخطأ
            alertPlaceholder.innerHTML = '<div class="alert alert-danger fade-in">يرجى ملء جميع الحقول بشكل صحيح.</div>';
        }
        
        // إخفاء الرسالة بعد 5 ثوانٍ
        setTimeout(() => alertPlaceholder.innerHTML = '', 5000);
    });
}

// ---------------------------------------------------------------------------------


const langToggle = document.getElementById('langToggle');
const html = document.documentElement;


if (localStorage.getItem('direction') === 'ltr') {
    html.setAttribute('dir', 'ltr');
} else {

    html.setAttribute('dir', 'rtl');
}


if (langToggle) {
    langToggle.addEventListener('click', () => {
        if (html.getAttribute('dir') === 'rtl') {
            html.setAttribute('dir', 'ltr');
            localStorage.setItem('direction', 'ltr');
            alert('Direction set to LTR (Left-to-Right).');
        } else {
            html.setAttribute('dir', 'rtl');
            localStorage.setItem('direction', 'rtl');
            alert('تم تعيين الاتجاه إلى RTL (من اليمين إلى اليسار).');
        }
    });
}
