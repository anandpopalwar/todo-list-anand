var tasks = [];
var no = 0;

function submit() {
  var discription = document.getElementById('discription').value;



  var alertContainer = document.getElementById('alert');
  var alertMsg = document.getElementById('alertMsg');


  if (discription.length > 2) {
    no = no + 1;
    var task = {
      userDisc: discription,
      no:no
    };
    tasks.push(task);
    // console.log(task, no);
    // console.table(tasks);
    alertContainer.classList.remove('d-none')
    alertContainer.classList.remove('alert-danger')
    alertContainer.classList.add('alert-success')
    alertMsg.innerHTML = 'task added successfully✅!!'
    // console.log(discription.length);

    var yourtasks= document.getElementById('yourtasks')
    // var task_details=document.getElementById('task_details')
    // tasks.map((task)=>{
        yourtasks.innerHTML="all tasks shown below"
    //     task_details=document.createElement('div')
    //     div.innerHTML=userDisc.discription


    // })


    let container = document.getElementById('userContainer');
    container.innerHTML = ''
    tasks.map((x) => {
      let div = document.createElement('div');
      div.classList.add('user-card');
      // console.log(div);
      let task_disc = document.createElement('h5');
      task_disc.innerHTML = x.userDisc;
      let notag = document.createElement('span')
      notag.innerHTML = x.no;
      let chekbx = document.createElement('input');
      chekbx.setAttribute("type", "checkbox");
      // let br = document.createElement('br')

      // let div2 = document.createElement('div');
      // div2.appendChild(chekbx);
      
      // container.appendChild(div2);
      // div.appendChild(div2);
      container.appendChild(div);
      // container.appendChild(chekbx);
      div.appendChild(notag," ");
      div.appendChild(chekbx);
      div.appendChild(task_disc);
      // div.appendChild(br)

    })




    setTimeout(() => {
      alertContainer.classList.add('d-none')
    }, 1500)
  }
  else {
    alertContainer.classList.remove('d-none')
    alertContainer.classList.remove('alert-success')
    alertContainer.classList.add('alert-danger')
    alertMsg.innerHTML = 'task is not added 🚨!!'
    setTimeout(() => {
      alertContainer.classList.add('d-none')
    }, 1700)
  }
  document.getElementById('discription').value = ""; // it erases the inserted content in input fields  or equals to the empty string





}