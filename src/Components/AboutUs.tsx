import Q1 from "../Images/Quality/Q.jpeg"
import payment from "../Images/Payments/1.png"
import { makeStyles } from "@material-ui/styles"

const useStyle = makeStyles({
    body:{
        backgroundColor:'#ede8d8',
        height:3.81*window.innerHeight,
        padding:150,
        paddingTop:60
    },
    quality:{
        borderTop:'2px #dcdcdc solid',
        borderBottom:'2px #dcdcdc solid',
        padding:20,
        display:'flex',
        flexDirection:'row',
    },
    address:{
        borderBottom:'2px #dcdcdc solid',
        padding:20,
        display:'flex',
        flexDirection:'row',
    },
    copywrite:{
        borderTop:'2px #dcdcdc solid',
        marginTop:100,
        display:'flex',
        justifyContent:'center',
        padding:10
    }
})

export default function AboutUs(){
    const style = useStyle();
    return(
        <div className={style.body}>
            <br></br>
            <b style={{color:'solid black', fontFamily:'Lato,sans-serif'}}>ONLINE SHOPPING SITE FOR WOMEN'S INDIAN ETHNIC AND FASHION WEAR CLOTHING – INDYA</b><br></br>
            <p>Welcome to the House of Indya, a world of fashion where traditions are fused with modern aesthetics and infused with an ultra-modern spirit to cater to the women of today. It is an authentic fashion brand quintessentially dedicated to Indian ethnic wear. We like to call ourselves a pioneer in prêt modern-ethnic wear, trying to make Indian fashion approachable and affordable to all by eliminating the meticulous hopping between shops and pain-staking efforts.</p><p>
        With this platform, we have resolved to provide you gorgeous and trendy readymade Indian fashion, reachable to you in just a matter of a few clicks. A humungous collection of Indian ethnic tops, Indian kurtas, wedding wear, ethnic wear, fusion wear, indo western dupattas, Indian ethnic tunics, skirts, bottoms, Indian ethnic dresses, festive wear and co-ords set for women is sure to serve you a huge range of purposes and occasions. The garments are not only visually appealing, but we ensure a high standard of quality, fabric and detailing to make you look no less than a princess when you wear Indya.</p><p>
        Our talented team of designers is dedicated to maintaining exclusivity and offering you a repertoire that covers every occasion from work to festival celebrations and even weddings. Every collection is fresh and authentic in its own unique way and when you wear our garments, you will be exposed to an elegant, luxurious experience of clothing that is practical and easy on pockets. We would like to point out that Indian beauty is sui generis and our clothes enhance it.</p><p>
        Apart from clothes, we have a beautiful collection of accessories for almost every occasion. You can simply mix and match them with outfits of your liking and you are ready to head the fashion parade.</p><p>
        <b>Trendy Indian Women's Clothing Online</b></p><p>
        With styles that take you from day to night & jewelry that is perfect for festivities and everyday wear, HouseofIndya.com is the ultimate destination to shop everything for your Indian ethnic wear wardrobe.</p><p>
        Here is what you will find in our edit of women’s wear clothing online:</p><p>
        
        <b><u>Ethnic Wear Tops</u></b> – Pair your separates with Indya’s collection of tops and blouses. From casual wear tops tailored in breezy fabrics to festive-ready crop tops and blouses with bedazzling details, Indya’s collection of ethnic wear tops have been tailored to suit all your closet needs.</p><p>
        <b><u>Ethnic Wear Kurtas & Tunics</u></b> – Go the traditional route with Indya’s line of enchanting kurtas and tunics perfect for every occasion. From angrakhas and A-line styles to floor-grazing anarkalis and short tunics, be it a day at work, a close-knit function, or even a wedding, Indya’s collection of kurtas are just what you need for a fetching look.</p><p>
        <b><u>Ethnic Wear Bottoms</u></b> – Flowy and functional, pair your kurtas, tunics, or tops with our stylish and comfortable bottoms. Tiered shararas, elegant pants and flowy palazzos, with playful silhouettes and easy to style hues, these are an ideal choice for every millennial woman.</p><p>
        <b><u>Ethnic Wear Skirts</u></b> – Drenched in standout shades and spruced up with sparkling details, slip into Indya’s edit of skirts to sail through all the occasions. From a Sunday brunch to a cocktail night, these skirts will keep you feeling light through the day.</p><p>
        <b><u>Ethnic Wear Cocktail Saris</u></b> – For those who love the charm of traditional Indian wear, and the ease of modern styles, Indya’s collection of cocktail saris is a must-see. Think tunics and skirts with sari drapes, tops and jumpsuits with attached dupattas, and more. With pre-stitched drapes and pleats, these styles are just perfect to give your closet a fuss-free update.</p><p>
        <b><u>Dupattas</u></b> – Complete your look with Indya’s collection of delightful dupattas. Easy to drape and light, our wispy and soulful pieces have been crafted in a sublime palette to amp up your look in an instant!</p><p>
        Go ahead! Pick your favorite ethnic wear clothing for women, add to cart, and experience a seamless check out at HouseofIndya.com.</p><p>
        We Ship Across the World</p><p>
        House of Indya is one of the leading women ethnic clothing fashion brand in India that sells women Indian ethnic wear all across the globe. Be it anywhere in the United States of America (USA), like California, New York, Illinois, Texas, New Jersey, Florida, Virginia, Georgia, Massachusetts, Ohio or other countries like the United Kingdom (UK), Australia, Canada, Singapore, Malaysia, United Arab Emirates (UAE), New Zealand, Germany, you can order your favourite Indo Western Clothing online and we will deliver them to you in no time.</p><p>
        From ethnic clothing, or festive kurtas & skirts to tops, dresses, and bottoms for everyday wear, you can order Indian Fashion Clothes from Indya and we will deliver them to you in no time. Be it Indian Ethnic Dresses, Ethnic Wear Accessories & Outfits, we’ve got everything you want and more. Just log on to HouseOfIndya.com and leave the hassle of delivering to us.</p><p>
        <br></br>
        
        
        <div className={style.quality}>
            <img src={Q1} alt="Quality"></img>
        </div>

        <div className={style.address}>
            <div><b>HEAD OFFICE ADDRESS:</b><br></br><br></br>
            High Street Essentials Pvt Ltd
            C-11, Sector 7, Noida, UP- 201301, India
            Customer Care: +91-8929987349 / 0120-6850262</div>
            <div style={{borderLeft:'2px #dcdcdc solid', borderRight:'2px #dcdcdc solid', paddingLeft:10}}><b>RETURN ADDRESS:</b><br></br><br></br>
            High Street Essentials Pvt Ltd
            Plot No-1C/2, Sector 16,
            Greater Noida(West), Gautam Buddha Nagar, UP - 201306, India</div>
            <div style={{paddingLeft:20}}><b >PAYMENT METHODS</b><br></br><br></br><img src={payment} alt="Payments"></img></div>
        </div>

        <br></br>

        <br></br><b>FAQ - <br></br>
        
        Q.1. What type of clothing do they wear in India?<br></br></b>
        A.1. The types of clothing that is mostly worn in India is ethnic or fusion styles, i.e., a mix of traditional and new-age pieces is what people prefer to wear in India.<br></br><br></br>
        
        <b>Q.2. What is special about the traditional clothes of India?<br></br></b>
        A.2. Indian clothes are generally designed in comfortable fabrics and detailed with prints, embroideries, and mirrorwork. They can be worn for everyday or for special festive occasions.<br></br><br></br>
        
        <b>Q.3. Which Indian dresses are trending?<br></br></b>
        A.3. Classic styles with new-age details are trending. Think kurtas and tunics with drapes, high-low hems, and high-slits, skirts with prints, pre-draped saris, ethnic jumpsuits and dresses.<br></br><br></br>
        
        <b>Q.4. Why Shop Indian Ethnic Outfits From HouseofIndya.Com?<br></br></b>
        A.4. When it comes to fashion, Indian women are spoilt with choices starting from International houte couture to bustling flea markets and everything in between. Why would you choose HouseofIndya.com over everything else? What difference does it really make in your daily wardrobe? 
        Everyday there is a new fashion brand coming up in the market. Buyers are more aware, fast in embracing the newness and faster in disgracing a brand that ceases to serve their purpose. What makes Indya indispensable and irreplaceable is its timelessness. We have very high standards set for fashion and we do not shy of in justifiably claiming that our collections are more refined, holistic and evolving every day. We are the latest, the freshest and the best!!<br></br><br></br>
        
        <b>Q.5. How Can You Shop for Women Indian Fashion Clothing Online from HouseofIndya.Com?<br></br></b>
        A.5. HouseofIndya.com is the perfect place to shop for ethnic wear clothing online for women. From classics to on-trend styles, HouseoIndya.com has pieces for every occasion and mood. Think kurtas & tunics, indo western tops, skirts, lehengas, pants, shararas, indo western tunics, indo western dresses and more, ranging from size small to XL, have been designed for women of all shapes and sizes. 
        With a full-fledged, user-friendly website and a mobile app to assist you, shopping at Houseofindya is easy and hassle-free. The size charts are true to size, colors closest to the original garment and verified details will make sure we deliver what we promise. 
        With various options to make payments, quick delivery, easy returns and refunds, and a team of friendly customer care to help you at your convenience, we aim to provide you with a happy shopping experience from the comfort of your home.<br></br><br></br>
        
        <b>Q.6. How to Style Indian Ethnic Wear?<br></br></b>
        A.6. There can be innumerable ways to style an ethnic Indian outfits that can differ from person to person. However, the standard styling measure may include wearing beautiful earrings, a nice bindi, Kolhapuri chappal and of course a hair-do that gets you noticed. Styling an Indian garment can never be standardized as the same outfit can be worn in different style by people of different tastes and states. <br></br><br></br>
        Our collection has a twist and a style vibe to it, making it appealing for your Indian women who do not mind experimenting with new outfits that are traditional in look but with modern cuts and silhouettes. The a-line tunic, layered kurta tunics and even the maxi skirts in our collection are not only appealing but inspiring too.<br></br><br></br>
        
        <b>Q.7. Where To Wear A Stylish Indian Ethnic Clothing?<br></br></b>
        A.7. Indya has a collection, specially designed to cater to various occasions keeping in mind the change of roles that an Indian woman experiences in a single day. From being a daunting mother to an authoritarian boss, you may have to take up different roles within a day and your outfit has to compliment all of them. At Indya, we offer a wide range of cotton kurtas, tunics and co-ords that are perfect to take you through a working day. While on the other hand, our printed tunics, skirts, dupattas and gorgeous accessories make you the girl of the night in any celebration. 
        You can log on to HouseofIndya.com for shopping the best ethnic wear for women online in India. Our collection is wide, authentic, premium quality and versatile enough to have at least one piece for women of all age groups and body types.<br></br><br></br>
        
        <b>Our Popular Indian Ethnic Categories:</b> Women Kurtas & Tunics | Women Tops | Women Skirts | Women Bottoms Pants | Women Dupattas | Women Kurta Skirt Sets | Summer Collection For Women | Women Loungewear | Women Skin Care | Women Jewelry<br></br><br></br>
        <b>Our Popular Collections:</b> Earthen Clothing | Payal Singhal X Indya Collection<br></br>
        
        </p>


        <div className={style.copywrite}>
            <b>© {new Date().getFullYear()} HouseOfIndya.com. All Rights Reserved</b>
        </div>
        
        
        </div>

    )
}