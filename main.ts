//% color="#00CC00" icon="\u2B88"
//% block="MBit controller"
namespace CBurgController {

    pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P9, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P12, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P13, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P14, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P19, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P20, PinPullMode.PullUp)

    export enum Button {
        //% block="black-up"
        //% block.loc.nl="zwart-omhoog"
        Button7,
        //% block="black-down"
        //% block.loc.nl="zwart-omlaag"
        Button9,
        //% block="black-left"
        //% block.loc.nl="zwart-links"
        Button5,
        //% block="black-right"
        //% block.loc.nl="zwart-rechts"
        Button11,
        //% block="red-up"
        //% block.loc.nl="rood-omhoog"
        Button4,
        //% block="red-down"
        //% block.loc.nl="rood-omlaag"
        Button6,
        //% block="red-left"
        //% block.loc.nl="rood-links"
        Button2,
        //% block="red-right"
        //% block.loc.nl="rood-rechts"
        Button8,
        //% block="blue-left"
        //% block.loc.nl="blauw-links"
        Button1,
        //% block="blue-right"
        //% block.loc.nl="blauw-rechts"
        Button10,
        //% block="yellow-left"
        //% block.loc.nl="geel-links"
        Button3,
        //% block="yellow-right"
        //% block.loc.nl="geel-rechts"
        Button12
    }

    //% block="pin $button"
    //% block.loc.nl="pin %button"
    export function buttonPin(button: Button) : number {
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

    // inverted logic because of PullUp
    //% block="not button $button is pressed"
    //% block.loc.nl="knop %button niet is ingedrukt"
    export function isButtonReleased(button: Button): boolean {
        let pin = buttonPin(button);
        if (pins.digitalReadPin(pin) == 0)
            return false;
        return true;
    }

    // inverted logic because of PullUp
    //% block="button $button is pressed"
    //% block.loc.nl="knop %button is ingedrukt"
    export function isButtonPressed(button: Button): boolean {
        let pin = buttonPin(button);
        if (pins.digitalReadPin(pin) == 1)
            return false;
basic.showNumber(button)
        return true;
    }
}
