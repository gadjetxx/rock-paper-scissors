input.onButtonPressed(Button.A, function () {
    Player_1 = randint(0, 2)
    if (Player_1 == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (Player_1 == 1) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
function score () {
    if (Player_1 == Player_2) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (Player_1 - Player_2 == -1 || Player_1 - Player_2 == 2) {
        p2_won += 1
    } else {
        p1_won += 1
    }
    basic.showString("  " + p1_won + "-" + p2_won,75)
if (p1_won == Times || p2_won == Times) {
        if (p1_won == Times) {
            basic.showString("PLAYER 1 WINS",60)
p1_won = 0
            p2_won = 0
        } else {
            basic.showString("PLAYER 2 WINS",60)
p1_won = 0
            p2_won = 0
        }
    }
    return 0
}
input.onButtonPressed(Button.B, function () {
    Player_2 = randint(0, 2)
    if (Player_2 == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (Player_2 == 1) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
    score()
})
let Player_2 = 0
let Player_1 = 0
let Times = 0
let p1_won = 0
let p2_won = 0
Times = 3
