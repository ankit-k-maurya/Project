var http = require('http')
var fs = require('fs')

http.createServer(function(req,res){
    var form = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <form >
    
            <label for="email">Enter Email ID:</label>
            <input type="text" id="email" placeholder="Enter emailid:">
            <br/>
            <br/>
            <label for="password">Enter Password:</label>
            <input type="text" id="password" placeholder="Enter password:">
            <br/>
            <br/>
        </input type="sumbit" value="sumbit">
        </form>  
        <br>
        <br>
       
        <!--Second form-->
    
        <form>
            
            <fieldset>
                <legend>Html for Dumy</legend>
                <label for="datepicker">Choose Date:</label> 
            <input type="date" id="datepicker">  
              <br>
              <br>
              <label for="selector1">Choose your Dishes</label>
              <select name="dishes" id="selector1">   
              <option value="Maggi">Maggi</option> 
              <option value="kurkure">kurkure</option>
              <option value="chips">chips</option>  
             </select> 
             <br>
             <br>
             <button type="submit">Sumbit</button>
             <br>
             <br>
             <textarea name="textArea" id="textArea1" cols="15" rows="5  " placeholder="Enter text here "></textarea>
            
            </fieldset>
            
        </form>
        <br>
        <br>
    <!--Third form-->
    
        <form>
               
              <label for="textfield1">Input Fild</label>
              <input type="text" name="textfield" id="textfield1">
              <br>
              <br>
              <label for="button1">Button:</label>
              <input type="submit" name="button1" id="button1" value="Subscribe">
              <br>
              <br>
              <label for="radio2">RadioButton1:</label>
              <input type="radio" name="radio" id="radio2" >
              
              <label for="radio3">RadioButton2:</label>
              <input type="radio" name="radio" id="radio3" >
              
              <label for="radio4">RadioButton3   :</label>
              <input type="radio" name="radio" id="radio4" >
              <br>
              <br>
              <label for="checkbox1">RadioButton3   :</label>
              <input type="checkbox" name="checkbox1" id="checkbox1" >
             
              <label for="checkbox2">RadioButton3   :</label>
              <input type="checkbox" name="checkbox2" id="checkbox2" >
              <br>
              <br>
              <label for="fileselect1">Upload:</label>
              <input type="file" name="fileselect1" id="fileselect1">
              <br>
              <br>
              <label for="imageButton1">Image:</label>
              <input type="image" name="imageButton1" id="imageButton1" 
              alt="Click here" src="Arrow.png" height="50px" width="50px">
             <br>
             <br>
              <label for="password1">Enter Password:</label>
            <input type="password" name="password" id="password1" >
            <br>
            <br>
            <label for="datepicker1">Enter Date:</label>
          <input type="date" name="datepicker" id="datepicker1" >
          <br>
            </form>
            <br>
            <br>
            <!--fourth form-->
            <form >
                <h2>Event Registration</h2>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Enter full name">
                <br><br>
                <label for="emailId">Email:</label>
                <input type="email" id="emailId" name="emailId" placeholder="Enter email Id">
                <br><br>
                <label for="phone">Phone No:</label>
                <input type="tel" id="phone" name="phone" placeholder="Enter phone No">
                 <br><br>
                 <label for="OccupationType"> Occupation: </label>
                 <select name="OccupationType" id="OccupationType">
                   <option value="Student">Student</option>
                   <option value="Professional">Professional</option>
                   <option value="Other">Other</option>
                 </select>
                 <br><br>
                 <fieldset>
                    <legend>Topics of Interest</legend>
                    <label for="checkbox1">HTML</label>
                    <input type="checkbox" name="checkbox" id="checkbox1">
                
                    <label for="checkbox2">CSS</label>
                    <input type="checkbox" name="checkbox" id="checkbox2">
                   
                    <label for="checkbox3">JS</label>
                    <input type="checkbox" name="checkbox" id="checkbox3">
                    
                </fieldset>
                  
                <label for="textarea1">Coments:</label>
                <br>
                <textarea name="textarea1" id="textarea1" cols="20" rows="5"></textarea>
                 <input type="submit" value="Register">
            
            </form>
            <br>
            <br>
    
            <!--fivth form-->
            <form >
                <h2>Job Application</h2>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Enter full name">
                <br><br>
                <label for="emailId">Email:</label>
                <input type="email" id="emailId" name="emailId" placeholder="Enter email Id">
                <br><br>
                <label for="phone">Phone No:</label>
                <input type="tel" id="phone" name="phone" placeholder="Enter phone No">
                 <br><br>
                 <label for="fileUpload">Resume  </label>
                <input type="file" name="fileUpload" id="fileUpload">
                <br><br>
                <label for="counter">Experience(in years)</label>
                <input type="number" name="counter" id="counter" min="0" max="50">
                 <br><br>
                 
                 <fieldset>
                    <legend>Skills</legend>
                    
                    <input type="checkbox" name="checkbox" id="checkbox1">
                    <label for="checkbox1">HTML</label>
    
                   
                    <input type="checkbox" name="checkbox" id="checkbox2">
                    <label for="checkbox2">CSS</label>
    
                    
                    <input type="checkbox" name="checkbox" id="checkbox3">
                    <label for="checkbox3">JS</label>
                     
                </fieldset>
                <br>
                <label for="educationType">Highest Education:</label>
                 <select name="educationType" id="educationType">
                    <option value="High School">High School</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Graducate">Graducate</option>
                    <option value="Post Graducate">Post Graducate</option>
                 </select>
                   <br>
                  <br>
                   <fieldset>
                    <legend>Availability:</legend>
                    <label for="radio1">Full-Time</label>
                    <input type="radio" name="radio" id="radio1">
                    <br>
        
                    <label for="radio2">Part-Time</label>
                    <input type="radio" name="radio" id="radio2">
                    <br>
                   </fieldset>
                   <br>
                   <label for="textarea1">Additional Comments:</label>
                   <br>
                   <textarea name="textarea1" id="textarea1" cols="20" rows="5"></textarea>
    
                     <input type="submit" value="Submit Application">
            </form>
            <br><br>
    
            <!--sixth form-->
           <h2>Complex Form</h2>
            <form>
            <fieldset>
                <legend>Personal Information</legend>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Enter full name">
                
                <label for="emailId">Email:</label>
                <input type="email" id="emailId" name="emailId" placeholder="Enter email Id">
                
                <label for="phone">Phone No:</label>
                <input type="tel" id="phone" name="phone" placeholder="Enter phone No">
               
                <label for="datepicker">Choose Date:</label> 
                <input type="date" id="datepicker">  
                
                <label for="Gender">Gender:</label>
                <label for="radio2">Male</label>
               <input type="radio" name="Gender" id="radio2" >
              
              <label for="radio3">FeMale</label>
              <input type="radio" name="Gender" id="radio3" >
    
              <label for="Country">Country:</label>
                 <select name="Country" id="Country">
                    <option value="INDIA">INDIA</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="RUSSIA">RUSSIA</option>
                 </select>
            </fieldset>
            <br>
            <fieldset>
            <legend>Address 
                <label for="name">Street</label>
                <input type="text" id="name" name="Street">
            
                <label for="name1">City</label>
                <input type="text" id="name1" name="City" >
            
                <label for="State">State</label>
                <input type="text" id="State" name="State" >
            
                <label for="Zip Code">Zip Code</label>
                <input type="tel" id="Zip Code" name="Zip Code" >
                
            </legend>
        </fieldset>
        <br>
        <fieldset>
            <legend>Other Information</legend>
            <label for="Comments">Comments</label>
            <textarea name="textarea1" id="textarea1" cols="55" rows="2"></textarea>
            <label for="term">I agree to the term of service</label>
        </input type="checkbox" name="terms" id="terms">
            
        </fieldset>
        <input type="submit" value="submit">
            </form>
    </body>
    </html> `
    fs.writeFile('replacewrite.html', form, function (err) {

        if (err) throw err;
        console.log('Saved!');
      });
      res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(form);
    return res.end();

}).listen(3000)