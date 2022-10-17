function addLike(id) {
    var element = document.querySelector(id);
    let likeCount = Number(element.innerText);
    likeCount++;
    element.innerText = likeCount;
}

// function toggleLike(x) {
//     x.classList.toggle("fa-thumbs-down");
//   }


// $('.btn-counter').on('click', function(event, count) {
//     event.preventDefault();

//     var $this = $(this),
//         count = $this.attr('data-count'),
//         active = $this.hasClass('active'),
//         multiple = $this.hasClass('multiple-count');
//     $.fn.noop = $.noop;
//     $this.attr('data-count', ! active || multiple ? ++count : --count  )[multiple ? 'noop' : 'toggleClass']('active');
    
//   });