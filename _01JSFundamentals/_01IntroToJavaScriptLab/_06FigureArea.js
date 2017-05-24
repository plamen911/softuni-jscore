// https://judge.softuni.bg/Contests/Compete/Index/287#5
function figureArea(w, h, W, H) {
    let [s1, s2, s3] = [
        w * h,
        W * H,
        Math.min(w, W) * Math.min(h, H)
    ];

    return s1 + s2 - s3;
}

// 13, 2, 5, 8  --> 56
// console.log(figureArea(2, 4, 5, 3));

// console.log(figureArea(13, 2, 5, 8));
// 5 * 2 = 10
// 26 + 40 = 66 - 10 = 56

//                -----
//                |   |
//                |   |
//                |   |
//                |   |
//                |   |
// -------------  |   |
// |           |  |   |
// |           |  |   |
// -------------  -----
