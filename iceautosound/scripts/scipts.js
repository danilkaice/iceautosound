// открытие карточек акций на главной странице
let stoks =[
    {
        'name' : 'Пошуми с другом',
        'discription' : 'У вас много друзей и вы все любите музыку? Приводите их к нам и получите скидку в 50% на любую услугу нашего сервиса' 
    }, 
    {
        'name' : 'Будь в теме',
        'discription' : 'Хочешь придать стиля своему авто и получить скидку? Тогда наклей наше лого на свою ласточку и получи скидку в 35%' 
    }, 
    {
        'name' : 'Лови летний вайб',
        'discription' : 'Скоро лето, поездки на природу и ночные катания по городу. Стоит подготовиться к летнему сезону, поэтому с 21.06.24г по 21.07.24г скидка 30% на установку' 
    }
]

$('.stocksCard').on('click', function(){
    $('#stoksModalLabel').html(stoks[$(this).index()].name)
    $('#stoksModalBody').text(stoks[$(this).index()].discription)
})

// кнопка отправки отзыва
$('#reviewBtn').prop("disabled",true)
$('#reviewText').on('change', function(){
    if($(this).val() == '' || $(this).val() == ' ') $('#reviewBtn').prop("disabled",true)
    else $('#reviewBtn').prop("disabled",false)
})
$('#reviewBtn').on('click', function(){
    $('#reviewText').val('')
    $('#reviewBtn').prop("disabled",true)
})

// заказ звонка
$.mask.definitions['h'] = "[0|1|3|4|5|6|7|9]"
$("#phoneNumberInp").mask("+7 (h99) 999-99-99")
$('#callBtn').prop("disabled",true)
$('#phoneNumberInp').on('change', function(){
    if($(this).val() == '' || $(this).val() == ' ') $('#callBtn').prop("disabled",true)
    else $('#callBtn').prop("disabled",false)
})
$('#callBtn').on('click', function(){
    $('#phoneNumberInp').val('')
    $('#callBtn').prop("disabled",true)
    $('#callModal').modal('hide')
    $('#sucsesCallModal').modal('show')
})


// запись на услугу
let servicesName = [
    'Установка акустики без сабуфера',
    'Установка акустики вместе с сабуфером',
    'Установка усилителя',
    'Настройка вашей акустики',
    'Диагностика вашей системы'
]
$('.servicesBtn').on('click', function(){
    $('#servicesModalLabel span').text(servicesName[$(this).val()])
})

// кнопка записи
$('#zapisBtn').on('click', function(){
   $('.formZapis').find('input').each(function(){
        if($(this).val() != ''){
            $(this).removeClass('null');
        } else{
            $(this).addClass('null');
        }
   })

    if($('.formZapis input').hasClass('null')){
        $('#nullSpan').html('Остались незаполненые поля!')
    } else{
        $('#nullSpan').html('')
        $('#uslugaModal').modal('hide')
        $('#sucsesZapisModal').modal('show')
    }
})

// кнопка закрытия формы записи
$('.closeZap').on('click', function(){
    $('#nullSpan').html('')
})

// выбор даты
const myDateInput = document.getElementById('dateZapis')
const currentDate = new Date().toISOString().split('T')[0]
myDateInput.setAttribute('min', currentDate)