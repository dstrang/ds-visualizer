const list = new LinkedList()

function insert() {
    const value = document.getElementById('text').value
    list.insert(value)
    updateNodeList()
}

function updateNodeList() {
    const container = document.querySelector('.stack-nodes')

    let node = list.head
    let html = ""
    
    while (node.next != null && node.value != null) {
        html += `
            <div class="node">
                ${node.value}
            </div>
        `
        node = node.next
    }
console.log(html)
    container.innerHTML = html
}