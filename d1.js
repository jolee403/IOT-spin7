var stac = new Array();
var getArray = [2, 3, 23, 2, 12, 4, 34, 3, 543, 5, 46, 56]
var stac2 = 0
insertQueue(getArray)

function insertQueue(item) {
    for (var i = 0; i < item.length; i++) {
        inQueue(item[i])

    }

}

function inQueue(data) {


    stac.push(data)
}

chackDataQueue(stac)



function chackDataQueue(dataQueue) {

    if (dataQueue.length <= 4) {

        outQueue()

        // var data = stac.shift()
        // console.log(data)
    } else {

        timeOut()

    }

}



function outQueue() {

    while (!isEmpty()) {
        console.log('out  =' + stac.shift())

    }
}

function isEmpty() {
    return 0 == stac.length
}


function timeOut() {
    setInterval(function() { stac2 = stac.shift(); }, 3000)

    setInterval(function() {
        console.log(stac);
        console.log(stac2);
    }, 3000)

}