$(document).ready(function () {

    $.ajax({
        url: "https://api.pexels.com/v1/search?per_page=80&query=abstract",
        headers: { 'Authorization': '563492ad6f917000010000013764a400433c4372bb226bd9030c76d9' }
    }).done(function (data) {
        i = Math.floor(Math.random()*80);
        console.log(data);
        var backgroundImgURL = data['photos'][i]['src']['landscape'];
        $('body').css("background-image","url(" + backgroundImgURL + ")");
    })

    var i = 0;
    if (localStorage.getItem('imageArray')!=="") {
    var imageArray = JSON.parse(localStorage.getItem('imageArray'));
    var artArray = JSON.parse(localStorage.getItem('artArray'));
    for (i-0; i<imageArray.length; i++) {
        var artSource=imageArray[i];
        var card=$('<div class="row"><div class="col sm12 m6"><div class="card"><div class="card-image"><img src='+artSource+'><a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">delete</i></a></div><span class="card-title">'+artArray[i]['title']+'</span><div class="card-content"><p>'+artArray[i]['maker']+'</p></div></div></div></div>');
        $('#yourCollection').append(card);
    }
}

    $('#showArt').modal();
    $('#showCollection').modal();
    $('.carousel').carousel();
    $('.sidenav').sidenav();

    var p = undefined;
    var ps = undefined;
    var index=undefined;
    $('#submitBtn , #nextPiece').click(function getArt (e) {
        e.preventDefault();
        p = Math.floor(Math.random()*100);
        ps = Math.floor(Math.random()*100);
        index = Math.floor(Math.random()*ps);
    $.ajax('https://www.rijksmuseum.nl/api/en/collection?key=2zUn2IDK&p='+p+'&ps='+ps).done(function (data) {
            var imgURL=data['artObjects'][index]['webImage']['url'];
            $('#displayImg').attr("src", imgURL);
            var title = data['artObjects'][index]['title'];
            var objectID = data['artObjects'][index]['objectNumber'];
            $('#artTitle').text(title);
            $.ajax('https://www.rijksmuseum.nl/api/en/collection/'+objectID+'?key=2zUn2IDK').done(function (data) {
                var nationality = data['artObject']['nationality'];
                if (nationality=="null" || nationality==undefined) {
                    $('#nationality').text("");
                }
                else {
                $('#nationality').text("Artist nationality: " + nationality);
                }
                var placeOfOrigin = data['artObject']['productionPlaces'][0];
                if (placeOfOrigin=="null" || placeOfOrigin==undefined) {
                    $('#placeOfOrigin').text("");
                }
                else {
                $('#placeOfOrigin').text("Made In: " + placeOfOrigin);
                }
                var yearCreated = data['artObject']['dating']['presentingDate'];
                if (yearCreated=="null" || yearCreated==undefined) {
                    $('#yearCreated').text("");
                }
                else {
                $('#yearCreated').text("Year: " + yearCreated);
                }
                var description = data['artObject']['plaqueDescriptionEnglish'];
                if (description=="null" || description==undefined) {
                    $('#description').text("");
                }
                else {
                $('#description').text("Description: " + description);
                }
                var medium = data['artObject']['physicalMedium'];
                if (medium=="null" || medium==undefined) {
                    $('#medium').text("");
                }
                else {
                $('#medium').text("Medium: " + medium);
                }
                var maker = data['artObject']['principalOrFirstMaker'];
                if (maker=="null" || maker==undefined) {
                    $('#maker').text("");
                }
                else {
                $('#maker').text("Maker: " + maker);
                }
                $('#showArt').modal('open');
            });
        });
    });

    artArray=[];
    imageArray =[];

    $('#addArt').click(function (e) {
        e.preventDefault();
        var artSource=$('#displayImg').attr('src');
        var card=$('<div class="row"><div class="col sm12 m6"><div class="card"><div class="card-image"><img src="'+artSource+'"><a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">delete</i></a></div><span class="card-title">'+$('#artTitle').text()+'</span><div class="card-content"><p>'+$('#maker').text()+'</p></div></div></div></div>');
        $('#yourCollection').append(card);
        if (localStorage.getItem('imageArray')=="") {
            imageArray.push(artSource);
        }
        else {
        imageArray=JSON.parse(localStorage.getItem('imageArray'))
        imageArray.push(artSource);
        }
        localStorage.setItem('imageArray',JSON.stringify(imageArray));
        var artDetails = {};
        artDetails['title'] = $('#artTitle').text();
        artDetails['maker'] = $('#maker').text();
        artDetails['nationality'] = $('#nationality').text();
        artDetails['placeOfOrigin'] = $('#placeOfOrigin').text();
        artDetails['yearCreated'] = $('#yearCreated').text();
        artDetails['medium'] = $('#medium').text();
        artDetails['description'] = $('#description').text();
        if (localStorage.getItem('artArray')=="") {
            artArray.push(artDetails);
        }
        else {
        artArray = JSON.parse(localStorage.getItem('artArray'));
        artArray.push(artDetails);
        }
        localStorage.setItem('artArray',JSON.stringify(artArray));
        status();
    })

    function status () {
        setTimeout(stopStatus,1000);
        $('#alertSuccess').text("Successfully added to your collection!");
    }
    function stopStatus () {
        $('#alertSuccess').text("");
    }

    $('#viewCollection').click(function () {
        $('#showCollection').modal('open');
        $('.halfway-fab').click(function () {
            imageSource = $(this).siblings().attr('src');
            var imageArray = JSON.parse(localStorage.getItem('imageArray'));
            var artArray = JSON.parse(localStorage.getItem('artArray'));
            var deleteThis = imageArray.indexOf(imageSource);
            imageArray.splice(deleteThis,1);
            artArray.splice(deleteThis,1);
            localStorage.setItem('imageArray', JSON.stringify(imageArray));
            localStorage.setItem('artArray', JSON.stringify(artArray));
            $(this).parent().parent().parent().remove();
        })
    })
});
