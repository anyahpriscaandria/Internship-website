function recommendInternship() {

    let career = document.getElementById("career").value;
    let location = document.getElementById("location").value;
    let output = document.getElementById("output");

    if (career === "" || location === "") {
        output.innerHTML = "Please select your career goal and preferred location.";
        return;
    }

    if (career === "clinical") {
        output.innerHTML = `
        Recommended Internship: Clinical Hospital Internship <br><br>
        Suggested Hospital: City Care Hospital <br>
        Internship Type: Patient Care & Clinical Training <br>
        Contact Email: contact@citycarehospital.org <br>
        Location: ${location === "india" ? "India" : "International"}
        `;
    }

    if (career === "research") {
        output.innerHTML = `
        Recommended Internship: Medical Research Internship <br><br>
        Suggested Institute: Global Medical Research Center <br>
        Internship Type: Research & Laboratory Work <br>
        Contact Email: research@gmrc.org <br>
        Location: ${location === "india" ? "India" : "Abroad"}
        `;
    }

    if (career === "management") {
        output.innerHTML = `
        Recommended Internship: Hospital Administration Internship <br><br>
        Suggested Institute: Healthcare Management Institute <br>
        Internship Type: Hospital Operations & Management <br>
        Contact Email: admin@healthmanage.org <br>
        Location: ${location === "india" ? "India" : "Abroad"}
        `;
    }
}