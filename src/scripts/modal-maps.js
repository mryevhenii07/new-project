// modal-map window
(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-map-open]'),
        closeModalBtn: document.querySelector('[data-modal-map-close]'),
        modal: document.querySelector('[data-modal-map]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
    }
})();

// google-map-links

const mapLinks = {
    ny: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z0J3RjNGOLdCZ0L7RgNC6LCDQodCo0JA!5e0!3m2!1sru!2sua!4v1635070355127!5m2!1sru!2sua",
    la: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405770525!2d-118.69192047471653!3d34.02016130653294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2z0JvQvtGBLdCQ0L3QtNC20LXQu9C10YEsINCa0LDQu9C40YTQvtGA0L3QuNGPLCDQodCo0JA!5e0!3m2!1sru!2sua!4v1635070446988!5m2!1sru!2sua",
    ch: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380510.6741716445!2d-88.01215053394515!3d41.83390417011715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2z0KfQuNC60LDQs9C-LCDQmNC70LvQuNC90L7QudGBLCDQodCo0JA!5e0!3m2!1sru!2sua!4v1635070543938!5m2!1sru!2sua"
};

class Tabs {
    constructor(id) {
        this.mapTabs = document.getElementById(id);
        this.btns = this.mapTabs.querySelectorAll(".btn");
        this.currentBtn = null;
        this.prevBtn = this.btns[0];
        this.map = this.mapTabs.querySelector(".map");

        this.btns.forEach(currentBtn => {
            currentBtn.onclick = this.changeMap.bind(this);
        });
    }
    changeMap(event) {
        this.currentBtn = event.currentTarget;
        const currentCity = this.currentBtn.dataset.city;
        this.map.src = mapLinks[currentCity];

        this.prevBtn.classList.remove("active");
        this.currentBtn.classList.add("active");

        this.prevBtn = this.currentBtn;
    }
}

const mapTabs = new Tabs("map-tabs");