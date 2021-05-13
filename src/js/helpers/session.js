export class SessionCache {
    constructor(key) {
        //;
        if (!window.sessionStorage) {
            // eslint-disable-next-line no-throw-literal
            throw 'Session storage is not supported ..';
        }

        if (!key) {
            // eslint-disable-next-line no-throw-literal
            throw 'Key was not provided ..';
        }

        this._key = key; //.toUpperCase();
    }

    static get TIMETYPE() {
        return {
            SECONDS: 0,
            MINUTES: 1,
            HOURS: 2,
            DAYS: 3,
            CUSTOM: 4
        };
    }

    _prepareKey(key) {
        return this._key + key;
    }

    get(key) {
        //;
        key = this._prepareKey(key);

        let result = sessionStorage.getItem(key);

        if (result) {
            result = JSON.parse(result);

            if (!result.expire) {
                return result.value;
            }

            if (result.expire >= new Date().getTime()) {
                return result.value;
            }

            sessionStorage.removeItem(key);
        }

        return null;
    }

    add(key, value, time = null) {
        key = this._prepareKey(key);

        // object to store
        let item = {
            key,
            value,
            expire: _fromTime(time)
        };

        sessionStorage.setItem(key, JSON.stringify(item));

        // time logic
        function _fromTime(time) {
            if (!time) {
                return null;
            }

            let date = new Date();

            if (typeof time === 'number') {
                date.setMinutes(date.getMinutes() + time);
            } else {
                switch (time.type) {
                    case 4:
                        date.setTime(time.value);
                        break;
                    case 3:
                        date.setDate(date.getDate() + time.value);
                        break;
                    case 2:
                        date.setHours(date.getHours() + time.value);
                        break;
                    case 1:
                        date.setMinutes(date.getMinutes() + time.value);
                        break;
                    case 0:
                        date.setSeconds(date.getSeconds() + time.value);
                        break;
                    default:
                        break;
                }
            }

            return date.getTime();
        }
    }

    clear() {
        for (let key in sessionStorage) {
            if (key.includes(this._key)) {
                sessionStorage.removeItem(key);
            }
        }
    }

    delete(key) {
        key = this._prepareKey(key);
        sessionStorage.removeItem(key);
    }
}