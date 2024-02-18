let seats = document.querySelectorAll(".single-row .seat");
let seatAvailable = document.getElementById('seat-available');
let totalPrice = document.getElementById('total-price');
let grandTotal = document.getElementById('grand-total');
let nextBtn = document.getElementById('next');
let inputNumber = document.getElementById('number');
let modalPopup = document.getElementById('modal-popup');
let continueBtn = document.getElementById('continue');
let couponCode = document.getElementById('coupon-code');
let couponApply = document.getElementById('coupon-apply');
let selectedSeat = 0;
let discountPrice = document.getElementById('discount-price');
const validCoupon = ['NEW15', 'Couple 20'];
let seatCount = document.getElementById('seat-count');
let SelectedSeatContainer = document.getElementById('selected-seat-container');


continueBtn.addEventListener('click' , function() {
    modalPopup.classList.remove('inline-block');
    modalPopup.classList.add('hidden');
})

nextBtn.addEventListener('click', function() {
    modalPopup.classList.add('inline-block');
    modalPopup.classList.remove('hidden');
})

for (let index = 0; index < seats.length; index++) {
    let seat = seats[index];

    seat.addEventListener('click', function seatCalculation (e) {
        

        if(selectedSeat == 4) {
            seat.removeEventListener('click', seatCalculation);
            
        }else {
            seat.classList.add('bg-[#1DD100]');
            seatAvailable.innerHTML -=  1;
            totalPrice.innerHTML = parseInt(totalPrice.innerHTML) + 550;
            grandTotal.innerHTML = totalPrice.innerHTML;
            selectedSeat++;
            seatCount.innerHTML = selectedSeat;
            SelectedSeatContainer.innerHTML += `
            <div class="flex py-2">
            <div class="w-5/12"><span class="text-[#03071299] ">${seat.innerHTML}</span></div>
            <div class="w-4/12"><span class="text-[#03071299] ">Economoy </span></div>
            <div class="w-3/12 text-end"><span class="text-[#03071299] ">550 </span></div>
            </div>
            `;
            console.log(e)
            seat.removeEventListener('click', seatCalculation);
            if(inputNumber.value.length > 0 && selectedSeat > 0) {
                nextBtn.removeAttribute('disabled');
                nextBtn.classList.add('bg-[#1DD100]');
            }else {
                nextBtn.setAttribute('disabled', true);
                nextBtn.classList.add('bg-[#0307121a]');
            }
            if(selectedSeat == 4) {
                couponApply.removeAttribute('disabled');
                couponApply.classList.add('bg-[#1DD100]');
            }
        }
        
        
    })
}

inputNumber.addEventListener('focus', function() {
    document.addEventListener('keyup', function() {
        
        if(inputNumber.value.length > 0 && selectedSeat > 0) {
            nextBtn.removeAttribute('disabled');
            nextBtn.classList.add('bg-[#1DD100]');
        }else {
            nextBtn.setAttribute('disabled', true);
            nextBtn.classList.add('bg-[#0307121a]');
        }
    })
})

couponApply.addEventListener('click', function() {
    if(validCoupon.includes(couponCode.value)) {
        if(couponCode.value == validCoupon[0]) {
            let percentage = parseInt(totalPrice.innerHTML) / 100 * 15;
            grandTotal.innerHTML = parseInt(totalPrice.innerHTML) - percentage;
            discountPrice.innerHTML = percentage;
        }
        if(couponCode.value == validCoupon[1]) {
            let percentage = parseInt(totalPrice.innerHTML) / 100 * 20;
            grandTotal.innerHTML = parseInt(totalPrice.innerHTML) - percentage;
            discountPrice.innerHTML = percentage;
        }
        couponCode.parentNode.classList.add('hidden');
        discountPrice.parentNode.classList.remove('hidden');
        
    }else {
        console.log(' not valid')
    }
})

