let clickSound = document.getElementById('clickSound');
let winSound = document.getElementById('winSound');
let criss = '<span class="circle"></span>';
let cross = '<span class="cross"></span>';
let currentTeam = 1; // 1.criss  2. cross
let winner = 0; // 1.criss  2. cross
let crissPoint = 0;
let crossPoint = 0;

function playClick(){
    clickSound.currentTime = 0;
    clickSound.play();
}
function playWinner(){
    clickSound.currentTime = 0;
    clickSound.pause();
    winSound.currentTime = 0;
    winSound.play();
    currentTeam = 1;
}

function checkResult(){
    let result = [0,0,0,0,0,0,0,0,0];
    $.each(result, function (i, v) {
        let sl = i+1;
        let check = $('.cross_board_box_'+sl).html();
        if(check !== ''){
            let cc1 = ($('.cross_board_box_'+sl).find('.circle')).length;
            if(cc1 === 0){
                cc1 = ($('.cross_board_box_'+sl).find('.cross')).length;
                if(cc1 > 0){
                    cc1 = 2;
                }
            }
            result[i] = cc1;
        }
    });

    $('.lineCutter').attr('class', 'lineCutter');
    if(result[0] > 0 && result[0] === result[1] && result[0] === result[2]){
        if(result[0] === 1){
            $('.lineCutter').addClass('lineCutter_012_bl');
            winner = 1;
        } else {
            $('.lineCutter').addClass('lineCutter_012_rd');
            winner = 2;
        }
    }
    else if(result[0] > 0 && result[0] === result[3] && result[0] === result[6]){
        if(result[0] === 1){
            $('.lineCutter').addClass('lineCutter_036_bl');
            winner = 1;
        } else {
            $('.lineCutter').addClass('lineCutter_036_rd');
            winner = 2;
        }
    }
    else if(result[0] > 0 && result[0] === result[4] && result[0] === result[8]){
        if(result[0] === 1){
            $('.lineCutter').addClass('lineCutter_048_bl');
            winner = 1;
        } else {
            $('.lineCutter').addClass('lineCutter_048_rd');
            winner = 2;
        }
    }
    else if(result[1] > 0 && result[1] === result[4] && result[1] === result[7]){
        if(result[1] === 1){
            $('.lineCutter').addClass('lineCutter_147_bl');
            winner = 1;
        } else {
            $('.lineCutter').addClass('lineCutter_147_rd');
            winner = 2;
        }
    }
    else if(result[2] > 0 && result[2] === result[4] && result[2] === result[6]){
        if(result[2] === 1){
            $('.lineCutter').addClass('lineCutter_246_bl');
            winner = 1;
        } else {
            $('.lineCutter').addClass('lineCutter_246_rd');
            winner = 2;
        }
    }
    else if(result[2] > 0 && result[2] === result[5] && result[2] === result[8]){
        if(result[2] === 1){
            $('.lineCutter').addClass('lineCutter_258_bl');
            winner = 1;
        } else {
            $('.lineCutter').addClass('lineCutter_258_rd');
            winner = 2;
        }
    }
    else if(result[3] > 0 && result[3] === result[4] && result[3] === result[5]){
        if(result[3] === 1){
            $('.lineCutter').addClass('lineCutter_345_bl');
            winner = 1;
        } else {
            $('.lineCutter').addClass('lineCutter_345_rd');
            winner = 2;
        }
    }
    else if(result[6] > 0 && result[6] === result[7] && result[6] === result[8]){
        if(result[6] === 1){
            $('.lineCutter').addClass('lineCutter_678_bl');
            winner = 1;
        } else {
            $('.lineCutter').addClass('lineCutter_678_rd');
            winner = 2;
        }
    }

    if(winner === 1){
        playWinner();
        crissPoint++;
        /*setTimeout(function () {
            swal ( "Congratulation! Round Wins" ,  "" ,  "success" ).then(function () {
                $('.lineCutter').attr('class', 'lineCutter');
                $('.cross_board_box').html('');
                winner = 0;
            });
        }, 500);*/
    }
    if(winner === 2){
        playWinner();
        crossPoint++;
        /*setTimeout(function () {
            swal ( "Congratulation! Cross Wins" ,  "" ,  "success" ).then(function () {
                $('.lineCutter').attr('class', 'lineCutter');
                $('.cross_board_box').html('');
                winner = 0;
            });
        }, 500);*/
    }


}



$(function () {
   $('.cross_board_box').on('click', function () {
       playClick();
       let check = $(this).html();
       if(check === ''){
           if(currentTeam === 1){
               $(this).html(criss);
               currentTeam = 2;
           } else {
               $(this).html(cross);
               currentTeam = 1;
           }
       }
       checkResult();
   });
});
