let tab = function () {
    let tabTitle = document.querySelectorAll('.tabs-title')
    let tabContent = document.querySelectorAll('.tab')
    let tabName

    tabTitle.forEach(item =>{
        item.addEventListener('click', selectTab)
    })

    function selectTab() {
        tabTitle.forEach(item =>{
            item.classList.remove("active")

        })
        this.classList.add("active")
        tabName = this.getAttribute("data-tab-name")
        selectTabContent(tabName)
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item =>{
            item.classList.contains(tabName)? item.classList.add('active'): item.classList.remove('active')
        })
    }
}

tab()