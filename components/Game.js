AFRAME.registerComponent("game",{
    schema:{
        El_id:{type:"string",default:"#ring1"}
    },
    collision:function(El_id){
        const EL = document.querySelector(El_id);
        EL.addEventListener("collide",(e)=>{
            if(EL.include("#ring1")){
                console.log(El_id+" collided ")
            }
            else if(EL.include("#hurdle1")){
                console.log(El_id+" collided ")
            }
            
        })
    },
    update:function(){
        this.collision(this.data.El_id)
    },
    
})