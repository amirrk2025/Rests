function addTask(inputId, listId) {
    const input = document.getElementById(inputId);
    const list = document.getElementById(listId);

    if (input.value.trim() !== "") {
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const text = document.createElement("span");
        text.className = "task-text";
        text.textContent = input.value;

        const timestamp = document.createElement("span");
        timestamp.textContent = ` (${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()})`;
        timestamp.style.fontSize = "0.9em";
        timestamp.style.color = "#666";

        const editButton = document.createElement("button");
        editButton.textContent = "ویرایش";
        editButton.onclick = () => editTask(text);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "حذف";
        deleteButton.onclick = () => li.remove();

        li.appendChild(checkbox);
        li.appendChild(text);
        li.appendChild(timestamp);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        list.appendChild(li);

        input.value = ""; // پاک کردن فیلد ورودی
    }
}

function editTask(textElement) {
    const newText = prompt("لطفاً متن جدید را وارد کنید:", textElement.textContent);
    if (newText !== null && newText.trim() !== "") {
        textElement.textContent = newText;
    }
}