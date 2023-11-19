// // var audio = document.createElement("audio")
// // document.body.appendChild(audio)
// // audio.src = "pudge.mp3"

// // document.body.addEventListener("mousemove", function(){
// //     audio.play()
// // })


// // const friends = []
// // alert("Хочешь стенд?")
// // let x = confirm("?")
// // if (x) {
// //     alert("GO igrat")
// //     let nums = parseInt(prompt("IGRAKI"))
// //     for (let i = 0; i < nums; i++) {
// //         let friend = prompt("IMA IGRAKOV")
// //         friends.push(friend)
// //     }
// //     if (nums === 0) {
// //         alert("KAKASHKA")
// //     }
// //     if (nums && nums !== 'string') {
// //         let playerTurn = true
// //         while (friends.length > 0) {
// //             let enemy = friends[parseInt(Math.random() * nums)]
// //             let revolver = [1, 2, 3, 4, 5, 6]
// //             let number = parseInt(Math.random() * 5)
// //             let armed = number === 1
// //             if (playerTurn) {
// //                 console.log("kaka " + armed)
// //                 let pushIt = confirm("Strealt?")
// //                 if (pushIt) {
// //                     alert("babax")
// //                     if (armed) {
// //                         document.body.style.backgroundImage = "pon.png"
// //                         alert("ti sdox")
// //                         break;
// //                     }
// //                 }
// //                 else {
// //                     alert("pobeda")
// //                     break;
// //                 }
// //                 playerTurn = false
// //                 alert("nigga")
// //                 console.log("hodit" + playerTurn)
// //             }

// //             playerTurn = false
// //             console.log("hodit" + enemy)
// //             if (!armed) {
// //                 alert("iii")
// //                 alert("nichego")
// //                 playerTurn = false
// //             }
// //             else {
// //                 alert("igrok " + enemy + " sdox")
// //                 let index = friends.indexOf(enemy)
// //                 friends.splice(index, 1)
// //                 console.log(friends)
// //             }
// //         }
// //     }
// // }
// // else {
// //     alert("ti nigga")
// // }

// // // else {
// // //     alert("net, idi nax")
// // //     alert("lox")
// // // }

// // const y = (a, b) => a**b
// // alert(y)

// // let xu = parseInt(prompt("Введите число", 0))

// // const cube = (num) => num**

// // alert(cube)

// // function cube(xu) {
// //     let xu = parseInt(prompt("Введите число", 0))
// //     return xu*xu*xu
// // }

// // let x = parseInt(prompt("Введите число", 0))

// // let cube = x => x*x*x

// // console.log(cube)






// // function start(){

// //     let arr = []

// //     let num = parseInt(prompt("Введите число", 0))

// //     while (num > 0) {
// //         let nig = (num * num * num)
// //         arr.unshift(nig)
// //         num--
// //     }

// //     alert(arr)

// // }




// const button = document.getElementById('btn')

// // function cubes(x) {
// //     return x * x * x
// // }

// // button.addEventListener('click', () => {
// //     const num = document.getElementById('backgroundInput').value
// //     let n = 1
// //     function loop() {
// //         setTimeout(() => {
// //             console.log("wait")
// //             n++
// //             addHeaderValue(n)
// //             if (n < num) {
// //                 loop()
// //             }
// //         }, 2);
// //     }
// //     loop()
// // }
// // )

// // function addHeaderValue(num) {
// //     const header = document.getElementById('header')
// //     header.innerHTML = `Cube chislo ${num} ravno ${cubes(num)}`
// // }

// button.addEventListener('click', () => {
//     const color = document.getElementById('backgroundInput').value

//     console.log("Значение color:" + color)

//     console.log(bodyBackground(color))
// })

// function bodyBackground(color) {
//     if (typeof color === 'string') {
//         document.body.style.backgroundColor = color;
//     }

//     else if (backgroundInput == 'nigga') {
//         document.body.backgroundColor = 'black';
//     }

//     return getComputedStyle(document.body).backgroundColor;
// }

// const fillArr = n => {
//     const arr = {}

//     for (let i = 0; i < n; i++) {
//         arr[i] = parseInt(Math.random() * 10)
//     }

//     return arr
// }

// // console.log(fillArr(1000))

// let filledArray = fillArr(1000)

// console.log(filledArray)

// function swap(x, y) {
//     let z = x
//     x = y
//     y = z
// }

// //  array = (swap(parseInt(prompt("значение:"))), parseInt(prompt("значение 2:")))

// function sort(array) {
//     for (let j = 0; j < array.length; j++) {
//         for (let i = 0; i < array.length; i++) {
//             if (array[i] > [i + 1]) {
//                 let temp = array[i]
//                 array[i] = array[i + 1]
//                 array[i + 1] = temp
//             }
//         }
//     }
//     return array
// }

