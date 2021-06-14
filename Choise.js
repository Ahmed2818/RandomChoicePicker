var tagsEl = document.getElementById('tags')
var textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup' , (e) => {
    createTags(e.target.value)

    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})

function createTags(input){
    var tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
   
    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        var tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
    

}

function randomSelect() {
    var times = 30

    var interval = setTimeout(() => {
        var randomTag = pickRandomTag()

        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 1000)
    }, 1000);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            var randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 1000)
    }, times * 1000);
}

function pickRandomTag(){
    var tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}