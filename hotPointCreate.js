/**
 * Created by yan on 09/06/2017.
 */
var lis = $('ul li')

lis.each(function (index) {

    $(this).click(function () {

        $(this).addClass('active')

        toggleOthers(lis, index)
    })
})

function toggleOthers(lis, index) {

    for (var i = 0; i < lis.length; ++i) {

        var ele = $(lis[i])

        if (i == index) {

            continue;
        }

        ele.removeClass('active')
    }
}