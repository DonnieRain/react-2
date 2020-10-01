
export default class Store {
    constructor(name) {
        this.name = name
    }

    getStore() {
        const data = localStorage.getItem(this.name)
        return data ? JSON.parse(data) : {}
    }

    saveStore(data) {
        return localStorage.setItem(this.name, JSON.stringify(data))
    }

    set(key,data) {
        const store = this.getStore()
        store[key] = data
        this.saveStore(store)
    }

    get(key, defaultData) {
        const store = this.getStore()
        return store[key] || defaultData
    }

    getRemove(key, data, item) {
        const store = this.getStore()
        store[key] = data
       ///
    }
}