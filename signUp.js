
    const signUp = e =>{
      let formData = {
        fname:document.getElementById("fname").value,
        lname:document.getElementById("lname").value,
        email:document.getElementById("email").value,
        pwd:document.getElementById("pwd").value,
        pwd1:document.getElementById("pwd1").value  
      }
      localStorage.setItem('formData',JSON.stringify(formData));
        console.log(localStorage.getItem('formData'));
        dispData();
        e.preventDefault();
    }
    function dispData(){
      console.log(JSON.perse(localstorage.getItem('formData')));
      let (fname, lnsme, email, pwd, pwd1)=JSON.perse(localstorage.getItem('formData'));
      var output = document.getElementById('output');
      output.innerHTML=
      <table>
        <tr>
          <td> First Name </td>
          <td>$[fname]</td>
        </tr>
        <tr>
          <td> Last Name </td>
          <td>$[lname]</td>
        </tr>
        <tr>
          <td> Email Adress </td>
          <td>$[email]</td>
        </tr>
        <tr>
          <td> pwd </td>
          <td>$[pwd]</td>
        </tr>

        <tr>
          <td> pwd1 </td>
          <td>$[pwd1]</td>
        </tr>
      </table>
    }
