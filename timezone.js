class Timezone extends HTMLElement {
    constructor () {
        super()
    }
    connectedCallback() {
        this.innerHTML = `
            <label for="telephone">Timezone</label>
            <select name="timezone" id="timezone">
                <option value="Pacific/Kwajalein">Eniwetok, Kwajalein</option>
                <option value="Pacific/Midway">Midway Island, Samoa</option>
                <option value="Pacific/Honolulu">Hawaii</option>
                <option value="Pacific/Marquesas">Taiohae</option>
                <option value="moreLater">Adding more Timezones later</option>
            </select>
        `
    }
}

customElements.define('timezone-component', Timezone)
