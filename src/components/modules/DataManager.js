const URL = "http://localhost:8088"

const DataManager = {
    getAll(resource) {
        return fetch(`${URL}/${resource}`)
            .then(res => res.json())
    },
    getSingle(resource, id) {
        return fetch(`${URL}/${resource}/${id}`)
            .then(res => res.json())
    },
    delete(resource, id) {
        return fetch(`${URL}/${resource}/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
    }
}

export default DataManager;