import React, {useState}from 'react'

const Contact = () => {
  const [msg,setMsg] = useState({
    name : "",
    email : "",
    message : ""
  }); 

    //Handle inputs
const handleChange = (event)=>{
    let name = event.target.name;
    let value = event.target.value;
    setMsg({...msg, [name]:value});
  }

    //Handle submit
    const handleSubmit = async (event)=>{
      event.preventDefault();
      // object destructuring
      //store object data into varaiables
      const {name,email, message} = msg ;
      try {
        // it is submitted on port 3000 by default
        // which is front end but we need to
        //submit on backend in which is on
        // port 5000.so we need proxy
        const res = await fetch ('/message',{
          method : "POST",
          headers : {
            "Content-Type" : "application/json"
          },
          body : JSON.stringify({
            name,email,message
          })
        })
        console.log(res.status)
        if (res.status === 400 || !res) {
          window.alert (" Message not sent.Try Again Later ");
        } else {
          // you need to restart the server for proxy works
          // try again
          window.alert ("message sent");
          setMsg ({
          name : "",
          email : "",
          message : ""
        })
          }
      }catch (error) {
        console.log (error);
      }
    } 
        


  return (
    <div>
                  <div id="contact">
        <div className="container py-5 my-5">
          <div className="row mb-5">
            <div className="col-md-12">
              <h3 className="fs-5 text-center mb-0">Contact Us</h3>
              <h1 className="display-6 text-center mb-4">
                Have Some <b>Question?</b> Services
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxATEBITERMREBUWFhYSFRIXFRUSERMWFREWFhYVFRUYHSkhGxsmHBUWIjIiJiosLy8vGCA2OTQtOCkuMCwBCgoKDg0OHBAQGzgmIScuLC4wLi4uNi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLv/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAIDBQYHAQj/xABGEAABAwICBQcKAwYFBAMAAAABAAIDBBESIQUxQVGRBhNSU2FxoRQWIjKBkrHB0dIHFXIXIzNCsvAkVILC4YOTovE0YnP/
                xAAaAQEAAwEBAQAAAAAAAAAAAAAAAgMEAQUG/8QANhEAAgECBAIHBgUFAQAAAAAAAAECAxEEEiExE1EUQWFxgaHwBSIykbHRUpLB4eIjM4LC8UL/2gAMAwEAAhEDEQA/AO4oiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCokkA1qmeXCO1QnG+ZU4wuQlKxefUnZl8VaMh3niqUVqikQu2e4jvKqEjt54qhF2xwvNqXbbFXo6gHXl8FDRRcEySk0ZIFerHMkI1f8AClxTg68iq3BompXLy8JVuWYDtO5RJJCdfDYuKDYcrEl9QNmfwVl1Q7uVkla5U8pjiPNsBbsLibntsNS00sM5/
                CrlFSsofEzZ+edvKqFQ7vWo+dEnQZxKec8nQZxKu6DU5eZV0unz8jcm1O8cFea8HUVo/nPJ0GcSnnPJ0GcSov2fV5eZJY2nz8je0WlM5XzD+Rh9rlV54y9XHxcodAr8vMl0ylz8jc0WE0Fp1tRdpbgeBe17gi9rjiMu1ZtZpwlCWWS1L4TjNZo7BERQJhERAEREAVMj7C6qUKpkubbApRV2ck7ItOcSbleIrcswHady0JdSKS4qXSNG0KG+UnXw2KlTVPmQzEo1Le1eGqG5RkUsiOZmSPKuzxXnlR3KwiZEMzL3lJ3BUOmcdqtSyta0ucQ1oFy4kBoG8k6lho+VlC54jZMJXnU2NkkpPdgabrqgupC7Njgn2Hj9VIWPANr2PAg+0HUr8M1sjxUHHrR1O2jLlX/Df+l39JXPwugVf8N/6Xf0laAFv9nbS8P1MeM3XiZoaEg/
                zkPh9yfkkH+cg8PuUHyaHr2+4/6J5LD17fck+ivtP8b/ACfxKrx/AvzfuTvySD/OQeH3KHUUMbZWME8b2uteQeq2525/NUeTQ9e33JPovfJYevb7kn0XY5k9ZN/4/wATjcXtFfm/cnfkkH+cg8PuUTSVBHGAWTxzEmxDdYy16yqPJYevb7j/AKKzURMAGGQSdga5tu3MJFSzazb/AMbf6oScbaRXzv8AqZXkd/8AKH6HfJb4tD5HH/FD9Dvkt8Xk+0f73gj0cF/a8WERFhNYREQBERAW5n2aTwUFX6x2YHtUdXU1oVTd2W55LDt2KGrlS70u5W1pgtCmT1CIpjNHPIBu0cfouyko7nFFvYhopv5a/e3x+iflr97fH6KPEjzJZJciEiuVEJYbG2/JW1NNNXRFqxzDlJLPpLSPkcLrRROIPQBZlJK8bSCcIG+2rEVmtK6Yo9EReT0sbZJyAXE689T53jMnaGC3+kWVfJiHySn0nWuaS7nqi2RzbDI8Ae2Quv3DctZ5HaJZVCeeqbzxe/Jzi4EuzL3CxG1w4KNWpGMW5fDG2nNmihRlUkoR3d/
                BGB0jynrpnYpKiUbmscYmDuawge059qk6C5XVVK1wj5t+N2NxkxvcbC1h6YstnreQtM7+G58J3X5xvB2firWjPw4a5/7yocWjPC2MNcezEXG3Bdp4zD1PdXyt6XmTrYGvSTlJac7+n5G7cntOmqoRMW4MTZGlt7gFpcw4TuuLrXwttpaKOOJsUbQxjW4A0bBbt1ntOta5No6VpIwOduIBIPBbcJKMcy2PJxKbsZDHJ1tHwZ9iY5Oto+DPsWGe0g2IIO45FXI6d7hdrHOG8NJC08KHZ8kUqo+T+ZlccnW0fBn2Jjk62j4M+xYzyOXq3+676J5HL1b/AHXfRc4dPmvI7nlyfmS6mtkabXhfle7WMcO71daiVFW54Adhyzya1viAvfI5erf7p+iq/Lpuql9x30XYxpra3kRk5vmTeSptUA//
                AFd8l0FaXyb0ZIx5keCzLC1p9Y3tckbNS3GP1R3BeP7QlGVW8T0sGnGnqVoiLCbAiIgCIvCckBAmddxVC9RadiggS+se9UrE6YrZGygNNha+oG9ydfBT6OfGxrrWvs7QbH4LW6bUVLmZ1NOTiX1mql7xE4xtD3hhLGE4Q5wb6LS7Zc2F1hVkmaSFhdp8FmrRcrWL6ckr3MU3SOk+ao3Gkj5ySTDVM51toI8VsbTfM2zsL7s9an6Oqqt1RUsmgbFCws5iUPDjMCDiu29xY21217dav/mbei7wXv5m3ou8FS4S/D6+fh3Fudcz3SEcZzc7CbZbfBY6nYC9o2Eqqrnxuva2Vv74qOZQ3O9jrG9aKcGo2KJyTlczHOAtZmMWQLBq1+mC3sF+6y1Kso44pHxxNbGxp9FrQA1t/SsAO0lZw6aNtQGVseu244VrldUtY9olkYHSE4LuA5w3zw79Y4rzMXCUbRt28+Z7Ps1q7nfTb6GO0TVl4ku58mCUw3cwR5tIDi22tuevsKyHJSqMrHSc4yVpJDHNjdFk1xaQQ5xubtOeXcsbV6ZiE4pw53OmxDQx7rXFwbjLVnuWco/
                RGWXdkP7zUsNBusvdtfVd1u5b36reJPG1EsPJKV7aPvuu17JPe5lUUMTu71W2p3hew4M+fzIxDaJ00rn5tYXetvAy9HhrWdjjDQA0WAyAXrHg6lZq62KIDnHYb6hmSfYFytW0vJ2SFGg3K0E3J8tyQitU1QyRuJjg4b/kdyuhQTUldE5RcW4tWaPVchmtkdXwXG67SX7maQ19S2p59zRTiWRrQznXAkAagG55ZC2u5wqR5VTeVRsGlaswGIOdLzsoLZMLTgsd9ycyLajYixm4XWv0YXedoU+H1R3BfPf5oPJp3jSVXzzZcMMXPTWkju6ztlrgA7LWANi4BZbkfpib8zomMramoY8uEjHyyPb/AAnGxa422X3i2xVTwsnFvl3lkZpO3M7iiIsJeEREAVEvqnuVatzeqe5DjIComfYeCrWK0xVFrC5uywG7M61shFykkjPOWVXMNp3+IP0j4lTdE1rXAMthLR7CBt71ap5G1DS1+ThmCPiPmFEo6Z0VUxrtTsRadh9E3Hzt3r0HZwyS3RiV1LOtmZCfSJbNgIGHIE7bnb3ZrIrEaUp/30Z6Vh7QczwtwU6iqucDjawDiB2iwN/FVTisqlHlqWwk8zTJKIoGltIRwxufI4MY0Xc4+AG8ncNaqSuyxsvyz7Bx+iiVFQxgLpHNYNZc4hoyzOZXONN8vpnktphzLdWMgOlPaAfRb4nuWrGofI8uke+R2CT0nOLjnG7adivjGyI2bO31AIDbgjFmDsI3ha7pzQ7ZS1xjEuE4sBcWOBNrljwcr2Fwcja+tZv8Mq5lZo5sUvpPpzzN/
                wCYNAvE4H9Jw9uArLVGgJR6ha4cHe2+S8PFcVVnNbrTQ97AzocHhT79fVuRh4aZrsMjmtD8Nr2Bey/rMxd6mALQ/wARBNS6SkML3xGSOOpGEkNLg0xyNI1H+Fiz+ataE/EBwIbVtDhq51gs4drmDI/6bdxXq4ehThFSgt0eTia9Wq7Teiv2en2nQVVGy7gNVyBfXa5tqVuKRrmhzSHNcA4OBuCCLgg7ldifZzTrsQbb7G6vlsZUZanoYi7A8OZIM7YsnAfzMNsxmL7RcX1i+E0zTODnSRRmePBzRORDXAvvYbRmMwLXbv1Zhs9O4EzHG82ucLgG21NYdYGZ77m+uyt1NRGA4RGzXCzo7FrQekzKwO8ajryOvy6lKpVWWVz0aFeNCWeKT7Ofy7jHaJheMb3gtxEENJuRZoFzuJ122ZLIKJDLbI6vgremZ3Miu02JIF+yx+i2UaGRKnEy18Q6knUl5disvJJEh9DCSSYoiTmSWNJPebKn8vg6qL/ts+i06DT87qiSIF2GMDE6+d3Na5vsN3D/AE9qpqdP1bS4NineBezg6OzstgxYvC61dFfNef2MvHXL6fc3NujYCR+6i/7bPos9R0kI9JkUTHDK7WNaeIC0rk5pCV8sePEMQN2OsS04SdYuLrdad9nd+Sw4uk4uz5GrD1FJXROREWI1BERAFRJ6p7iq0QGIqH2HfkoEsYc0tOo5KRVH0iN2StLfBWVzHLU1aQuhkNtbTszuO7u2K8zSheRfC5wOJlrBwcNnZiBLc+kslV6KD3FwcW31i1+zesbpDRTmNxXBA/mtYtOw2W/PTqJJ7mPLODutiTpuqBEeE6xiBG52Q+al6FYRF3kkeA+Sw1K0zStZsbmewH0gB2AOLfYthqXYInFuVmm3Zlkqp6QjT6yyOs3Pq/
                YuvdYErlv4n6RJkigByaOdd2ucS1vAB3vLeOUmluaiYW2Ln+rfUMs3Hj4hcd03VvlqJHvOIk2vkPVAbqHcpU6TUM72bJ8RObh1pXISvU4zd+h39KsqQ99ni+rA1ptrziANu0E3XSw3P8GtJ83pAwk2bPGW23vj9Nv/AI87xXc180cmpjBXUkgNwJ4/SGotLw1/ccLjcL6XXnYyPvp80aKL0scm/HCEtfRTN1jnWE9oMbm/7ly+aLMlvq2Dh2NJAA7bE29i7N+NNIX0UBGttQ0X3B0Ugz9tlxvGCJLZAMAbvtzrNfaSSfatOFd6S8SuoveOj/hrXF9K6Mm5ifYfoeMQ8ca2xc7/AAtl/e1Dd7GO91xH+9dEV5ne4RVJZcBSo2lXEw23OB9lipdl624N11OzTItXTRoddSzNm52nwkubgka7UbXwP1jVex7NS2On0i1sYaYIXG98Tg4k32GxH97Fs2RHYRq71F0dRiJpGslxN+zU3w+Kk68ZLVeF/wDhDhSTVn42MRoqTFUhwa1mROFoIa30bbSdvxW4sdcAqAr1M+xtv+KyV5Z3e1raGijHJpczcbrgFVKxSHL2q+vOaszatgiIuHQvCV6qJfVPcfggMJVD0r781aUuoZcd2aiLfB3RjktSxWQh7C0nDtvutnwWNo6q5MMhDgfRDgb+PwWTqocbC29r7fbda/WaNlZmMwNo1e0ax3rVRyyTjJ933M9W6eZIyNDRthmlJN7xsN7WsA6S/wAlZkqpJxhjbZuVz2bLlWZq/FHi282GO335w5d/oniq+TznA4dmEX7CLD6qUYuzqPdHJNNqC2ZheWuUsTdjWAeOfwC5Y91yTvJPErp3L91nk7oieGJcxWqo/wCjTXY/qRoL+rUfavoeFX6z+I/scRwNvkqaYXewHa5o4uAVDnXJO/PisxqLheWx3GvFiHZgbl/
                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"
                alt="contact"
                className="w-75"
              />
            </div>
            <div className="col-md-6">
              <form onSubmit={handleSubmit} method= "POST" >
                <div class="mb-3">
                  <label for="name" class="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Narendra"
                    name="name"
                    value= {msg.name}
                    onChange= {handleChange}/>


                  
                </div>
                <div class="mb-3">
                  <label for="name" class="form-label">
                    Email Address
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="narendra@gmail.com "
                    name="email"
                    value= {msg.email}
                    onChange= {handleChange}/>

              

                  
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Your Message
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    name="message"
                    value= {msg.message}
                    onChange= {handleChange}

                  

                  ></textarea>
                </div>
                <button type='submit' className="btn btn-outline-primary rounded-pill px-4" >Send Message 
                <i className="fa fa-paper-plane ms-2"></i>
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Contact
