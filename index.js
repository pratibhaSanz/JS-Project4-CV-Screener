console.log("Thsis is my index.js");
// array of objects which contains informatin abt the candidate

const data =[
    {
        name : 'Devanshu Mishra',
        age : 23,
        city : 'varans',
        language : 'python',
        framework : 'Django',
        image : 'https://randomuser.me/api/portraits/men/75.jpg'
    },

    {
        name : 'Rahul Tiwari',
        age : 24,
        city : 'varanseya',
        language : 'python 3.0',
        framework : 'Django',
        image : 'https://randomuser.me/api/portraits/men/85.jpg'
    },
    {
        name : 'Prachi Sharma',
        age : 20,
        city : 'Sharanpur',
        language : 'C++',
        framework : 'c#',
        image : 'https://randomuser.me/api/portraits/women/65.jpg'
    },
    {
        name : 'Apporwa Rai',
        age : 22,
        city : 'Baliya',
        language : 'Java',
        framework : 'Nodejs',
        image : 'https://randomuser.me/api/portraits/women/75.jpg'
    },
    {
        name : 'Ankita Yadav',
        age : 17,
        city : 'Lucknow',
        language : 'Javascript',
        framework : 'MongoDb',
        image : 'https://randomuser.me/api/portraits/women/65.jpg'
    },
]

function cvIterator(profiles) {
    let nextIndex=0;
    return{
        next : function(){
            return nextIndex<profiles.length ? 
            { value: profiles[nextIndex++], done:false }:
            {done:true}
        }
    };
}

// button listner for next button
const next = document.getElementById('next');
next.addEventListener('click',nextCV);

 const candidates = cvIterator(data);
 nextCV();
function nextCV() {
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML = `<img src='${currentCandidate.image}'>`
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item"> Name : ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primary works on ${currentCandidate.language}</li>
    <li class="list-group-item"> with ${currentCandidate.framework}</li>
  </ul>`;
}

else{
    alert('End of applications ');
    window.location.reload();
}
}