// console.log(sort(filledArray))




// class Person{
//     constructor(firstName, lastName){
//         this.firstName = firstName
//         this.lastName = lastName
//     }
//     getFullName(){
//         return this.firstName + " " + this.lastName
//     }
// }

// let pudge = new Person("Пудж", "Дотов")

// pudge.getFullName()












let array = []
const search_num = document.getElementById('input_num')
const find_num = document.getElementById('find_num')
const check = document.getElementById('check')

const algorithm = document.getElementById('selected_algorithm')
const amount = document.getElementById('num_of_values')
const repeats = document.getElementById('repeat_values')
const start = document.getElementById('button')
const btn_download = document.getElementById('btn_download')
const save_result = document.getElementById('save_file')
const load_result = document.getElementById('load_result')

let result_exec = document.getElementById('result')
let result_exec2 = document.getElementById('result2')
let info = document.getElementById('machine_info')
let min = document.getElementById('min')
let max = document.getElementById('max')

let counter
let min_time
let max_time
let avg_time
let time_array

function fillArray(amount) {
    for (let i = 0; i < amount; i++) {
        array.push(Math.floor(Math.random() * 10000))
    }
    return array
}

start.addEventListener("click", () => {
    alert("start")
    time_array = []
    min_time = 0
    max_time = 0
    avg_time = 0
    counter = 0
    result_exec.innerHTML = ""
    result_exec2.innerHTML = ""
    info.innerHTML = ""
    load_result.style.visibility = "hidden"
    save_result.style.visibility = "hidden"
    find_num.style.visibility = "hidden"
    check.style.visibility = "hidden"
    if (algorithm && algorithm.value) {
        switch (algorithm.value) {

            case "bubble_sort": {

                array = []

                for (let i = 0; i < parseInt(repeats.value); i++) {
                    console.log(`Размер масива: ${amount.value}`);
                    console.log(`Повторений осталось:${repeats.value - i} ${repeats.value - i > 1 ? "раза" : "раз"}`);
                    let array = fillArray(parseInt(amount.value))
                    console.log(array);
                    let start_time = Date.now()
                    bubble_sort(array)
                    let end_time = Date.now()
                    amount_of_time = end_time - start_time

                    if (i >= 0) {
                        time_array.push(amount_of_time)
                    }
                }
                time_array.sort()
                min.innerHTML = `<div>Минимальное время: ${time_array[0]} мс.</div>`
                max.innerHTML = `<div>Максимальное время: ${time_array[time_array.length - 1]} мс.</div>`

                for (let i = 0; i < time_array.length - 1; i++) {
                    avg_time += time_array[i]
                }
                avg_time > 0 ? avg_time /= time_array.length : 0
                console.log(time_array)
                result_exec.innerHTML += `\n Среднее время сортировки: \t${avg_time}мс`
                info.innerHTML += `${navigator.hardwareConcurrency} ядер использывано` + "\n"
                result_exec2.innerHTML += `Количество операций: ${counter}`

                if (result_exec.innerHTML.length > 1) {
                    load_result.style.visibility = "visible"
                    check.style.visibility = "visible"
                    find_num.style.visibility = "visible"
                    result_exec.style.visibility = "visible"
                    result_exec2.style.visibility = "visible"
                    min.style.visibility = "visible"
                    max.style.visibility = "visible"
                    btn_download.addEventListener("click", () => {
                        download(array, "dock.txt", "text/plain")
                        save_result.style.visibility = "visible"
                    })
                }
                break;
            }
            case "inseretion_sort": {

                array = []

                for (let i = 0; i < parseInt(repeats.value); i++) {
                    console.log(`Размер масива: ${amount.value}`);
                    console.log(`Повторений осталось:${repeats.value - i} ${repeats.value - i > 1 ? "раза" : "раз"}`);
                    let array = fillArray(parseInt(amount.value))
                    console.log(array);
                    let start_time = Date.now()
                    inseretion_sort(array)
                    let end_time = Date.now()
                    amount_of_time = end_time - start_time

                    if (i >= 0) {
                        time_array.push(amount_of_time)
                    }
                }
                time_array.sort()
                min.innerHTML = `<div>Минимальное время: ${time_array[0]} мс.</div>`
                max.innerHTML = `<div>Максимальное время: ${time_array[time_array.length - 1]} мс.</div>`

                for (let i = 0; i < time_array.length - 1; i++) {
                    avg_time += time_array[i]
                }
                avg_time > 0 ? avg_time /= time_array.length : 0
                console.log(time_array)
                result_exec.innerHTML += `\n Среднее время сортировки: \t${avg_time}мс`
                info.innerHTML += `${navigator.hardwareConcurrency} ядер использывано` + "\n"
                result_exec2.innerHTML += `Количество операций: ${counter}`

                if (result_exec.innerHTML.length > 1) {
                    load_result.style.visibility = "visible"
                    check.style.visibility = "visible"
                    find_num.style.visibility = "visible"
                    result_exec.style.visibility = "visible"
                    result_exec2.style.visibility = "visible"
                    min.style.visibility = "visible"
                    max.style.visibility = "visible"
                    btn_download.addEventListener("click", () => {
                        download(array, "dock.txt", "text/plain")
                        save_result.style.visibility = "visible"
                    })
                }
                break;
            }
            case "selection_sort": {

                array = []

                for (let i = 0; i < parseInt(repeats.value); i++) {
                    console.log(`Размер масива: ${amount.value}`);
                    console.log(`Повторений осталось:${repeats.value - i} ${repeats.value - i > 1 ? "раза" : "раз"}`);
                    let array = fillArray(parseInt(amount.value))
                    console.log(array);
                    let start_time = Date.now()
                    selection_sort(array)
                    let end_time = Date.now()
                    amount_of_time = end_time - start_time

                    if (i >= 0) {
                        time_array.push(amount_of_time)
                    }
                }
                time_array.sort()
                min.innerHTML = `<div>Минимальное время: ${time_array[0]} мс.</div>`
                max.innerHTML = `<div>Максимальное время: ${time_array[time_array.length - 1]} мс.</div>`

                for (let i = 0; i < time_array.length - 1; i++) {
                    avg_time += time_array[i]
                }
                avg_time > 0 ? avg_time /= time_array.length : 0
                console.log(time_array)
                result_exec.innerHTML += `\n Среднее время сортировки: \t${avg_time}мс`
                info.innerHTML += `${navigator.hardwareConcurrency} ядер использывано` + "\n"
                result_exec2.innerHTML += `Количество операций: ${counter}`

                if (result_exec.innerHTML.length > 1) {
                    load_result.style.visibility = "visible"
                    check.style.visibility = "visible"
                    find_num.style.visibility = "visible"
                    result_exec.style.visibility = "visible"
                    result_exec2.style.visibility = "visible"
                    min.style.visibility = "visible"
                    max.style.visibility = "visible"
                    btn_download.addEventListener("click", () => {
                        download(array, "dock.txt", "text/plain")
                        save_result.style.visibility = "visible"
                    })
                }
                break;
            }
            case "quick_sort": {

                array = []

                for (let i = 0; i < parseInt(repeats.value); i++) {
                    console.log(`Размер масива: ${amount.value}`);
                    console.log(`Повторений осталось:${repeats.value - i} ${repeats.value - i > 1 ? "раза" : "раз"}`);
                    let array = fillArray(parseInt(amount.value))
                    console.log(array);
                    let start_time = Date.now()
                    quick_sort(array, 0, array.length)
                    let end_time = Date.now()
                    amount_of_time = end_time - start_time

                    if (i >= 0) {
                        time_array.push(amount_of_time)
                    }
                }
                time_array.sort()
                min.innerHTML = `<div>Минимальное время: ${time_array[0]} мс.</div>`
                max.innerHTML = `<div>Максимальное время: ${time_array[time_array.length - 1]} мс.</div>`

                for (let i = 0; i < time_array.length - 1; i++) {
                    avg_time += time_array[i]
                }
                avg_time > 0 ? avg_time /= time_array.length : 0
                console.log(time_array)
                result_exec.innerHTML += `\n Среднее время сортировки: \t${avg_time}мс`
                info.innerHTML += `${navigator.hardwareConcurrency} ядер использывано` + "\n"
                result_exec2.innerHTML += `Количество операций: ${counter}`

                if (result_exec.innerHTML.length > 1) {
                    load_result.style.visibility = "visible"
                    check.style.visibility = "visible"
                    find_num.style.visibility = "visible"
                    result_exec.style.visibility = "visible"
                    result_exec2.style.visibility = "visible"
                    min.style.visibility = "visible"
                    max.style.visibility = "visible"
                    btn_download.addEventListener("click", () => {
                        download(array, "dock.txt", "text/plain")
                        save_result.style.visibility = "visible"
                    })
                }
                break;
            }
            case "merge_sort": {

                array = []

                for (let i = 0; i < parseInt(repeats.value); i++) {
                    console.log(`Размер масива: ${amount.value}`);
                    console.log(`Повторений осталось:${repeats.value - i} ${repeats.value - i > 1 ? "раза" : "раз"}`);
                    let array = fillArray(parseInt(amount.value))
                    console.log(array);
                    let start_time = Date.now()
                    merge_sort(array, 0, array.length)
                    let end_time = Date.now()
                    amount_of_time = end_time - start_time

                    if (i >= 0) {
                        time_array.push(amount_of_time)
                    }
                }
                time_array.sort()
                min.innerHTML = `<div>Минимальное время: ${time_array[0]} мс.</div>`
                max.innerHTML = `<div>Максимальное время: ${time_array[time_array.length - 1]} мс.</div>`

                for (let i = 0; i < time_array.length - 1; i++) {
                    avg_time += time_array[i]
                }
                avg_time > 0 ? avg_time /= time_array.length : 0
                console.log(time_array)
                result_exec.innerHTML += `\n Среднее время сортировки: \t${avg_time}мс`
                info.innerHTML += `${navigator.hardwareConcurrency} ядер использывано` + "\n"
                result_exec2.innerHTML += `Количество операций: ${counter}`

                if (result_exec.innerHTML.length > 1) {
                    load_result.style.visibility = "visible"
                    check.style.visibility = "visible"
                    find_num.style.visibility = "visible"
                    result_exec.style.visibility = "visible"
                    result_exec2.style.visibility = "visible"
                    min.style.visibility = "visible"
                    max.style.visibility = "visible"
                    btn_download.addEventListener("click", () => {
                        download(array, "dock.txt", "text/plain")
                        save_result.style.visibility = "visible"
                    })
                }
                break;
            }
        }
    }

})

