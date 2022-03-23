const generateTableDom = (data, index) => {
    return `
    <tr class="table-body">
        <td>${index}</td>
        <td>${data?.name}</td>
        <td>₹ ${data?.last}</td>
        <td>₹ ${data?.buy} / ₹ ${data?.sell}</td>
        <td>${data?.volume}</td>
        <td>${data?.base_unit
        }</td>
    </tr>`
}


const fetchData = async () => {
    const api = '/data';
    let response = await fetch(api);
    let json = await response.json();
    return json;
}


const populateData = async () => {
    const table = document.querySelector('.data-table');
    try{
        let data = await fetchData();
        data.forEach((item, index) => {
            let dom = generateTableDom(item, index+1);
            table.innerHTML += dom;
        })
    } catch (e) {
        console.log(e)
    }

}

populateData();