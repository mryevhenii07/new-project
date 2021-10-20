class Pagescroll{
    constructor(id){
        this.page = $(id);
        this.topLink = this.page.find(".topLink");
        $(window).scroll(this.showHideTopLink.bind(this));//при скроле у нас появилась ссылка ( когда скрол достигает определённой позиции и будем его привязывать к окну)
        this.topLink.click(this.slowScroll.bind(this));//делаем плавный скрол на верх
    }
    
    showHideTopLink(){
        if($(window).scrollTop() > 300){ //.scrollTo() = .scrollTop()-определяет позицию скрола
            this.topLink.fadeIn(1000); //метод который позволяет работать с прозрачностью от 0 до 100 - ПОЯВЛЯЕТСЯ
        }else{
            this.topLink.fadeOut(1000);//метод который позволяет работать с прозрачностью от 100 до 0 - ИСЧЕЗАЕТ
        }
    }
    slowScroll(event) {
        event.preventDefault(); //у нас ссылка по умолчанию при клике у нас происходит перезагрузка страницы мы это действие предотвращаем
        $("html, body").stop().animate({ scrollTop: 0 }, 500);//scrollTop- свойство js нам его нужно установить в 0, чтобы сделать это прлавно поможет метод .animate() -jq, stop()-подстраховка если пользователь начнёт кликать быстро  stop()-прекратит предыдущую анимацию и начнёт следующую
        //500- время за сколько прокрутка пойдет на верх
    }
}
const scroll = new Pagescroll("#page1");