let amount_of_time = 0

function bubble_sort(array) {
    counter = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
            counter++
        }
    }
    return array
}


function inseretion_sort(array) {
    counter = 0
    for (let i = 0; i < array.length; i++) {
        let j = i - 1
        while (j > 0 && array[j] < array[j - 1]) {
            [array[j], array[j - 1]] = [array[j - 1], array[j]]
            j--
            counter++
        }
    }
    return array
}

function selection_sort(array) {
    counter = 0
    let indexOfMin = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[indexOfMin]) {
                indexOfMin = j
            }
            counter++
        }
        let temp = array[i]
        array[i] = array[indexOfMin]
        array[indexOfMin] = temp
    }
    return array
}

function partition(array, start, end) {
    const pivot_val = array[end]
    let index = start
    for (let i = start; i < end; i++) {
        if (array[i] < pivot_val) {
            [array[i], array[index]] = [array[index], [array[i]]]
            index++;
        }
        counter++
    }
    [array[index], array[end]] = [array[end], array[index]]
    return index
}

function quick_sort(array, start, end) {
    if (start >= end) {
        return;
    }
    let index = partition(array, start, end)
    quick_sort(array, start, index - 1)
    quick_sort(array, index + 1, end)
}

function merge_sort(array, left, right) {
    if (left >= right) {
        return;
    }

    let middle = left + parseInt((right - left) / 2)

    merge_sort(array, left, middle)
    merge_sort(array, middle + 1, right)
    merge(array, left, middle, right)
}

