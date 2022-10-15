


export default class FormatDate {

    static brStringDateFormat(value) {
        if(value.length > 1){
            let date = [];
            date = value.split("-");
            return `${date[2]}-${date[1]}-${date[0]}`;
        } else {
            return "";
        }
    }

    static brStringTimeFormat(value) {
        if(value.length > 1) {
            let time = [];
            time = value.split("");
        }
    }
}

