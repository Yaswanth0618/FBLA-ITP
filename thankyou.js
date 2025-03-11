document.addEventListener("DOMContentLoaded", function () {
    let userChoices = JSON.parse(localStorage.getItem("userChoices")) || [];
    let storyContent = JSON.parse(localStorage.getItem("storyData")) || {};
    let reportText = "📖 Adventure Summary\n====================\n\n";

    if (userChoices.length === 0) {
        reportText += "No choices were recorded.";
    } else {
        let step = 1;
        for (let choice of userChoices) {
            let storyStep = storyContent[choice];
            if (storyStep) {
                reportText += `Step ${step}: ${storyStep.text}\n`;
                reportText += `👉 You chose: ${choice.toUpperCase()}\n\n`;
                step++;
            }
        }
        reportText += "🎉 The End! 🎉\n";
    }

    document.getElementById("report").textContent = reportText;

    // Download TXT File
    document.getElementById("download-report").addEventListener("click", function () {
        const blob = new Blob([reportText], { type: "text/plain" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "Adventure_Report.txt";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
});