const getJson = async url => {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error(`HttpError: ${response.status} ${response.statusText}`)
    }
    return await response.json()
}

export const fetchAllPeople = () => getJson('https://swapi.dev/api/people')
export const fetchPerson = (id) => getJson('https://swapi.dev/api/people/${id}')