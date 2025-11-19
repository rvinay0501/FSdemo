 
      const baseurl = "https://localhost:7230/api";
      const studentUrl = baseurl + "/Student";
      const staffUrl = baseurl + "/TeachingStaff";
      const nonTeachingUrl = baseurl + "/NonTeachingStaff";

      
      async function saveStudent(event) {
        event.preventDefault();
        const student = {
          firstName: document.getElementById("StudentFirstName").value.trim(),
          lastName: document.getElementById("StudentLastName").value.trim(),
          standard: document.getElementById("Standard").value.trim(),
          phoneNumber: document.getElementById("PhoneNumber").value.trim(),
          address: document.getElementById("Address").value.trim(),
        };

        const response = await fetch(studentUrl, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(student),
        });
        alert(response.ok ? "Student saved successfully!" : "Error saving student");
      }

      async function getStudents() {
        const response = await fetch(studentUrl);
        if (response.ok) {
          const students = await response.json();
          renderStudentTable(students);
        } else alert("Error fetching students");
      }

      async function updateStudent() {
        const id = document.getElementById("StudentID").value.trim();
        if (!id) return alert("Please enter Student ID to update");

        const student = {
          studentID: id,
          firstName: document.getElementById("StudentFirstName").value.trim(),
          lastName: document.getElementById("StudentLastName").value.trim(),
          standard: document.getElementById("Standard").value.trim(),
          phoneNumber: document.getElementById("PhoneNumber").value.trim(),
          address: document.getElementById("Address").value.trim(),
        };

        const response = await fetch(studentUrl, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(student),
        });
        alert(response.ok ? "Student updated successfully!" : "Error updating student");
      }

      async function deleteStudent() {
        const id = document.getElementById("StudentID").value.trim();
        if (!id) return alert("Please enter Student ID to delete");

        const response = await fetch(`${studentUrl}/${id}`, { method: "DELETE" });
        alert(response.ok ? "Student deleted successfully!" : "Error deleting student");
      }

      function renderStudentTable(students) {
        let html = `
          <h3>Student Table</h3>
          <table border="1" cellpadding="5" cellspacing="0">
            <tr><th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Standard</th>
                <th>Phone</th>
                <th>Address</th></tr>`;
        students.forEach(
          (s) =>
            (html += `<tr><td>${s.studentID}</td>
                <td>${s.firstName}</td>
                <td>${s.lastName}</td>
                <td>${s.standard}</td>
                <td>${s.phoneNumber}</td>
                <td>${s.address}</td></tr>`)
        );
        html += "</table>";
        document.getElementById("studentTable").innerHTML = html;
      }

      
      async function saveStaff(event) {
        event.preventDefault();
        const staff = {
          firstName: document.getElementById("StaffFirstName").value.trim(),
          lastName: document.getElementById("StaffLastName").value.trim(),
          qualification: document.getElementById("Qualification").value.trim(),
          designation: document.getElementById("Designation").value.trim(),
        };

        const response = await fetch(staffUrl, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(staff),
        });
        alert(response.ok ? "Staff saved successfully!" : "Error saving staff");
      }

      async function getStaff() {
        const response = await fetch(staffUrl);
        if (response.ok) {
          const data = await response.json();
          renderStaffTable(data);
        } else alert("Error fetching staff");
      }

      async function updateStaff() {
        const id = document.getElementById("StaffID").value.trim();
        if (!id) return alert("Please enter Staff ID to update");

        const staff = {
          staffId: id,
          firstName: document.getElementById("StaffFirstName").value.trim(),
          lastName: document.getElementById("StaffLastName").value.trim(),
          qualification: document.getElementById("Qualification").value.trim(),
          designation: document.getElementById("Designation").value.trim(),
        };

        const response = await fetch(staffUrl, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(staff),
        });
        alert(response.ok ? "Staff updated successfully!" : "Error updating staff");
      }

      async function deleteStaff() {
        const id = document.getElementById("StaffID").value.trim();
        if (!id) return alert("Please enter Staff ID to delete");

        const response = await fetch(`${staffUrl}/${id}`, { method: "DELETE" });
        alert(response.ok ? "Staff deleted successfully!" : "Error deleting staff");
      }

      function renderStaffTable(list) {
        let html = `
          <h3>Teaching Staff Table</h3>
          <table border="1" cellpadding="5" cellspacing="0">
            <tr><th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Qualification</th>
                <th>Designation</th></tr>`;
        list.forEach(
          (s) =>
            (html += `<tr><td>${s.staffId}</td>
                <td>${s.firstName}</td>
                <td>${s.lastName}</td>
                <td>${s.qualification}</td>
                <td>${s.designation}</td></tr>`)
        );
        html += "</table>";
        document.getElementById("staffTable").innerHTML = html;
      }

      
      async function saveNonTeachingStaff(event) {
        event.preventDefault();
        const staff = {
          firstName: document.getElementById("NTFirstName").value.trim(),
          lastName: document.getElementById("NTLastName").value.trim(),
          qualification: document.getElementById("NTQualification").value.trim(),
          designation: document.getElementById("NTDesignation").value.trim(),
        };

        const response = await fetch(nonTeachingUrl, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(staff),
        });
        alert(
          response.ok
            ? "Non-Teaching Staff saved successfully!"
            : "Error saving Non-Teaching Staff"
        );
      }

      async function getNonTeachingStaff() {
        const response = await fetch(nonTeachingUrl);
        if (response.ok) {
          const data = await response.json();
          renderNonTeachingTable(data);
        } else alert("Error fetching non-teaching staff");
      }

      async function updateNonTeachingStaff() {
        const id = document.getElementById("NTStaffID").value.trim();
        if (!id) return alert("Please enter Staff ID to update");

        const staff = {
          staffId: id,
          firstName: document.getElementById("NTFirstName").value.trim(),
          lastName: document.getElementById("NTLastName").value.trim(),
          qualification: document.getElementById("NTQualification").value.trim(),
          designation: document.getElementById("NTDesignation").value.trim(),
        };

        const response = await fetch(nonTeachingUrl, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(staff),
        });
        alert(
          response.ok
            ? "Non-Teaching Staff updated successfully!"
            : "Error updating Non-Teaching Staff"
        );
      }

      async function deleteNonTeachingStaff() {
        const id = document.getElementById("NTStaffID").value.trim();
        if (!id) return alert("Please enter Staff ID to delete");

        const response = await fetch(`${nonTeachingUrl}/${id}`, {
          method: "DELETE",
        });
        alert(
          response.ok
            ? "Non-Teaching Staff deleted successfully!"
            : "Error deleting Non-Teaching Staff"
        );
      }

      function renderNonTeachingTable(list) {
        let html = `
          <h3>Non-Teaching Staff Table</h3>
          <table border="1" cellpadding="5" cellspacing="0">
            <tr><th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Qualification</th>
                <th>Designation</th></tr>`;
        list.forEach(
          (s) =>
            (html += `<tr><td>${s.staffId}</td>
                <td>${s.firstName}</td>
                <td>${s.lastName}</td>
                <td>${s.qualification}</td>
                <td>${s.designation}</td></tr>`)
        );
        html += "</table>";
        document.getElementById("nonTeachingTable").innerHTML = html;
      }