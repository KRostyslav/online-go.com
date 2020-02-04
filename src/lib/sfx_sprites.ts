/*
 * Copyright 2012-2020 Online-Go.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


export interface SpritePack {
    language: string;
    country: string;
    name: string;
    filename_prefix: string;
    definitions: {
        [id:string]: [
            number, /* start offset (ms) */
            number  /* duration (ms) */
        ];
    };
}

export let sprite_packs:{
    [group_name:string]: SpritePack
} = {};


sprite_packs["effects-un-various"] = {
    language: "effects",
    country: "un",
    name: "Effects",
    filename_prefix: "effects-un-various.v1",
    definitions: {
    "beep": [
        0.0,
        282.8125
    ],
    "beepbeep": [
        532.8125,
        374.97916666666663
    ],
    "boop": [
        1157.7916666666667,
        127.70833333333334
    ],
    "stone-place-1": [
        1535.5,
        178.5
    ],
    "stone-place-2": [
        1964.0,
        230.25
    ],
    "stone-place-3": [
        2444.25,
        229.27083333333334
    ],
    "stone-place-4": [
        2923.5208333333335,
        236.66666666666666
    ],
    "stone-place-5": [
        3410.1875,
        228.0
    ],
    "tick-2left": [
        3888.1875,
        2000.0
    ],
    "tick": [
        6138.1875,
        90.0625
    ],
    "tock-1left": [
        6478.25,
        2827.2708333333335
    ],
    "tock-3left": [
        9555.520833333332,
        1000.0
    ],
    "tock": [
        10805.520833333332,
        92.1875
    ],
    "tutorial-bling": [
        11147.708333333334,
        626.9375
    ],
    "tutorial-fail": [
        12024.645833333332,
        552.4791666666666
    ],
    "tutorial-pass": [
        12827.125,
        626.9375
    ],
    "tutorial-ping": [
        13704.0625,
        2548.395833333333
    ],
    "0": [
        6478.25,
        2827.2708333333335
    ],
    "1": [
        6478.25,
        2827.2708333333335
    ],
    "2": [
        3888.1875,
        2000.0
    ],
    "3": [
        9555.520833333332,
        1000.0
    ],
    "4": [
        6138.1875,
        90.0625
    ],
    "5": [
        10805.520833333332,
        92.1875
    ],
    "6": [
        6138.1875,
        90.0625
    ],
    "7": [
        10805.520833333332,
        92.1875
    ],
    "8": [
        6138.1875,
        90.0625
    ],
    "9": [
        10805.520833333332,
        92.1875
    ],
    "10": [
        6138.1875,
        90.0625
    ],
    "11": [
        10805.520833333332,
        92.1875
    ],
    "12": [
        6138.1875,
        90.0625
    ],
    "13": [
        10805.520833333332,
        92.1875
    ],
    "14": [
        6138.1875,
        90.0625
    ],
    "15": [
        10805.520833333332,
        92.1875
    ],
    "16": [
        6138.1875,
        90.0625
    ],
    "17": [
        10805.520833333332,
        92.1875
    ],
    "18": [
        6138.1875,
        90.0625
    ],
    "19": [
        10805.520833333332,
        92.1875
    ],
    "20": [
        6138.1875,
        90.0625
    ],
    "21": [
        10805.520833333332,
        92.1875
    ],
    "22": [
        6138.1875,
        90.0625
    ],
    "23": [
        10805.520833333332,
        92.1875
    ],
    "24": [
        6138.1875,
        90.0625
    ],
    "25": [
        10805.520833333332,
        92.1875
    ],
    "26": [
        6138.1875,
        90.0625
    ],
    "27": [
        10805.520833333332,
        92.1875
    ],
    "28": [
        6138.1875,
        90.0625
    ],
    "29": [
        10805.520833333332,
        92.1875
    ],
    "30": [
        6138.1875,
        90.0625
    ],
    "31": [
        10805.520833333332,
        92.1875
    ],
    "32": [
        6138.1875,
        90.0625
    ],
    "33": [
        10805.520833333332,
        92.1875
    ],
    "34": [
        6138.1875,
        90.0625
    ],
    "35": [
        10805.520833333332,
        92.1875
    ],
    "36": [
        6138.1875,
        90.0625
    ],
    "37": [
        10805.520833333332,
        92.1875
    ],
    "38": [
        6138.1875,
        90.0625
    ],
    "39": [
        10805.520833333332,
        92.1875
    ],
    "40": [
        6138.1875,
        90.0625
    ],
    "41": [
        10805.520833333332,
        92.1875
    ],
    "42": [
        6138.1875,
        90.0625
    ],
    "43": [
        10805.520833333332,
        92.1875
    ],
    "44": [
        6138.1875,
        90.0625
    ],
    "45": [
        10805.520833333332,
        92.1875
    ],
    "46": [
        6138.1875,
        90.0625
    ],
    "47": [
        10805.520833333332,
        92.1875
    ],
    "48": [
        6138.1875,
        90.0625
    ],
    "49": [
        10805.520833333332,
        92.1875
    ],
    "50": [
        6138.1875,
        90.0625
    ],
    "51": [
        10805.520833333332,
        92.1875
    ],
    "52": [
        6138.1875,
        90.0625
    ],
    "53": [
        10805.520833333332,
        92.1875
    ],
    "54": [
        6138.1875,
        90.0625
    ],
    "55": [
        10805.520833333332,
        92.1875
    ],
    "56": [
        6138.1875,
        90.0625
    ],
    "57": [
        10805.520833333332,
        92.1875
    ],
    "58": [
        6138.1875,
        90.0625
    ],
    "59": [
        10805.520833333332,
        92.1875
    ],
    "60": [
        6138.1875,
        90.0625
    ],
    "pass": [
        1157.7916666666667,
        127.70833333333334
    ]
}
};

