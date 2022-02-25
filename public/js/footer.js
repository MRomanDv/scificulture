const footer = document.querySelector('footer')

const paintFooter = ()=> {
    footer.innerHTML = `<div class="footer-logo"><h3>SCI FI <span class="culture">CULTURE</span></h3></div>
    <div class="footer-box">
        <div class="footer-content">
            
            <div class="footer-content1">
                <ul class="assistance-list">
                    <li>SUPPORT</li>
                    <li>MEETINGS</li>
                    <li>LEARN ABOUT SCI FI CULTURE</li>
                </ul>

            </div>
            
            <div class="footer-content2">
                <!--socialnetwork-->
                <div class="socialNet">
                    <div class="icon-socialNet">
                        <i class="fab fa-twitter-square"></i>
                    </div>
                    <div class="icon-socialNet">
                        <i class="fab fa-instagram-square"></i>
                    </div>
                    <div class="icon-socialNet">
                        <i class="fab fa-facebook"></i>
                    </div>
                    <div class="icon-socialNet">
                       <i class="fab fa-tiktok"></i>
                    </div>
                </div>
            </div>
        </div>

    </div> `
}

paintFooter()