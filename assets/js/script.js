$(document).ready(function(){
    // removing form profile block
    // $('.pg-block-item-btn').click(function(){
    //     $(this).parent().remove();
    // })

    // navbar collapse
    // $('.pg-nav-show-btn').click(function(){
    //     $('.pg-navbar-collapse').addClass('pg-navbar-collapse-show');
    // })

    // $('.pg-nav-hide-btn').click(function(){
    //     $('.pg-navbar-collapse').removeClass('pg-navbar-collapse-show');
    // });

    // stopping animation
    // let resizeTimer;
    // $(window).resize(function(){
    //     $(document.body).addClass('resize-animation-stopper');
    //     clearTimeout(resizeTimer);
    //     resizeTimer = setTimeout(function(){
    //         $(document.body).removeClass('resize-animation-stopper');
    //     }, 400);
    // });

    // accordion
    // $('#accordionMeetings').on('shown.bs.collapse', function () {
    //     $('.accordion-button').css('background', 'white');
    //     $('.accordion-button .accordion-item-text .hide-item').css('display', 'none');
    //  });
     
    //  $('#accordionMeetings').on('hidden.bs.collapse', function () {
    //     $('.accordion-button .accordion-item-text .hide-item').css('display', 'block');
    //  });

    //  table dropdown
    // $('.tbl-dropdown-btn-main').click(function(){
    //     $('.tbl-dropdown-list').removeClass('tbl-dropdown-show'); // remove all initially the show the dropdown
    //     $(this).next().toggleClass('tbl-dropdown-show');
    // });

    // $('.pg-card-status-dropdown-btn-main').click(function(){
    //     $('.pg-card-status-dropdown-list').removeClass('pg-card-status-dropdown-show'); // remove all initially the show the dropdown
    //     $(this).next().toggleClass('pg-card-status-dropdown-show');
    // });

    // close when triggered outside the dropdown area
    // $(document).on('click', function(event){
    //     var trigger = $(".tbl-dropdown");
    //     if(trigger !== event.target && !trigger.has(event.target).length){
    //         $('.tbl-dropdown-list').removeClass('tbl-dropdown-show');
    //     }
    // });

    // $(document).on('click', function(event){
    //     var trigger = $(".pg-card-status-dropdown");
    //     if(trigger !== event.target && !trigger.has(event.target).length){
    //         $('.pg-card-status-dropdown-list').removeClass('pg-card-status-dropdown-show');
    //     }
    // });

    // close when any status btn is pressed
    // $('.tbl-dropdown-list .tbl-dropdown-btn').click(function(){
    //     $('.tbl-dropdown-list').removeClass('tbl-dropdown-show');
    // });

    // $('.pg-card-status-dropdown-list .pg-card-status-dropdown-btn').click(function(){
    //     $('.pg-card-status-dropdown-list').removeClass('pg-card-status-dropdown-show');
    // });
// }); 

    // const blockViewBtn = document.getElementById('block-view-btn');
    // const tableViewBtn = document.getElementById('table-view-btn');

    // layout view event listeners
    // blockViewBtn.addEventListener('click', () => setLayoutFormat(false));
    // tableViewBtn.addEventListener('click', () => setLayoutFormat(true));

    // const setLayoutFormat = (setTable) => {
    //     const allCards = document.querySelectorAll('.pg-block-card');
    //     if(setTable){
    //         allCards.forEach(card => card.parentElement.classList.add('table-view-card'));
    //         const wrapperNodes = document.querySelectorAll('.pg-block-cng');
    //         wrapperNodes.forEach(wrapperNode => wrapperNode.replaceWith(...wrapperNode.childNodes));
    //         // removing gy-5
    //         document.querySelector('.pg-block-card-list').classList.remove('gy-5');
    //         document.querySelector('.pg-table-toggle').classList.add('table-view-wrapper');
    //     } else {
    //         allCards.forEach(card => {
    //             let pgBlockCardImg = card.querySelector('.pg-block-card-img');
    //             let pgBlockCardTitle = card.querySelector('.pg-block-card-title');
    //             let pgBlockCardDropdown = card.querySelector(".pg-block-card-dropdown");
    //             let pgBlockCardTop = document.createElement('div');

    //             pgBlockCardTop.classList.add('pg-block-card-top', 'pg-block-cng', 'd-flex', 'align-items-center', 'justify-content-between');
    //             pgBlockCardTop.append(pgBlockCardImg, pgBlockCardTitle, pgBlockCardDropdown);
    //             card.parentElement.classList.remove('table-view-card');
    //             card.insertAdjacentElement('afterbegin', pgBlockCardTop);
    //             // adding gy-5
    //             document.querySelector('.pg-block-card-list').classList.add('gy-5');
    //             document.querySelector('.pg-table-toggle').classList.remove('table-view-wrapper');
    //         });
    // }










    // date picker nepali
    let mainInput = $(".nepali-datepicker");
    mainInput.nepaliDatePicker();

    // drag and drop file
    $('.upload-info').click(function(){
        $('.upload-file').trigger('click');
    });
});