sprite_packs["english-uk-claire"] = {
    language: "english",
    country: "uk",
    name: "Claire",
    filename_prefix: "english-uk-claire.v1",
    definitions: {
    "0": [
        0.0,
        518.8333333333334
    ],
    "1": [
        768.8333333333334,
        356.6875
    ],
    "10": [
        1375.5208333333333,
        360.4791666666667
    ],
    "1_period_left": [
        1986.0,
        1683.1666666666667
    ],
    "2": [
        3919.1666666666665,
        333.1875
    ],
    "2_periods_left": [
        4502.354166666667,
        1615.1875
    ],
    "3": [
        6367.541666666667,
        395.4375
    ],
    "3_periods_left": [
        7012.979166666667,
        1531.6875
    ],
    "4": [
        8794.666666666666,
        498.5416666666667
    ],
    "4_periods_left": [
        9543.208333333334,
        1529.3333333333335
    ],
    "5": [
        11322.541666666666,
        537.4791666666666
    ],
    "5_periods_left": [
        12110.020833333334,
        1600.0
    ],
    "6": [
        13960.020833333334,
        511.0625
    ],
    "7": [
        14721.083333333332,
        496.9166666666667
    ],
    "8": [
        15468.0,
        367.4375
    ],
    "9": [
        16085.437500000002,
        407.0625
    ],
    "begin": [
        16742.5,
        468.41666666666663
    ],
    "black_wins": [
        17460.916666666664,
        878.3958333333334
    ],
    "byoyomi": [
        18589.3125,
        942.3333333333334
    ],
    "disconnected": [
        19781.645833333332,
        935.625
    ],
    "draw": [
        20967.270833333336,
        501.12500000000006
    ],
    "entering_byoyomi": [
        21718.395833333332,
        1462.2708333333335
    ],
    "entering_overtime": [
        23430.666666666668,
        1383.4375
    ],
    "game_over": [
        25064.104166666668,
        858.25
    ],
    "game_paused": [
        26172.354166666668,
        1000.0
    ],
    "game_resumed": [
        27422.354166666668,
        1078.2708333333333
    ],
    "game_started": [
        28750.625,
        1024.7083333333333
    ],
    "last_byoyomi": [
        30025.333333333332,
        1391.7083333333333
    ],
    "last_period": [
        31667.041666666668,
        1110.4375
    ],
    "main_time": [
        33027.479166666664,
        972.7291666666666
    ],
    "overtime": [
        34250.208333333336,
        776.8333333333334
    ],
    "press_the_submit_button_to_place_the_stone": [
        35277.04166666667,
        2633.375
    ],
    "reconnected": [
        38160.41666666667,
        873.875
    ],
    "remove_the_dead_stones": [
        39284.29166666667,
        1555.5625
    ],
    "stone_removal": [
        41089.85416666667,
        1200.0
    ],
    "tie": [
        42539.854166666664,
        510.8125
    ],
    "time": [
        43300.666666666664,
        565.2916666666666
    ],
    "timeout": [
        44115.95833333333,
        699.3958333333334
    ],
    "undo_granted": [
        45065.354166666664,
        1061.5416666666665
    ],
    "undo_requested": [
        46376.895833333336,
        1289.0
    ],
    "white_wins": [
        47915.89583333333,
        1000.1041666666665
    ],
    "your_move": [
        49166.0,
        780.5208333333334
    ],
    "your_opponent_has_disconnected": [
        50196.52083333333,
        2060.979166666667
    ],
    "your_opponent_has_reconnected": [
        52507.5,
        1983.5
    ],
    "you_have_lost": [
        54741.0,
        973.375
    ],
    "you_have_won": [
        55964.375,
        851.625
    ]
}
};
