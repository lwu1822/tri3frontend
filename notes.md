<!DOCTYPE html>
<html>
    <head>
        <h1>'Sticky Notes' that you can create as notes for learning!</h1>
      <h4>Just click on one to edit, and press enter to create another!</h4>
      <ul contenteditable="true">
        <li>Here is a fairly large bunch of words. If you want, you can edit me! Seriously, try it. Click me and type. It's pretty easy!</li>
        <li>Store: Don't forget milk and eggs. I have coupons for cereal.</li>
        <li>My Christmas list: a PlayStation 5</li>
        <li>Wow. Such sticky notes. Very CSS.</li>
        <li>Homework List: </li>
      </ul>  
  </head>
  <style>
      body {
      margin: 0;
  background: #245;
  font-family: 'Lato', Calibri, Arial, sans-serif;
  color: #333;
  font-size: 22px;
  -webkit-font-smoothing: antialiased;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  min-width: 240px;
  float: left;
  position: relative;
  width: 18%;
  background: #fff;
  margin: 10px 1.5% 0 1.5%;
  border-left: 1% solid #D4A464;
  padding: 2%;
  list-style-type: none;
  white-space: pre-wrap; /* css-3 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
  white-space : normal;
  transition: all 200ms ease-in-out;
}

li:before {
  position: absolute;
  top: 0;
  right: 0;
  content:'';
  background: #245;
  border-right: 20px solid transparent;
  border-bottom: 20px solid #D4A464;
}
h1, h4 {
  margin: 10px 20px;
  color: rgba(255,255,255,0.7);
  line-height: 40px;
  min-width: 400px;
}
@media (max-width: 1420px) {
  li {
    padding: 1.5%
    margin: 10px 2% 0 2%;
    width: 24.8%;
  }
}
@media (max-width: 980px) {
  li {
    margin: 10px 2.5% 0 2.5%;
    width: 40%;
  }
}
@media (max-width: 600px) {
  li {
    margin: 10px 2.5% 2px 2.5%;
    width: 90%;
  }
} 
    </style>
