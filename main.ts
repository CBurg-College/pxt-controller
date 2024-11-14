//% color="#00CC00" icon="\u2B88"
//% block="MBit controller"
namespace CBurgController {

    pins.setPull(DigitalPin.P0, PinPullMode.PullDown)
    pins.setPull(DigitalPin.P1, PinPullMode.PullDown)
    pins.setPull(DigitalPin.P2, PinPullMode.PullDown)
    pins.setPull(DigitalPin.P19, PinPullMode.PullDown)
    pins.setPull(DigitalPin.P20, PinPullMode.PullDown)

    export enum Button {
        //% block="blue-up"
        //% block.loc.nl="blauw-boven"
        Button1,
        //% block="blue-mid"
        //% block.loc.nl="blauw-midden"
        Button2,
        //% block="blue-bottom"
        //% block.loc.nl="blauw-onder"
        Button3,
        //% block="red-up"
        //% block.loc.nl="rood-boven"
        Button4,
        //% block="red-mid"
        //% block.loc.nl="rood-midden"
        Button5,
        //% block="red-bottom"
        //% block.loc.nl="rood-onder"
        Button6,
        //% block="yellow-up"
        //% block.loc.nl="geel-boven"
        Button7,
        //% block="yellow-mid"
        //% block.loc.nl="geel-midden"
        Button8,
        //% block="yellow-bottom"
        //% block.loc.nl="geel-onder"
        Button9,
        //% block="white-up"
        //% block.loc.nl="wit-boven"
        Button10,
        //% block="white-mid"
        //% block.loc.nl="wit-midden"
        Button11,
        //% block="white-bottom"
        //% block.loc.nl="wit-onder"
        Button12
    }

    //% block="pin $button"
    //% block.loc.nl="pin %button"
    export function buttonPin(button: Button) {
        let pin = 0;
        switch (button) {
            case Button.Button1: pin = DigitalPin.P20; break;
            case Button.Button2: pin = DigitalPin.P19; break;
            case Button.Button3: pin = DigitalPin.P0; break;
            case Button.Button4: pin = DigitalPin.P16; break;
            case Button.Button5: pin = DigitalPin.P1; break;
            case Button.Button6: pin = DigitalPin.P2; break;
            case Button.Button7: pin = DigitalPin.P13; break;
            case Button.Button8: pin = DigitalPin.P14; break;
            case Button.Button9: pin = DigitalPin.P15; break;
            case Button.Button10: pin = DigitalPin.P12; break;
            case Button.Button11: pin = DigitalPin.P9; break;
            case Button.Button12: pin = DigitalPin.P8; break;
        }
        return pin;
    }

    //% block="not button $button is pressed"
    //% block.loc.nl="knop %button niet is ingedrukt"
    export function isButtonReleased(button: Button): boolean {
        let pin = buttonPin(button);
        if (pins.digitalReadPin(pin) == 1)
            return false;
        return true;
    }

    //% block="button $button is pressed"
    //% block.loc.nl="knop %button is ingedrukt"
    export function isButtonPressed(button: Button): boolean {
        let pin = buttonPin(button);
        if (pins.digitalReadPin(pin) == 1)
            return true;
        return false;
    }
}
