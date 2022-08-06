class Diary {

    constructor(language = "en-US") {
        const storageEntries = localStorage.getItem("entries");
        this.entries = storageEntries ? JSON.parse(storageEntries) : [];
        this.language = language;

        this.nameInput = document.getElementById("name");
        this.dateInput = document.getElementById("date");
        this.dreamInput = document.getElementById("dream-entry");
        this.confirmButton = document.getElementById("confirm");
        this.printElement = document.getElementById("task-list");

        this._setEvents();

    }

    printEntries() {
        this.sortEntries();
        this.printElement.innerHTML = "";
        let lastDate = null;
        for (const entry of this.entries) {
            if (entry.date !== lastDate) {
                const date = new Date(entry.date).toLocaleDateString(this.language, {
                    weekday: "long",
                    day: "numeric",
                    month: "short",
                    year: "numeric"
                });
                this.printElement.innerHTML += `<hr><h3 id="entry-date"><u>Dream Date:</u><wbr> <wbr>${date}</h3>`
            }
            lastDate = entry.date;

            this.printElement.innerHTML += `<h3 id="entry-name"><u>Dream Name:</u> <wbr><wbr>${entry.name}</h3>
            <div id="entry-text"> ${entry.dream}</div><br>`;

            this._addButton("Delete", () => {
                if (confirm("Are you sure you want to delete this dream?")) {
                    this.entries = this.entries.filter(e => e !== entry);
                    this.saveEntries();
                    this.printEntries();
                }
            });

        }
    }

    sortEntries() {
        this.entries.sort(function (entry1, entry2) {
            return (new Date(entry1.date) - new Date(entry2.date));
        });
    }
    saveEntries(){
        localStorage.setItem("entries", JSON.stringify(this.entries));
    }
    _addButton(title, callback) {
        const button = document.createElement("button");
        button.onclick = callback;
        button.innerText = title;
        this.printElement.appendChild(button);
    }
    _setEvents(){
        this.confirmButton.onclick = () =>{
            if(this.dateInput.value !== ""){
                const entry = new Entry (this.nameInput.value, this.dateInput.value, this.dreamInput.value);
                this.entries.push(entry);
                this.saveEntries();
                this.printEntries();
            } else
                alert("you must fill in the date!");
        };

    }
}