
const getList = () => new Promise((resolve) => resolve([
    {name: 'Sold', color: '#BD1FBE', value: 677},
    {name: 'Got free', color: '#FC64FF', value: 23},
    {name: 'Test 2', color: '#90EE90', value: 0.5},
    {name: 'Test 3', color: '#000000', value: 0}
]))

export default {
    getList
}