function merge(array, left, middle, right) {
    let l1 = middle - left + 1
    let l2 = right - middle

    let arr1 = new Array(l1)
    let arr2 = new Array(l2)

    for (let i = 0; i < l1; ++i) {
        arr1[i] = array[left + 1]
    }

    for (let i = 0; i < l1; ++i) {
        arr2[i] = array[left + 1]
    }

    let i = 0, j = 0, k = left


    while (i < l1 && j < l2) {
        if (arr1[i] < arr2[j]) {
            array[k] = arr1[i]
            ++i
        } else {
            array[k] = arr2[j]
            j++
        }
        k++
    }

    while (i < l1) {
        array[k] = arr1[i]
        i++
        k++
    }

    while (j < l2) {
        array[k] = arr2[j]
        j++
        k++
    }
}

function download(text, name, type) {
    let a = document.getElementById('save_file')
    let file = new Blob([text], { type: type })
    a.href = URL.createObjectURL(file)
    a.download = name
}


function binary_search(array, start, end, element) {
    counter++
    let middle = Math.floor((start + end) / 2)
    if (start + 1 > end) {
        alert(`элемента ${element} нет в массиве`)
        return -1;
    }

    if (alert[middle] === element) {
        alert(`элемент ${element} найден\n id элемента: ${middle}`)
        return middle;
    }

    else if (array[middle] > element) {
        binary_search(array, start, middle, element)
    }

    else{
        binary_search(array, start, middle, element)
    }
    return middle
}


check.addEventListener("click", () => {
    let element = parseInt(search_num.value)
    console.log(element)
    binary_search(array, 0, array.length, element)
})