import { animate } from "framer-motion";

export const properties = [
  {
    id: 1,
    type: 'room',
    name: "غرفة في شقة مشتركة في اسكودار",
    price: 13000,
    roomType: 'individual',
    preference: 'male',
    location: "Üsküdar, Istanbul",
    coordinates: { lat: 41.0266, lng: 29.0163 },
    googleMapsUrl: "https://maps.app.goo.gl/SnGTVrwes3ZbG9he8",
    description: "متوفر سكن في اسكودار موجود غرفه قريبه من مرمراي و الساحل في شقة 3+1 لشباب. موقعها مميز يوجد في الشقة شخص واحد فقط. هم ثلاث غرف بثلاث شباب.",
    apartment: {
      type: "1+3"
    },
    amenities: [
      "قريب من مرمراي",
      "قريب من الساحل",
      "مطبخ مشترك",
      "انترنت",
      "تدفئة"
    ],
    image: "https://media-hosting.imagekit.io//1def72562d6343b1/WhatsApp%20Image%202025-01-15%20at%2010.46.04_21499f37.jpg?Expires=1832258879&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=tISHUsN6s8ZmJ7KOQxr5sHfxh1qKv89go~strNB7Otg~X5FqUPWMsY4Zy6Kty84FRRcuiTi2bq3ndbJxBJhrPrqtqogkpiPOD-UIYwCgRuRfimhpxSrigo4YOazYewfPjystGnkNJ0FnAhpOL9mmBVGsqggv5gvKYYQISmUb0x-zxBRmhZ~sStQSzvWU4dPriiGfWxNRSgXSHdkE61bsFsTkJ3-48xWlnmYaqD4~8KJ2XQSQMODZzNdCgdK-la8jcGsWwfcakc~fgwpIioypnYVqrBRYMSd98GLoZOhdCIovf02ev4BKldYPwB4fzNgwGsGmQrOMkHWarNw0YmIsmg__",
    images: [
      "https://media-hosting.imagekit.io//1def72562d6343b1/WhatsApp%20Image%202025-01-15%20at%2010.46.04_21499f37.jpg?Expires=1832258879&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=tISHUsN6s8ZmJ7KOQxr5sHfxh1qKv89go~strNB7Otg~X5FqUPWMsY4Zy6Kty84FRRcuiTi2bq3ndbJxBJhrPrqtqogkpiPOD-UIYwCgRuRfimhpxSrigo4YOazYewfPjystGnkNJ0FnAhpOL9mmBVGsqggv5gvKYYQISmUb0x-zxBRmhZ~sStQSzvWU4dPriiGfWxNRSgXSHdkE61bsFsTkJ3-48xWlnmYaqD4~8KJ2XQSQMODZzNdCgdK-la8jcGsWwfcakc~fgwpIioypnYVqrBRYMSd98GLoZOhdCIovf02ev4BKldYPwB4fzNgwGsGmQrOMkHWarNw0YmIsmg__",
      "https://media-hosting.imagekit.io//d5c38f9b035240ec/WhatsApp%20Image%202025-01-15%20at%2010.46.03_d2ad666d.jpg?Expires=1832258879&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=UNvYujAP-2JpSl~r-Lau2CkNEk-f2snY9cgZdLZ8iCdEI7n4iM1ZeYld6jmFLTYvch5w7FjaCgm8DmWHIL9tde-h~uMjpXKQ48IejIbrjiAn9vFJDr05veh6zmV0FKTfnXVLax3eLu5ZX~V7HwgyLcJBpD4-7CZSeUQwXe5cZFhj0vZPyRN~LzMCXM47iduajHgmMZ~loRhoIFvhBHqYeFJAblaX3EkZAnUJKwzh1wddJKEBtYJnpmKmqOPQ83BWp5HG9ispH5BEAUvOwRe5bZ8OjiPr0gt0BWOPJG0qnP566OeMKaU6b5OGzQHyrvj-1nFezzdZmDvf741Juu5k1Q__",
      "https://media-hosting.imagekit.io//14306b7f07f04e4e/WhatsApp%20Image%202025-01-15%20at%2010.46.03_3caf0292.jpg?Expires=1832258879&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=KEPsnV9afh0hifbOTQhzghAvbSyZJdHWs9jmMZCZm-D7ENzdbTxD7VN7huowVDluEMxzy~vQ84TNrbkl8vQDOuu9Chwjy7iY0eByl8QaZJSIPYfcxwcfr581s0D8dSN6RxoNUvPLpTEsQmvV9Oa1NWUtBT53nuTIY6~8DWEKfoF~yAh9dEF-ef8N6Mi8q4Q6iDjEOPgH~zWn6grbSmUtmSWr-Hleai32GvaR9dUXhV~gU5UudRuQ7zm8vlBlL1gIwVDeplaaEtyeJwZ2B3bUVswKJ62umEbwMJP~BIPtJqA0oO3~1Fkm6AnW5rzqUQOYBdBW-D-Gryy7L6BFZa506Q__",
    ],
    videos: [
      {
        url: "https://media-hosting.imagekit.io//30e7d5a64d9f4d22/WhatsApp%20Video%202025-01-15%20at%2010.46.03_e9420da5.mp4?Expires=1832258879&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=zK7WOsI4UVuAW3XId1CdcMeuGXhK1zclBC3heXnuOBZf4bgTRrto~H4gQV3QugUdVAkmdo-Y-RLMEAUSXrmrq6OHEJZhY9K8iG7lxE1W5w1i0Sf9UriH0PLeS3h6y1zC2P~mtwKoNuM6FxsSylFDzMVWenSvt-i0ZTABK8YO9-Tg0z8Fa36XXgmX4mcxrR0pNMBeSpEW2rik19I~vt-zRB-ehnsBICM8sU0C0Q1vEsHwC~UIHmSzTQLMxkph1r5Sbj81tUeRDyCPzagmmZAyP8nuMI1EZRmvsvxNIU9jIjj3J5tb8jfiI0lP5lBNKsHZGz2kCphMxHItGNWn0X0vcQ__",
        thumbnail: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
      }
    ],
    deposit: {
      required: false,
      description: "لا يوجد تأمين مطلوب"
    }
  },
  {
    id: 2,
    type: 'room',
    name: "غرفة للطالبات في شيشلي",
    price: 14000,
    roomType: 'individual',
    preference: 'female',
    location: "Şişli, Istanbul",
    coordinates: { lat: 41.0743865966797, lng: 28.9878005981445 },
    googleMapsUrl: "https://www.google.com/maps?q=41.0743865966797,28.9878005981445",
    description: "متوفر غرفة للبنات في شقة 2+1 في شيشلي موقعها مميز تبعد عن مترو 5 دقائق فقط مع اطلالة مميزة. الشقة مؤثثة بالكامل وجاهزة للسكن.",
    apartment: {
      type: "1+2"
    },
    amenities: [
      "قريب من المترو",
      "اطلالة مميزة",
      "مطبخ مشترك",
      "انترنت",
      "تدفئة مركزية"
    ],
    image: "https://media-hosting.imagekit.io//df164f4eba974d06/WhatsApp%20Image%202025-01-27%20at%2011.45.35%20AM.jpeg?Expires=1832575704&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=J9F7VIRSLtHTdwwuMiJgAlHhA3p8szs1kaBLRTDsumCIHDstTbLkAQgUuzSkFuCHE58hdEmqPVYkxIDHMGPHcC8zR-BGmZ1qCaeQdzCO2dPB0UJYPLfW7KVGqhkpFZ4Y4WVN7Gq98WPRvwceRaiuP8v17S03TJBAuTgmwC9LYYCTbmTkzCrBh5PiFLvD0vbbzotoqBDPQKqYGkQZtVxudq1mO2~enakq~MbXDCWWi8z9jK3QD7tt57x7Eup6e4SymmoF7fwBHhpsROWo6PGVPBzaF4bx2Blu-c3qAZ-EOC4l2qLe9oezky10YxFN9ah9~EJyB75VoC4nw37SmEo5Bg__",
    images: [
      "https://media-hosting.imagekit.io//fafcc33ca44f420f/WhatsApp%20Image%202025-01-27%20at%2011.45.36%20AM.jpeg?Expires=1832575704&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=XtrZDxJwE5H3-DBKv8RXdq4QCX8f6u~Jl0tqJQ-vbM~KHQam5As9fWol513Bz~OgZbtguvlvbbuvpoUUg6In5Ja-dHsU6xlw8lSnDUlZGr5mY55fCiL6Z-r2oK8yNmSzhdOo9X74lRHx2BtRX0cq488m6N~nmPE04vVJgtbgW4Jm40Bxv8kY29nJw5KY5AiS3INqkNgxywqQfpefMSZ0Z6K~MeBgG38PA4zgofZkG7W0ZWYsLaqQ03OpgPWnV60zHwPi7ECDKsOP9uLVFGxTo5t6LGsTpNEQE0XjzYiyA7vmNfIAWNK0LCrtY4JPLwBO2PMKGBx07ioNO2oSq6hJZw__",
      "https://media-hosting.imagekit.io//df164f4eba974d06/WhatsApp%20Image%202025-01-27%20at%2011.45.35%20AM.jpeg?Expires=1832575704&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=J9F7VIRSLtHTdwwuMiJgAlHhA3p8szs1kaBLRTDsumCIHDstTbLkAQgUuzSkFuCHE58hdEmqPVYkxIDHMGPHcC8zR-BGmZ1qCaeQdzCO2dPB0UJYPLfW7KVGqhkpFZ4Y4WVN7Gq98WPRvwceRaiuP8v17S03TJBAuTgmwC9LYYCTbmTkzCrBh5PiFLvD0vbbzotoqBDPQKqYGkQZtVxudq1mO2~enakq~MbXDCWWi8z9jK3QD7tt57x7Eup6e4SymmoF7fwBHhpsROWo6PGVPBzaF4bx2Blu-c3qAZ-EOC4l2qLe9oezky10YxFN9ah9~EJyB75VoC4nw37SmEo5Bg__",
      "https://media-hosting.imagekit.io//9b9bcfc2f17546b5/WhatsApp%20Image%202025-01-27%20at%2011.45.36%20AM%20(1).jpeg?Expires=1832575704&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=on44kmfo0sWi~o7YL6U37FkW1dxrIMLGm8MsIz8GoPcrPtTOKw3OsYHgOXkWMClzBI4L3OTq~e-Jlsd04~GjuhYvLuXLPZIFlaKMhuciU4JP-SaVo~Hfd9d6B79zXzrRe77MdmvmKJmGMx4sarAToUy0laVN9bU~Rwvebf~wtcUFANcGNTFx1-EX3xpCBwqcqLyrYZt-qkF8VyEjnFoxeUWWovpGcwR8S4EvTdi74hiLrLtoMz3MB108qHdtwN~qVlvIcl0ZlW4frbE8vY9RQyUYWV8dVb2kJN~zsU3cZUi~3pedYN1fr3qhnErAlnNnrROuqKHj1SlOst95ELdtxw__",
      "https://media-hosting.imagekit.io//cee135edf6694e83/WhatsApp%20Image%202025-01-15%20at%2011.32.25_58bae13c.jpg?Expires=1832264305&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=SKIEcX~ahDqUFUkKbwZAJBhjnFEdYQdDnlnIb8V5WKqTMnGJMb5r0V3-jP2TcREtYCoxXfgB4qSQClIYqdWWknyUk8sLy2klZC4KFZtrUFZVcJDJJWOEeVA7WINOwfty5I4pP1qIKTxEJ7Dk-78ta0peCRu0i5jFuxEriRdnAId~S0GFsvkcfpm~6e4uzIjPD1EBWqv8cW71HKUy5D0zXr5bOFC7j4MVtxFFbqKs2e~i3HQ60ONJSuhtEGQVJnZ4Cc~bduYcPTLYwCmP3fgjqo~IDUSIEPBLKi1Xmx~C2bHrGaegAaY94-t1g7NXt1UZmQ-To6l7M7ahqooRJfC7bw__",
      "https://media-hosting.imagekit.io//7073d74d63894f72/WhatsApp%20Image%202025-01-15%20at%2011.32.25_28ddb73c.jpg?Expires=1832264305&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=VDf1eFqoqumF0IWb2WMFMtcgSVd~nk9HIt5FV0YZJ8Fcw8o8A5CwQbmbDFsGdABr5Y5aiAGtKgENr4AzKb7mLCsCUKl355uFqwyFZeMEjpB3~RVYB5Paw~zv1J9SRX9LZPoxhtaXEqv0r-1EeZzhRtAzVstF4TXQ09KcyAlXHfPeaB93BeX8O9N8Q-yJ~RogF6KMdpWOP6TGbC0zcL8t4St~Fmfby~wlYJp-1vtjneA3L5m72bXNJsNTEAPqcxRqN6InjeFb-LuD0e4JjjGH47tu1pDIPmcQHL90d2uh51HCZwNQ3esWpjmLr42U6yZcXk9ICFkqJmJuKMaJY4wmUw__",
      "https://media-hosting.imagekit.io//9e5e8223de0e4998/WhatsApp%20Image%202025-01-15%20at%2011.32.24_f4633e9e.jpg?Expires=1832264305&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=JoNMinM8e7D5H2fMLeOIP~nj2~KjfliOPgj0o3~-WQk3dkszmHx~x90Kj1LE0ml4sa21NnrX24bcj4PU6kQuYZS5~HyPDuNGLbyb1iqlVsNtyqEz84UI2Hzp45SMvFOjgf2jj~TGQ~xNyAmoKRWIdQhvkXGmIFmdV4yOdxhEP0IQ7teXF8YFT1lHtcT~TBiFGe~8Zrv5n0DLQ~jGTUc9R0~g9ZmNVzI0uc2j6V7WfxVYvsYL0WfW6Wb1j8uw7eAJP7UA4Y9KA-9K7sal7j4RAZJlpVnlyOD2vmYvnVeoZn07ZJxTZB1WZbicrq9Us6oYJElWjv49kiHkZVm9l9xp-A__",
      "https://media-hosting.imagekit.io//580b15d30ade4443/WhatsApp%20Image%202025-01-15%20at%2011.32.24_0396f271.jpg?Expires=1832264305&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=CAmhJiirgjkW3dRZT5rF0-kg8lqQOa1SCTKScu9cnvS9TwfiDrypvppsW8W-PbX-82CFbfqXC7SX6rryfdFfvQLRyLXO2Bk7JABaMm-Y97hS7Akun9uRzAGNbeN9k0Y-TZc6xAjZntCnf66tuX4KX-me4CelVFOs7Zva37SsTj9vtu7XO2b5mq79HMSIFEtw1f0Ku7zLQzUbc2BxC2ijXJAV7VH5Nmyd1rLSGUO71fSqGe9lEh~OLrg5GQdspHpHkGfQD425QZnsk~L4WKJwMDqEJjZXcw0BpF0bSKcDPAkIZqpE8irKbmQlzjVrVvZKm8S5gASVaXCFp-BNn~DspA__",
      "https://media-hosting.imagekit.io//ed1ddf71baf3484c/WhatsApp%20Image%202025-01-15%20at%2011.32.24_4ba7d183.jpg?Expires=1832264305&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=N9mTB0YseDIwRU~AFr8cVvHwQ2C~nr8bWCTGpCk1N8QAX1YlJ~9tH3BFil11ylrVEB8QLegARbB6r1PjvpEIA4W1HGevXF~i4sKZS-TwKFDFB~8-eENJax~etph16lnGqLtD3uDs2WMzS-IGhFG5umSS6iM5yiDG3xSU1oFb~EDI5oNcZUQP0jypzHyhpvKvQvbCxwoCOaYfiP62myTV1JWiKCW75rDRHL-sU-XdlU~JvBXRmEDvczmQNO~ypGbQj9-0U7tLYtbtBlNrmQ2zHoa7kQ4-wxJwFOsm0YTmDST2n~q5DNurMP8~RtwMpS8h84W8k3GdSIv5~1T9b98GiQ__"
    ],
    deposit: {
      required: false,
      description: "لا يوجد تأمين مطلوب"
    }
  },
  {
    id: 3,
    type: 'room',
    name: "غرفة للطالبات في شيشلي",
    price: 10000,
    roomType: 'individual',
    preference: 'female', 
    location: "Şişli, Istanbul",
    address: "Gülseren Sk. No:10",
    coordinates: { lat: 41.0605, lng: 28.9877 },
    googleMapsUrl: "https://www.google.com/maps/place/Fulya,+G%C3%BClseren+Sk.+No:10,+34394+%C5%9Ei%C5%9Fli%2F%C4%B0stanbul,+T%C3%BCrkiye/@41.0598016,28.9954572,20z/data=!4m15!1m8!3m7!1s0x14cab7013a469d27:0xf43e712c5a06ccbf!2zRnVseWEsIEfDvGxzZXJlbiBTay4gTm86MTAsIDM0Mzk0IMWeacWfbGkvxLBzdGFuYnVsLCBUw7xya2l5ZQ!3b1!8m2!3d41.0597672!4d28.9955704!16s%2Fg%2F11c4xyjf81!3m5!1s0x14cab7013a469d27:0xf43e712c5a06ccbf!8m2!3d41.0597672!4d28.9955704!16s%2Fg%2F11c4xyjf81?entry=ttu&g_ep=EgoyMDI1MDEyMS4wIKXMDSoASAFQAw%3D%3D ",
    description: "غرفة للبنات في شقة 3+1 في شيشلي موقعها مميز جدا خلال 5 دقائق تصل لمترو M7 & M2",
    apartment: {
      type: "1+2"
    },
    amenities: [
      "قرب المترو",
      "قرب جامعة ميديبول",      
      "مطبخ مشترك",
      "انترنت",
      "تدفئة مركزية"
    ],
    image: "https://media-hosting.imagekit.io//0fb1912bc4ef4625/WhatsApp%20Image%202025-01-15%20at%2012.00.08_e4655fab.jpg?Expires=1832313613&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=TcAz-OVP-mD-oel~V0icvcmSY9LjPHK-5p8JHBSKvBOaJcRpDJjwfztuGUvofO0GLowNdKDabAed~WbTQ5Ylu7GYM5gH~U2z8kZBVK9h6iwpM6qknbFjqbpOv7mkk2h~v9wwLsdaX0g9JXKvF2D4Q9apwHBwmg2lxD6z0eH2tDbkMznjdMIhHgoDLqr4aq0XlNKrlQlLfqE9m9AGC6f~C0enoRlTUHjTuSkdM8MoZN3QYK3vmXdcVi4EYezFH9Akov96onaS-QgrJoqbZZ1eB4o93syYCLJNxAyaT0Cp9NbwIbqMS6dGDcDFgwBJkotW66tASBCqaLAgNMquqUUtrw__",
    images: [
      "https://media-hosting.imagekit.io//0fb1912bc4ef4625/WhatsApp%20Image%202025-01-15%20at%2012.00.08_e4655fab.jpg?Expires=1832313613&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=TcAz-OVP-mD-oel~V0icvcmSY9LjPHK-5p8JHBSKvBOaJcRpDJjwfztuGUvofO0GLowNdKDabAed~WbTQ5Ylu7GYM5gH~U2z8kZBVK9h6iwpM6qknbFjqbpOv7mkk2h~v9wwLsdaX0g9JXKvF2D4Q9apwHBwmg2lxD6z0eH2tDbkMznjdMIhHgoDLqr4aq0XlNKrlQlLfqE9m9AGC6f~C0enoRlTUHjTuSkdM8MoZN3QYK3vmXdcVi4EYezFH9Akov96onaS-QgrJoqbZZ1eB4o93syYCLJNxAyaT0Cp9NbwIbqMS6dGDcDFgwBJkotW66tASBCqaLAgNMquqUUtrw__"
    ],
    videos: [
      {
        url: "https://media-hosting.imagekit.io//a363287145c34317/WhatsApp%20Video%202025-01-15%20at%2012.00.32_8d43f128.mp4?Expires=1832313613&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=o36-VfkuL8lOHSJjX-HZkl6LsXuiEcvrFaVtlU5ckNyi4fvNtKf2lG6DvP4uo43jtJZq0XGtacf0TXovDZA6m6BPMLNORpx~Lk3Cb8wJt-K9-XF5F-WVarD8KC7wEW6h3~gvysIAN-JzHNosmPBtDYhGYwEr9mM~vqrNkxV9DLNVpwyYkNgpE3d3ihzDFOIOiDL01wS4~CYndljM2Q-tNgOKfD1hwp~2e3Ydg5Ux0xdNjCanJxd1R9pO6LYvb9bbJb0Gs2MAo~tR95mWtaUs6q3h0b-5vozwv0guzKntnbj8gs6TslSQmjEEmxEGvL7v2G3M3AiskelcJvvpDdN4kw__"
      }
    ],
    deposit: {
      required: true,
      amount: "شهر",
      description: "شهر تأمين"
    }
   },
   {
    id: 4,
    type: 'room',
    name: "غرفة للشباب في أوسكودار",
    price: 9500,
    roomType: 'individual',
    preference: 'male',
    location: "Üsküdar, Istanbul",
    coordinates: { lat: 41.0234, lng: 29.0152 },
    googleMapsUrl: "https://maps.app.goo.gl/8EXVRJBKjUAmwmhU9",
    description: "غرفة لطلاب في شقة 3+1 في اوسكودا عند الساحل موقعها مميز جدا 5 دقائق بعيده عن مرمراي و ٥ دقائق بعيده عن m5",
    apartment: {
      type: "1+3"
    },
    amenities: [
      "قرب المرمراي",
      "قرب المترو M5",
      "على الساحل",
    ],
    deposit: {
      required: false,
      amount: 0,
      description: "لا يوجد تأمين"
    },
    image: "https://media-hosting.imagekit.io//864cd9aaebbd48dc/WhatsApp%20Image%202025-01-15%20at%2013.20.32_ed9e855b.jpg?Expires=1832314100&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=fifnLs7M1N94HP94mAGIqjufSRSoO4sTlBKioT1M3LfdVLp3zBWzXQkZkOcS03MKbyWkmweVyHg6C-GP8m8Gr6zORqCyn1qxIvrRymH7PBAygizHgx5RDCqHLgFRyWhVqQxBb5j0cF5q6XiEqiegDXFzXPCU0kKXtxSqok6K7peexApMWUUWCuUoibLEIExuHDAcmJ1VVvEtGBpWezSQkuQZqRIR6CPymaVC80YocKkU~hVR~my~jkRHQdRnCyJseRCC4EYyp7kArc4VF8bmSmjou4~YRSWjWHKcvKgSTwYp2WWTetSF3GhZBb9Z7hJ5uIoniSH7IukFL4JPxQCYXA__",
    images: [
      "https://media-hosting.imagekit.io//864cd9aaebbd48dc/WhatsApp%20Image%202025-01-15%20at%2013.20.32_ed9e855b.jpg?Expires=1832314100&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=fifnLs7M1N94HP94mAGIqjufSRSoO4sTlBKioT1M3LfdVLp3zBWzXQkZkOcS03MKbyWkmweVyHg6C-GP8m8Gr6zORqCyn1qxIvrRymH7PBAygizHgx5RDCqHLgFRyWhVqQxBb5j0cF5q6XiEqiegDXFzXPCU0kKXtxSqok6K7peexApMWUUWCuUoibLEIExuHDAcmJ1VVvEtGBpWezSQkuQZqRIR6CPymaVC80YocKkU~hVR~my~jkRHQdRnCyJseRCC4EYyp7kArc4VF8bmSmjou4~YRSWjWHKcvKgSTwYp2WWTetSF3GhZBb9Z7hJ5uIoniSH7IukFL4JPxQCYXA__",
      "https://media-hosting.imagekit.io//c914d0da68b04517/WhatsApp%20Image%202025-01-15%20at%2013.20.31_b83b8006.jpg?Expires=1832314100&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=atfcCbhzJC8XaYYcCHRp4sLO-3EA28~EUebajMVWJuuprBeUaQMG9Xnp6On9lnIlSKC2r1dyHPsbwTLRFkwAAi-4atCl41jBdbDYiyNoTQmdiOAoqXsQHTAzCScHEhjUimzjHrr3d~TJVomv5ynKPxJCLyg2SZaAxl~kjUN6G9bqyJk3Q0COVQQtXYZ5OtiRHFQENycE4Gk~NdlNpThOBqXADFghozM3Z8XB3B1Tpu9G0W8LmtO06-J-FHntxhVe~wmtA2LUMpGsDAUDuIsWigXCexnLhxL8LB0CTzAN2rHByaBbkNW7p7w6fislfMZOPmrLuo7JSSKTkEVMN8Zyxw__",
      "https://media-hosting.imagekit.io//817d551ad14943ba/WhatsApp%20Image%202025-01-15%20at%2013.20.31_13cc24be.jpg?Expires=1832314100&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=qPezi3wwnmNJyIECCE55hBNPi8xrA44i9MyvWBRfvxIh~R9IN7EjV-aEQgNAzZmSLwTLdufANj098pawqUP5Qn9LUnFIq74GD8WMSsKfGtXoxXEnh5wDyZ~Y0TfoVcUH1tsF6rx3Ct2ZVeJxNbPGvvny0WFrrpCbajpNPOWuWj6zVlo1wHdjEcfFA24hsf8frEgUO9M8pkC07Bs44n-CXW8ZQnz2HguwdhMnjEtYvRkFQg0GbQZzPKZHwh55kf6YRGYmYy2AAU7ZapD464yzEHghGSOvWAoxDw1RgtKrKw-E76rVmjOfkncms6IIltcuYKTnh4dSADS1VMQIXZVAeA__",
      "https://media-hosting.imagekit.io//149a3425bcc045da/WhatsApp%20Image%202025-01-15%20at%2013.20.31_4f2330fa.jpg?Expires=1832314099&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Q6TRtLk2AXtE8cJHmo-eQ0m8YBgB0subzvXvTsPHar34srobezyZjtjzw1enV6XTA7vPl9VRPFUxz2050~JCko8bjUwVPZktSPRZGHmCDADsnXqfx9VhsVJKogJWEn~m4~xBzvdEs0btUdL5xL9fQQuozINeWL9eLMoH9235M9VEXrQ1hnfPsHJHEmIftjwG-4r7KUZlVlF5kzAL7DIFGZ~QiaeGviNTfXFg9xItK8ItNNrVeDP~2ODjjISWO27soZz2NH0BLiAxla7zXXtYmw49FvPQNH7Lfc~566dq337f2zwRr2SQsE2XkCO70UzCuhePw9no1LwRCToax3~AwQ__",
      "https://media-hosting.imagekit.io//7a8c454c9ba441b3/WhatsApp%20Image%202025-01-15%20at%2013.20.30_ccb94613.jpg?Expires=1832314099&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=LxB7eGDkvHZBrd7cecekjpjPVQqwTHYGFh1jn5Gp6XFTeXXEhyPwiueroPXqyLlPltMyUzCXQ312QsgV82tHTseJT0LNT-mUny2z-s6Pyp5mD2HRQoMO2I6nlUHqqvTchGA3XjmESD7vRxKZXiNMVixB9Nvhq2Vl5MHSk3ViJkihkvoCE8TFIR0rlAXEt6maVOoTzFHRe8PCzfuSN3LxcK9yadbHXMr4pUS6GZKGqFpolzOj5eJ1-7DaKby2GJH~dBmrMhd0haBV6qdc2ymt8qRoWDGVAxMEOY4dVo~kTUy~yGIknaY1AXHRMDpIkFsLGmfUnc7kP5xkGFGgY5JVXw__"
    ],
    videos: [
      {
        url: "https://media-hosting.imagekit.io//abe9f47e640b44d6/WhatsApp%20Video%202025-01-15%20at%2013.20.30_93cc0bce.mp4?Expires=1832314100&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=rEZeV1WzAsP9iD3gsTX6P0A-WIo8XLKR2-sxy3JzR7AfVL7Rn7SAlA~LSJEBlSlWrA3aDN9GVeAhCP310AkeWsHTMmfM4bnqlUz78wgg4yAMN4oCyrL4UnxiBbgb7ipw2KNdxAO5AkSfl7u6ND7IHX1oH4o~-PI7MP642I2omXv3m9UcKkUE6yJprKyXk83Hfq4Ry~Te00mAjiUZAO8JwG7LjypjtRaz8IoPlT~VOmassDQuAAt-RbmAKdipcd80-TiX8q2AVo6vb5m8RvmyQsqJY5j20zDbAfXSXprXhwTnorrLYfS~VWzDX~2uuwJzcEPFbiWOvYz8ez747X-2SQ__"
      }
    ]
   },
   {
    id: 5,
    type: 'student_housing',
    name: "سكن طلابي في افجيلار",
    price: 10000,
    location: "Avcılar, Istanbul",
    coordinates: { lat: 40.990306, lng: 28.720722 },
    googleMapsUrl: "https://maps.google.com/?q=40.990306,28.720722",
    description: "سكن طلابي في افجيلار متوفر فيه غرف فردي وثنائي وثلاثي في موقع مميز يبعد عن متروبوس 5 دقائق فقط",
    
    rooms: {
      single: {
        price: 7000,
        available: true
      },
      double: {
        price: 6000,
        available: true
      },
      triple: {
        price: 5000,
        available: true
      }
    },
   
    totalRooms: 40,
    
    amenities: [
      "وجبة افطار",
      "قرب المتروبوس"
    ],
   
    genderOptions: ["male", "female"],
    
    deposit: {
      required: true,
      amount: "شهر",
      description: "شهر تأمين فقط"
    },
   
    commission: {
      required: false,
      description: "لا بدون اي عموله انا مدير السكن"
    },
   
    utilities: {
      included: true,
      description: "شامل الفواتير بالكامل"
    },
    image: "https://media-hosting.imagekit.io//00bf2cbd90dc4162/WhatsApp%20Image%202025-01-15%20at%2013.47.25_af225d56.jpg?Expires=1832314615&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=1GStPiUeAV0CHz0r965fY1mThuQdfQZ6PCIEgcp10Yhx6j90WKzUKvAqkNr49V1u4VVs429SUylQbAkd6movtiJlP9EfR7RQpKvvZsPMKEhZumxFNruNVEMIBDRi861LDVFo38XxEcj51wIPIDtYY-9kuLD808kTcwlANwPlKy2qWFt0ZeqOG8EHrAj-1vzKSJxYsm0uRw05rpIkXgaUWDrNmUB2y0R3eKGwDc9wX0TJgK2tA7kgRJzC9ANpfr~mpY1P25eeYGDGqdMqHBuzBgUxMPqo4fpiQFUX24AlJ3VWz4BfY-Y4k-5gwixhK0ACFkoTUROf0J3QUQ6f56bXCQ__",
    images: [
      "https://media-hosting.imagekit.io//1f368ddafe1c4007/WhatsApp%20Image%202025-01-15%20at%2013.47.26_c1aaefb0.jpg?Expires=1832314615&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wPoj57m6fGb~-cOL0LRmq7dtP-onV~sGKVtXlz-j2ydHCR81yWkSXkrMEkr7q-ocJjPa6iWmTDm4DVPvxRdOXOS62HeVBSmUpYMNMxdaSFQU04XVSb5rLsuvTpaH6ZRPfj1aiyZz4vZ5c0P05YTy8KPGRjavtFiTR6XlEHjzF-rBNuEuHiHH5p1AMI~w3-GTTAlMswr-I~nMtSCAeIZ-LjuDH67V78AytBgsu5ZNmmlXjEyXeudlIutyR3qHwKYS9oVtPuoLXzdwtIYa7ZST582Scl0Y46ROxegnVrWQHo3-pFrmSF6AzG3dRjuLgDAObY0T2PQ2CIe6QEJSRXv8lg__",
      "https://media-hosting.imagekit.io//00bf2cbd90dc4162/WhatsApp%20Image%202025-01-15%20at%2013.47.25_af225d56.jpg?Expires=1832314615&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=1GStPiUeAV0CHz0r965fY1mThuQdfQZ6PCIEgcp10Yhx6j90WKzUKvAqkNr49V1u4VVs429SUylQbAkd6movtiJlP9EfR7RQpKvvZsPMKEhZumxFNruNVEMIBDRi861LDVFo38XxEcj51wIPIDtYY-9kuLD808kTcwlANwPlKy2qWFt0ZeqOG8EHrAj-1vzKSJxYsm0uRw05rpIkXgaUWDrNmUB2y0R3eKGwDc9wX0TJgK2tA7kgRJzC9ANpfr~mpY1P25eeYGDGqdMqHBuzBgUxMPqo4fpiQFUX24AlJ3VWz4BfY-Y4k-5gwixhK0ACFkoTUROf0J3QUQ6f56bXCQ__",
      "https://media-hosting.imagekit.io//3c696a92c346466f/WhatsApp%20Image%202025-01-15%20at%2013.47.25_799f4d26.jpg?Expires=1832314615&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=xNMdT47eH7EYc6Owpd1gKM1zUA1VdruMK3UJlYMQOEzdgDdHwdQmuI2Kxt0THGHqO75khDOr1XK-CGZ~rOMEDWejhiBj8XUPvwi-hEH3Y2RMrsSZaxVHewBgg55sHOdYfpIbR4hvGUmF0UYEWYabYGUnyC-GDVGUrh4nUt7m81v7MBhGlidWOUXiW7hF5xey0-vhKtOhWdzkaMZYHhcrAPNwaRJPzvoW2N0uj-DkZ6WWqWivgZ7BxBjN5qSvI6FFNRlfzo9Zzw0PnkZKLCvJGv8BaIL~Xc-bra6Y5h~OeI5TvAZR45uv3WPalkPh1a6O4solNkqZVez0d8jTsAIa1w__",
      "https://media-hosting.imagekit.io//3c696a92c346466f/WhatsApp%20Image%202025-01-15%20at%2013.47.25_799f4d26.jpg?Expires=1832314615&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=xNMdT47eH7EYc6Owpd1gKM1zUA1VdruMK3UJlYMQOEzdgDdHwdQmuI2Kxt0THGHqO75khDOr1XK-CGZ~rOMEDWejhiBj8XUPvwi-hEH3Y2RMrsSZaxVHewBgg55sHOdYfpIbR4hvGUmF0UYEWYabYGUnyC-GDVGUrh4nUt7m81v7MBhGlidWOUXiW7hF5xey0-vhKtOhWdzkaMZYHhcrAPNwaRJPzvoW2N0uj-DkZ6WWqWivgZ7BxBjN5qSvI6FFNRlfzo9Zzw0PnkZKLCvJGv8BaIL~Xc-bra6Y5h~OeI5TvAZR45uv3WPalkPh1a6O4solNkqZVez0d8jTsAIa1w__",
      "https://media-hosting.imagekit.io//cbb4e8c818a94746/WhatsApp%20Image%202025-01-15%20at%2013.47.25_1dac9137.jpg?Expires=1832314615&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=udmm7mnK9hwY7htNFB2CNH83U90qyeAWOK16kBjvqBU1xbKMHzlYD-dmntbbJy5HqyGfgjWrRpvZcF~~076hRMk--DJA-FQLgv8niUrUpVgoJ6oy~IbiCeO9trV8WzQ6SKR7h9hwWhGgAAZXUj8MbobnSDHcYLoVYzvkg5JcWdlhLGNjHWzP17m4iOgjiqLh5iuy-xjfHmSoRzB7Fk4OaSK-aZoFWDvguEYTcT5RQ4R-hcLAXvxp8zxdcnABoaaBev2867W92MjKR5DGhnqFZy0bxNYj8ydJsyeAvOWGheTxCyLPAMgr9yYINa6QdgjZZJlUckQsVkr71ZTVR2PE9A__",
      "https://media-hosting.imagekit.io//1d5b4cce2bb34f7d/WhatsApp%20Image%202025-01-15%20at%2013.47.24_12e464f1.jpg?Expires=1832314615&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=rF7~TYHMHzUZ6p9kkvMOrfOc5-h0yhF3WhCHKhMoYw947RbWshRvQAYuP9lsxHp8K5nKgvUYkFituC9IhI9HQkyrVh6hl0fzXScYbdChZo-xh9A0~ajPuSYH2LW6J0~W-4jfC5hUH7RIGPzxTgtseCaAQd6ubLlR7qGTWz-9b3l6EVvwgBnx4cIMnc5g6NEd2AujwuMLKU-rNir8AwcEC9DXot9CkSlSqwXKlVs9Ci4zH3BMpvGEuIv2zJ1o07xh7eI7ww7OGRRE-q7BLManY-dbu8E0FI~38~HYPFw~2~d~jF2t8SxnLSpGsvtpXUa4juXzQ09iHFEpgUk2GDwOYQ__",
      "https://media-hosting.imagekit.io//10a1e509374e44e1/WhatsApp%20Image%202025-01-15%20at%2013.47.24_4d996ccc.jpg?Expires=1832314615&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=WWyoWT~MYU~d96s0wCIyUvOpJuMlDO1kulPsNgJFplZO2vcUuFXMjgJVihvi-GBbI~2vD~qauA5QZ66~Pe2GWzJtOjxbMl1sv4gqAM37GlTaLVdWquG6F42nItj16l-mRRUquMrMEhY7mCUqe8OHVDXqxFTRFm3jCZdegeW6icHHemi6odxOZlUzBi~RKCdZKKo~GjAnNDNPgx5Da17pxhxE6SyaqISZ3LlVkjLuyUXmR3Ot05tuww9U4~njLbl5kcRgI6LORAVTzLbCyVRIyMkCK-FdOTJIcIOqC~ZKL12d5mkclS-S-S94uQcHQbcIcGJPzl~tVmm3YgxYSehBAw__",
      "https://media-hosting.imagekit.io//10a1e509374e44e1/WhatsApp%20Image%202025-01-15%20at%2013.47.24_4d996ccc.jpg?Expires=1832314615&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=WWyoWT~MYU~d96s0wCIyUvOpJuMlDO1kulPsNgJFplZO2vcUuFXMjgJVihvi-GBbI~2vD~qauA5QZ66~Pe2GWzJtOjxbMl1sv4gqAM37GlTaLVdWquG6F42nItj16l-mRRUquMrMEhY7mCUqe8OHVDXqxFTRFm3jCZdegeW6icHHemi6odxOZlUzBi~RKCdZKKo~GjAnNDNPgx5Da17pxhxE6SyaqISZ3LlVkjLuyUXmR3Ot05tuww9U4~njLbl5kcRgI6LORAVTzLbCyVRIyMkCK-FdOTJIcIOqC~ZKL12d5mkclS-S-S94uQcHQbcIcGJPzl~tVmm3YgxYSehBAw__"
    ],
    videos: [
      {
        url: "https://media-hosting.imagekit.io//9db066da46c14091/WhatsApp%20Video%202025-01-15%20at%2013.47.26_73c5a673.mp4?Expires=1832314615&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=OEn8isgfPiuGZngUN1ysWDCnQkLuQHlWfV2SvI-bE1-93HhIOnJx~ej5CEoOnWku-z3-D8VtOtaC5g39wg6Tcpxn-pT5CjZkgY5JOJ8RiHflJcWFm4i-6VIjbEF~XsGIODc8DSU~skzXQB~Lat8TJh4dLKd~SJjRLSB5aSNOl1Qx3TRTlZ9BxB7zRUxidMxpZgZK-y-XdD6B9ywqagDiGwFQF1elErGlAmkg-awhnbWEl53UOe9Kc8fQ4KJLMt9reMq0KofJ43LHXZ2acABO1ybQuhmRlbBZbcoopyhHzdWZSpd3fWFqRA8Y6w54YicWuRC3JgpNTO1k-nP-y37xYQ__"
      }
    ]
   },
   {
    id: 6,
    type: 'room',
    name: "غرفة للطلاب في بشكتاش",
    price: 17800,
    roomType: 'individual',
    preference: 'male',
    location: "Beşiktaş, Istanbul",
    coordinates: { lat: 41.0430, lng: 29.0082 },
    googleMapsUrl: "https://maps.google.com/maps?q=Akdoğan+Sk.+No:34+Beşiktaş",
    description: "غرفة لطلاب في شقة 2+1 في بيشكتاش موقعها مميز جدا في ميدان بيشكتاش",
    apartment: {
      type: "1+2"
    },
        deposit: {
      required: false,
      amount: 0,
      description: "لا يوجد تامين"
    },
    amenities: [
      "موقعها مميز جدا في ميدان بيشكتاش",
      "مطبخ مشترك",
      "انترنت",
      "تدفئة مركزية"
    ],
    image: "https://media-hosting.imagekit.io//c4fe4d102ae74899/Screenshot%202025-01-27%20122923.png?Expires=1832578206&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=TmdiqLClZiNNEgr3znllPWF4zDANd1lhEiHo~yxhVCJlZghJkIgsKzoqj7LbjyP80KqEy7dkhmWqv1844bPC46r5HCeZCtudOm3a2Hk11k0SSZdBjNE8LzeGA9aQMHpFBqC7jIXD9Dj7cloRX2v6YNfjSUYJ2F69yeEGrDL1rEvvrmbEDXS~Y~87tjN5G1bAcgtHylcwd-Wbjj3vL71EGepihBskESg12H5OjncQh0E5kRMrlHZNiBH6VS-shLrPtqtAYy7j7pjSZP2oT5QO9B-rt3s5bbfl-lA4CB-TvB9wGXEKR9rAbAiOrL95GeRxiymALPE6CcTgoC5QBF9IRQ__",
    images: [
      "https://media-hosting.imagekit.io//c4fe4d102ae74899/Screenshot%202025-01-27%20122923.png?Expires=1832578206&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=TmdiqLClZiNNEgr3znllPWF4zDANd1lhEiHo~yxhVCJlZghJkIgsKzoqj7LbjyP80KqEy7dkhmWqv1844bPC46r5HCeZCtudOm3a2Hk11k0SSZdBjNE8LzeGA9aQMHpFBqC7jIXD9Dj7cloRX2v6YNfjSUYJ2F69yeEGrDL1rEvvrmbEDXS~Y~87tjN5G1bAcgtHylcwd-Wbjj3vL71EGepihBskESg12H5OjncQh0E5kRMrlHZNiBH6VS-shLrPtqtAYy7j7pjSZP2oT5QO9B-rt3s5bbfl-lA4CB-TvB9wGXEKR9rAbAiOrL95GeRxiymALPE6CcTgoC5QBF9IRQ__",
     ],
    videos: [
      {
        url: "https://media-hosting.imagekit.io//c13ffa16a0ec4bcb/WhatsApp%20Video%202025-01-15%20at%2014.24.59_cb4b7306.mp4?Expires=1832315240&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wATOE4nR8Pmk3wW4vcM8khHJDQmPhH1H9znNxcShpX5aRh~dKn54sIXOxB~kAF-np1D9NzKNBbLQfXG3KEi5XRqjXoZNyuy1sDVhnSPvBSZFfBlYZ4lCKJ2oMH6j~T1uXkc0rBN0c6Yl9l21W0y2QmmykC1Lv-h2rUvVEnUWU1jEHeau4B6FmQ58pntnNIqUZSi2zLq6op251WiKos9bAiJ2k-kV7Eu8kmQYq5MDrxdDYplFh-av65B~v1MgNWruH2Jmex0KxeGWdMYE5iUqlDxicUQqCsXExVS3xgImLlNeZK7BPE8KUqd0QVHPyNzqeuAk~2qatY2cB~I4EI8iOQ__",
        thumbnail: "https://media-hosting.imagekit.io//e84cad1aa61d4de4/Screenshot%202025-01-27%20122737.png?Expires=1832578391&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wBdv62xWa6DI0mb05FzGsFQM8tLeMxCZpBYs3zool21G2IpR-N~3~STcoowB5Fs38TesyTHs~aE~KVjqQxLz-GRZkoK57iSOnqeV0RD-wIJvpr90SwsAbJQJzAFUgCa3VvGpKvutS04pnJugcqXtLp9fpSEj8YLgrJJoTpS3tESrdtLF1NBSXcNCe9tdY8phmjeRjd9zMqOpTQq1uWPaSyDOMQ9rXCO5Idc~b1-xdF0b1NJX6BePVFtAGsy3p2w4XUTK6Ta7Z9bsqRMAmJt0XWU6aewNsJ-MYIj8kk9Jez~nOQwDK-5HgyLps4xenEff75ai376kBCA3vB1dPMoMzA__"
      },
      {
        url: "https://media-hosting.imagekit.io//eee8c581ab124372/WhatsApp%20Video%202025-01-15%20at%2014.24.57_23766870.mp4?Expires=1832315240&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=LxdF72YGcVqWiJamytJ86Zo0WobvmSbGeJqQIBFpGAkL1yxa4618aGprUmm81zFixymRwujE~qjTVquK9TawVjg-qb8SVzRwrYuuiEGfVO3oPFgwHpjsl3Z9gnL5lso3~VEl~uh6lG0DEATOSznO6-yeOwGThqw7XfBdj3NCF3lQ79pB4o5CXhqH-QPn-Lwn7hrjwXqN3IF0ohEYEET92D5BmhSR~32XSK434hUVmf-CdFnB3m7fgMpUrFftK47nVIcp5q6gvG~gy5Zm5CvNPCj6gVvi1HUYC3kwNC2FifHejDqXc0egF4nD48NiJhUMED-fVdn4MgqBkbT8bhRB5w__",
        thumbnail: "https://media-hosting.imagekit.io//e84cad1aa61d4de4/Screenshot%202025-01-27%20122737.png?Expires=1832578391&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wBdv62xWa6DI0mb05FzGsFQM8tLeMxCZpBYs3zool21G2IpR-N~3~STcoowB5Fs38TesyTHs~aE~KVjqQxLz-GRZkoK57iSOnqeV0RD-wIJvpr90SwsAbJQJzAFUgCa3VvGpKvutS04pnJugcqXtLp9fpSEj8YLgrJJoTpS3tESrdtLF1NBSXcNCe9tdY8phmjeRjd9zMqOpTQq1uWPaSyDOMQ9rXCO5Idc~b1-xdF0b1NJX6BePVFtAGsy3p2w4XUTK6Ta7Z9bsqRMAmJt0XWU6aewNsJ-MYIj8kk9Jez~nOQwDK-5HgyLps4xenEff75ai376kBCA3vB1dPMoMzA__"

      }
    ]
   },
  {
    id: 7,
    type: 'room',
    name: "غرفة للطالبات في داود باشا",
    price: 8500,
    roomType: 'individual',
    preference: 'female',
    location: "Davutpaşa, Istanbul",
    coordinates: { lat: 41.0257, lng: 28.8932 },
    googleMapsUrl: "https://maps.app.goo.gl/rQ187H25cXx1v2bx5",
    description: "غرفة لطالبات في شقة 3+1 لا منطقة داود باشا بين مارتر وجيفيزليبا بعيدة عن مترو M1 خمس دقايق مشي",
    apartment: {
      type: "1+3"
    },
    amenities: [
      "قرب المترو M1",
      "مطبخ مشترك",
      "انترنت",
      "تدفئة مركزية"
    ],
   
    deposit: {
      required: false,
      description: "بدون تامين"
    },
   image: "https://media-hosting.imagekit.io//b6e8bab12d8149bc/WhatsApp%20Image%202025-01-15%20at%2014.32.27_dc7ff503.jpg?Expires=1832316757&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Vlm5KExGYkOE5t9RdY8bPzU-x4BApE3f9NsQoR7Hoc8Y2N5TocH7PbNlEbEA2CjtIy7rjQmeUmADvUGLE6Nm0OHGq02E1h5ZCTlcLrtFFPTQUzaT6UjPIH7N4of~kNGU-uNATmS2J67goE~ZqQvblS4V6wQG0cxJG~oK26RswoSp9prBH18eXysMY8xQfDdtuZKzO5~u0e1G8VlMPyIye4Luk5qfll~bGPGVihx3mW2wQXPWf5HDPIpgnIvy0yfvcNOovHkBO9DHzQR1C0BmgYy4I5iPNOtO9AyT3yWQ1zOqGq18jEB9lUVIOO8Fy7mXjO0yT~Bmd6lwz3BHnQS4mQ__",
    images: [
      "https://media-hosting.imagekit.io//b6e8bab12d8149bc/WhatsApp%20Image%202025-01-15%20at%2014.32.27_dc7ff503.jpg?Expires=1832316757&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Vlm5KExGYkOE5t9RdY8bPzU-x4BApE3f9NsQoR7Hoc8Y2N5TocH7PbNlEbEA2CjtIy7rjQmeUmADvUGLE6Nm0OHGq02E1h5ZCTlcLrtFFPTQUzaT6UjPIH7N4of~kNGU-uNATmS2J67goE~ZqQvblS4V6wQG0cxJG~oK26RswoSp9prBH18eXysMY8xQfDdtuZKzO5~u0e1G8VlMPyIye4Luk5qfll~bGPGVihx3mW2wQXPWf5HDPIpgnIvy0yfvcNOovHkBO9DHzQR1C0BmgYy4I5iPNOtO9AyT3yWQ1zOqGq18jEB9lUVIOO8Fy7mXjO0yT~Bmd6lwz3BHnQS4mQ__",
      "https://media-hosting.imagekit.io//60ffedbaf3774912/WhatsApp%20Image%202025-01-15%20at%2014.32.26_51827888.jpg?Expires=1832316757&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=t2l88FWqJqPH43jbv1xwtYOLJMJHJRdXVgkvC9xSEoixI0fldd9O0RFXp3yeS0nq64SWxKNdqe6bicJxQh5G333zNJJZpmVNr3RNHYoDdefKJfoOZcTi2sMDMkiDQVGWdRVHnA4a1Qwcw24TjvaEtKjeUW9PyjgvvdJ1YPr3~DOGKU7S9Oyw3Ozuasn-qKGo~n2yO-RmNpA6mkB9hW3oX3RtpVGWoATP0M503JV4nl47ilGOAeFHObW~AiPVbjfwfNFk7JhnSBAeHLKA49ShHB7jDuHdahS~YpLst0bcI8KpcDI8wncH0RiLPjNv4xu~3a5H6chIYNrUmjGZpndsvA__",
      "https://media-hosting.imagekit.io//65fcdeeb62f543ea/WhatsApp%20Image%202025-01-15%20at%2014.32.26_5e434c5a.jpg?Expires=1832316757&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=OXoHo8i3PeRccNJtZK0rNZ1s94EQDIkhvvPbexnSPOFtulcFiWnUO~s1Q3IQ~vYlk3PG8lTmA-00aKmWzt2JhKCm5zjo0Dv16jiKprQJy5FpM7WMBL2hag1rt48d6nn3NNAxNgyvvGPU377JrWrwqgGBekP9tMMWrl6TTe6xJWUvfWzauCY6aIjEcQ3uDBtin7LhaUEVXGmPNI1SVDiQuwH13B3dzTvEa8EsbrdXxYUGikLO735RUuPSNBEbd0tp6~dybouHXgdex-jehFLVS1Mi-PAt~DP2Ntd8-PE1YoSywpTAgh1FU3ILjuq6a9aMfLdfvP6K~STbXWUOOGMYAA__"
    ],
    videos: [
      {
        url: "https://media-hosting.imagekit.io//de0de4cceb7f48e5/WhatsApp%20Video%202025-01-15%20at%2014.32.28_5118e0a4.mp4?Expires=1832316757&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=MCInlNBNetRJVzzLvwx3eoxn5-w2yBcA0Cfnce4H4Sceu3mZJBQHXRs0tGfbbYJt4aQkHZgb1nUCo4EoOQqjxUHUx1hfAw80naLykMqBR2HwDFn3nSytDl6ncWMVeL7RzVnpBJ~FGSeHLrGylYc~cVussgWnnKtm0n1C21e~FibSd~A7C9rp3bIsbqe9f4mKpwX8Vxgo6wvAtpBfZbbSVrn2eTk7lR-VQhKCOJ~iOaBmZc4Pr-bnEPwUdjG-bMUfCYiZyncPy5ACgyB1lYGZFdT2KhX7QqLDSUwR6r~uqUTjMjDS8tHTce3lbPPHIzZp1kfCpo~1knOYZNuiWN0F8A__"
      }
    ]
   },
  {
    id: 8,
    type: 'room',
    name: "غرفة ثنائية في افجيلار",
    price: 5000,
    roomType: 'shared',
    preference: 'male',
    location: "Avcılar, Istanbul",
    coordinates: { lat: 40.989, lng: 28.723 },
    googleMapsUrl: "https://maps.app.goo.gl/k46gf6ejmSVRmxcr9",
    description: "متوفر سريرين في غرفة ثنائية فاضية بالكامل في افجيلار في شقة 3+1 تبعد عن مترو M1A 10 دقائق فقط",
    apartment: {
      type: "1+3"
    },
    rooms: {
      single: {
        price: 1000,
        available: true
      },
      double: {
        price: 5000,
        available: true
      }
    },
    amenities: [
      "قرب المترو M1A",
      "مطبخ مشترك",
      "انترنت",
      "تدفئة مركزية"
    ],
    deposit: {
      required: true,
      amount: 5000,
      description: "تامين شهر"
    },
    utilities: {
      included: false,
      description: "غير شامل فواتير"
    },

    image: "https://media-hosting.imagekit.io//5301f45156a94dfc/WhatsApp%20Image%202025-01-15%20at%2014.44.54_e112ee75.jpg?Expires=1832317315&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=fN56SX44wua4OUgsFxaxFqu8~oh0OSJKzAV3gWrHsApPr2TD94RxXzmzQwcKy6ODOaEOLmVsl3t9XVXZKWOY~NGZZyLbMxQcYc2f5iR6o1yizJC-InXqeI6AX216qkZw8qw6oTbcmfbVaZJuj8HqG-6sOyHhmgWRhHSQWLIa53OLgkdOFNdRI8eltEs7QJ5xmgeChw4t9rEfsXz1QcQ-g2wCTCT1SmwyzeIlX1RKGbVNw3ogyRFQhliCq~UvXCL87CB9-U6wuYzbJafRqznpZeJVf7xOj9gM5~5EYeEpPv7a3wBeP-VIueo3roMgUuOu4fSNImtZGYzjXFhxRCfmPQ__",
    images: [
      "https://media-hosting.imagekit.io//5301f45156a94dfc/WhatsApp%20Image%202025-01-15%20at%2014.44.54_e112ee75.jpg?Expires=1832317315&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=fN56SX44wua4OUgsFxaxFqu8~oh0OSJKzAV3gWrHsApPr2TD94RxXzmzQwcKy6ODOaEOLmVsl3t9XVXZKWOY~NGZZyLbMxQcYc2f5iR6o1yizJC-InXqeI6AX216qkZw8qw6oTbcmfbVaZJuj8HqG-6sOyHhmgWRhHSQWLIa53OLgkdOFNdRI8eltEs7QJ5xmgeChw4t9rEfsXz1QcQ-g2wCTCT1SmwyzeIlX1RKGbVNw3ogyRFQhliCq~UvXCL87CB9-U6wuYzbJafRqznpZeJVf7xOj9gM5~5EYeEpPv7a3wBeP-VIueo3roMgUuOu4fSNImtZGYzjXFhxRCfmPQ__",
      "https://media-hosting.imagekit.io//cc529baccb214120/WhatsApp%20Image%202025-01-15%20at%2014.44.53_39c7470a.jpg?Expires=1832317315&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=h4lq9x9uYgAmPNpwMXx56lip27rryRuwcX2m97HLqIlmTXD0nVxcLnCNLZzeJuIAc-3LUvPRhRj2VVaGuqj9OUDwD~FMd4AqR2Qw93k5pf-9Ax6bjk0NdPsZtz3tj-qX~hiw6BR0P50zLWiee~eEjsF-9NZcEwkWJ1oMNwyfmvGmSg0d0bVU3ouFnR5dLSM-QjX2NGUJgw-vkQGvrhC5b63KpSWO84mSXHJ-TGGeLGgycSTAMaMJfeXeACfDTFIzI6lAH1dHZU74dZpUgNbh3g91IqWwjie1uEUKQgXozk5ePFuAmR1e-aM63LOZZVRVNhSZVjYxI-sByhECqaSCjg__",
      "https://media-hosting.imagekit.io//446f18542a944200/WhatsApp%20Image%202025-01-15%20at%2014.44.57_21545d49.jpg?Expires=1832317315&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=bN53i~URo1-De0X1VpVdBFANsz61AMi2Gehq6gygn1OTCplMTnE81GkEiJ7Yj602CASda9msylvju7VqJjUvuX7PfBTt~a6Xdv77U39GrXjCZDgSe5q-16HOchJnpAws4Gz3-YDZD-QMUl3ME2LgwSQMrXINeCPf5YvRtxK07bVrPCYw1UEbHPbjT50CrfqZFbZn-lkiyfAYl9g~EBCwyJbq-cNpWhzjbzQAp8PBbvcR58kNw4wCRiRkfIsrZuBTbP2YNTGCarYZcYPOZxEeStAAxu-QYapEhLnOVRIN3yygUi73CGuH3Uw5e-7a9I0LYwdMOl0Upts-nJJYYJpAFg__",
      "https://media-hosting.imagekit.io//efbfe9b9b604436a/WhatsApp%20Image%202025-01-15%20at%2014.44.57_799e931d.jpg?Expires=1832317315&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=muaP0wa7QP1Qvc~Oqjw5Rz4AoMGJSM8tNnWMmrYMpquVVBqBK01CGoq~JcnUhR6JJi-vya6uU~NrGPJNkROE49w~lNnWOJAxkqD9b4E1uGV8bm2OZk-dGXlNNpvGKFhIKb7mkzCPxljUuPn9zmJMbA493olKTWsuNK8KmRsYPvOt-yDgVrWqw1EP9s3ZANuasS33fJtTQYSG56BeNGkK66SxadWJIxMBLIDfPJCDuIFk4Ey6kXlg08~oKmAkX37so-Vfb-4sO4e3sf-CcyVHE1L0FcNk0-79DE8IA9KVuCPJ7s2KTrBxxEn4CITINud8EWRf4bopC3JVMFunnVWbEw__",
      "https://media-hosting.imagekit.io//660c9b58f0454ea6/WhatsApp%20Image%202025-01-15%20at%2014.44.57_4db04db7.jpg?Expires=1832317315&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=XmCamSxu2jv4WJWSo36IeQdKeREWYPtnvDG2PUwGmRtSDvFTlGm3lyP29F1sIWw2ZZkjxcSH98wdj9pviCAQVWwAihxuOuIPLIdSOtxsBIVY262SEcdD9UH90SgY6XQvCyTM8GcpzJ7tftWksdvWENzGQ~ShZed2sOuUEt8LbbIbcp3MlEqtfuunYf6zLoX-IrcoTgHObl9r0d4744Y4MaPZr2QyHmSQdtdawpobbbtgJInucqx0TUXxF69A6F~~1M5zV27nri4~7Kdlj6JIu~t7y0THsQC1XelKFe2IrzjxCo~iPziHquGDdkCbFmiwGETkCHg6LwmqRrFqYJpisw__",
      "https://media-hosting.imagekit.io//f714c6983de64a75/WhatsApp%20Image%202025-01-15%20at%2014.44.56_a2dc6e93.jpg?Expires=1832317315&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=oOQDB9XOSqvomBpyapGvQkRWwe6~jUxzBphjTXRvCuy1S-T1RVLErXr6gXvNXq5nV0NXUgc0U2QTn6U678kHOlZorPhULF3AMiG3RtsTu0lHITHcbpGD5bCxKE9s-vd3UwOXuVQrK2xry5UjLE20HF~5tVpXi3ticy~GPbpZRp38C7yqDQB6QElZi~YZ5xScuD8MLSm4YZLakKUuZV15hC-DqSknri5QjH01HzkgMPm0YU6UP9isMr3YuGdc4l9Z1OLwewiW4mqGxF6bJfKZqLdW~cBWHpI-d2Oy6J6G7j8WjVi-VB58oG021cFZ4Q9asuPrmbUkQ0guhgW~OnXNVw__",
    ],
    videos: []
   },
   {
    id: 9,
    type: 'room',
    name: "غرفة فردية في افجيلار",
    price: 7000,
    roomType: 'individual',
    preference: 'male',
    location: "Avcılar, Istanbul",
    coordinates: { lat: 40.980111, lng: 28.734722 },
    googleMapsUrl: "https://maps.google.com/?q=40.980111,28.734722",
    description: "متوفر غرفة فردية في افجيلار في شقة 2+1 تبعد عن متروبوس 5 دقائق فقط",
    apartment: {
      type: "1+2"
    },
    amenities: [
      "قرب المتروبوس",
      "مطبخ مشترك",
      "انترنت",
      "تدفئة مركزية"
    ],
    deposit: {
      required: true,
      amount: 5000,
      description: "5000 تأمين"
    },
   image: "https://media-hosting.imagekit.io//a3e557ceb61843eb/WhatsApp%20Image%202025-01-15%20at%2015.43.21_789d3009.jpg?Expires=1832317767&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=H9yaWoxI1ymDkF6jiIBaOYzoIPW8l1GY7b3EcQvJ5Hp-VZu2GUTww4t03uvdM7XKo97ieDYjkU-EHSNZj1ymzf1IjPaOBj5dbzLNYw96EywQuzxumpkpRvpPh32DGUczyG6G4RHBMtTRwvy0ft-zIVlNAn-HiMgelCh2bYHlujSWm8Q1zT3T7ovayWIZTjQLY8ZS0jbBMVXm921NvqpZij38Mxq8RhWmIfHM~G4iBc2EWdvP1-EYaJG9Yw0FZm6NaVyH8jxzAJ0h6IibaMgpMPJPhnyzR7w2IwlOU7DDANgYVF14U5rUYJA6h-zAbPmobFglgvb2dCyYrsXU8ymWQg__",
    images: [
      "https://media-hosting.imagekit.io//6ea4cc9b95624f98/WhatsApp%20Image%202025-01-15%20at%2015.43.26_324fdec6.jpg?Expires=1832317768&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=VTPEfoqFEhGyQPy94ZwyFFtcjfpFJSsIVnkx9CtjEE8GdDm6KcvSWYWSRl9unhmqxq9m0POWNHkUa3SC1ONrMfFCxcQ-GgBn8ZLwQkvLJvXyCN8PW3r~fgn71V9bL7K-7Mf8NFOiYy5LGV1TIcTJ3I9e9yZRyLjC93ytmoE6ZeV58ddek1FrQ65tyfZCuNZGn29U0K1SIX-qLplQl5oMmO1K3iMTGkOPLc444APBwFX5zS05FV45xpD7TxphcHBPn910DvB8GfTB0f7MoSmafLme7YYmYOh0aWcirabsQwFKQQpx2rudweCgkY1rHGEgW~B6b~~RrwMf7JRrZWVEtA__",
      "https://media-hosting.imagekit.io//a5b922f11eac47a4/WhatsApp%20Image%202025-01-15%20at%2015.43.25_f1af33e8.jpg?Expires=1832317767&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Oh-Lk59ga1QyDYVuC9CV6pitoT9ljqHTrbuTfn5pF-QC3mpXR9UDHkzoFlXpiuzSIhNuZ69qYTEcDAz7tLbT5hC~A-e7k5oywRv9PXeqQQT4FlPAm1V~twhdGK5jcp8mEJv-VY~DTC8RBn7J5Jc-lgRG~4XR5lJW~4JSCzQ6loM-tot0d6jNun5LTB6UdC5hyLOm1hGZ4Z1OJfa~ZnCU6Ctf9cuStuqXdeb50iS77IJ5O-4UGbjVV7YsAOhXSJBX2WT3w~luVSyrBQOi0EFoEazsxUonP820oBnn~5GIumcmoemwVQVsRhWgFYTp2k0k1RtQyQ7Elm~iu0VOOEJXIg__",
      "https://media-hosting.imagekit.io//3101d3d3fd314631/WhatsApp%20Image%202025-01-15%20at%2015.43.25_d6af0109.jpg?Expires=1832317767&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=sHnPHgb~z~l-2zo6VOB5Tz0z7d83OKJ~tTJrcakV9I8se09aXW3Z7fCRWuOoHiTV1-rNaj43OKSbC-lRUfuj9oM34ooWzh1zD6boI~TkmhRTH2Hbmd1bQAR34YtT6pjnUZcng3X5Xt27165YuVLPJ4z-2f7WrIVfbs7oKgV528gdp3E31TTBh64t5m11PBvNM4qeoGCCOyijl-97RzCCsNxFOcesnq8UBRVE1FrC3NeZ876m3Eh39ooWM5CK6vVINwHbYwyvHukX46Zj4XiWRqZdTiL~KwhUsRkKT6B~5WDxphuEl9I7MaA8etH1EPdDH8D-SpCiu3FHB~ZMqTaozQ__",
      "https://media-hosting.imagekit.io//af38c574ae1846ab/WhatsApp%20Image%202025-01-15%20at%2015.43.25_8ae26e61.jpg?Expires=1832317767&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=WPi~vzsyVg8~pQ2rfyCEgq~vJJeVrLmKgGZ5~FYcBK-iCw2ec6NdMWf96P5Vjnnqu48709jtjUkK3BAGawQFYf-4NemUZ9Ih2bseF9P7Zo5AGjTkMJA3KPWLCUdAR6s2bIN8-YJIFaMxLlNL6U6Ivh5I-eBfyMk8BeYZFiKgQjeFVs-PV0Fk5av0oOJJrUalEl9f9f24md9iqCQStUeCJF8pXKj9JjGKfjDUE379NgbNj2euLedAlu8gLp8cFyYffoz4uldWZr4EtYOIghVZMI6ST5Z3cSOlZJ9gBoQOQt8V735JaVgjQrZ0cjx2hVJE8Zqc5Ng7GYy39zJgsH~pIw__",
      "https://media-hosting.imagekit.io//f2efb3d9c9f948c9/WhatsApp%20Image%202025-01-15%20at%2015.43.25_6b640941.jpg?Expires=1832317767&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=gTzcNmbZPV8rMMDzmEmAu4AzipGnbI~ok-f81WlrOIU1xcxaOqu85IA2Wv5GCBxd9W0zYacF6rQWC6YtjhJxat4sT0F077f2yFFO1dnRJfrdXaMOLUWuKcPXj-sAxDpOMmkfrSTV5oke8YRr82cIW-c3gtixrErv9MUheX7kRcdksbLtGtu9zA~UukV3TwqrEKNTTW6UnGVAp743~B1r712oIII1Yktqo9FQmQABYq8N1nEM1lwjXp1BXng1WYz-BjTAFiQuoYu7zdb0R170VuF3iwXIE-sNDNTC3nqu26Hvd~qKQW7bgVxG2wxc~HknSsAP4FPQPwVEBeechN0vSg__",
      "https://media-hosting.imagekit.io//f2efb3d9c9f948c9/WhatsApp%20Image%202025-01-15%20at%2015.43.25_6b640941.jpg?Expires=1832317767&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=gTzcNmbZPV8rMMDzmEmAu4AzipGnbI~ok-f81WlrOIU1xcxaOqu85IA2Wv5GCBxd9W0zYacF6rQWC6YtjhJxat4sT0F077f2yFFO1dnRJfrdXaMOLUWuKcPXj-sAxDpOMmkfrSTV5oke8YRr82cIW-c3gtixrErv9MUheX7kRcdksbLtGtu9zA~UukV3TwqrEKNTTW6UnGVAp743~B1r712oIII1Yktqo9FQmQABYq8N1nEM1lwjXp1BXng1WYz-BjTAFiQuoYu7zdb0R170VuF3iwXIE-sNDNTC3nqu26Hvd~qKQW7bgVxG2wxc~HknSsAP4FPQPwVEBeechN0vSg__",
      "https://media-hosting.imagekit.io//a0d72d327131423d/WhatsApp%20Image%202025-01-15%20at%2015.43.24_44a807ac.jpg?Expires=1832317767&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=MX12X0sZg6-2Jgs9ghU0XUpAQNuYl0qaDwy~s2iZBTdxv04rylcGypgHxqzucKA~U-lQAg~D9Jii8dtQjbLC6PXg5h~YN92LubRmrcqJv6QsPhWR6OsTIPmiuWFxSC1WqdcrOpuYf0slavcsQo4KT6eNp1t4klS8IuGaVA9mgEmUlXEqf3ZzYq~FVhBBoC91JzzpuRfT9A3ZFB-YXeYoI5THYe1N2KYWaQ2wqPsLdKuXdkf5Y1Sn0k4e4IG40Pr~wzzKmhbPoz~vQBZK~uVFvO3lQuVUoTX-ljjHk8kJmxFPEbdBif8fdhVMSp-2s2AmX9dTaGb6DmWW03s~26VEbg__",
      "https://media-hosting.imagekit.io//e4b1507a24764ac5/WhatsApp%20Image%202025-01-15%20at%2015.43.24_8fcab0c8.jpg?Expires=1832317767&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=UXUy8nSOHyFsfn6bnKpa4OFoawXUbI98wTJ9KjQMm9Xmi5r4RqTDl4vL5KO4Squha25IpjMcJcqGWtdEN2qwsuIIPvTcfOgecDaT~oqC0gUTpjLd9KvhJ-o18PxFXqLik~6SNurrAElsSSyRXRl~KvcbshmxqmEgy9nBm8gLYYJ3cNQi4AQK9McYqq0LqqtFME2-HqCSH4uHdeFXnM2nJzzoF-x05AyeA5BRFg~9tQEQM8g~wZrIczQ9EUw5-mLTNqd5m5GVqOnIQ2ISDGMo~-l6SJCpJMSh-61lK5Q13wQmFiDfpUSyS9MoYSvSXbyYqTZoVm35knpxRm6A8~1TcQ__",
      "https://media-hosting.imagekit.io//6af6cc825fa14a56/WhatsApp%20Image%202025-01-15%20at%2015.43.23_c811f90f.jpg?Expires=1832317767&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=C29JwRpwUQ4TtpydZo7vmU3e6qeVUU0EbC6Qmr05i3jqxzGjM-qXzuF1RaiW7zxL7mcxtqD9IrcZRPPTxEnjRnS9rehvmhxN1Svx8BEx~mF6kNnIhLdfSjoUehHhc2tU3YHbEuQJXH5Agb68h0bGMxnChSEPkN5H2tvXjxAaE4jkwC4kg88DyYFN8j1EaJL0ZaOaYCj7v8hwRXS07F5P9k08HCULF2btmWvLjHmM5-dSt49KVXzgwSiBqTSB~g3QvnONGSiQyCu7k6u8TDigvuFeuG-mhcZL7p2mBTr4FH9ybTpd0i0Xk~y5ASzuyoMdjxX8Kp1Vl~13g2bbz~yrKw__",
      "https://media-hosting.imagekit.io//beea65c4b9d24f0c/WhatsApp%20Image%202025-01-15%20at%2015.43.23_9714f72e.jpg?Expires=1832317767&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=hOYd9x7IiwI-L4kJvJ8m-68sMfqROrHFVWOBZwbCxDfYbbhMQPlgfYCkSK1loBH48d2cq0Ctd84nCo9DbflKBzTU-tMkhEgmnGAaKLeih~FPsuWLgVLybf47OES-TKsXy8KJJlG8KzVG3nSUtHdOUFuAar9xSIje8tFZm3M9Y9RhaBZK4RoDwEBbCCQTE2VnNyBYKvLp46uyjDwtHeOcnygxCPenVibK5JiJOPhdQqk17AKkqooUzIT5CpwYYufBUdRNfLv6mx5G04jUKsSkVrbcki6uDflaXiAz62Sp0zoWNchb3~agl9dvo3hAdQlpczU8guNm5b59q9zG~N3oiw__",
      "https://media-hosting.imagekit.io//4e952e23956649be/WhatsApp%20Image%202025-01-15%20at%2015.43.23_5eb15aa3.jpg?Expires=1832317767&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=yOPsmmndJyu3jZgh2lGJtg4Pz1WGjHtQOCE4MGvVIuZ8GhOehKfYpl342COkOam~lN-76fLmIm3eNeZJHsIsl9vaKb-B7RndcDDa0keu8RXriWH1jHwFGKMUiIT9mLhal~1mQtUUhaxA6E54YzAXCoEbrzgq7274ARp7fRHk-b3Y8Owk3LAS1b9vgFyvLKpr99mytCnfJLb2p3PqnIhPMG-vNqb83x4-OTAIMPh9hNjDcz9kgDY5N2awBco5zravAyfLbOvU5GGN8MkdCmelsmvm7IH9X-mV4NfpH~yZMvBwKhEFxQxrw2X8KhlQYa73ZTP1ENOInKLdducvgXQDJg__",
      "https://media-hosting.imagekit.io//b55ab328c0ad44a7/WhatsApp%20Image%202025-01-15%20at%2015.43.23_2d0c94a6.jpg?Expires=1832317767&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=vCxtT84yd551ayAwunPppu6kbxDS0-HyfiHxr2n24o9kdXzD84vIp0Q6BaTM8AO1ROhusgxuU7S8CWxoOVtuQEWEA1RR7zuPgmlQ8MszzpLCujKAc9WZ2a5Hi2q4NiBEQTi7IMSsqAebPP08Nc3Kr8XyWSJ2SDayeCVkyqqm6cFRM-63FA~6Z84~WjH0TGBoWKHCvKsTR9BUEQ5spyriwoseep~zMgB-pLgaVaCQbcTomS7aHrZHoGxtDIlrFSMgTMQvHi1MsRH0u9yVRf04QS~WRxQ56I1Ytp9dNnDIyf-hCsz-oRtwhrMCiFnzQlVJSMBAcZJto2T8b-3cfSDUQg__",
      "https://media-hosting.imagekit.io//0fd2768e314644df/WhatsApp%20Image%202025-01-15%20at%2015.43.22_6b942345.jpg?Expires=1832317767&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=0MM-sd0bZ7DwTxUvI3tR0kvKwO6pKJ2qVOL~L5Ed~ITIyKQWa-dorCvHbdzgtMpVCXC-VvCFFf0B43Zt0S6ayheVCCT4h2gerZ~uKbl7uujgztil3WgllZhiw5Yt2fEmWDBLMvSnS8W9nVb0F~cbHvoGOHdle8O1RFQnBNct7ESSZKYx-MKcNHCjqJ3D6tC9r6ZTqajoqkMwIpWHHCFLeDIH3YXsrC8wvZEhb2aLnmKX9A94tDn1hM2i-FqJCHNyLONTbSN59-ZKVxbyct0lH0fEQr~gzV~M70N1mGTrREyBH7Y54Kzp9GBSRFUpKaJEZevTbwYCyTfGvJyI1xlQmg__",
      "https://media-hosting.imagekit.io//dc8ee31270a049d4/WhatsApp%20Image%202025-01-15%20at%2015.43.22_4fff0caa.jpg?Expires=1832317767&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Y3y9R8CSIUazFNwlVIZRkNcq2QBMMxULcnNXG-GQUrpFM00uHQIAeCBW6eUX0N7UTp4oh5hjYu7MEZ~WrDSVoBt8AGfrQ5Az6lsx-FbSmQXFAamyNUC5~Dj83FA81u9ae8DuDoBSR7cughflhwGMmbNlarwBluneNbSXrpzFDbtvgJWRl1IQLXF9kt7vL8mAhZbpiVJZl6xIHzQ6cPOElIARIaHsVLOS-IAvNfizzR0WnnDanEaC6ivvT5AFCVciLPXQkzrSJcZTFZ0MnQ2MVPDenpNASQDlEWLjDDMYNHAups33YVIAR8nPew3ln7D2Ck4OxV6ARzbfxWVYt5KE9w__",
      "https://media-hosting.imagekit.io//669bcb7ebaec415d/WhatsApp%20Image%202025-01-15%20at%2015.43.22_2f000ef0.jpg?Expires=1832317767&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=SNVp557aVoNkEDHPaHQXO2wumyf210~eZ~dEIq0hBTKQxqDxy8avjGw67bkXJ~3h5cxCe1F9LzZaFQrqGl7BIB3qc33K-Z8jJCVSl5RgVFs3TTynlOjfXbiBjLHiNVgCsdftKd9gQeUkMssH6ztclbag4mC4Mn5dQkjsGQ3B1ixG8asKtsXvTl65LPPHqcc~Nil--cYksjCzkPY-PAcIQAkKhbByx5L68tswPysi7jphZkKbZn6sdvEvTdnurAkR498~yd2JrSYTTntU-6H2-CKsf7gabGGur2WYqMtcWhiNFf04~tmvD8QnOkY5~JhFN3ewuLA18LE5IsZbYayPgg__",
      "https://media-hosting.imagekit.io//8fd9f1a7522b48fd/WhatsApp%20Image%202025-01-15%20at%2015.43.21_99128dad.jpg?Expires=1832317767&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=P3ysjvy-eRSKVjyVLRxXokMPT7P967pYYawc0lmtDNhPJawSRBNwnOxG495czq3PGhSW-KRq8yXDCrfJj7Eh1spxwZ0t1ON4712bZgvRaJsFnlHRCw-L~P6H7Upqxnckb8Z2Hhf9PivrNzOuz8LWssp8tIWPECdJtFQ2n1uRmnZJxjiC1vOK49ZWPbrI~J5Rrhh1t24NPwvpzchFcWaDDYAVWTN8IYoOrFNpi3NKKgsG4xQH7Err9AmXkvUz6QzKfs5SKKsueLhntm8f6JxpSgFrnI4xGF0AQiAh8f8IFYVwmWuy5DBY2pL43dFKssnjoflCSKUaPJJnoZx5DsjcAw__",
      "https://media-hosting.imagekit.io//a3e557ceb61843eb/WhatsApp%20Image%202025-01-15%20at%2015.43.21_789d3009.jpg?Expires=1832317767&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=H9yaWoxI1ymDkF6jiIBaOYzoIPW8l1GY7b3EcQvJ5Hp-VZu2GUTww4t03uvdM7XKo97ieDYjkU-EHSNZj1ymzf1IjPaOBj5dbzLNYw96EywQuzxumpkpRvpPh32DGUczyG6G4RHBMtTRwvy0ft-zIVlNAn-HiMgelCh2bYHlujSWm8Q1zT3T7ovayWIZTjQLY8ZS0jbBMVXm921NvqpZij38Mxq8RhWmIfHM~G4iBc2EWdvP1-EYaJG9Yw0FZm6NaVyH8jxzAJ0h6IibaMgpMPJPhnyzR7w2IwlOU7DDANgYVF14U5rUYJA6h-zAbPmobFglgvb2dCyYrsXU8ymWQg__"
    ],
    videos: [
      {
        url: "https://media-hosting.imagekit.io//3682d1c5ea284ec8/WhatsApp%20Video%202025-01-15%20at%2015.43.26_9da7c08d.mp4?Expires=1832317768&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=HdKxkFPG~Nh~H~3Ddsc7dirjfOyTgAtTjCkRzI8gElzzELpSRQlSAucY~dlR0K-OWlqag19X58RQe4LaPA4veJA9xxdTq43skUwRa4JuPdC9mJHdgh-EzGd5feK0Ets0uLgTkhUNNAV3BJvzKVcg~315nt8cuoB-h52cyCBUx42lrwUWB85u72n9p94bTNyh0AyfMSgnF0j31aNq1MTkbtZ~qx~3b24i4pnPyqhjOJo4ZvHafumz22XU5Oi05k9HlKszzcyIsxbTmXPC0rrS8w7b-G-5vtU00eAn~e9GDnz5cS0gy2h7Bk9oGCBRJjMJvLE0aLqvjR2tW7f5r~MOGw__"
      }
    ]
   },
   {
    id: 10,
    type: 'room',
    preference: 'male',
    name: "غرفة فردية في كتهانة",
    price: 9000,
    roomType: 'individual',
    location: "Kâğıthane, Istanbul",
    coordinates: { lat: 41.099306, lng: 28.990417 },
    googleMapsUrl: "https://maps.google.com/?q=41.099306,28.990417",
    description: "متوفر غرفة فردية في كتهانة في شقة 3+1 بعيده عن اطلس ١٠ دقائق بيت ثلاث غرف وصاله ، كامل من كل شيء مطبخ مكينه قهوه قلايه هوائيه مكينت توست غساله مواعين",
    apartment: {
      type: "3+1",
    },
   
    deposit: {
      required: false,
      description: "بدون تامين"
    },
    amenities: [
      "بعيده عن اطلس ١٠ دقائق",
      "مكينه قهوه",
      "قلايه هوائيه",
      "مكينت توست",
      "غساله مواعين"
    ],
   image: "https://media-hosting.imagekit.io//ad5839e83aa84a23/WhatsApp%20Image%202025-01-15%20at%2016.00.46_23ff0b59.jpg?Expires=1832318117&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=y9h61AWwSP629L4Mq9HZiawzMZWC9AbeBra65g5mQW2u8Lblmzzkfwmp3nvwfV0UoPLJVTFVprDToPAc8Wq27m0UHyshoG7pPGK-WqYe6q4YNmCLgiKDE~Us57FXEkCIs3bIx3G0CHfUtD7dKEggbJ~FHpWzYaXrSiFXr6s1OOIIlnVRgbWLZAPdnPcNzAuZTOQ8Z6XQhEVDktgNbrAy2ssgiXXDfPIqt7jjl1bsmKImUx4fCTyB6YQ6fVrmC~1WyZdExI5wjLWOu251Dao~h61OeZgktnSb8rdBq4WDMlbT0ivKTEvbgCNYRUMu8neXM2HMN28Xi1GRY7qz8Atw3Q__",
    images: [
      "https://media-hosting.imagekit.io//13bb3b2962894a1f/WhatsApp%20Image%202025-01-15%20at%2016.00.46_24df42c4.jpg?Expires=1832318117&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=P25x5-Vo~9ZaTquceAYrK2xh-FR8TEJxdjqk12NjhqDoOQxbbuktPXtr7Ot7K84MSQQ4R2jnEVYJXNJgI9CpfaIOwuz5vg8tvpUiSOvMSwl1b41cyn31ZvzVO4ARvXAubqZe9MrEU640KLxTKPB0xS57H4OznebnbyhJgwpOATeQ3nRTmFG1McRBdszVHMiMGDZbYQMuhVW~pIpIpmVp3yg0sQZXChjUxgHD36COjTdOvtM6IOOluKpkYf-L28oT1ZC--51pwYvBFuqLmd91FGBA2VzMQXhbd0h0WDZWIuFIbZ8sHcbr7pRE0NjvtIDvMNZIxwPTKzNHx2z1nI0lhg__",
      "https://media-hosting.imagekit.io//ad5839e83aa84a23/WhatsApp%20Image%202025-01-15%20at%2016.00.46_23ff0b59.jpg?Expires=1832318117&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=y9h61AWwSP629L4Mq9HZiawzMZWC9AbeBra65g5mQW2u8Lblmzzkfwmp3nvwfV0UoPLJVTFVprDToPAc8Wq27m0UHyshoG7pPGK-WqYe6q4YNmCLgiKDE~Us57FXEkCIs3bIx3G0CHfUtD7dKEggbJ~FHpWzYaXrSiFXr6s1OOIIlnVRgbWLZAPdnPcNzAuZTOQ8Z6XQhEVDktgNbrAy2ssgiXXDfPIqt7jjl1bsmKImUx4fCTyB6YQ6fVrmC~1WyZdExI5wjLWOu251Dao~h61OeZgktnSb8rdBq4WDMlbT0ivKTEvbgCNYRUMu8neXM2HMN28Xi1GRY7qz8Atw3Q__",
      "https://media-hosting.imagekit.io//7ebebf8c31b34d66/WhatsApp%20Image%202025-01-15%20at%2016.00.46_04c996fd.jpg?Expires=1832318117&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=1z817CCCwmt4Z17komMUqsppixV7~omAIJS6qo5xiCGkqp2ZdbBYZddLOpQ0ElQABKXsaeceg7yLKpsBdYLTRI4UnT30MkQbqJkHazLjpGwEWIMRVkFRBWXd2P-WoMRYA97DF5G1mozXJgmLOW8dHIeprKl0nx-AXy1W7HJ5tI0c306E2yWTEWRvKdTWojjAZ7w5JW40BmpB4N3HbfgFPvLl46Dj6hrKs0cLV30L41PHNUjgJADbTlqiKOM5EzkYO3eKoHqK2mh0qnh0zaQpyOm6YljAjB8IgUMhmSQFxH5pIIBDRJsRIQcpXO8b5r25g1kD1Eu811tccW5LUZv28A__"
    ],
    videos: [
      {
        url: "https://media-hosting.imagekit.io//389e0efc81df446c/WhatsApp%20Video%202025-01-15%20at%2016.00.46_f53bbe6d.mp4?Expires=1832318117&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=M-hnWasuTNqTGQ82Hn4z2iCE2REIC3EjCRG3XcqQ~aTwioXL4ZB06PeeIAS80OOTjismP~vBI7EUkDexkyhuv2RMxZcAAsOb4vs18~hbQT1BxHHvIjV3M46pGbcMDrKP316uaDSGSuBAopM~leUdqxIOynlCeHeQw0l13R2n3spTdIiT5q3p28yqONRSHB1aTR2ruR8Zy4q96mkjEMD4jwzt806Gjr3pWTJ20CzpmOGEbfReOLXhuhopSmptN~VInh4BnnVmx0HEdPCQk9xtIjDQl4U0O-7L96vo~yJLsPsL-6STQRA7JwYbNP~7wrkcKC2t7YrTF~e~bD1DKTalxQ__"
      }
    ]
   },
   {
    id: 11,  
    type: 'room',
    preference: 'male',
    name: "غرفة فردية بطابقين في علي بي كوي",
    price: 10000,
    roomType: 'individual',
    location: "Alibeyköy, Istanbul",
    coordinates: { lat: 41.078500, lng: 28.947944 },
    googleMapsUrl: "https://maps.google.com/?q=41.078500,28.947944",
    description: "متوفر غرفة فردية للطلاب في علي بي كوي Alibeyköy في شقة 2+1 بعيده عن تبعد عن جامعة اطلس ١٠ دقائق",
    apartment: {
      type: "2+1",
    },
    deposit: {
      required: false,
      description: "لا يوجد تامين"
    },
    amenities: [
      "تبعد عن جامعة اطلس ١٠ دقائق",
      "قريبة على مترو M5 & T5",
      "مطبخ مشترك",
      "انترنت",
      "تدفئة مركزية"
    ],
   image: "https://media-hosting.imagekit.io//422ceec265f44748/WhatsApp%20Image%202025-01-15%20at%2016.21.46_7a1582c3.jpg?Expires=1832318518&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=jKJXkSP8XiOOkKh06-sMA00E9eoi~1FpzpYQv1e-QJq9xYGBQ5eqsf75lcwdj~lYjJyNyu7UiOXj2yxInB07uBXf2wJTGkNklGhxc5FDlCQzpQH9TdcJzIIKk68Ua8JESK7DHdn5wTgjYQ4NSeQvKWX-Q0CJJAPUlsTVigBQBeJ-d~FqTN~pQB4SVth75tePHR0Sg0X6c3E6fNRmF~E6KSM~Rb67uzSrilCkHu32JTNKGkx-2BgHRDsWKOzIpL8pu8J6R6-uKoSiM2cfdntg8FWC0KTxbNSsg9CDkl4-kujfRO3Kjo2ZAEpDR4sts6nHyYIfRvZufy6pNZUkzWnWxg__",
    images: [
      "https://media-hosting.imagekit.io//58538cb302604a10/WhatsApp%20Image%202025-01-15%20at%2016.21.47_c20aeb01.jpg?Expires=1832318518&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wwHTmVaTIGQq96sTBIpiSVa5Y6gDTxUEsmlmKSIMgfE8QBr4myI2pgvSg35imMS2ejDBcaPwom6o5I5mLOh7Q8nvvnJ0TldGcGO7SZxlgdBSZW3LTkWXbOfwv7H~E8zij4qF1s8ptL8tbYKfGya16YCI5MdugnSPGXuuOKav~Xu-jhtz5eG8j9qsz~aEFxy99yFeekHED0lis4VO1kj3elRD71dfEIHMGM7qqkLCGWgaX9lnY3oJCgXcKOzPC8sVlcT2Ll0CMlkHOMPGzXvLHBueuAmsfEboSwU8UgnuGjDcBOy~YDu3pWmj06JqPUP31n5fcGpJxPaTyp94J3CpZQ__",
      "https://media-hosting.imagekit.io//710d93721a054719/WhatsApp%20Image%202025-01-15%20at%2016.21.47_a79283f0.jpg?Expires=1832318518&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=vzUxQZMWx4Z8i0EVoqiaVekQh2qFfp6EOtMGifCk7L5cR9cJ~KsfvkUysOy2jz-gfHRHOfgCTxrpkT~jScshaSXJ-y3HnAC0WCWr3f74PMMjsuC~fFWUDSz9iQxqmeHV7BUVBxsKwObhgXcM3ddp8KnSOQbIjGyp0D94-alVawpcFilKTdDHeDQWEZXAvqUsffKf2z1B1GxPg-P0BcrHzvh72C8xIHSGANOx7JPu8xlsKdCOBC~dg~mQHVEHtoXhCH-mRPf4It2EVajNXPC5DuAWAI2uidjlsr59IBiL9LhY4-tUaM1-md5fJPzInjK3jws6PsXGiaJ0yqd2ajeO~Q__",
      "https://media-hosting.imagekit.io//d40a3f770ad94c6b/WhatsApp%20Image%202025-01-15%20at%2016.21.47_51d837f0.jpg?Expires=1832318518&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=g7rT3UxJmoDZOy5KPGixp5iN-x0cau9bm0H-H11NqKeB5NwmHPBM4aKPozFIkonVLlAl3SDOhw0vzE7uh9Vjk9nc8bONJ1wcQMgEA5UN7HV8SBFTvGeypVvEAZYm8O-XInPP9vnAJHHf0eZUaATI8luk-6sNKpOIfCxbipRPhz5YpDOx1kc9Igeh-2FOYeA7LtkZFHsaGaVEu263twUoi4HH9E5YWnnLhtQIiBVvRpvewJ9B7czMs1rPzmayzxrbZrq2xiKghTPe5ncjiQ2IU0Jz8DkaHMkRX~vz9oLhQB-2uLrXS1S2xIlBodPHkAROz3Iu-fFFtvOtcd56OYL09w__",
      "https://media-hosting.imagekit.io//2ef55ed179b44e53/WhatsApp%20Image%202025-01-15%20at%2016.21.46_c09b2652.jpg?Expires=1832318518&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=bdEhnkM1UKySELMNsyixxLp50jxHOA0pPYNqrUS-41RfMwKQVHBJfjK-TrZ1DFSAWmBbSpv8VNfg3Y4rROg~nQbHHP9RjmeIGuFtfvJCZltrrmFWHJbOjCTsI1RncDun78PS66-jouhbisylCXQRjjJUel7hdl6P1siMZQWI~P2ecZXVIrTgthh~ufaWpCaaMPO5vtD4mUWzm2Uux3lz4s~jedxx458hVdpfztbL9742JCWUSTq0xr8ZYU0W1VcN~fI6iKCHOeNwots5v6qLBI~h5SUhjqgyyEvHmPY-M7CQIzBuLXMDjXvkaFg~r-QTqHNTF8qM-Ns-8puY380aUQ__",
      "https://media-hosting.imagekit.io//caa1f0c643e04a52/WhatsApp%20Image%202025-01-15%20at%2016.21.46_9120df38.jpg?Expires=1832318518&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=NkXRdX0mITr7KrsV3TMwljATlNlw5mdLasgPDMfPr6zSxpsFbeYlwJkuveD8zfOR38JMNG7PuyVM77cV~T45WZJYHh6~jnpCS~SYHellFpvIiTu1~F9is~aBvbYwPnR5rba52LUDLW3~vqxeYHxTkSCuDtJB4fV4kht9hkMb3KZqAhDewVjLXqMW1u897KdfATZHw6WWSgGSBjQz6GljyCrLfC72KRtSPG5ebeLSvTNFlfW0N3SV3tdwgmFp-0WyqcgzM00XJOPU93BzlEltsuD1bMUD8RIJEgCH6IxLpvSedaE1ecn3ptHRitMOdXe904byqwr~gr77ttFbMczBIw__",
      "https://media-hosting.imagekit.io//f854b90bb4734362/WhatsApp%20Image%202025-01-15%20at%2016.21.46_297b0138.jpg?Expires=1832318518&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kXfN9qdaDEHoAsEN0gDfmw7fnh-xLOpUt9Zeq6NiZyy~9Vl5Jq6Q1vSyfqipVOH1nEDgXfRVsP8gHbatIX7lVBqJz1~~FI6YYK8So6ez94WtZS~k3fbSrpJdNOeRyPOHgEGJRIYeuPkfc4ANfX3t17DaKpN8INlHLmdLhVfg~nXf3nMXyRM0rwk04Q6Rq~9bR6RBGaxWgNk~MB06DdMfC1PQ6J9heebxEPKN-pxeaRszmKjnRFqMQI9Th77jlovszrvw4Q~Wj6ffm39VnRfwVFi~5-auexB6-uMLm1eX7gCwnE5ChUfEyH6ai3gYymloo5pAISTabG1~SsvLFXbFbQ__",
      "https://media-hosting.imagekit.io//422ceec265f44748/WhatsApp%20Image%202025-01-15%20at%2016.21.46_7a1582c3.jpg?Expires=1832318518&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=jKJXkSP8XiOOkKh06-sMA00E9eoi~1FpzpYQv1e-QJq9xYGBQ5eqsf75lcwdj~lYjJyNyu7UiOXj2yxInB07uBXf2wJTGkNklGhxc5FDlCQzpQH9TdcJzIIKk68Ua8JESK7DHdn5wTgjYQ4NSeQvKWX-Q0CJJAPUlsTVigBQBeJ-d~FqTN~pQB4SVth75tePHR0Sg0X6c3E6fNRmF~E6KSM~Rb67uzSrilCkHu32JTNKGkx-2BgHRDsWKOzIpL8pu8J6R6-uKoSiM2cfdntg8FWC0KTxbNSsg9CDkl4-kujfRO3Kjo2ZAEpDR4sts6nHyYIfRvZufy6pNZUkzWnWxg__",
      "https://media-hosting.imagekit.io//203b85eea15146bb/WhatsApp%20Image%202025-01-15%20at%2016.21.45_22bbdee1.jpg?Expires=1832318518&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=WRbuEDLSpyZoiiiWAH5QXrzW3ryUQhTzv25VxkH0QczEBP5~Kz60X872KS48lQ~sYZlo1578~OOr8h6wXx271OW~N1TX-wejDuznUC0YR-6~kFdvVnzcCrWz59fStfmX1EfrrjlOB1duM~RHfCsxewYX~01tVligpi0XAAm4eWr3cmjAWVNbM0N5a2mHqolP3PBda3AhFeulNsUTNrX5aHsz7fSPUq6xs1ACaymUk8d0SJiZ2T5p5ki43W7-s0G351Tn~0fPHdVvzWjpsocPuex84ImWsWDcD-t9lCVPTHr~YX7DE0-FGDD8B5OjMvqnIxOaPM8qOzKjkDBqi8-Cng__"
    ],
    videos: [
      {
        url: "https://media-hosting.imagekit.io//e761561bad864a29/WhatsApp%20Video%202025-01-15%20at%2023.47.01_f50d7471.mp4?Expires=1832318518&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=WPEZl2Qj2H2D2ETvRbPvjyVVd2c7Il0D4onc-KbUZDz0XoxN7MaJxHKJuN8g8HpPwuWAU7FbMEDNKcXvGpegR0K6A7se429poly9E~kOmOd7GXNHfFVlaePsjDVVu~4zgQc47l71Il245Qivp57t0tjsTsS8Hn~BH~dAiaP8tMxJk~Mp-kVkQSxPWNRp4XfDBzQ7mS2YjwnTrPvAWEHdMFbJXSDHv0a7p93KH59GUTkv0Q~hvBxT3GklwcjENyP86LccVN3mIlISaSd32VaM5iX5DXpPXWR1-9Swoydzpml-uzzE2RuJwHkD6RTqmEJ1omxOXYdBiY71S7kOPl4J2Q__"
      }
    ]
   },
   {
    id: 12,
    type: 'apartment',
    name: "شقة في مجمع Kiptaş Yeşilpınar",
    price: 40000,
    apartmentArea: "3+1",
    location: "Yeşilpınar, Istanbul",
    coordinates: { lat: 41.0752, lng: 28.9348 },
    googleMapsUrl: "https://maps.app.goo.gl/NwMbYqr6rNGCJvFz6",
    description: "شقة 3+1 جديدة صفر لم يتم السكن فيها في الطابق التاسع",
    amenities: [
      "ڤيالاند مول - دقيقة مشياً",
      "دقيقة واحدة عن المواصلات العامة",
      "Haliç, Atlas, Bilgi ومناسبة لطلاب جامعة",
      "تبعد عن مول ڤيالاند دقيقة سير على الأقدام",
      "دقيقة واحدة عن المواصلات العامة",
      "الماركت الموجودة تحت باب المجمع" 
    ],
    deposit: {
      required: true,
      amount: 40000,
      description: "التأمين شهر واحد فقط"
    },
    image: "https://media-hosting.imagekit.io//07f1874be62c486b/Screenshot%202025-01-27%20131548.png?Expires=1832580987&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=fuUb8glPfrqxogbuLYn-I-dE8UP4cJW1-re8aewdSOtQ4DkdLNpU-qIPaMf0Kyj7Og1cNP6DILJDlP8IZaK~0fYH-kCNAmGO1xUQhpt4KKRoU6JkEfxReVFGd~sce~4QNgJPk486SJB35tKR46hkxjDMcfvGUj3l64CC7q3rOQSVUCxcVIj9e1~oDkURWVXMYIM9iknnX7K8dutxDxQs5ZGrB8xpS7ouoQnBLmHoQ6ZNahEVMZI3BnytHPHHk28J9HNAD6ge2p2eGJhX2duVIFlbcgyA1bN-mAANUAZ09j2lyZUaCJXT0lqPWjNS4s6xFHNe6av47n6ny46hHSmwJA__",
    images: [
      "https://media-hosting.imagekit.io//07f1874be62c486b/Screenshot%202025-01-27%20131548.png?Expires=1832580987&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=fuUb8glPfrqxogbuLYn-I-dE8UP4cJW1-re8aewdSOtQ4DkdLNpU-qIPaMf0Kyj7Og1cNP6DILJDlP8IZaK~0fYH-kCNAmGO1xUQhpt4KKRoU6JkEfxReVFGd~sce~4QNgJPk486SJB35tKR46hkxjDMcfvGUj3l64CC7q3rOQSVUCxcVIj9e1~oDkURWVXMYIM9iknnX7K8dutxDxQs5ZGrB8xpS7ouoQnBLmHoQ6ZNahEVMZI3BnytHPHHk28J9HNAD6ge2p2eGJhX2duVIFlbcgyA1bN-mAANUAZ09j2lyZUaCJXT0lqPWjNS4s6xFHNe6av47n6ny46hHSmwJA__"
    ],
       videos: [
      {
        url: "https://media-hosting.imagekit.io//dea62976c84f4131/WhatsApp%20Video%202025-01-15%20at%2023.47.01_afebd830.mp4?Expires=1832318748&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=IceE7YjCkqAAvozdMimB6vXqK4puTmrEHzgxOdR6valpoTBKFQI2t2vkzf2n4Pp6rwfS-MA4GlJDyPJVgrIXRvnNThUMWSzi~tcb~Gi4IPugHb8jW6gS1rPYDHd3cGtfXmxZrEPASjdwI0xe3kz1FEJuJ2ClXSy~6qr6VRXBU4-CBYHFBlxEc1rUnCJx9AMR4i~Q0M3bAojjKnukH2nHO0DksxQZ8vuNtfnntfSAKl50NgR2BziaEV3euXarPMbf3RtRqLxvD751OCoUeLQZnqk8nFb0gAq8egD-xNNV1n8wplmcn2ddEKSlf1EgbR~8E7Lf9-jQ9NnzdzJrLQHvZQ__"
      }
    ]
   },
   {
    id: 13,
    type: 'room',
    name: "غرفة فردية في تشيكماكوي",
    price: 9500,
    roomType: 'individual',
    preference: 'male',
    location: "Çekmeköy, Istanbul",
    coordinates: { lat: 41.010917, lng: 29.184222 },
    googleMapsUrl: "https://maps.google.com/?q=41.010917,29.184222",
    description: "غرفه فرديه لشب ببيت 3+1 مع شبين بالبيت بعيد عن مترو تشيكماكوي 10 دقايق مشي",
    
    apartment: {
      type: "3+1",
      currentOccupants: 2,
      maxOccupants: 3
    },
   amenities: [
     "مترو تشيكماكوي - 10 دقايق مشي",
     "مطبخ مشترك",
     "انترنت",
     "تدفئة مركزية"
   ],
    deposit: {
      required: false,
      description: "بدون تامين"
    },
   image: "https://media-hosting.imagekit.io//1cc65ea4f4094ca7/WhatsApp%20Image%202025-01-16%20at%2000.07.39_754f1244.jpg?Expires=1832318933&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=l7DzyhzRGp9jEOHi-RyphnX5hQjNC3BIu5KHszSF-7POPlAo-fnELMA8DsksohpszFAl7rGvX8zbj57gS1OBdknSo5JrLxZ4CllKYg68CVg~i0O7YewE6SaNfQOwhY5xHoc3A9kxcIv75XNC3bBOOQVoJTkPnJCyf8Wb7AhV09lmpTwWgYxvKUDRM~Oj6Y6hfPv0U2~cSRZY6On3FO-iCjfKOmqyv1NXJsEXHraWUY0cKEyRfSs24j-Q32FfvopYT~vAOPmgF9mRFmEBw0T3hDiFsI1E~~oQ~DTW6C67AYu7Qaw7NTMnK2UIZT1ICDvFJY-g~humi~mLKpLmE6Xh3g__",
    images: [
      "https://media-hosting.imagekit.io//1cc65ea4f4094ca7/WhatsApp%20Image%202025-01-16%20at%2000.07.39_754f1244.jpg?Expires=1832318933&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=l7DzyhzRGp9jEOHi-RyphnX5hQjNC3BIu5KHszSF-7POPlAo-fnELMA8DsksohpszFAl7rGvX8zbj57gS1OBdknSo5JrLxZ4CllKYg68CVg~i0O7YewE6SaNfQOwhY5xHoc3A9kxcIv75XNC3bBOOQVoJTkPnJCyf8Wb7AhV09lmpTwWgYxvKUDRM~Oj6Y6hfPv0U2~cSRZY6On3FO-iCjfKOmqyv1NXJsEXHraWUY0cKEyRfSs24j-Q32FfvopYT~vAOPmgF9mRFmEBw0T3hDiFsI1E~~oQ~DTW6C67AYu7Qaw7NTMnK2UIZT1ICDvFJY-g~humi~mLKpLmE6Xh3g__",
      "https://media-hosting.imagekit.io//3579187518df48c8/WhatsApp%20Image%202025-01-16%20at%2000.07.38_48b969ba.jpg?Expires=1832318933&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=DTjWArPB6rKCBuSZ3MZbmArSwFPiRDvK4D~9uOho6urJwD7EP4Uc0VZQL-S7ROEnQJJTqOal-G8TvDqbfUWJQpESvepa66TtDpvi~C2swRurlwpI~T1h6rF4GV0JjgtSUe~wdY25ozRs2z2MAVlhafUW0R9l27ItMVOc9ep53oL6AMB6c6yA6~M0p0M5icmPOdLkMkGteH3pUQyn4~p7uEkBT1WSKMAuyuTwbcI4puuYK295J4wuES7Lom1Dl8g073MFginrQXh8FcN9A8GOpu-ePIzyB3JdoivYXcySiFNA3ZjRw7n-qkent2txnhZevhGJQndyl53nQGjiFLg3cw__",
      "https://media-hosting.imagekit.io//9742dddef70e45a5/WhatsApp%20Image%202025-01-16%20at%2000.07.38_3d218f60.jpg?Expires=1832318933&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Jn-aZ7CC-dresxsvtbWHDmV1HKADm2KJPFPascZhKMHKS-5yoae9kwSYP4FyaZX~GZnUXIQHooDSu2wAMZAzOWDPcs0Gm-t77cv7tiqmxAuLwOf6Hps913dCqVk55mDbDJjgnT9ZW9DGbYsukl0bJjsSXE4XtMShMHiN7x5fWk0QBwXeakqdR~QAyJMNDYybgJrDeUhCj~Hcgs1oz028SXw32JM9ho5RseRKR~EwfL4wK7UYvdmOfckNHwjFxtPhaHSsY5zXrDR-VX879gTYZpmqkz0ezHZkeJLQWgHLc5fTY0Kug45itA7R27RJVLuGySH1otluH4edS4jM5eNcyw__"
    ],
    videos: []
   },
   {
    id: 14,
    type: 'room',
    name: "غرفة فردية للطالبات في بالات",
    price: 5500,
    roomType: 'individual',
    preference: 'female',
    location: "Fatih, Istanbul",
    coordinates: { lat: 41.027278, lng: 28.948722 },
    googleMapsUrl: "https://maps.google.com/?q=41.027278,28.948722",
    description: "متوفر غرفة فردية لطالبة في الفاتح في شقة 3+1 قريبة من المترو وقريبة من جامع الفاتح 10دقايق مشي",
    apartment: {
      type: "3+1",
    },
    deposit: {
      required: false,
      description: "مافي تأمين"
    },
    utilities: {
      included: false,
      description: "بدون فواتير"
    },
   amenities: [
    "جامع الفاتح - 10 دقايق مشي",
    "قريبة من المترو",
    "مطبخ مشترك",
    "انترنت",
    "تدفئة مركزية"
   ],
   image: "https://media-hosting.imagekit.io//9f862ea7980347a6/WhatsApp%20Image%202025-01-16%20at%2009.18.19_d31a3131.jpg?Expires=1832319116&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=jY1v48o9OfF-x8lZORQgTDBtR4k3YZ5HalG3BhDMpOcI4XUZNpD6cFLWrmscRO~wqj6~L8TzC54LiRaBP1VcD1knrfcwOusQB1LuwL4UkagpJFqbLxOZQrqG89CIMsDv0gowcUR9HuVLjVp~sguZGxkDEN1HJnud52dpsMqys49AHeGTYaZSJKsFiAeS1kieJR1ND5jWYWTsZgAAUQJwtjbgTxnihc-FXR37AKOgYiAVPs6kYXq8EBfCpzSqtpLpXGzWfYbC2ZG1WRz378oPMmRKRhmGvtWwKhIpxN3Yzz6ewfCyDxWnQ9VCCP86cwIE-euBkVU-2O0lE6S2WjChtQ__",
    images: [
      "https://media-hosting.imagekit.io//d054ba5551994319/WhatsApp%20Image%202025-01-16%20at%2009.18.19_29607243.jpg?Expires=1832319116&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=YWXZxrMRmQLDOxr7CmcbOJcDI7e7I1UWjhIjGa0~11PsKZkMDIXDksCJwBw8qW0Cwwbvf7IXlPN70dF-m3q9fmfgAtgdaT9tuQQHVDqTaBw0P0PuVcf6P7UwTRe0LWwltK9E~4wbLwc8VvBtucyt2EeltWgcdRBXdA7rv2Pru6gromOl6dWdpykFfbOBucIxakwJKynuPuwguoQ3HWOygMFnubOATWd1xu4seEaK7A5whRlStCYoYNTW8bY8JaQsiTwkKw7svkDXGkWlBYdedqEwuGEdsQqhS25XVloQX5Z7620qURpKbfwk02dZvewFiT3Fa11i1Nzy8VFeK9R0Hg__",
      "https://media-hosting.imagekit.io//267a2eaab66a4f1b/WhatsApp%20Image%202025-01-16%20at%2009.18.18_cf766abd.jpg?Expires=1832319116&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ddts6EOAt2Xooir5jxjjsF~IJAJMJNaobtVRFuUqkBZUypDRCiY6qg5u5ooragiYzZ~Bus9gNlGZIHcUG-YCPvUifJRHfMT8suyQO~TB44ySKuenGI4fYKNVTfJDNmNMC8scIF2OvQJwy-7DZUoAEtFLndRFk73xvwNiSE7A~RfeHb9LqFsB8pCA-VvTanBDYbSHowWeWu3PEgTclgIPcsi07rmvPSLr1es1tMjQ4ZI1HFNsT7FxecDOtaLtA6YTxr-ePyqc4yzQiVcHKnq1C81ypvGPXK3oXJZoxBV9lhbRVlsYoUHO~6ERrDR7pJlqEyyAeJtowD8ivqMdYc9oMw__",
      "https://media-hosting.imagekit.io//cbaf3f4426c04b41/WhatsApp%20Image%202025-01-16%20at%2009.18.18_03141a0e.jpg?Expires=1832319116&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=bGe7NWyqSvZGD9S6bB33J7m5M50CMrVIio86xE5lgmKCtNLBnm1Gaso0jDq2qP6t4w8McJ76Hl24ASGFREYrMhckcf4yRu~JXgHDdz1LReEbACairZNsnl8KdsKRi~ErCJKZz5f0Rioftykf0I2gyk3T0xHzXLG8LVHSNRK2a4Jg-H0ud3g4I55W3rGBUNwzSR0w7AqJihDtLuYMIW-hgC0OVgovqb5OqPGhE5PpcUslzJQD8zsrYm~MC-7ix8v0F4fK0cyn2Q9DFNcM4sAZNCmxB~ullhMEBGD6Sd3hgZJk-HibEYZ8mutWv0M83D9nif103K34wtaUBGKU1jC6uQ__",
      "https://media-hosting.imagekit.io//9f862ea7980347a6/WhatsApp%20Image%202025-01-16%20at%2009.18.19_d31a3131.jpg?Expires=1832319116&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=jY1v48o9OfF-x8lZORQgTDBtR4k3YZ5HalG3BhDMpOcI4XUZNpD6cFLWrmscRO~wqj6~L8TzC54LiRaBP1VcD1knrfcwOusQB1LuwL4UkagpJFqbLxOZQrqG89CIMsDv0gowcUR9HuVLjVp~sguZGxkDEN1HJnud52dpsMqys49AHeGTYaZSJKsFiAeS1kieJR1ND5jWYWTsZgAAUQJwtjbgTxnihc-FXR37AKOgYiAVPs6kYXq8EBfCpzSqtpLpXGzWfYbC2ZG1WRz378oPMmRKRhmGvtWwKhIpxN3Yzz6ewfCyDxWnQ9VCCP86cwIE-euBkVU-2O0lE6S2WjChtQ__",
    ],
    videos: []
   },
   {
    id: 15,
    type: 'room',
    name: "غرفة في مجمع اسنيورت",
    price: 6000,
    roomType: 'individual',
    preference: 'male',
    location: "Esenyurt, Istanbul",
    coordinates: { lat: 41.0336, lng: 28.6741 },
    googleMapsUrl: "https://maps.google.com/maps?q=Inci+Palas+Esenyurt",
    description: " العائدات : 1150 , متوفر غرفة فردية في مجمع سكني لطالب في اسنيورت في شقة 2+1 بعيده عن المتروبوس 10 دقائق",
    
    apartment: {
      type: "2+1",
    },
   
    amenities: [
      "مسبح",
      "صالة رياضية",
      "حراسة",
      "بعيده عن المتروبوس 10 دقائق"
    ],
   
    deposit: {
      required: false,
      description: "لا يوجد تامين"
    },
   image: "https://media-hosting.imagekit.io//434c89eaf47b4a46/Screenshot%202025-01-27%20134945.png?Expires=1832583029&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=mned9L1Y0WVrH2uajRC4~YwKz8QHPy-yUV-qCGtwE6b7vctQMrTrap1GvGbH8532XiOmBcYpJrrMGUpXTi8Xi3ZsUGuhOZKMPY1KHiNH-RDx~zJ9adTsHsOzhr2JM5ZgwacBLTxmScCgut0nCYmKCip334lYsIgl-xM~0eFT4sQlNA8hEq7viTETruxDXNOH~XLn9ifE5zlKHKB68HCCKa4reWagE-hdlJI3YGAN04Uv2fO7t2cyvH4nfISr9Tuj9KYkKT88sCgOJbLIcqGZU0ju4zRuM6kRfw~Z9lpm7zaiJK8Vw34yZ~8Syw7yizo7ntvYMyu4YNOTe3TCp00qXw__",
    images: [
      "https://media-hosting.imagekit.io//806b408c8cde4dae/WhatsApp%20Image%202025-01-16%20at%2009.41.38_6cabfd99.jpg?Expires=1832319331&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=uy8ZOooEzVboAu9uTVXwsRXnGB-qK6SyaqbBAuo2MB3DmbAn75KgqkTTiIz5nOTYz17iExyBXTa4mxYADxujAtMn9qJmsiX1ndHpUHPaMw~skcARpc2imeZEIu0LPw2DHUMC-aDcpKOteXXb-nE4XujwcBS1E4VdwSTU9~cDZzvR9e5ky2tQbgl4Zjup~dG0bnjCrkZnZpA1CcYjNKg4vw2qxfJYJDlbQ6QlBZlZMCif561U-IKYoRILZgPxzfeCg6ZYYNOOzm96aE3EIxjWvwcycCR~Q8PhCUfddANvVRlaDwmm~bnr5bNEcyZZaRnB~zMrFoc8h~t4zKDWhZrOkQ__",
      "https://media-hosting.imagekit.io//7257c59aec9f4645/WhatsApp%20Image%202025-01-16%20at%2009.41.38_0bfca186.jpg?Expires=1832319331&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=FZyKNVZWyW5w5L2EAZfE6QFCIdGdTEXwWvqZWk3afDJ~oz29SSY~XDhR1j3PPp2tGBb2ztGZbRoxg4ifGTyatbU2c1gh~E7EKETUi8Fzds5cS6mkqii7msiduPjjGZHKMvuQbN4xOcEq6inhZjpjaR2VfmXKGaZ57twWxVGwNhzlJTRgOKsxAGj3AgPO8B~x25o2onjwv9gtjxn6GJ-kjTD4WkwMT3YJx~QC1p3lh4lMUnRF4fetkt7eCrbDaQP7MwTm~ZtO2-pydzYSkbVdCkGGsYhT3wzghNgwsCiEJgpIEF9AjurewHDGhE93Vpnvv3ci9rYbQhPdJK3bZQ6FzA__",
      "https://media-hosting.imagekit.io//839ddb602c1b4576/WhatsApp%20Image%202025-01-16%20at%2009.41.38_d7c4cc5c.jpg?Expires=1832319331&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ELAfbNg3m6hhYJzj41JvWOJuD9en2NKFDpDzG9H8jFZKecMVtBUtBrJfQoC1gE0SChNGulBgOMdx3ykQYiXPQuX3U~yzlHQBxU7KDs8X1P32xR0an2vPpLQ9NLvZDmvIAn4z3Hyq3QyD2C7VYZWlqrKHB~BrdUmFkU90tP9hSyBcJuY8v5pLKnvwzCkLrr281bZYJasRtaxp381L278oU7U~Wp9yrmamHy-FH8tADLn4gQZfainhomZ4IR8GB-6Sr-IS6mNfCyF3FVXFlPp~87EqRnW~pM39gGSz0NgZc1548Vvek6k4-yVhepu3ARy97kuMpUhUZwqzcrU4klyk2g__",
      "https://media-hosting.imagekit.io//d27c16a3e58c4411/WhatsApp%20Image%202025-01-16%20at%2009.41.38_67452f5e.jpg?Expires=1832319331&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=W6Lh7clZHalttGUl7wheTagK3BVoWG8cvFiSQledoI1NdJyXI~zn53nPXfLW7Ojq4ksYM~JH5oN3Rb57ZMjVOohM~HrfAeTt1IQO1qLmIkf3MC5IdpVrcp0T2QLUyynZHhXQaRzM~tbXkZTzQ6myD1sqBkE3Mv4~rR7NDTMZeYTD773jXdhAh5K8FDrwn2cWgBPXFDeAZ3f7ZOIscpi4tiAWA8ivtsnQKlsCl345OoQFkewRWrF~WPS~cB5g7ebGRXq8~2pbTonaTDMaCU7lLPkgKaWrXH78WvjXUQZhklPUk6YhLZUJeYSUEsMycUFuI~t3hw8cjvMFQ0YMHca8kQ__",
      "https://media-hosting.imagekit.io//5cc3a78c4f4747d8/WhatsApp%20Image%202025-01-16%20at%2009.41.37_c2ab6366.jpg?Expires=1832319331&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=BklWHGgloduAqmPcI5jO5o~Mu62e6YacSisufF9S5S9PQu0APEzBV65SuAhRHEYQFtJ6OWAQaeQ-yWYMCNt6fQ6QEv-FJjjzTWJ-7YmlFgkZA5ifU9SG~LLy0cpAQcw9ieGKd4aZN2P8~ztKF-OsYb9cY03OkZwVomkYhjpXpyc52f~xjs50Ox18XDHmfQe8fXmwa9hnC3DCF3yQyXyOGaoWK~1HoZaHggbv~N2To29DVO0lobhSDlYD72eV5B9YxFzno9TMUJ5Kgr-ZXpBEfem10C0-OlSJ2sklVhJpjrvzsZTY2buLKW2P9-M5N6ebKji4h9PrP40ZcLumzAEGfw__",
      "https://media-hosting.imagekit.io//127c0d865cf146d1/WhatsApp%20Image%202025-01-16%20at%2009.41.39_794260f8.jpg?Expires=1832319331&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=yPZyXSV26gPugNw7fev7TJctcr6JEqB7~RJ9qirmJdWQ-zuFys6PCz86cYNNAfO280S8eWTlyJLgftrLT9zOMS0F7AMhcTobl1ImdVke5Zs6k2tHdNJocSkbnnqVJGwz8d93rdpdMMC51we8ROgssl9Zywib7GLFqZo15oPGBXbHPW5JmeEuZBtrZnQWvj31XXrpiLiw746qbUYm16XFfgeprKlP33HLEz6zd0mRgrRsL3jFUIGsmPzL2hxIh6nzpXeraCnxRZtN0G7~Na7S8lzt9sPKK8Ivs5w5d~rTO84hw4y8ZUxR6U244JFhlvTsd7olZX-Jz9BpljevLPuFMw__"
    ],
    videos: []
   },
   {
    id: 16,
    type: 'room',
    name: "غرفة فردية في مجديه كوي",
    price: 10500,
    roomType: 'individual',
    preference: 'male',
    location: "Mecidiyeköy, Istanbul",
    coordinates: { lat: 41.071611, lng: 28.987500 },
    googleMapsUrl: "https://maps.google.com/?q=41.071611,28.987500",
    description: " , ملاحظة يوجد سرير زيادة متوفر غرفة فردية قريبه من مترو بوس مجديه كوي 10 دقائق ومحطه مترو M7 10 دقائق",
    deposit: {
      required: true,
      amount: 10500,
      description: "شهر تأمين"
    },
    utilities: {
      included: true,
      description: "شامل الفواتير"
    },
   
    amenities: [
      "قريبة من المتروبوس",
   ],

   image: "https://media-hosting.imagekit.io//b2265d08fc004e45/WhatsApp%20Image%202025-01-16%20at%2014.05.15_00fd5847.jpg?Expires=1832319512&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=abJnDSCVSTjtJ946R4oymTyD7wfb7idCHxgvoKYS9glxz9sAwVr6VQm60L0sWT7JJIRejS1NZpvgVRLfFQZDQGhzODQP7CzaJPmynzQjLpzE567M22CC9SKvzOoNA-yJoocFTHXoLS2EK2YObfkQguOpdpw88uQh-l0U8~6MMWntLrYHS~8bQ-KQoYCqsOY62UK3lGiTqOzoG7HubF5A~U31xP1uRIc91pMrBS0boXGlU6h8o72Bcv3VTJ0ibdSkBRsANDLefkbTUG~HvouZ3cilnqg6NrMxN~-ixHOSH~n66ULtvakwY3MWmL-Je1xuxtSnj9vaTQIvwckTirWckw__",
    images: [
      "https://media-hosting.imagekit.io//b2265d08fc004e45/WhatsApp%20Image%202025-01-16%20at%2014.05.15_00fd5847.jpg?Expires=1832319512&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=abJnDSCVSTjtJ946R4oymTyD7wfb7idCHxgvoKYS9glxz9sAwVr6VQm60L0sWT7JJIRejS1NZpvgVRLfFQZDQGhzODQP7CzaJPmynzQjLpzE567M22CC9SKvzOoNA-yJoocFTHXoLS2EK2YObfkQguOpdpw88uQh-l0U8~6MMWntLrYHS~8bQ-KQoYCqsOY62UK3lGiTqOzoG7HubF5A~U31xP1uRIc91pMrBS0boXGlU6h8o72Bcv3VTJ0ibdSkBRsANDLefkbTUG~HvouZ3cilnqg6NrMxN~-ixHOSH~n66ULtvakwY3MWmL-Je1xuxtSnj9vaTQIvwckTirWckw__",
      "https://media-hosting.imagekit.io//076b1f50abff4dff/WhatsApp%20Image%202025-01-16%20at%2014.05.15_e6abfe11.jpg?Expires=1832319512&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wgVASiiAy~RkGEqJSGys1l8rTPtjOnszZtjkdBRC5pLRMRvK3D-Xnqk3mK3UckuniBTRvc~KNWqMpCWCB7lLPVU2AdXE21MAVp02ZT5OqimH3KBFnKf1HnNLyh0ituqbza4bIyF9qFGh7FjxJf8anyCFHIUeN~SEPb-Xxuthed27Pq-cDxEi9yu9uW6J7gx5EiVLe5RWwrlPX-mm7ttA3zsArfCjLmJpql~XV8pqVTliqnlafqPXXjNHTE63DdzQ6iR2RQAUl7o4PfApoLkn5iB0nDuNlGoiYNxx2n06Z6wgUZDQSv6RoHJSa1bQYqlfcW2BnVUha4Pdu8DnZ9XhwQ__",
      "https://media-hosting.imagekit.io//0fd12258a53f4eab/WhatsApp%20Image%202025-01-16%20at%2014.05.15_90eba951.jpg?Expires=1832319512&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Dh0YOHdQDgIHu1OoNrBQhljiqJ7nffS8waqx8pXnz6khVLjjAoyWgmYiUAuCe0~etvfrXYC3HznYw7j00cSaGzE2KKVSliJGjRX0JzSoeKzKypf14Fp0n63EcXj1zf-iluSG5Th-g4roTrPjVcfx0YDzXZ72r2jOI7wzYaQd1R4ocEaQ0mGR-kWoXExubSLrolKdydIuHH6r9UY4fQ9YWkA73UwXVSEaSpMc3m4L0fxFJ6ugeF~LLKIyI4mD8DT-pk4PUpT0ya9ZfTw5uyMN2DDlyFW1zP7ix2N8c3a6fr5LeNBnuCyeuA0zLU7u4SgUqogzy3vai5IcXW9QZGgdUQ__"
    ],
    videos: []
   },
   {
    id: 17,
    type: 'room',
    name: "غرفة في يني بوسنا",
    price: 6500,
    roomType: 'individual',
    preference: 'male',
    location: "Yenibosna, Istanbul",
    coordinates: { lat: 41.002389, lng: 28.835944 },
    googleMapsUrl: "https://maps.google.com/?q=41.002389,28.835944",
    description: "متوفر غرفة فردية غرفة في يني بوسه قريبه للمتروبوس 7 دقائق",
    apartment: {
      type: "2+1"
        },
    deposit: {
      required: false,
      description: "لا يوجد تامين"
    },
    amenities: [
      "قريبة من المتروبوس",
      "مطبخ مشترك",
      "انترنت",
      "تدفئة مركزية"
    ],
   image: "https://media-hosting.imagekit.io//11b438fb94394b00/WhatsApp%20Image%202025-01-16%20at%2015.44.39_968e50b3.jpg?Expires=1832319696&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=L4-84tqGCVkwOZ9i-w0E057JJTOKmaA2ZwjnGRRPfYmeQxUNnmTN5Kx6fGUkiBz-AIL2YKIQ68pDNSoImeu7iovdCUZcnEGVaCnE6JJblZRkRvUhmQ0a6MlSEiuK~wiLScBN06tFA9CFmMZw52zeMSp-uLfM6eDxcAY4LSGml0Uxdti9oikyyK8B0zis1hhZYKL5qUdIeuoyVQiAIBjNFAtLLt5HAZ9JK7wdjHwLb7R7vhjHjUKHiMGcT~lmVFN-6xVYvy7~alM7~fdv~LJnJzpCbpynj~YgxJa~NoVuHn0zNvR~vifRmqQQwRltgFDyB9~g~LukBqwfpVQpvo6xXA__",
    images: [
      "https://media-hosting.imagekit.io//11b438fb94394b00/WhatsApp%20Image%202025-01-16%20at%2015.44.39_968e50b3.jpg?Expires=1832319696&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=L4-84tqGCVkwOZ9i-w0E057JJTOKmaA2ZwjnGRRPfYmeQxUNnmTN5Kx6fGUkiBz-AIL2YKIQ68pDNSoImeu7iovdCUZcnEGVaCnE6JJblZRkRvUhmQ0a6MlSEiuK~wiLScBN06tFA9CFmMZw52zeMSp-uLfM6eDxcAY4LSGml0Uxdti9oikyyK8B0zis1hhZYKL5qUdIeuoyVQiAIBjNFAtLLt5HAZ9JK7wdjHwLb7R7vhjHjUKHiMGcT~lmVFN-6xVYvy7~alM7~fdv~LJnJzpCbpynj~YgxJa~NoVuHn0zNvR~vifRmqQQwRltgFDyB9~g~LukBqwfpVQpvo6xXA__",
      "https://media-hosting.imagekit.io//8cba731ac814437f/WhatsApp%20Image%202025-01-16%20at%2015.44.39_156d8f35.jpg?Expires=1832319696&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=yUj~FnjSbUtdkUysOFfrwcO-BJU372OF9--cfco0D5CLlSnPNLOSeN73OR6X8ciK7Tx5at1zgepQGOVU21Iahqp4M3MJ~3iRqfYBF-Oepc06spUnlN9i0HLH35A5zeK4UrEqLN6R99NEHXV-EWPgcQOjV4EhS0vee4I6BmX-~nWz7SxlQstPkwNuXQFbo2YyvCtdz00H-6MHTpX5bCFKeRIDqGuhb1ev5VqNv5yvAcptGoomaP06GZVaoRfjdkVJkdlI666GXUTVZM9fWwmvGVH0ZmANf4m216L6HrJIpYgn58TM5rLdD6dFb8TICAFp56gogMgIjVIh4UMNwSx6Nw__",
      "https://media-hosting.imagekit.io//8f534de985af4e96/WhatsApp%20Image%202025-01-16%20at%2015.44.39_f7bda292.jpg?Expires=1832319696&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=PhHq12XIneo98o4RMNOC2N6iJ-XEg1LV19RgCI0b3GfRMJ8ZAoFIKl7SmYtFnjeNN8mKymOmIt8KQSw01Ds7Eknj6x2rVr6C9w84Goy0ky~Azmno~Ve-4DxG4RudAvOGeSlLabrA4YrTlCj~iFCitOca3~mLsO8Mz3b~5MDqpschkqpKW~HMEEnwKqRXSwllh7TaEle-ZZgNGDQ~BAkFi49ef--fh2eRfLmFGM4~effUBlviQX-Pom~4XV7bHZC4irJmgUqGivwF97GiKAVSQFYMAMI0YN2p5NxPMy1m-MUV6q5eKtwSu4WLziVE5OZVJivaRJXdAE2GWmHl7hFeWg__",
    ],
    videos: []
   },
   {
    id: 18,
    type: 'room',
    name: " سرير في غرفة مشتركة في بولغورلو اوسكودار",
    price: 5500,
    roomType: 'shared',
    preference: 'male',
    location: "Üsküdar, Istanbul",
    coordinates: { lat: 41.010611, lng: 29.085500 },
    googleMapsUrl: "https://maps.google.com/?q=41.010611,29.085500",
    description: " متوفر سرير في غرفة زوجي لشخص واحد في منطقة bulgurlu في اسكودار قريبة من ٣ جامعات",
    
    apartment: {
      type: "1+3"
    },

    amenities: [
      "قريبة من ٣ جامعات فنربخشه و اسكودار و ميديبول",
      "مطبخ مشترك",
      "انترنت",
      "تدفئة مركزية"
    ],
    deposit: {
      required: false,
      description: "لا يوجد تامين"
    },
    utilities: {
      included: false,
      description: "غير شامل الفواتير"
    },
   
   image: "https://media-hosting.imagekit.io//da7cff97bdae46da/WhatsApp%20Image%202025-01-16%20at%2016.07.01_1b7f16a0.jpg?Expires=1832320108&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ECxQjuyTLkTAoj-ZZzKbjdRdHpLco8DATYKZLtz4erjIKZU1M--DMjkB5h-593uo9P4TyE2jPrdUfWwDbCB5Yj7zOWTLRmRbPFFXPyhSTcyWE4xN8uGiIx7cmB2ZjzWwqs4GFSG1WaJarMMouF2RwIpMFKpN4eHR-Z~UwkfX6fEsVlt4ZEx9ssiZEgLHPM16YxHxamULEtZ2fQ4M5uU4QGatwvsLmINKzF8HryBRnvy64eLxnvI2zaX5Og-TBQ7G6V1P5iTWNdrSqlDrAQFn8zb9VefKiCWaiaQSoBJK8GkDflQDUAy~iNCthiZhDCI6HlKnOHsP7VJAGeAqbmTTgA__",
    images: [
      "https://media-hosting.imagekit.io//da7cff97bdae46da/WhatsApp%20Image%202025-01-16%20at%2016.07.01_1b7f16a0.jpg?Expires=1832320108&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ECxQjuyTLkTAoj-ZZzKbjdRdHpLco8DATYKZLtz4erjIKZU1M--DMjkB5h-593uo9P4TyE2jPrdUfWwDbCB5Yj7zOWTLRmRbPFFXPyhSTcyWE4xN8uGiIx7cmB2ZjzWwqs4GFSG1WaJarMMouF2RwIpMFKpN4eHR-Z~UwkfX6fEsVlt4ZEx9ssiZEgLHPM16YxHxamULEtZ2fQ4M5uU4QGatwvsLmINKzF8HryBRnvy64eLxnvI2zaX5Og-TBQ7G6V1P5iTWNdrSqlDrAQFn8zb9VefKiCWaiaQSoBJK8GkDflQDUAy~iNCthiZhDCI6HlKnOHsP7VJAGeAqbmTTgA__",
      "https://media-hosting.imagekit.io//8ff82c14fc6c4caa/WhatsApp%20Image%202025-01-16%20at%2016.07.00_c37f4242.jpg?Expires=1832320108&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=AjeW7zP5LryrBAKeEjPAPz7MFHZy6duJegp8X3EErZfAi8Unp8Gix565HHa-ZLClBg~lJiXSEVrSVA-XqILLH0FERZfQ-jQcs-Fe6JjnkifHCKRzlHYTJyRFf7S9N0vxIooXtM19mTC4V1Ix5ASAU3-ofAg07T~EgYIfxj4J4lDerRIf2bxXneBMYI9dpeuBmAenZD6ho-ee-D8aTSPZ2bjkh1GhkhCyhtR0FUjOwBTIqc03KkQRBiNpLcixo9uvhaDZL5goalOKzP91CbpmvTf5R1eR1SdiawADstSJZK4GCHjUhSfoEszv3BJrJLCd2i0oGpotfIjQ5DvWpG9ngA__",
      "https://media-hosting.imagekit.io//14fc0ab66f544e0f/WhatsApp%20Image%202025-01-16%20at%2016.07.00_66bfc06b.jpg?Expires=1832320108&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Q4bIODJ0DloE6VcaDuyhFhMtPR8cKz~6bBsdLIU0xb0DtzrGDAJ4TY8mUuH9MorPIUnOYN8XJFbAG3-v8p7B--8v2pUFUwWDZER8JrHi7yKde4XGFYeV7ygOTExFo2TL0E2M3glWz3dms2Tu~FFeqMo4Glc0BIrrb2yd3LgGUGsKFu2bLxfGntKuBsM9JB-j7ESSj9W53vqz0lE0QATaB5vR8Br~yP21pR9KX6yV3U7A4Vc5LnQzD74IzZ1E-yKTR22s2XOr~dKg3TsG-h0zko~NXz4icG23m7RYW3xh~cCwfGzf54F4F5UpApXsMePwQxwLR7uPJZUg3633LD-Z7A__",
      "https://media-hosting.imagekit.io//57c40ef155074677/WhatsApp%20Image%202025-01-16%20at%2016.07.00_0032b05b.jpg?Expires=1832320108&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Dk5FOndof8B2xYggeYQJDcdvfZYZWUnSLkwPKAaF7r~fWGMn4fU6vR9Xq~c1pMpIsGyBXqObZXjFjfdCy4EaP3Kaa-7TL78sVVthWWWExRSQ-Dt0qwiMvOpe1Rla7lPyz7wlu7-MJlAC-3CptgAdoSYB~xCKW7DP~wsmhAk4-CQ6kINh6NNXICA6oDfB8Um0HvN4Uw2SbmSpFXbbZAn7f-YHUo~XFJZfMh3d0Gwg1p8K~jZmYjx1rVtDFri33lqMAPZKUcngDdtR~-dj78krnnMgv3xRmg57qQf7esC-BOeSkj4-pvPjZbASY~fuhBiZZiYpcq2qLtYhSKgSxp2XNw__"
    ],
    videos: []
   },
   {
    id: 19,
    type: 'apartment',
    name: "شقة دوبلكس في شيشلي",
    price: 55000,
    location: "Şişli, Istanbul",
    description: "شقة دوبليكس طابقين في شيشلي فباشا محلسي، غرفتين فوق وغرفتين تحت، معفشة جاهزة",
    googleMapsUrl: "https://www.google.com/maps?q=41.0536766052246,28.9715023040771",
    coordinates: {
      lat: 41.0536766052246,
      lng: 28.9715023040771
    },
    apartment: {
      type: "duplex",
      furnished: true,
      rooms: {
        upstairs: 2,
        downstairs: 2
      }
    },
   
    deposit: {
      required: true,
      amount: 50000,
      description: "50000 تأمين"
    },
   
    amenities: [
      " عن متور 10 دقائق مشي",
      "انترنت",
      "تدفئة مركزية"
    ],

   image: "https://media-hosting.imagekit.io//1b91c44321854cef/WhatsApp%20Image%202025-01-16%20at%2016.12.47_986c8c66.jpg?Expires=1832320358&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=EE92YgMGUEXBOj5iolZfhbkEefb0B55DjDw0uLDM7fl4BePPdAgeNBxxe34bSnaRK10~T4XJig2rvFJI3EokxGFTXPO8QteA4dGyn4mTzQXrtpHaGTL4XF-y83NIseCLJGrVbrIq~YmZU5FbQP-W5xZNq3fTURv3GmoCSI6tv8RSzW61aDUL6lWpiYXfAT7WR1QF6C092aXlQtIH8Jlc8LIOC8nOKr7Q-cb700R-T4vm41axkiRELtecmWxgBK31wYKaEPspsBo3gzGX1B0vEiOnlIbEym78RDOLozCXtO6XH3-37ddTeeMIPeySRUHw7MpS~Amzp-Qbk-eIRDSToA__",
    images: [
      "https://media-hosting.imagekit.io//1201ab624a5b49a1/WhatsApp%20Image%202025-01-16%20at%2016.12.48_cc6d405f.jpg?Expires=1832320358&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=PgYpIfB7f0pXqZUL8Jrm0H98GLk3dDRYmudv~FkMgNsnusLxhnYFiICPaqZmFRpyWHX2BufEGd8aqAKyUNkj88CToRoNrEteDdEALmojls8nRaSRvpunpa3VZV94u3u7jsLQSdTxvzACNwsX9-ZNvYe1WqvpLYTbjb9QZb2n1iAU1CQ62QjCpxtKGpu9UjufqQ-75GigUmISuVey9bj9-BjWKmyJFqe1qC8S6EqAATr6gFc28YhIuyvQv1VCDs8KhOaKOpoq9vx9Pgq7JJ2N2-nnlOk5Y6o6-TjmNp6joQxGfXDtZdiMiySQ0hUWeMF6vMeLRRFb2hNL0nE954skJA__",
      "https://media-hosting.imagekit.io//ea87e2a10aa348d7/WhatsApp%20Image%202025-01-16%20at%2016.12.48_1588b60c.jpg?Expires=1832320358&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nVJvca34PFOXIi-eg7Khra6xliS~xGV94-nw6e~pMxMWY4a4Qdj5-Mzvn0R8ZoLzcTxxR600QTzE5~DQBvwhv3gwoTU6TAf2iZUSus8N5~dKKFcxrNcMgqkuLOARrk03ZtqGlE1zxlCfAUj6uaxklgAB5d3WvaZGIFARaz7DjE8jeYoFnckUtYQ1VXlbLCb2hAfPD5GFRyNped7vBmw2vsNloCjsjqNEKIz3eL4zDvMNyHW5gUR2tGlpCBWg5mqs7on4dx1RmvR29ds9qg2ZhV~mftCiupr-PSwXTgZetB9kmbJTATji~IwItmrkRiEOksuQ-PJhKQmDSXfzsMigCg__",
      "https://media-hosting.imagekit.io//1572ba054bb54ea2/WhatsApp%20Image%202025-01-16%20at%2016.12.48_6c33953f.jpg?Expires=1832320358&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=2QG82MeSlPKIyHwrbpPIvrMvbjhjcbpK7nxvVa73Qx7cxVJ9hbNA0Ixt4~cnDHXpHrzYQqJ4qp0vYeFYR75jVDZ6oSeMi0IaVc25iAQ9ZLAl31kZMmjtYivr-7NojBsd8IixakeMdApP~eVcp8PkHOWEZ3OuYU5DNPYU3oMB~IoRiIGqEliNmAV6cH3gna4IhvKo~3NOXcNb8tfb1Z-m3Ed3uZp2hoSajjhPoCkDi2g9Uj9CvsVsLcC2jt3bg04L5w4jL4GUu3zBPgVod8vJom7lsZQEFEfg7GZ0fEEamwz3y4lUCnRsciFDjuZq-ggAqGC3QOzv71ipON~hwbZl1A__",
      "https://media-hosting.imagekit.io//61148d0006694ad1/WhatsApp%20Image%202025-01-16%20at%2016.12.47_d6cd2734.jpg?Expires=1832320358&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=FnSiWYHmVr1ZwZ~HdzIZOGRg9DKoH235teBlcT986S0IANFMF4ZwVd6qNs2GEcwYFdkdwp9sGlJOPX1IMOyfeL~7kZFmJcAtCB7omgPVECq5e7qAu9a18mEibze7LA38hRdYVbNYmp7wheFDW~RQ885bNwMHdcg7SxlUdqGdWtuisXF78VgWX8i~shPxqokRWmu2DQhyogXLTFsGQ22OkaTaFtUUXn3mEi~BT4-R37FDZuN1Gp1LCeQZ3-0K7-0fHEROYXsmYXYjQXaVhQkSWE8pP2kdlBBMdmmQVlqA-0xpLsF64o~zeQv00~EKzWuWPlE1r5TwJ4nJIEEuRk0k6g__",
      "https://media-hosting.imagekit.io//6190ba0facd645e9/WhatsApp%20Image%202025-01-16%20at%2016.12.47_993410f3.jpg?Expires=1832320358&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ZhElONa9Fx9aTmNXsGT7axNI5thZY8jvxDkpHcMVWrJZ6llqvFO5MxvEtHu4vIk1Gxde-RTxti6HEnISXpVLyI0V6UrPwr36T-yAT6cJRfimwCBN61Iksq8ZQJLtkMSfKIWDHCYIBNkoG89cOExXSsfmEaEFSXnUypaPGU2wOkVPMHw~qsyfsh7iqjxeQ02uRRr7XVK1mylCJzDDIbdzAnPaJg1~7jspow7~~vO8erum87zChenFk9hO5sdROqfqiTrCGWnB~d-s02kqDGvMx2yypc1m0gQ-n4v9wubyace775h9aJLkDBbJajK60sbYa9f1otB83FHkhJlOfXZS6g__",
      "https://media-hosting.imagekit.io//1b91c44321854cef/WhatsApp%20Image%202025-01-16%20at%2016.12.47_986c8c66.jpg?Expires=1832320358&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=EE92YgMGUEXBOj5iolZfhbkEefb0B55DjDw0uLDM7fl4BePPdAgeNBxxe34bSnaRK10~T4XJig2rvFJI3EokxGFTXPO8QteA4dGyn4mTzQXrtpHaGTL4XF-y83NIseCLJGrVbrIq~YmZU5FbQP-W5xZNq3fTURv3GmoCSI6tv8RSzW61aDUL6lWpiYXfAT7WR1QF6C092aXlQtIH8Jlc8LIOC8nOKr7Q-cb700R-T4vm41axkiRELtecmWxgBK31wYKaEPspsBo3gzGX1B0vEiOnlIbEym78RDOLozCXtO6XH3-37ddTeeMIPeySRUHw7MpS~Amzp-Qbk-eIRDSToA__",
      "https://media-hosting.imagekit.io//10dec4e36ae94590/WhatsApp%20Image%202025-01-16%20at%2016.12.46_6c24ca82.jpg?Expires=1832320358&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=oNgs9y7aQ1qQflWQWyysrLPrU4yzFN4FEFKERFajsSddZwxsPk7JZsqYuOlLnec1Z7YdUHA~7j~7Kzx4zTGgftiEjkXExNVHAlkqcLoDOGIDdUcGXqF-BfVDweXW6nlddZzD6cqb811P1XBFC-9R7bFN9bnZvPlCD4gffOIf~B8clxigl4mWKuCH-mg3DrYdEkwjg6YjtklHxigdLbAAponlqPcGr5oPdcFIwJ9senlOCr2GqzbolaQo94c8cjYwUWQx~rwrvu3-5Nbqb0SRW8nfmjk7DVCC6gSRK13Q96KZDnQexNFbbHpiZ3qMDBMXwvsOk7cUloJSEKVmjhdKBQ__",
      "https://media-hosting.imagekit.io//8b479b347edf416f/WhatsApp%20Image%202025-01-16%20at%2016.12.46_5bc0ebb6.jpg?Expires=1832320358&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Yo-MZ0Ysc5AiGdbEOfDbuD5gOwNFhHqTyropLIYZD-8z2u57WihjodY0KGUHMFIEJMgKNEKAJgB6lUYLy4JfZ~DP6tHRaDIXf6CcPvuZzhNp0Kj4ykUBg0IrDieW6zVT87AYaL1~J6bho7XOEgE89hZV-96XffvU1tMcU5bABLtkkVeSdgjgwJ3msOzwQ9l8i6kbBLv8r1jN3fVKGHbimSmeIx1x3x55tbq1po42uS~lpW6e3vlZW5-ytVr6lWCnK2MluN3H5sLe1LmWMzmGey6ZMj0q3-5mEsp6yqRjyeDjvToQVlxj7RE5vIR8YbYq9pbpy3Yec~kSMpwXNv8trg__",
      "https://media-hosting.imagekit.io//6b1119a08ada4d03/WhatsApp%20Image%202025-01-16%20at%2016.12.45_6dc9b0dc.jpg?Expires=1832320358&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=sT9t-m1zjwxrEKpjmat55bSepwu1NPV2tFifMZ8gCTx3tNTV-pDvs3v7Qb3Bc4Xa3W6x5LsPw8mmEuX2-sIX0w92TceHgmDTIsPPOkf6wny0NfGjqfbjL1PQhgf2ekNmFzn62bllc6FssJCJqA6ZUhyk~SUKsjfn8HeGakPLattcoR15KWCmf2i9P2Y4WQsMkAXu606Rz0Y6pcXT9Sssdv6q1WHNpnGLNvOpwfhR2X1A2n1Ya-2a175DzCyD5XvzhlBaC4yYy3xLB2bL7iXhyGQJgVm0a~h09zXFwYy4y3ykWpzx4F6rMtm-raVZS3zgxeNVZODIK1ONixMbftVSHw__",
      "https://media-hosting.imagekit.io//82f6c01f379240c2/WhatsApp%20Image%202025-01-16%20at%2016.12.45_2ed521f2.jpg?Expires=1832320358&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=H7iMY8Kq8r5jnGHijrEC3YyRgAENfKzJrKQZCz0ETxe1yWUuIc80DJdI-E~Hq0SxvFGMUOUN-8HrB966-hSx-5H6vMtlSJ8m0By132PgjWTYGm1FX2~kU51xIYalEOPo7OZ~vW6z~u~kE-iCl0oI9ZpYEQjEu6k4L-XvAJQ-tQMogMC3UItkGvphDlpjBeKRPvUwmLvjMcHHknawm4Wya2Oo~J2aZ5Zes2W1Vr0HuwKHRYaIDibNbvANsVIhimEy3CUJCKt28TtHck4P~Zad2kOALxCCeOAzikWm7cNgwfeC3vTtwbUFbh7twHqPxrgkoLS8JRC1A3-v96i4o~EyHg__",
      "https://media-hosting.imagekit.io//6bd6869a48cd4918/WhatsApp%20Image%202025-01-16%20at%2016.12.44_bbfc38dd.jpg?Expires=1832320358&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=gZOOkzsVAY8olGNI7sDx4AF9ZGvaorb~dG57~b~mEj5bnJspo7I6s3xd6ThZr5HdWXej6NZIq3okF95LX3u384N~8ROmDX8cQKGW~2yL0ChzVWEJHChk0iTRSNSuYx7FWK3q6FDNr5k29xpS0GJ-SkXoy9WRNsvK-xd7yf3u3yH5wVyvBRsQedctoJY~ehhIOaMgX89rWQp3as~MHPQnfrrgOSAd8Jgar4nTxQvx7hOiLBzx459YE1wHiNhroM2v~HuS80-oV8EV8GuG8ljs4yflAYJ-OLZETGwPACY8FFZel5BU4R6G57KbW5ShAX6D1mns-aE2-CpQu4z4pig0iA__",
      "https://media-hosting.imagekit.io//20de90abf6774a5e/WhatsApp%20Image%202025-01-16%20at%2016.12.43_cc99bae7.jpg?Expires=1832320358&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=zy-5moNV4SnJEO9sdgEWJV-Agdknn1mUX4TYZlB-fFCuxyV4THOyFrr8~RDMJ2N~2lZdNdIHrC-ZlcLy2ixzDRZeq~ARp1o5gSbAyWZiUkhKKApyLOYWxgoWN0FsrBgJq5kknJL0dV-SKVE38Biy9el8DPYCvqPL0fvn4YRUPS6SyOZEg-ixxVQBkVD0RtYOBDvAMaEoBZU2-L87fmCSikhX-EKbcs4Jd1wr62-Hrzu3z5O~~6vj~6O1T8HYj7qCKn897R9sqMlPgyvYwa9E1B9AnJl1eVfAEkgpsdoJPQYE5ryRWuqT-Ny-UQ0YX-Q9dlLRwQEb~oBZrGpNAtui8A__"
    ],
    videos: [
      {
        url: "https://media-hosting.imagekit.io//bf3281e164f74cda/WhatsApp%20Video%202025-01-16%20at%2016.13.07_7a3d9b06.mp4?Expires=1832320556&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=bwNDVW~h21yS3ewpqd1keNnkFYoO7kr17smK8WXGO3oo1RJgtp9mNR~SVlxHZuUSDSyM9JGgPpoxOwCE2EBqAzYm~ZoOEuXKPhxtKNxAeG6eN00cI335br6OSG66RVnJ5cXcZj~ymAWx~vuaV91tuGtjSTGLLAIsec7y1httnJSF~o0onPSaZUMWxe4iotmeLChOgq~je1zUBzwiMGCxBcktcWJwtXbYupn6v4FAjyilpa39vd9oQkzNdEwE4Uc9hW7ss94qJPDAtSMQWvlKJxVoJff5wX~jyJv4dHBvhd0dIUMyjkDxCTX2zGej9FvKodx15GHT-uBhp0KKsFAcIA__"
      }
    ]
   },
   {
    id: 20,
    type: 'room',
    name: "غرفة مفروشة في كاديكوي",
    price: 12500,
    roomType: 'individual',
    preference: 'female',
    location: "Bostancı, Kadıköy, Istanbul",
    description: "غرفة مفروشة للإيجار للبنات في كاديكوي، منزل مجهز بالكامل، بموقع هادئ وآمن وقريب من الأسواق",
    googleMapsUrl: "https://www.google.com/maps?q=41.0536766052246,28.9715023040771",
    coordinates: {
      lat: 41.0536766052246,
      lng: 28.9715023040771
    },
    apartment: {
      type: "1+3"
    },
   
    deposit: {
      required: true,
      amount: 7000,
      description: "7000 تأمين"
    },
   
    amenities: [
      "موقع هادئ",
      "موقع آمن",
      "قرب الأسواق",
      "مترو بوستانجي - دقيقة واحدة",
      "مواقف الباصات - دقيقة واحدة"
    ],
  
   image: "https://media-hosting.imagekit.io//1b65de85d8fa4c16/WhatsApp%20Image%202025-01-17%20at%2012.25.03_689719df.jpg?Expires=1832320691&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Y4Uv0xbrUhg8e-28yRzoRewAs22J7fi8ahdtwLOOcxGD2M9nwEIkrOAMjPPkBSw3z0RpoN58bH0tPSFHL0jx4XKPxZACpO7hPie0OdpMry9CmLmxZpjkWHBYi3QzfkwLPQVRImQ6xRM1axYOHrc7qLxDnGtYN8VcsFdTyNu8eyQ4UR6AWxrx6tRDlpmffSSRQBscAjbhVAkQXdAmX5A3OWNSq87~0nsPY1v~2B7neGNMuBKuTwcMlmeJfGjrE1OO6Ac40kVBu3PSX41TZRp3ycZ-ziLR5V7t82CIEC8CltiWHSyxu9cgOHMCAv~0VaPaPBGKe56StnAlvzCN0jkhpg__",
    images: [
      "https://media-hosting.imagekit.io//1b65de85d8fa4c16/WhatsApp%20Image%202025-01-17%20at%2012.25.03_689719df.jpg?Expires=1832320691&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Y4Uv0xbrUhg8e-28yRzoRewAs22J7fi8ahdtwLOOcxGD2M9nwEIkrOAMjPPkBSw3z0RpoN58bH0tPSFHL0jx4XKPxZACpO7hPie0OdpMry9CmLmxZpjkWHBYi3QzfkwLPQVRImQ6xRM1axYOHrc7qLxDnGtYN8VcsFdTyNu8eyQ4UR6AWxrx6tRDlpmffSSRQBscAjbhVAkQXdAmX5A3OWNSq87~0nsPY1v~2B7neGNMuBKuTwcMlmeJfGjrE1OO6Ac40kVBu3PSX41TZRp3ycZ-ziLR5V7t82CIEC8CltiWHSyxu9cgOHMCAv~0VaPaPBGKe56StnAlvzCN0jkhpg__",
      "https://media-hosting.imagekit.io//1a71866e27954260/WhatsApp%20Image%202025-01-17%20at%2012.25.03_2756c3e6.jpg?Expires=1832320691&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=EPDllRPiS~WO~vvYf-dsGoWy04nvmdVYa8fEt0pvi1Be0EfkkIrMThV-REJB5ivAhL3~B634pZPCWp77o5nYiRF1Xo6c4NloQAC1fjZhTSJVhs85Df7V5P0zKRuQ22kUCbGtDcnvZ~s05gC9gxJlrtLvsrkKFVHB6gJ7lxaJu~xkDNZRQw8glXBwUdl~hKHQJjn2MH4L4~2CX2NFE-p~2w90UHXxO3gc2lliQQ0YquP727M0jKXbfDyT1-MHmlWqabL9S4dM0nJSjfllmTtYW~L8a4uVE5SDjNU28X~IcVmDfE4-AHJyTi0LaY2WmnI8J0KLKCYrFDO0YrPSDacMYA__",
      "https://media-hosting.imagekit.io//b3d2f1c9429f4d12/WhatsApp%20Image%202025-01-17%20at%2012.25.02_54558ac1.jpg?Expires=1832320691&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=AaLnIg9wExcOf8WLfQ-FkephCpLE8suXtw2xKF1DU6BrDe41c8j105z8Je6ziplEaqnklly9WvfHaFb6qwKImdlvjiVTlDR3-WtzUQhPP4xUwqPzStnKzFSpbHi3WbN-gtMzKKh7vueI8NMT9xPg2S891~D2eOIUtgMt6ixvONZy1dZ21M3y~SehDeglqqm8qcLnoip1y7SzpjMbMCz1pbXbYvLUJ4fjg7NS~Rq8Gx4OIgxoTKA~2PW-6Wa1x2g197RKvXWoU4o3puAdRlergbJcSvLJcm5DxZpOPUCZTu4ard6bQ7KRXosKPzlYrRNlXKgGLiSoTM469kjoXy60iA__",
      "https://media-hosting.imagekit.io//8aff3cc7b6264720/WhatsApp%20Image%202025-01-17%20at%2012.25.04_dded7f63.jpg?Expires=1832320691&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=UrLG9SmSyUwHTakqxAC7EFJtzy4GMDH3n0Hg0DzxbXNTQT9JtCVgQSfz~jIwBIpzyi8qg3Eql9YGBhhCSnf1MNc3U~TNNU47EIq68-2z~WIwwQeAoAzymIzISu15CVDefHrrvTxspGsdC8wbGs5daMV5UKbXDxKZPceBPG-gfPZSc4DhSFmTtPbtCkNy7I9rS67aUAFtEGQe-b1rRDZsZFA5KI5Tpuf~6SjmpljDkK2kyXyVa2lD4bS2kZJKJBlcY-0EiA75xnMt-xGjjBBqYNrlcIoRCFtMmT9geT9fJIu7KNAyPyNft0jvzbAUZLtC-~4xJzStrXiEMLT-~lHkUg__",
      "https://media-hosting.imagekit.io//09ecaaa372d34702/WhatsApp%20Image%202025-01-17%20at%2012.25.04_ab1ed0f4.jpg?Expires=1832320691&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=fVHSe0ToHkO9oV6bTr9kTZxY7iidM6tqP6cC5berrrt6DVdeD1YWhYOz0zTNl1YpW5uE3RRHV1ARcg4ag6gE6vFi6yHnFLONEMvjdAoXAZ72H2zaOa7JxgyRjMohIoZF2kmaes9mNcOtnJOBZwqPTasbno3Uk-dCRRs-mWegkTXJaAJsOQBbReWFCN0ZJGGpqPU9rookE8RV-Kz57FSKAiKL3SNAZwXRgDPw4xZV~b4FXMDaZ1AzrX0OY87hFKiTuuNXC2w~5gr9bkLfiPv45LhVIgYqVdQDQRmFsDxh8OHErHlmC1rlkaabjr9Ognx8ZBdj4PcO3xu-VwOe3x8mFA__",
      "https://media-hosting.imagekit.io//ba1c30174ff44051/WhatsApp%20Image%202025-01-17%20at%2012.25.04_5cc7fb7d.jpg?Expires=1832320691&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=maW31QXbBB-Sy92MEQ1qVfHPM5T64yxmnmUU7eWaGIx480rMEBQthNapH~CJpvz5vsCnoMwwsLRhNclAThkIHL9HpKNqf5K4Y3knAg-56QBhl8lyD4z5aaK8r~XHznNogKoD6odDZ8I5cTbLdK92KaRzWQ1-DgpyyDUtBjQ7mdfZgpU4F9PxI2du5NAnEzVDN7zcZp7qAa5xwM-nPjxy3WzTs90Ag2zApCJHEyrEjIC2QrudKOKt5OjpzXyLDq31O3C4~otFga~bUaUOTD0xvs5ydNjn0OCYtCNdNOlXaYypWozxZP2a13yldAVsZGy4HitOx0cMZPOhL9eROoCheQ__",
      "https://media-hosting.imagekit.io//4ace2b5e338842c4/WhatsApp%20Image%202025-01-17%20at%2012.25.03_bdf4c9c1.jpg?Expires=1832320691&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=QMfXloQ9o-sxU-4OLx90HjmKAq-N2xvN5nWTofiOlImSQQ2kJ63isEhRenwpBtK6He0DOPsBk-ZT~WoHgKkV17TgM8mNik6hSEce~7-iA6YNlxeL1VxmmJS0dvV9cO0eCgYovyiIHsa5irKX~cQ0yMnjHRYE8C8~oUNrp-7AMOJ-H68RcJkWdqE62U8Whv7WtbIRuVbTfl2bva27dkbgdHMpUd6Bv20cUCSzpWIAHIJvfTpKDaLzUKJfGT-2N0Jq-M1Z~VY5MSmYz2AV39SfV~BrZCkHWV8eO7JPWVANm6-Fv4wohlWosXCFrDTAUuaS1vkHcv~BhzkbKnFZuVBcPQ__",
      "https://media-hosting.imagekit.io//06f9cbd5e67b46b2/WhatsApp%20Image%202025-01-17%20at%2012.25.03_bbdbdb54.jpg?Expires=1832320691&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=gPvFpu3tCszMc32UvsLxc9miWSuKBB5fg5pSjUZhl9hK5WIUa1IQ91u5h7CMxL~pMBTCUrcAw7QpYhRn9MSKBwbQz47ipsw63UWXpirMmNupfVdHKgyH3LziRZYk-bkVWCOyUmrPa8VsiX3SIP2qKXAJHQrtckKRH0uANdpvxondYEIUyA27lGGBMpUaddE8TkpMNnVkcVZuG7rdFtNLicQ8KYUy7a5fxNc5DeXnt8s7s2ea1rC2hvSKiDXvPIe7b5776foz-PN-qpvFJxFcy2H~Qr9E4pDc4CsKmJpPbFekxmtUm8ZW2AgNbrMxv9d6p0t3X88Q6yP8xCeUQnbKzA__",

    ],
    videos: []
   },
   {
    id: 21,
    type: 'room',
    name: "غرفة فردية مفروشة في الفاتح",
    price: 10707,
    roomType: 'individual',
    preference: 'male',
    location: "Fatih, Istanbul",
    googleMapsUrl: "https://maps.app.goo.gl/G1ZhZU9samdrqx487",
    coordinates: {
      lat: 41.008515,
      lng: 28.978359
    },
    description: "متوفر غرفة لطالب مفروشة للإيجار في الفاتح في شقة 3+1، قريب جدا من جامع الفاتح",
    
    apartment: {
      type: "1+3"
    },
   
    deposit: {
      required: true,
      amount: 21414,
      description: "شهرين تأمين"
    },
   
    amenities: [
      "قريب جدا من جامع الفاتح",
      "موقع هادئ",
      "موقع آمن",
      "قرب الأسواق",
      "انترنت",
      "تدفئة مركزية"
    ],
    landmarks: {
      "جامع الفاتح": "قريب جدا"
    },

    image: "https://media-hosting.imagekit.io//0090685cb86b4c2e/Screenshot%202025-01-24%20132052.png?Expires=1832585762&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=CaAjnt4LP1hKGZUHcJ~75w0wFs1EIBr-WHJ1Zq8ixLCK-VkoyBjG~VRtLqg~wp3ergFutwBBMWkI1KkcVZY6JC6kC3wO0oOBc5WLdd82CM3998ISpiV65cwIwPpzaVLssja-HdVHiGE4pTCZ7x1xXGAhSmFpGwPRcn5d1XRB~J8NxnOagaN2A0eMiiOCZOVsNXwrlZ9X5ktSIeP6h106s0AmD1d-hm~TW5CzS~fLiWxP5JpekQvzYyFyfttX~JGleXb58s1lN-nJffLE0dNdahZ8sY60xtGDmqrxx3JfBebuDD1htOiztvY2LifOi6ly97mifviWNkeMqayoAhgLHw__",
    images: [
      "https://media-hosting.imagekit.io//0090685cb86b4c2e/Screenshot%202025-01-24%20132052.png?Expires=1832585762&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=CaAjnt4LP1hKGZUHcJ~75w0wFs1EIBr-WHJ1Zq8ixLCK-VkoyBjG~VRtLqg~wp3ergFutwBBMWkI1KkcVZY6JC6kC3wO0oOBc5WLdd82CM3998ISpiV65cwIwPpzaVLssja-HdVHiGE4pTCZ7x1xXGAhSmFpGwPRcn5d1XRB~J8NxnOagaN2A0eMiiOCZOVsNXwrlZ9X5ktSIeP6h106s0AmD1d-hm~TW5CzS~fLiWxP5JpekQvzYyFyfttX~JGleXb58s1lN-nJffLE0dNdahZ8sY60xtGDmqrxx3JfBebuDD1htOiztvY2LifOi6ly97mifviWNkeMqayoAhgLHw__"
    ],
    videos: [
      "https://media-hosting.imagekit.io//63ff00bbba854746/WhatsApp%20Video%202025-01-18%20at%2003.09.06_1a9b26fc.mp4?Expires=1832322338&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=GLjJGqzpKpSb3X1q0uFSfDQGsltgEBMBl3koPxCSl5PSDR7wiTU3ckZW-8ahLVCfXQJ1LH3F61RzrgHzEHkzfemsLvFHGT7Fjag4seDc2yk7tMLAmCx30cCHX0d5VEEkxLd8z50ggXe~IBTU1uEVTENX1UaYll5Z-CChRvfUNnlV-porfvooJAdr44UNbYYDij83prNi2LI68pru1FcyIilc7iLKm7qDuxop4qsnvHAtaoHKE7s4FiOoKig5IyBIoXdQp31KwXvOOf~DU60v2X~l1ImM2AmhbfQXvmZ7L174AH3NGdxxza02tBUijFBl3nHsd6IkWankKddvjmw5Hg__"
    ]
    },
   {
    id: 22,
    type: 'room',
    name: "سرير في غرفة ثنائية في افجيلار",
    price: 4639,
    roomType: 'shared',
    preference: 'male',
    location: "Avcılar, Istanbul",
    googleMapsUrl: "https://maps.app.goo.gl/jNKQqYbGjCHF7Ta76",
    coordinates: {
      lat: 41.008515,
      lng: 28.978359
    },
    description: "متوفرة غرفة فردية لطالب في شقة 4+1 في افجيلار تبعد دقيقة واحدة عن متروبوس",
    apartment: {
      type: "1+4"
    },
  
    deposit: {
      required: true,
      amount: 1784,
      description: "1784 تأمين"
    },

    amenities: [
      "دقيقة واحدة عن متروبوس",
      "انترنت",
      "تدفئة مركزية"
    ],

    image : "https://media-hosting.imagekit.io//fe31688fbb114299/WhatsApp%20Image%202025-01-18%20at%2003.29.59_c8a77cec.jpg?Expires=1832323161&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=cSNbnosbTtxhvAqjY9c9X7u2MBFMxMoF8VMYxsk~yj6QHIF0POi7WDDJ3AhShUJO27xhrQjfvIInL~w-9jzifHe0Htsbb8Y8IKLVvSsFjRPloePb7draVY1fbuAStNUvlFBdXR5LYQrDoGi6zb7ziuW9ILdIhBP7~hFeLXMMckNKu7j1mxYxUB7BxWZMTj-NxdDQ0IkWWIi~HYF7oHuH-ICyys-WwBOej4XF63Ej45neYqZWJWgZDb~OWPSuDixfWOOH7QmrbH2Ret8czG0iNiAWAiEdeFqMvq9DjOhQeF~3caJF56MYOZhPNXjTVyIsGgnErKcThe4Ouy6ZWfLJZw__",

    images: [
      "https://media-hosting.imagekit.io//fe31688fbb114299/WhatsApp%20Image%202025-01-18%20at%2003.29.59_c8a77cec.jpg?Expires=1832323161&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=cSNbnosbTtxhvAqjY9c9X7u2MBFMxMoF8VMYxsk~yj6QHIF0POi7WDDJ3AhShUJO27xhrQjfvIInL~w-9jzifHe0Htsbb8Y8IKLVvSsFjRPloePb7draVY1fbuAStNUvlFBdXR5LYQrDoGi6zb7ziuW9ILdIhBP7~hFeLXMMckNKu7j1mxYxUB7BxWZMTj-NxdDQ0IkWWIi~HYF7oHuH-ICyys-WwBOej4XF63Ej45neYqZWJWgZDb~OWPSuDixfWOOH7QmrbH2Ret8czG0iNiAWAiEdeFqMvq9DjOhQeF~3caJF56MYOZhPNXjTVyIsGgnErKcThe4Ouy6ZWfLJZw__",
      "https://media-hosting.imagekit.io//fb5c283c21f64c34/WhatsApp%20Image%202025-01-18%20at%2003.29.59_1528a533.jpg?Expires=1832323167&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=0zB68IcdYfANcwwfP-kLJoZhIsd-GQEzvGX1rDu~3hk25XtDib2~ZspzVe9kspSLyHqsfPx-8ee9uyP1ALBeZNasNUY1lph0yzUj8izpD6YHpGMgHdXbK2PbWWVEVeLinFs~JL-iLjG2TlKf26CmCJyCQOcFZEBsCOvdZ2NQmI1Vwshyz07IMvtyUpFeFkaQFpxMeP21arixqbXmS1M1kR5WB-B6NzWPZJTXdkwRgujZs1MqXHtB-QMZwno4iOvG2vk43-v02UmO68cFpTEYlmepGbfwCVb5EpcmjQJsR-1mvtTmWX~lOelMCHxoKj6sTgaBBfJiH9awufdP-SrEhg__",
      "https://media-hosting.imagekit.io//8e1297fcf6134d2f/WhatsApp%20Image%202025-01-18%20at%2003.30.00_b23e1ae2.jpg?Expires=1832323167&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=0yok0GSW3rLy8-Myn-A3ztgwq2vaJLzxqGyiLclMpekahM33FaJjuzM6jtESz9zOFU2XuZdqM8pjkoocp6NMlKYgJZ3NDzU7k60QEZfvOPa4ijuzSRZKRWBmlMlg5m09drLGDTFovRi1jsiHdhXUX0hP~qn4Rr3rh8J49ZIKlKMbQiJt-AZfic~yGunOm6-vOWHdTglDuTDGbt1EqTuSrR2G6LEh~LJXcLNcN2RRAmOQxedX8NLbESki7i5ClI2Aqlw6FjuKt1GVVAnN6IBNxBuPfK2Qwc~NtFUyLn7~STuM2ebXY0FGuj9XGpm5mVmXIj6J4ChN6Mm6Ib3am4lM-w__"
    ],
    videos: []
   },
   {
    id: 23,
    type: 'room',
    name: "غرفة فردية في افجيلار",
    price: 8922,
    roomType: 'individual',
    preference: 'male',
    location: "Avcılar, Istanbul",
    googleMapsUrl: "https://maps.app.goo.gl/jNKQqYbGjCHF7Ta76",
    coordinates: {
      lat: 41.008515,
      lng: 28.978359
    },
    description: "متوفرة غرفة فردية لطالب في شقة 4+1 في افجيلار تبعد دقيقة واحدة عن متروبوس",
    apartment: {
      type: "1+4"
    },

    deposit: {
      required: true,
      amount: 3569,
      description: "3569 تأمين"
    },
    amenities: [
      "دقيقة واحدة عن متروبوس",
      "انترنت",
      "تدفئة مركزية"
    ],
    image : "https://media-hosting.imagekit.io//fadd521b65154432/WhatsApp%20Image%202025-01-18%20at%2003.29.59_c8a77cec.jpg?Expires=1832588212&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=sYBgrnHQ4FxliE8rq3k6Qg66AnidQs4RfB6qzaN6HFniGP0BINNo7iUoUvw1wtM3YL2lhXzpwF4Rz7CRyD2Qi~iry-ZP8fPqjfmUNIwD5K5P4DX3c-r21lgYQBEhvNwPia~ZeQLbxi8546N97lXMCaL4Va9F0GA9mIFzkkGADeYc70TskVIdlh~FYXT19KLpsY3yeiqWUgUIkslAK7MdfMX2COuPT336A6HdmHM5kGZtWD16vY1gKytQYSaj7~bmpLxSk2kbLaei5GMew9rr5XNxBlWE3c3-0bQgZbejsfOYdPl8Zc3ztUrJn2-~1zK~TPqXSr2NuX6HiAWmZR78AA__",
    images: [
      "https://media-hosting.imagekit.io//fadd521b65154432/WhatsApp%20Image%202025-01-18%20at%2003.29.59_c8a77cec.jpg?Expires=1832588212&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=sYBgrnHQ4FxliE8rq3k6Qg66AnidQs4RfB6qzaN6HFniGP0BINNo7iUoUvw1wtM3YL2lhXzpwF4Rz7CRyD2Qi~iry-ZP8fPqjfmUNIwD5K5P4DX3c-r21lgYQBEhvNwPia~ZeQLbxi8546N97lXMCaL4Va9F0GA9mIFzkkGADeYc70TskVIdlh~FYXT19KLpsY3yeiqWUgUIkslAK7MdfMX2COuPT336A6HdmHM5kGZtWD16vY1gKytQYSaj7~bmpLxSk2kbLaei5GMew9rr5XNxBlWE3c3-0bQgZbejsfOYdPl8Zc3ztUrJn2-~1zK~TPqXSr2NuX6HiAWmZR78AA__",
      "https://media-hosting.imagekit.io//fb5c283c21f64c34/WhatsApp%20Image%202025-01-18%20at%2003.29.59_1528a533.jpg?Expires=1832323167&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=0zB68IcdYfANcwwfP-kLJoZhIsd-GQEzvGX1rDu~3hk25XtDib2~ZspzVe9kspSLyHqsfPx-8ee9uyP1ALBeZNasNUY1lph0yzUj8izpD6YHpGMgHdXbK2PbWWVEVeLinFs~JL-iLjG2TlKf26CmCJyCQOcFZEBsCOvdZ2NQmI1Vwshyz07IMvtyUpFeFkaQFpxMeP21arixqbXmS1M1kR5WB-B6NzWPZJTXdkwRgujZs1MqXHtB-QMZwno4iOvG2vk43-v02UmO68cFpTEYlmepGbfwCVb5EpcmjQJsR-1mvtTmWX~lOelMCHxoKj6sTgaBBfJiH9awufdP-SrEhg__",
      "https://media-hosting.imagekit.io//8e1297fcf6134d2f/WhatsApp%20Image%202025-01-18%20at%2003.30.00_b23e1ae2.jpg?Expires=1832323167&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=0yok0GSW3rLy8-Myn-A3ztgwq2vaJLzxqGyiLclMpekahM33FaJjuzM6jtESz9zOFU2XuZdqM8pjkoocp6NMlKYgJZ3NDzU7k60QEZfvOPa4ijuzSRZKRWBmlMlg5m09drLGDTFovRi1jsiHdhXUX0hP~qn4Rr3rh8J49ZIKlKMbQiJt-AZfic~yGunOm6-vOWHdTglDuTDGbt1EqTuSrR2G6LEh~LJXcLNcN2RRAmOQxedX8NLbESki7i5ClI2Aqlw6FjuKt1GVVAnN6IBNxBuPfK2Qwc~NtFUyLn7~STuM2ebXY0FGuj9XGpm5mVmXIj6J4ChN6Mm6Ib3am4lM-w__"
    ],
    videos: []
   },
   {
    id: 24,
    type: 'room',
    name: "غرفة فردية قرب جامعة نيشانتاشي",
    price: 10000,
    roomType: 'individual',
    preference: 'female',
    location: "Maslak, Istanbul",
    googleMapsUrl: "https://www.google.com/maps?q=41.11819839477539,29.003170013427734&z=17&hl=en",
    description: "متوفرة غرفة فردية قريبة على جامعة نيشانتاشي وبيكنت 10 دقائق بالدولموش في شقة 1+3",
    apartment: {
      type: "1+3"
    },
    deposit: {
      required: true,
      amount: 6000,
      description: "6000 تأمين"
    },
    
    amenities: [
      "سوبر ماركت تحت البناء",
      "محطة باص",
      "بجانب جامعة نيشانتاشي وبيكنت 10 دقائق للجامعات",
      "10 دقائق للمترو"
    ],
    image : "https://media-hosting.imagekit.io//14df87a7f3824344/WhatsApp%20Image%202025-01-18%20at%2003.30.00_b23e1ae2.jpg?Expires=1832324646&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=u6iHYI5rxJC0STnvNPK1ydD16C9xkvRIQFzxY3XLludrQ28qXq7CtnJVLHP1vfhXNktO6m3OoR3DBMSf0WomGXfEEcGEmf9szTRm3zhMAwgq~x3Z6SXz-elOK9ZXar1KVZI3thCHxVSs9Mw54~7jdccCijUwqMfq9bahCfzh8cnVYEqOl2JDog-~9fX3uZPC0ycnwK2iGhpoywra-19LM7QQJuaS9v-6HwNI3SYPiZ5yw9x1dG~z9cCgCcJ0xadYEvmpJ9GM5ItT2byAMP22epqTqvRLngEAKdFCfu7KB6nu9s7-5-G07DMdUZ2~7KWS0qg3EOfOTlZgCDNgEH-u~A__",
    images: [
      "https://media-hosting.imagekit.io//14df87a7f3824344/WhatsApp%20Image%202025-01-18%20at%2003.30.00_b23e1ae2.jpg?Expires=1832324646&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=u6iHYI5rxJC0STnvNPK1ydD16C9xkvRIQFzxY3XLludrQ28qXq7CtnJVLHP1vfhXNktO6m3OoR3DBMSf0WomGXfEEcGEmf9szTRm3zhMAwgq~x3Z6SXz-elOK9ZXar1KVZI3thCHxVSs9Mw54~7jdccCijUwqMfq9bahCfzh8cnVYEqOl2JDog-~9fX3uZPC0ycnwK2iGhpoywra-19LM7QQJuaS9v-6HwNI3SYPiZ5yw9x1dG~z9cCgCcJ0xadYEvmpJ9GM5ItT2byAMP22epqTqvRLngEAKdFCfu7KB6nu9s7-5-G07DMdUZ2~7KWS0qg3EOfOTlZgCDNgEH-u~A__",
      "https://media-hosting.imagekit.io//77880860b9414a1b/WhatsApp%20Image%202025-01-18%20at%2021.56.10_5e7dd52a.jpg?Expires=1832324646&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=KKj35T3jo4KaSKW1cjAvXnwAM925VuBAsapHjKZ7AWKIAL8RVh-y14IHYEKNbVjh9jAOtoUEPCh8Zxp9SlyVs75Z6Vlu-VQYMchseFPhjPLKuubo5RxQNweTS-vHScB~mQcj1Bc~PoeZayBph7NaG1yP8ISCVUaa9pVxrmkTjI6nTroIFx9ZWJtdiYWAIUeVxgLeizA3uOC0YeQNWLTY7P9AmpLmcacrleGD6pwK8b8AI2pLkngBtxyRX6psFl2y3L-nrQdzSZB8vQxuRFPkrqmAOu7QT5q3sKLQJsLkddqmPRZt~eNNekp4VHCHiQMdqIWC3LNlZAVw59xl7UUEWw__",
      "https://media-hosting.imagekit.io//ea993ec1246c41fd/WhatsApp%20Image%202025-01-18%20at%2021.56.10_19996574.jpg?Expires=1832324646&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=zGtkJy6HiWU2nP~25TlDHJhc1laXeLCsCTE6aXewbCapB368377oqCws5~jmUL8amhRuG5Cw3wjuEX9WaEV3P1IKAY1WhexQm8XZNql07-BjLSsaEPacqeJbz-TSRhy~mdhFt-dBJyDXNNtcc5ZCf~2~IQYXcqjwJDcguBZX--mQnRMDviGRtIvHr60zaHTi2JIYW~JMBSMl50ZsJUWcqnKQWYKvdciXQwq8VBPodMF6OEgxIyQYISLwHmvcf7-D-80wzLAhAuM0kKs5Qn~K00TsdNXIscGrFKaRC828cvKHTQXFIom63U~wAE1ccVlTG7hB1DwxY3ssHdV4JYMcHA__",
      "https://media-hosting.imagekit.io//774dd2455ad04598/WhatsApp%20Image%202025-01-18%20at%2021.56.10_eca38c26.jpg?Expires=1832324646&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=FO3b13XhgeJl0A3KQnAuqaEUyEV7CzEMSmzydIzRzfZQmqhw-GQB0Qs3Z5sBU7QwiBFSthsGEuNjwyoXXWsLn3bJ67D8rURCwL7S3rCr25~P6GvqsZkT3tkrw7E6rh6j8Bxga6oWtp3W160tmVt1jSumA6cpsCjSfsRSRvR3HfuyCGpJxttIaepE4hH1dziIcHQAVJYzD7n7xau2fwgqglvl7uk~tNnb2gQ4lB0VOW9Gy8y4EM-qCdEtzN-8XMgkjqlYSsy4H~y1Tiv72IwB1NCtX4XwIYB3PW3GGrsYujYdt0VFP2VIBFM0wItRo5SfCFgKt6vlyLjBSBOowwkmWQ__"
    ]
   },
  //  {
  //   id: 25,
  //   type: 'rent',
  //   name: "غرفة فردية في شيرين افلار",
  //   price: 8000,
  //   roomType: 'individual', 
  //   preference: 'female',
  //   location: "Şirinevler, Istanbul",
  //   description: "غرفه فردية في سكن طالبات في شيرين افلار شارع الفاتح",
  //   apartment: {
  //     floor: 4,
  //     features: ["اصانصير"]
  //   },
  //   deposit: {
  //     required: true,
  //     amount: 3000
  //   },
  //   amenities: [
  //     "قرب الميدان",
  //     "قرب المواصلات", 
  //     "قرب الاسواق",
  //     "منطقة حيوية"
  //   ],
  //   locationDetails: {
  //     distance: {
  //       square: "4 دقائق"
  //     }
  //   },
  //   image: "https://media-hosting.imagekit.io//b3d699605beb4e38/Screenshot%202025-01-24%20142606.png?Expires=1832326069&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=KZ-h1ptjfoLhea67zOT5aYoeNeQisPpVH3RIMAO8k1m4CTDmj9KpL00kyr~F9AehnIv0no6tpKhvu4TGCjKMWa28YOu8G-QRkc0JLuHn1PzNJpa-30LmPxC4PcsZEbv~Y8kmmgJotNBhyP5XbL5QZ53Rvtov1k0y1aUmoT~p0CrzpPOJdFulGsTwBMr28FmDQ4AmSn0jzms7zbLRdhsvmEuSnIduiJQy2irlMdKk~JyRGqGBAUos9lHlTO5NDUhc112dZ0irJkm8PpfDHK18cHwLvniQfm3750i3IGET5JozozIFfTRIb8kiWmB7zy7UWYpiAIFFYRJqXMjJxXgYgw__",
  //   images: [
  //     "https://media-hosting.imagekit.io//b3d699605beb4e38/Screenshot%202025-01-24%20142606.png?Expires=1832326069&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=KZ-h1ptjfoLhea67zOT5aYoeNeQisPpVH3RIMAO8k1m4CTDmj9KpL00kyr~F9AehnIv0no6tpKhvu4TGCjKMWa28YOu8G-QRkc0JLuHn1PzNJpa-30LmPxC4PcsZEbv~Y8kmmgJotNBhyP5XbL5QZ53Rvtov1k0y1aUmoT~p0CrzpPOJdFulGsTwBMr28FmDQ4AmSn0jzms7zbLRdhsvmEuSnIduiJQy2irlMdKk~JyRGqGBAUos9lHlTO5NDUhc112dZ0irJkm8PpfDHK18cHwLvniQfm3750i3IGET5JozozIFfTRIb8kiWmB7zy7UWYpiAIFFYRJqXMjJxXgYgw__"
  //   ],
  //   videos: [
  //   "https://media-hosting.imagekit.io//e7a6f91e59ac434d/WhatsApp%20Video%202025-01-18%20at%2022.37.34_2bd7337f.mp4?Expires=1832326069&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Qi0BXhfiVzT1C2f57RdqSHUZPNRzh2027rG~iqJKcTrV0RokEkPYXi9aqYr9O~gwDhdz0IrBVWJu3gBLS9rtAk2k~b7NnA7yZgkRkP~S7MwZu31osiQp6Cqiz9pnt66kPawnWPo2tJz5ufq-QUYF9YyZe37y1u8jtEuShsh2mamkukclr16g9w4cvebpZf~pFUe~b2atN9OhYbP7n7TFVkpJu12SAlzlIGQww0mws8H6PleFsOhOtGhpFz49hOUXA3F4raRmBq~H0E9P3kIRABmPb7a9KOWhd6EN4MNv49IOgXRQ6dm46uQN~Vu-ZuX2LxtcUjKa0BeiDHVyhm~cUg__"
  //   ]
  //  },
  //  {
  //   id: 26,
  //   type: 'rent',
  //   name: "سرير في غرفة ثنائية في شيرين افلار",
  //   price: 4000,
  //   roomType: 'shared',
  //   preference: 'female',
  //   location: "Şirinevler, Istanbul",
  //   description: "غرفه ثنائية في سكن طالبات في شيرين افلار شارع الفاتح",
  //   apartment: {
  //     floor: 4,
  //     features: ["اصانصير"]
  //   },
  //   deposit: {
  //     required: true,
  //     amount: 2000
  //   },
  //   amenities: [
  //     "قرب الميدان",
  //     "قرب المواصلات",
  //     "قرب الاسواق",
  //     "منطقة حيوية"
  //   ],
  //   locationDetails: {
  //     distance: {
  //       square: "4 دقائق"
  //     }
  //   },
  //   image: "https://media-hosting.imagekit.io//b3d699605beb4e38/Screenshot%202025-01-24%20142606.png?Expires=1832326069&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=KZ-h1ptjfoLhea67zOT5aYoeNeQisPpVH3RIMAO8k1m4CTDmj9KpL00kyr~F9AehnIv0no6tpKhvu4TGCjKMWa28YOu8G-QRkc0JLuHn1PzNJpa-30LmPxC4PcsZEbv~Y8kmmgJotNBhyP5XbL5QZ53Rvtov1k0y1aUmoT~p0CrzpPOJdFulGsTwBMr28FmDQ4AmSn0jzms7zbLRdhsvmEuSnIduiJQy2irlMdKk~JyRGqGBAUos9lHlTO5NDUhc112dZ0irJkm8PpfDHK18cHwLvniQfm3750i3IGET5JozozIFfTRIb8kiWmB7zy7UWYpiAIFFYRJqXMjJxXgYgw__",
  //   images: [
  //     "https://media-hosting.imagekit.io//b3d699605beb4e38/Screenshot%202025-01-24%20142606.png?Expires=1832326069&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=KZ-h1ptjfoLhea67zOT5aYoeNeQisPpVH3RIMAO8k1m4CTDmj9KpL00kyr~F9AehnIv0no6tpKhvu4TGCjKMWa28YOu8G-QRkc0JLuHn1PzNJpa-30LmPxC4PcsZEbv~Y8kmmgJotNBhyP5XbL5QZ53Rvtov1k0y1aUmoT~p0CrzpPOJdFulGsTwBMr28FmDQ4AmSn0jzms7zbLRdhsvmEuSnIduiJQy2irlMdKk~JyRGqGBAUos9lHlTO5NDUhc112dZ0irJkm8PpfDHK18cHwLvniQfm3750i3IGET5JozozIFfTRIb8kiWmB7zy7UWYpiAIFFYRJqXMjJxXgYgw__"
  //   ],
  //   videos: [
  //   "https://media-hosting.imagekit.io//e7a6f91e59ac434d/WhatsApp%20Video%202025-01-18%20at%2022.37.34_2bd7337f.mp4?Expires=1832326069&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Qi0BXhfiVzT1C2f57RdqSHUZPNRzh2027rG~iqJKcTrV0RokEkPYXi9aqYr9O~gwDhdz0IrBVWJu3gBLS9rtAk2k~b7NnA7yZgkRkP~S7MwZu31osiQp6Cqiz9pnt66kPawnWPo2tJz5ufq-QUYF9YyZe37y1u8jtEuShsh2mamkukclr16g9w4cvebpZf~pFUe~b2atN9OhYbP7n7TFVkpJu12SAlzlIGQww0mws8H6PleFsOhOtGhpFz49hOUXA3F4raRmBq~H0E9P3kIRABmPb7a9KOWhd6EN4MNv49IOgXRQ6dm46uQN~Vu-ZuX2LxtcUjKa0BeiDHVyhm~cUg__"
  //   ]
  //  },
   {
    id: 27,
    type: 'room',
    name: "غرفة فردية في افجيلار",
    price: 5500,
    roomType: 'individual',
    preference: 'male',
    location: "Avcılar, Istanbul",
    coordinates: { lat: 40.9779441, lng: 28.7290576 },
    googleMapsUrl: "https://www.google.com/maps/place/Denizk%C3%B6%C5%9Fkler,+Kent+%C3%87k.+No:3,+34315+Avc%C4%B1lar%2F%C4%B0stanbul,+T%C3%BCrkiye/data=!4m2!3m1!1s0x14caa1b036daf0d5:0x28e82cc1b247eff8?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI0LjQ5LjYYACDXggMqhwEsOTQyNDI1MjYsOTQyMjMyOTksOTQyMTY0MTMsOTQyMTI0OTYsOTQyMDczOTQsOTQyMDc1MDYsOTQyMDg1MDYsOTQyMTc1MjMsOTQyMTg2NTMsOTQyMjgyMDQsOTQyMjk4MzksOTQyMzkxMjcsNDcwODcxMTgsNDcwODQzOTMsOTQyMTMyMDBCAk9N",
    description: "متوفر غرفه فرديه لطالب في شقة 4+1 في افجيلار تبعد 5 دقايق عن متروبوس",
    amenities: [
      "200 مساحة البيت",
      "تبعد 5 دقايق عن متروبوس",
   ],
   deposit: {
    required: true,
    amount: 1500,
    description: "1500 تأمين"
  },
    utilities: {
      included: false,
      description: "غير شامل الفواتير"
    },
    image: "https://media-hosting.imagekit.io//47aad025426e464d/WhatsApp%20Image%202025-01-18%20at%2022.50.14_c2b5c7cf.jpg?Expires=1832326500&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=un6kDxMRSLMa84hdQN5XlMgxPlhUPawoShQuGRad1G2TLbJa7Etaly-pwIwbs5-GLwtC2nvnSdaFpDkflAXjyn7Zt3MhQxBTcAaJ8IIUFCR8xVfpiMb~TGTlLA6FyhPhVUBeUm3i5wuvKr8laJ1GVrLBTe0GMUMUrWe1FQZeKWOoHqHJ9Tt-idM3kK8br1WnhuTOWap4cAr7zcVKt~EaLuHdntjbnPz2rRSXJEB1UWgE6~t9cbZND7TCNaTv~sRQhyMW~G65Rmr4dIvlLSAPikq~GdHM4ezYcAKnsO6c~DpkTZuL4NDQt50qFsru1xcCvDRKgekoTp-47akiHAUNkA__",

    images: [
      "https://media-hosting.imagekit.io//47aad025426e464d/WhatsApp%20Image%202025-01-18%20at%2022.50.14_c2b5c7cf.jpg?Expires=1832326500&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=un6kDxMRSLMa84hdQN5XlMgxPlhUPawoShQuGRad1G2TLbJa7Etaly-pwIwbs5-GLwtC2nvnSdaFpDkflAXjyn7Zt3MhQxBTcAaJ8IIUFCR8xVfpiMb~TGTlLA6FyhPhVUBeUm3i5wuvKr8laJ1GVrLBTe0GMUMUrWe1FQZeKWOoHqHJ9Tt-idM3kK8br1WnhuTOWap4cAr7zcVKt~EaLuHdntjbnPz2rRSXJEB1UWgE6~t9cbZND7TCNaTv~sRQhyMW~G65Rmr4dIvlLSAPikq~GdHM4ezYcAKnsO6c~DpkTZuL4NDQt50qFsru1xcCvDRKgekoTp-47akiHAUNkA__",
      "https://media-hosting.imagekit.io//662448278de042e6/WhatsApp%20Image%202025-01-18%20at%2022.50.13_44c89bd7.jpg?Expires=1832326500&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Kr8iITOzc-SfQZCUUkyLPzNuJ6WbUA5Ks~AHip6dHSytWrPYEmT01W5bab5HKvlKaFGbMXZrSoHvaFSKeouCoEwCo8x-xR8Hu3jHHY59LorMqI6h~FFMSGsB2XFxKNE2IL5pRJXzcAKJ-y7Ql3jCswpVpndH1q2iWzxQ27nFM2kLAR75D61j-Q4iVCEfBZ7QGVfxKEba13u8wc3OQuarH1ro8MfsLe-B~qH26bfyZITsidpaw13FCLUELfpXplPSYsoj9s8R3GXufrWOJkIb1GXImR7uiIOvCMQjLhhN-SYzboJ4~RZODSIMM1JH922hX54triXMhleSeGLsXWj7kg__",
      "https://media-hosting.imagekit.io//5dd7de6ae85c4412/WhatsApp%20Image%202025-01-18%20at%2022.50.13_45e54f14.jpg?Expires=1832326500&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=uGbzuoLpf-K0mDBfx9yl8e3BxovLXNmajdtZ0oWpvYcsWBmWghMGH-MwLeN84XSgSxOePUk3qRVWbhB4qR6z1jvUVH5eIbnr2b3ugac9ncFpwpbMmcb7HVd38nGurx22gPL2kCfXKCBjYPthuaymMsKvCK6JjhkmBb97rKXC6g9xrWQa3t9~glzZto9wP~1l0OqNQvZITsMrUhIMoCCqBZNJ2zuz3R2k1Gp~LyY3CQECLut67TEszGIy8xT4ow9oFrJLFZDOoOx-dn78QnmiDN3mz6qXl1RdZUfcymMFvvWUNtW-6NDLN9gpfhWJ17G0ddNkVhQzolbXYUatqMXT1g__",
      "https://media-hosting.imagekit.io//7b906e132dba4679/WhatsApp%20Image%202025-01-18%20at%2022.50.12_53366b90.jpg?Expires=1832326500&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=t9jqiwqQaP3Muj0Y4W1KlDCos-ym7An52Fie5ir0YNAo~nfbdo6Utx-XUzp6brgIZSTr7gwq0IshahP7iyE9tNd9BTZggLEywMSQZg3ubLwX4N4QclvkGdRljdP0M4i6gWmNNjPubPf2cH--t6gk4NTWdf8eJ2VrqAA1OoP8SJjHOsaSh~i1XBANdzUv52R7VStOH~~bpRCzg3JjmEF-24waEySQfWlnPg5kxNE4gJm0qsdTXAFjetRw3DczMJYjhuMFKEA3OE9IA-lyfFXDuzccQBMLHK3LYieeSQa3-ycfRVIat~6a2nJEbykJzTH5~rZElxXy3NyGC3VBCA~1kw__"
    ],
    videos: []
  },
  {
    id: 28,
    type: 'room',
    name: "سرير في غرفة ثلاثية في افجيلار",
    price: 3500,
    roomType: 'shared',
    bedsInRoom: 3,
    preference: 'male',
    coordinates: { lat: 40.9779441, lng: 28.7290576 },
    location: "Avcılar, Istanbul",
    googleMapsUrl: "https://maps.app.goo.gl/SgN166S5EWGqB6nc8",
    description: "متوفر سرير في غرفة ثلاثية لطالب في افجيلار في شقة 4+1 تبعد 5 دقايق عن متروبوس",
    amenities: [
      "200 مساحة البيت",
      "تبعد 5 دقايق عن متروبوس",
   ],
   deposit: {
    required: true,
    amount: 1000,
    description: "1000 تأمين"
  },
    utilities: {
      included: false,
      description: "غير شامل الفواتير"
    },
    image: "https://media-hosting.imagekit.io//73d39f911d744d76/WhatsApp%20Image%202025-01-18%20at%2022.50.15_a082af9d.jpg?Expires=1832326832&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=MChZHktnvX9fUvg4irI28dncdq91bar3hZis1Tpp~H4GeNae4XzxCvdHgHZP7n9LYosrzvpZaDmVnHY5PRJ65Gvy4qL-B1c8jjue2epLqYZs7PSOStIPGu3cFQ8r2JKav9Ioi3uY3D3hD~DfydNEYMTAOvs4uJJbDskckuxv4KL5oSzoQK0yg1PYXubY6-kXmz7Gis~69Ru8HT1cXXTG9YFntMVg4Sr94gtoaU2wFkU-lLNw8wnwH70SFnC~JGj~Pfm8gcbBiwQ7SxV9R1R1YrAv3f55L9f5GO3-DfExuPBhK1Cnwv017dwWpBU~QUmevXYhbLeg2vLcHeuk4j81Ow__",

    images: [
      "https://media-hosting.imagekit.io//ca29f15707fb441a/WhatsApp%20Image%202025-01-18%20at%2022.50.15_1c219b0d.jpg?Expires=1832326832&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=0w1~YkUZfmUeLCw8LHPD9~DRQYcRQy1nrgXiiTVT4sHsIcTXSjZd6pxZUN89b1~u7VV7mq3pUw4gZBjcHeteO7A75UvnsUpp0huWaTLIKI1mEmrkXEe0XvP1XBne1tiYOzzQs3aosQaHljrJ5zSVJi~HJXcdJea6De22DXMCb1TuLDEsEpx-MjKQ2WV~sjsjTc4r~n5QgstL4Z4k3nITd-PEjf1yF1jPoqh9d28XnHGjS8CbXNPG~ek~Z5s9kamZKrWfldlnjj6UVYlPMtQtl1xzXWt-H~QZ51u-bH14yE~ccswO8StSGJ~M5Dg0CoTJVjDuGtxuaZUj86KMpemKxA__",
      "https://media-hosting.imagekit.io//662448278de042e6/WhatsApp%20Image%202025-01-18%20at%2022.50.13_44c89bd7.jpg?Expires=1832326500&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Kr8iITOzc-SfQZCUUkyLPzNuJ6WbUA5Ks~AHip6dHSytWrPYEmT01W5bab5HKvlKaFGbMXZrSoHvaFSKeouCoEwCo8x-xR8Hu3jHHY59LorMqI6h~FFMSGsB2XFxKNE2IL5pRJXzcAKJ-y7Ql3jCswpVpndH1q2iWzxQ27nFM2kLAR75D61j-Q4iVCEfBZ7QGVfxKEba13u8wc3OQuarH1ro8MfsLe-B~qH26bfyZITsidpaw13FCLUELfpXplPSYsoj9s8R3GXufrWOJkIb1GXImR7uiIOvCMQjLhhN-SYzboJ4~RZODSIMM1JH922hX54triXMhleSeGLsXWj7kg__",
      "https://media-hosting.imagekit.io//73d39f911d744d76/WhatsApp%20Image%202025-01-18%20at%2022.50.15_a082af9d.jpg?Expires=1832326832&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=MChZHktnvX9fUvg4irI28dncdq91bar3hZis1Tpp~H4GeNae4XzxCvdHgHZP7n9LYosrzvpZaDmVnHY5PRJ65Gvy4qL-B1c8jjue2epLqYZs7PSOStIPGu3cFQ8r2JKav9Ioi3uY3D3hD~DfydNEYMTAOvs4uJJbDskckuxv4KL5oSzoQK0yg1PYXubY6-kXmz7Gis~69Ru8HT1cXXTG9YFntMVg4Sr94gtoaU2wFkU-lLNw8wnwH70SFnC~JGj~Pfm8gcbBiwQ7SxV9R1R1YrAv3f55L9f5GO3-DfExuPBhK1Cnwv017dwWpBU~QUmevXYhbLeg2vLcHeuk4j81Ow__",
      "https://media-hosting.imagekit.io//7b906e132dba4679/WhatsApp%20Image%202025-01-18%20at%2022.50.12_53366b90.jpg?Expires=1832326500&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=t9jqiwqQaP3Muj0Y4W1KlDCos-ym7An52Fie5ir0YNAo~nfbdo6Utx-XUzp6brgIZSTr7gwq0IshahP7iyE9tNd9BTZggLEywMSQZg3ubLwX4N4QclvkGdRljdP0M4i6gWmNNjPubPf2cH--t6gk4NTWdf8eJ2VrqAA1OoP8SJjHOsaSh~i1XBANdzUv52R7VStOH~~bpRCzg3JjmEF-24waEySQfWlnPg5kxNE4gJm0qsdTXAFjetRw3DczMJYjhuMFKEA3OE9IA-lyfFXDuzccQBMLHK3LYieeSQa3-ycfRVIat~6a2nJEbykJzTH5~rZElxXy3NyGC3VBCA~1kw__"
    ],
    videos: []
   },
  //  {
  //   id: 29,
  //   type: 'room',
  //   name: "سرير في غرفة ثنائية في شيرين ايفلر",
  //   price: 4500,
  //   roomType: 'shared',
  //   bedsInRoom: 2,
  //   preference: 'male',
  //   location: "Şirinevler, Istanbul",
  //   googleMapsUrl: "",
  //   description: "متوفر سرير في غرفة ثنائيه في منطقه شيرين ايفلر جنب المتروبوس ب دقائق",
  //   amenities: [
  //     "تبعد 5 دقايق عن متروبوس",
  //  ],
  //   image: "https://media-hosting.imagekit.io//5e536a9ed8844427/WhatsApp%20Image%202025-01-18%20at%2023.05.26_2227ab37.jpg?Expires=1832327269&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=QjazxLRKR-Q9UxF56gamsbgRQ6sPc8Wpph5WXkUqM48CCAepRAMLZ-~vLRilMbtNv7oPFiF4U-6cmHgPnj064CWnTkScHhDag1nX8mUW0MVmY~um-ivgX7cnW8qwg5jyoA0Hiqe5lIs73dsJxCrgNILQz2h5yFEtYXNb9bXZuEQigjhBVp6mwtTiZekSttnXZ0GUhtmmk8tdln~F25yAxT2ad1SKcIULl9TT5ttuqLbfIkT-F1vhXMJPZDq9hFaZCKzYVgXyJ6-NmEyQMdZi64qk4h0P-QsWNQL08fNPohIWm-j3CqTlkaB0QygoDeba3PcFWr03RzGgG~dxpv3BVQ__",

  //   images: [
  //     "https://media-hosting.imagekit.io//5e536a9ed8844427/WhatsApp%20Image%202025-01-18%20at%2023.05.26_2227ab37.jpg?Expires=1832327269&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=QjazxLRKR-Q9UxF56gamsbgRQ6sPc8Wpph5WXkUqM48CCAepRAMLZ-~vLRilMbtNv7oPFiF4U-6cmHgPnj064CWnTkScHhDag1nX8mUW0MVmY~um-ivgX7cnW8qwg5jyoA0Hiqe5lIs73dsJxCrgNILQz2h5yFEtYXNb9bXZuEQigjhBVp6mwtTiZekSttnXZ0GUhtmmk8tdln~F25yAxT2ad1SKcIULl9TT5ttuqLbfIkT-F1vhXMJPZDq9hFaZCKzYVgXyJ6-NmEyQMdZi64qk4h0P-QsWNQL08fNPohIWm-j3CqTlkaB0QygoDeba3PcFWr03RzGgG~dxpv3BVQ__",
  //     "https://media-hosting.imagekit.io//eee98a1480f64522/WhatsApp%20Image%202025-01-18%20at%2023.05.26_973a274a.jpg?Expires=1832327269&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=vpenJhU7HPE-l2IcngQLn6m-4P3obDE7LMTeble27mcoAJJTzwUr7Sh5C--d5ApgjAm0XD~CApLyTRr8hIiY4uGaolDErRIW4y1MQGtKKFRHwt963WCLRJK-y6zhM-9ND6cYExHH~YFDugCtoZcK-MWD2Gd3JoqAWZUjZWo2A37X6C~bIyZkyTqOEeKwxNCHMtl7Y9XLECndZoLN4FC5cHcvKR5ayP2FXBK77siwJpsUDZJxqfCmyUnV4~UEKKMTQYXTDrqPDS-mUWXwYxegfGBooa0pYl-D6R9dhiJ7di~2imBAGIbOXQV5Cr0TqDiWiiw8nadHbITVm8e1ZmDZ2Q__",
  //     "https://media-hosting.imagekit.io//23b6e02c372c4d1e/WhatsApp%20Image%202025-01-18%20at%2023.05.26_0455a951.jpg?Expires=1832327269&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wZ4oCsr41huVIRyQHNIrPHXjJU14dvQAr9DZagne9sa9u1bhB4aU9pDz7QL8UHMZ-xtKCO6xvlT9o9Z~IfoRkJqjfHD7tmaN9dlWW4ZNZiaSukRda-PBf8tij8gaxPyEfy0-o06uT4O-EKvMrRy6~uloMddx2USfP-qUkcOvU9Z-mSY6VVu4zMm8J7kACP1cNPDyQf3tFWkijE4-NjfadPtN54vjSEwm0bUSNuyizIwIb9wjBJyXJtDLD3laVVvsrn43nOHc48bk4kKiE8W1gsHexA9FRI0rih9OPKFayjRPWXV1aGVk4llvEumhRZBYChOkCHtoE~kGC-UJOPZBaQ__",
  //     "https://media-hosting.imagekit.io//1a33fc2aa589424c/WhatsApp%20Image%202025-01-18%20at%2023.05.26_23a41f5f.jpg?Expires=1832327269&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Cqr267QJDD1mQ-~XyFk9BxZFOOMBhNrA27lp3ho0Qv5bhD-PfWeIY8yrJIhDEICc33JHO5lrFF8K4bGBkQbKXps-GkZO2TvLTiwWZUMx86OY5AocP0MylegDWuLdNapfhUIRQ1LAw2A~y-ghabJjFVUPNmsR4ktNDtk-SvmESe1kDDSUhZMvOVwP1PLVxpQiBr5nVv~mfLl8rRLP~uRNTE1Sumc-Nh6Ij7Nnykw5jIVhSse4CQ-2KXPRHaTibCzf~2r6vfay4I4eL5f6ZhOzMLnbUdgAt3Nokena8hO6PgHI0lzgUuXl2w0sVi23~kKpzOHG5aDB3aui-WSG2H8Baw__"
  //   ],
  //   videos: []
  //  },
   {
    id: 30,
    type: 'room',
    name: "غرفة فردية في العمرانية",
    price: 6500,
    roomType: 'individual',
    preference: 'female',
    location: "Ümraniye, Istanbul",
    coordinates: { lat: 41.021250, lng: 29.101694 },
    googleMapsUrl: "https://www.google.com/maps?q=41.02125930786133,29.101694107055664&z=17&hl=en",
    description: "متوفر غرفة فردية في العمرانية شارع الاستقلال للبنات في شقة 2+1",
    amenities: [
      "ميترو تشرشي  10 دقائق مشي"
    ],
    deposit: {
      required: false,
      description: "لا يوجد تامين"
    },
    image: "https://media-hosting.imagekit.io//900f17ae6b434b71/WhatsApp%20Image%202025-01-18%20at%2023.08.11_3ef9adcd.jpg?Expires=1832327831&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Nqiv~4R-ClBeOIxBuX4ZineGvIvbZ~LY46m8ebvbf8EQke9xwTcxPHEwMqgpyl-MpEgvcYfpCnSNw6dcTKvWENTFRg7v-Gm-ksTFHULtwPKUEhTkiiBtdV9DvDw6T9~Jj0Di3OdMnJhjkdBjlDJGs777cDqS6KpPx58KcjyQspem8alyHKxUICWBaCg6Kk8jbENXcjyy9JFKxxymrIsmCvZl1azrqOftyUw1aO~tYQNO5VUGHZ-cARnVd9foh-5ksWk3ZgUVBNsG0BTqF3aP4jYcQvwNtoUE5U7zI1eDWNSjKgadU~Xg-rbVgCyMYfC99mVk3Idr-wdBzUaOGobRzA__",

    images: [
      "https://media-hosting.imagekit.io//900f17ae6b434b71/WhatsApp%20Image%202025-01-18%20at%2023.08.11_3ef9adcd.jpg?Expires=1832327831&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Nqiv~4R-ClBeOIxBuX4ZineGvIvbZ~LY46m8ebvbf8EQke9xwTcxPHEwMqgpyl-MpEgvcYfpCnSNw6dcTKvWENTFRg7v-Gm-ksTFHULtwPKUEhTkiiBtdV9DvDw6T9~Jj0Di3OdMnJhjkdBjlDJGs777cDqS6KpPx58KcjyQspem8alyHKxUICWBaCg6Kk8jbENXcjyy9JFKxxymrIsmCvZl1azrqOftyUw1aO~tYQNO5VUGHZ-cARnVd9foh-5ksWk3ZgUVBNsG0BTqF3aP4jYcQvwNtoUE5U7zI1eDWNSjKgadU~Xg-rbVgCyMYfC99mVk3Idr-wdBzUaOGobRzA__",
      "https://media-hosting.imagekit.io//4ee014011c014a03/WhatsApp%20Image%202025-01-18%20at%2023.08.14_a50f6190.jpg?Expires=1832327831&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=U6Rjfm1KDuHMwQ0l~IouoerU4Nt6bLxYWx1Og4EG38tEM1GQpLcnw~dTYnlk~DbfQ48AfWqjdP37r81HvQ4c7dRwL8UxwMOlEEF9kZ3BjHtPzXETaxOoZfEhc1-gRJgF54Jur45zzkXwXhv-7Hn02JJpsskCUZwrwWM6h4C8wPTQPUwkKTztTGny7yxvsK8lorIJ5OhsgnlCHMf~H90zeXODeynN3UvWjiqGjP2jeeRB3kHt0puci-DqqUXLreA8mHMshsLREqtvj3k7FK1zZLDmUw1CxaLlf~N6ELN~FEP0jadTXzDi-T~FTmFNAQoYZjpeIqWeqP9y5eJVJiEWLQ__"
    ],
    videos: [
      "https://media-hosting.imagekit.io//1a7e1b5bd2db41a7/WhatsApp%20Video%202025-01-18%20at%2023.08.12_f91e2ef9.mp4?Expires=1832327831&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=xNqb8wz-yyrK8Or4rkfnaW77cVBLhgfCh~8q0xNrpou9IZXh2aqrgGSw1qsDE2L5esfmTUi~msTmPYhYMbeMF4UTkA-7MQsni3NRZuAamZK8TQ5fxY2md5SY8Xv0sFswg4X97q5gMAVCfwklG-Yfq0fCAYdpJ88NXW7tvvNYPJXEq8Jqln1BF6XwBvxOjpXuBWm4iCWtjvmOe38o7TGLoqUVq4v9~Gmo32mefKrabTfFXZVMVwyraTwB6w4eUsV00L4BOI2RrkSTgsB9jYlzK9jlaQ5FfoXF5U8LhNpXpL93sWkCnSup2QS~wYdc4hdMCgS5Q~GRDK8vg5kcBsivBg__"    ],
   },
   {
    id: 31,
    type: 'room',
    name: "سرير في غرفة ثنائية في افجيلار",
    price: 3700,
    roomType: 'shared',
    bedsInRoom: 2,
    preference: 'female',
    location: "Avcılar, Istanbul",
    coordinates: { lat: 40.981000, lng: 28.719944 },
    googleMapsUrl: "https://maps.google.com/?q=40.981000,28.719944",
    description: "متوفر سرير في غرفة ثنائية في افجيلار لطالبات في شقة 3+1",
    amenities: [
      "في الميدان",
      "10 دقائق عن متروبوس",      
    ],
    deposit: {
      required: false,
      description: "لا يوجد تامين"
    },
    apartment: {
      type: "3+1"
    },
    utilities: {
      included: false,
      description: "غير شامل الفواتير"
    },
    image: "https://media-hosting.imagekit.io//e1ec1f639f704ea8/WhatsApp%20Image%202025-01-18%20at%2023.20.19_02fa711f.jpg?Expires=1832328803&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=rjxi82UNySUWgpxQ96Q4pVilpLVfCAg-WE1v01HV-wYw0JmClpl84x2nE6~GcLU51xLdGNYRCBWqZ1mdjDryQW87tAIkIQ-B8lcv5YMQw1a2NL1gbVfqTNf4mj-0CxdHzSox9ln0qreaN~HJukFPpLlAPGe~na9lt-GPIk7WfeEwPdVoKHcc~pS0b7~EdbmSkE-QdWiyq0R59f9X9-eJqYY-AzJLccdDNknleWDxORT2u9CPTV~0rPIGIV3RKQ2ycPMdOfuuW8u6i-yc4aPwOL2l-OaPYDiiH~PQnYzENRLZ9sISUO4LvD2bOvVzjPPqj-jtLRdc6Pj2lIYoD2oCuA__",
    images: [
      "https://media-hosting.imagekit.io//e1ec1f639f704ea8/WhatsApp%20Image%202025-01-18%20at%2023.20.19_02fa711f.jpg?Expires=1832328803&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=rjxi82UNySUWgpxQ96Q4pVilpLVfCAg-WE1v01HV-wYw0JmClpl84x2nE6~GcLU51xLdGNYRCBWqZ1mdjDryQW87tAIkIQ-B8lcv5YMQw1a2NL1gbVfqTNf4mj-0CxdHzSox9ln0qreaN~HJukFPpLlAPGe~na9lt-GPIk7WfeEwPdVoKHcc~pS0b7~EdbmSkE-QdWiyq0R59f9X9-eJqYY-AzJLccdDNknleWDxORT2u9CPTV~0rPIGIV3RKQ2ycPMdOfuuW8u6i-yc4aPwOL2l-OaPYDiiH~PQnYzENRLZ9sISUO4LvD2bOvVzjPPqj-jtLRdc6Pj2lIYoD2oCuA__"
    ],
    videos: [
      "https://media-hosting.imagekit.io//090c15f087ef4b39/WhatsApp%20Video%202025-01-18%20at%2023.08.12_f91e2ef9.mp4?Expires=1833628177&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=EAVkyf0g3dAyJoEl01iM7b~MYMgerjJLIix8npT2R0zyHyRAr4MY2HyLKehajkkAYCeW0KjD8fk6CidlVNEhbteFK3lzG0AkTmhlUNlQ-X1CEsisrny2HbBjJI1Xsw6ayQwlgGcUSSj8sZFBkQrSXIx4aDt3Z96~v06qKZAE1Zi47k0hkzdjfna9rkewqIWQcDNkitLVrfBZsQCr9Upr7gYkPYMK0SJdqOdxVn1hTt~PZlILuUgUKKfuvRrhqgZZHSFrl~5jzB5wX5gj-ICQpGzerbqIcIcv9PM8otAJbClM0tRCCcoRsxTGsEpTG0w7b33vNm8McB~z~5kSaqJC-g__"
    ]
   }
//    {
//     id: 32,
//     type: 'apartment',
//     name: "شقة في بيرم باشا",
//     price: 71767,
//     apartmentArea: "3+1",
//     location: "Bayrampaşa, Istanbul",
//     googleMapsUrl: "https://maps.app.goo.gl/ZxRM9jYMo8i3PeXPA",
//     description: "شقه للايجار في بيرم باشا قبال الاوتجار في مجمع",
//     amenities: [
//       "قبال الاوتجار"
//     ],
//     deposit: {
//       required: true,
//       description: "تأمين شهرين"
//     },

//     image: "https://media-hosting.imagekit.io//e1ec1f639f704ea8/WhatsApp%20Image%202025-01-18%20at%2023.20.19_02fa711f.jpg?Expires=1832328803&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=rjxi82UNySUWgpxQ96Q4pVilpLVfCAg-WE1v01HV-wYw0JmClpl84x2nE6~GcLU51xLdGNYRCBWqZ1mdjDryQW87tAIkIQ-B8lcv5YMQw1a2NL1gbVfqTNf4mj-0CxdHzSox9ln0qreaN~HJukFPpLlAPGe~na9lt-GPIk7WfeEwPdVoKHcc~pS0b7~EdbmSkE-QdWiyq0R59f9X9-eJqYY-AzJLccdDNknleWDxORT2u9CPTV~0rPIGIV3RKQ2ycPMdOfuuW8u6i-yc4aPwOL2l-OaPYDiiH~PQnYzENRLZ9sISUO4LvD2bOvVzjPPqj-jtLRdc6Pj2lIYoD2oCuA__",

//     images: [
//       "https://media-hosting.imagekit.io//c864d046d8d84347/WhatsApp%20Image%202025-01-18%20at%2023.23.48_b2238ed7.jpg?Expires=1832329363&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ZGpwHi18wOVqrp05zJsisobJnadD4xP1191wVkbfLKhrTxau1EUMmRgrAU4bd-mlSstXjJHLHZBDa2ZQmVdLfXKDCc0tQtrkXRSOhWj2BA1wHRPQay0CAycoV55oMLhAl0ZfbTMMrCpfk9HKC03cYOUH0uyAY4hLwDsZ~SS6TcIlZ-H5oJlfqlj5mjP8m1U~JMSEUcnQm884pW5Hf44gV4TL3SMG9Tfu4D-dLbXjiDb6pVLQOK0roqFQX7CVYDVE9aR~4U3aU9XGwtHF8JVd5jYesfapzhr0lHFCETVX40Zo6jamG6QqL19TLcJ-uXeYN9u9V3yIh6qMnzHlkLdFGA__",
//       "https://media-hosting.imagekit.io//88c4ad885e9e4e1b/WhatsApp%20Image%202025-01-18%20at%2023.23.43_f49e4a7a.jpg?Expires=1832329363&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=gzQTuZ4sS8I5DG2OROVo6uiPNmjvJUXYC-btNwMHR5MjjVaqOU0fmHh~5IYmC~1Zcw50ko~FVJco31YugwPu1Wr-fig9jmJ3X-7YLG23XE6MlYA0tRr~LVUS3Arfg3ROzUNnMlYCpPmdft7omKfC5bLucuZ0JGQKFhSxIMKjEJcm2xKO9rKEh4QGsb4ccGJ~S1o99NyKLjLZIrLCbWxunBQoogWw8zD41hcpFfmVf2nnuCci-9YpkVVvVrX2WK~gBJ-6o~rq0QxXz~6kyCLNfPjyxhtbkdg9nH3nAy0J5i8tdoFbOBVmtF~G-V4UP1WJKe8zq646DGfOYG9PQj43GA__",
//       "https://media-hosting.imagekit.io//308da2df029b42ac/WhatsApp%20Image%202025-01-18%20at%2023.23.48_55b0fb68.jpg?Expires=1832329363&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=aL6smfLmIHCnzWJEM2IEucfp3IpjtkxeeJ5XvBkTmLLp0LdTodCu2PuDtYikifli3QEiA4P03OZtGl8coaI~UWW7mMNAznIiOR4POUF6vqnv1-bGW1NMkv2rdP4pYFrT7E6KHNz5Nv5Nz9zmrYbh9UsyBlzWZ06UqQoG140YrPpZy~b13lzemaRdM6gGRQLaPQVXQyWk2mU8I8NiKm-eRrgspL8S35FesPA6huhj~nFDTOUsEVBq7ZRP8zd0E5cZBr1KgAbHKgZ-vR9nvBCP7QIAxMsEIvzHlwA8dxJ0Alkj3D70j2SKKYhLw8~48NQK2ycOWI8a7UD5Py~zR5Gvhg__",
//       "https://media-hosting.imagekit.io//56d16954392f4e56/WhatsApp%20Image%202025-01-18%20at%2023.23.48_b88b80fd.jpg?Expires=1832329363&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=YJMxGFfsJE3TuL75-tB7WvyW5gndGGKSitzevzxFq2y92oQZwog~fsf2hfU6owQY6-2fAjjl5ybvI7TWNWQNyb8yCsAHZ9aruNjfNkamcFS0yakOR8H0YEqsbb3mgZi6zgpuChXQYRBs9k73bRkYH~FoAke8LGbvppXQ531T8q7ElMRQKpNL4GIeisVu-Rl6O884bvymrWyOEZ93PYQws9NgvoH5jdFkhvJnfCXvl8pfer-k7Mbhltwr9paOhewmoJyTLpIehPosJOPFRhpIT57MjEXLqn6nmJiiCZgx3wEmtz7kEF1yFT3n9AgHC8J75knc5i2vpJQHiqH80bK4~Q__",
//       "https://media-hosting.imagekit.io//65c9a6fa6d1647dd/WhatsApp%20Image%202025-01-18%20at%2023.23.49_d5af35b7.jpg?Expires=1832329363&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=rBNdapS0XuijA4Xpl2iq-ajckQnaNgIIH0Hqa4BPql0QEbRpxGFjs~ggDsVyKlQRpSP~U27e440CaPtxn9bybCn~LiF5PRoE5ipu2IHy10jl6s4yo3LHofXSn5XeHE-dJDd1B8YEYzomMzNEIibmu6JtsRZkbppldomr2oUtLCSWZ-QqlIECSK3i0oV3frL8b4YjCQlh2oQyu1w~yCkK9mXelF4JjWv9uqAq6pSWRQY~L1vV3GsTv2vIDySM0TDDF1eaZpgjZCaaVZXS7TQJ8w5stjaDToHxqVYpfzbiHA-Y-qCaVJUy1I3T7Ccu~b9kTk6DG9YEP61YK2C9gLFQvA__"
//     ],
//     videos: [
//       "https://media-hosting.imagekit.io//474cf3b4eb5947c8/WhatsApp%20Video%202025-01-18%20at%2023.08.12_f91e2ef9.mp4?Expires=1832328803&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Ms~lzBpGCmFBDhus320r7rcoeJ9Q8aEs3YdJeD~d5kxR6rUodKYoVWbWrTsSZWGb01-XZo2OYRAK9CZKZRzMuOsGAtfxbiFxA~65RcwYA3jBFst8BY0m5BmDpZbu1FMm~wAa-4duSx8b8oFUD9~2kzERAGRR4HHiLABtYtF7OmzpFV3Kzgn7AZ4ADGZ2FXDepA32wym47Yi4VN7RpP9aD5ZoZyaK0UpY4BlsWaG97o1TZe7dRjc1shtQOpmyraCaWu4DZfLObIuEfKsgaWjAf6aK9XDDmmVlweme0mXNDoTakQl95ljtJCeOKQtAYD5EYYqkhmj4~x6CP0aJjOcaVg__"
//     ]
//    },
//    {
//     id: 33,
//     type: 'room',
//     name: "غرف فردية قرب جامعة جليشم",
//     price: 8000,
//     roomType: 'individual',
//     preference: 'female',
//     location: "Istanbul",
//     googleMapsUrl: "https://maps.app.goo.gl/GNWgBhqRskWTqa7c6",
//     description: "متوفر غرف فرديه للبنات قريب من جامعة جليشم في شقة 3+1",
//     apartment: {
//       type: "3+1"
//     },
//     deposit: {
//       required: false,
//       description: "لا يوجد تأمين"
//     },
//     transportation: {
//       metrobus: "10 دقائق"
//     },
//     nearbyUniversities: ["Gelişim University"],

//     image: "https://media-hosting.imagekit.io//27887f4d74b34ef0/WhatsApp%20Image%202025-01-18%20at%2023.20.19_02fa711f.jpg?Expires=1832329944&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=DOFSIIkAbhpzhnm7Zuw1vOe5R2C6oS4bLLZdcmz5PpjzFZklwjjkUwEwmN5mxQYTvT77yylB4Ek0kVWIMu8E9l11oKg9ZTAycsbrrXN1KUIhDOUacLgkCOL260jbs2OZMV0jLbCmgel~31Y0rFB2qrJQ4BadBziO2tpVJsjDJOKE4TxW-vh3nJRpEgVx0ZZTj9QxV3vv9zvm4nWTi~bRuIT6O4M9zMk7lUaPFIHn8Icwv6yffuBqjw8ZMCtOODlcO1nDQ300i-qhk~9fEbyDV98Y9JhOLiUr07hFjFuSXKLPRoMo1RXdFwc-OMvs~6-Lb5fuvlmCuaqU0xsgFBdgLQ__",

//     images: [
//       "https://media-hosting.imagekit.io//27887f4d74b34ef0/WhatsApp%20Image%202025-01-18%20at%2023.20.19_02fa711f.jpg?Expires=1832329944&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=DOFSIIkAbhpzhnm7Zuw1vOe5R2C6oS4bLLZdcmz5PpjzFZklwjjkUwEwmN5mxQYTvT77yylB4Ek0kVWIMu8E9l11oKg9ZTAycsbrrXN1KUIhDOUacLgkCOL260jbs2OZMV0jLbCmgel~31Y0rFB2qrJQ4BadBziO2tpVJsjDJOKE4TxW-vh3nJRpEgVx0ZZTj9QxV3vv9zvm4nWTi~bRuIT6O4M9zMk7lUaPFIHn8Icwv6yffuBqjw8ZMCtOODlcO1nDQ300i-qhk~9fEbyDV98Y9JhOLiUr07hFjFuSXKLPRoMo1RXdFwc-OMvs~6-Lb5fuvlmCuaqU0xsgFBdgLQ__",
//       "https://media-hosting.imagekit.io//6466dd551b364d3f/WhatsApp%20Image%202025-01-19%20at%2015.18.44_ade8757e.jpg?Expires=1832329944&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=YGlqJkRCg6J3oBPAQez-r0t02pOqDPngwaJWtRtcd3G2U~9z7ahSvaG5HemFsGCbVxvFJHc2Y~i7ZYvAU15YbdK99L0D2Pi2cIbTucBAJe-sG1Eev3knIPHwhw8xk9p~pQ9n1RnCWz0xLiK0CLtdORqBT9RjC~~T3yyOpSTkOuHOcRwvyAeiKuwH8mLGdGY-IkecUTEnVwkJ526QPVLLd5bLDP5ZDWB~jS~uifyztSgWqTX1D5Ma65bAzNJoC6PS8J21yxJ50kCe90XFEzUPEXWEm5vnI7lAmayZ3CqonijzJm8xVGWzauezj1jFw4UNeT8V0WLjakt5VFtWegqdQA__",
//       "https://media-hosting.imagekit.io//d1530fe13dba4a8b/WhatsApp%20Image%202025-01-19%20at%2015.18.29_90f22094.jpg?Expires=1832329944&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=cfH0i~Eig4r0G04Ae41NdU2LwBLgeClt-Q4q~EnYTiBe9wDGDud5R4yrW6lrXghBCrfZewclbgJLx25Qf-6meoc-uJ1hlnDgENWjn-q6IRxP7K9oDp0sC3qPqGAxCLJrnANX4AEWQtXlvPCm-MHGc1PRBmTqvcrqze8j4R9pyRZu9HVt0s3wNy1zNXEjJUMgrrhRPaB0BYyMaLzTLBtEhvFVeERYq8jqGdw62RRc8QHFE7hSuW3UsvEeabm-v6eF~ZBsjWPvL4Xv59woCIlslXxaamLbIT8V4wgS~ltL8ruPbPX8IOeSi86DZtGW7QE79mziumP1wmreN4pz2Y8Xpg__",
//       "https://media-hosting.imagekit.io//c0cbc2c5fa9f4ac1/WhatsApp%20Image%202025-01-19%20at%2018.16.31_367fb6ae.jpg?Expires=1832329944&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=1ETl1ccBChdyX6Fkh54Skjnymkoa2TikGNaeQh6jIZLuRH0H33aKT1I7y68p5sc5wZfit8KKmnlpSjxkMDKulISoa97wByL~Iy2tQlQn2E7TRE1JfMptg0a-UboD9f9lHXF5Kx0dM~uKIPGV-lTN3Y0giu~kqRLrjrGHMFrnjTe6OCiuDghFNEprgcaPap-e-djl1vrFSP2m5A2DEv6URjzNlASSgzEYFrZNPUHAmLCg1CUSPymAh~sRpA3yGLPSYabhTnFlXk2xSZ8WH0jrX2RxCWeDJWeRhEN21Wls9tj78m7kGjSVZTj~9eBEQroypq-w9cFFJoslS~IDrR6nyw__",
//       "https://media-hosting.imagekit.io//65a18807a8c340e8/WhatsApp%20Image%202025-01-19%20at%2018.16.32_4e06e7c5.jpg?Expires=1832329944&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=q0SifjeW2EEJyyCqKuEye2O9Vm3bWy~4gPA8j9FDwBOBUU5raRzOmCWehaqCmna1lKwL7mxD2Osk3V2FHOBJP-EaK-Iy0WYgjOD9afAkqhvSK7Jy9DM~rt-cH7atmBdfLG-vRArKkeVE4ZSGzom1wRCHKJioNJ3B9aqgA9ws0cicyclMEQzm6R0D167OjY~VW5pP9QEu4FeHL3IbNcCzKnN0a4aBMhnnZWECA8wCMwvZ9W2QrEZrdvliinZcicUvHjz8VOCIuPwpcv8Fk6huuY2Yj8fLJBB5WuA3GOAAOVhyR4j~GfcXj2q~Pl8BCWx88qKliaKcZezw-ukaEmmqFA__",
//       "https://media-hosting.imagekit.io//ee1b5278b56f4f8c/WhatsApp%20Image%202025-01-19%20at%2018.16.31_cd2073e8.jpg?Expires=1832329944&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=QfTmilqz4UANF8KjwZWdLFM4WegH59ah6UB8GOjNJAkjj8ofY9~HHAYphPaU~HNWfkxa7ngS5owc84aaAhdtW9SThdrVWeYNaSNL9x1Xfi-KYOOEwPZ3wGB50CB4DNdYpPnNKo2CnXh01LiM2ZrROWN9haVii7T-A51oWuJzOKbZjtjGFnaExr5i6GgWi9j6lek1SH8orxYZDEhsIhahdHf7boCfZSXkkP298nDY79BtdBLnf~yURxSvFmYWFjAQkEI5iKVBgwc90DVRPXk302Z~hEpAWXokLUyfiBEZNEtzQWyDfxArqxor~UgEPNnBRQJDGpCbtQd3hV9yxUvUyg__",
//       "https://media-hosting.imagekit.io//56d03c659b254af2/WhatsApp%20Image%202025-01-19%20at%2018.16.32_046094a0.jpg?Expires=1832329944&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=s5gn8d8X13eJtwaHZjEB89PpDIYWV9fjRs3gtXfuLBc04q-onL53kP0HqkVnbPl3C68GDbPNjbRMtRD0Tdi-rp7i2H7yMwdkE9eSlruiTV1v4zYb42cUpoVGX-z04MXnIoDO2wvFo5eFqD3M5HRBi3yfhjWxIz1cuX4kqdMal27DyMku2jtEE4-svBtcvxC4VOrusSN3ubaWzOfyBKZulGg09spXfWGn1ZcHPseS4eUXiwjoZz4MLy5PGE6ya0wFJsIEfSaU6FQnjyq0Asr8UedmctNq8EVvvrK5Gntv2fnVkS0FMfm11L-BWS59e2o4v1j2dECxXBcfa8oHlnXuPw__"
//     ],
//     videos: []
//    },
// {
//   id: 34,
//   type: 'room',
//   name: "غرف فردية في مشروطية",
//   price: 15000,
//   roomType: 'individual',
//   preference: 'female',
//   location: "Meşrutiyet, Şişli, Istanbul",
//   address: "Meşrutiyet, Suna Kıraç Sk. Şişli/İstanbul",
//   coordinates: { lat: 41.0455, lng: 28.9879 },
//   googleMapsUrl: "https://maps.app.goo.gl/2LLcCJH1rkGfB5xG9",
//   description: "متوفر غرف فرديه للبنات تبعد عن نيشانتاشي 10 د مشي في شقة 3+1",
//   apartment: {
//     type: "3+1",
//     currentOccupants: 2,
//     features: [
//       "3 غرف نوم",
//       "غرفة ملابس وكوي"
//     ]
//   },
//   deposit: {
//     required: false,
//     description: "بدون تامين"
//   },
//   locationDetails: {
//     distance: {
//       nişantaşı: "10 دقائق مشي"
//     }
//   },
//   image: "https://media-hosting.imagekit.io//e5d6cfde1a9a4ee9/Screenshot%202025-01-24%20154510.png?Expires=1832330730&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=AQ~~oPGi~RmznR4-9iRH0UirVQKg7dJXoTZ9xZwuPw3nHMo4B-0vF8doPqlxJVs81PFRRMgfnE4vUfdYJvcH5tbDs8yqSHengY529AR43OuOYYDvXaEvrMLkMNgitZh--hVwn3SRHqJNluCZLCCiOey~FYGWyG2zJnq2Dev-HEL~SgxTuNwfdWGqsHmaX9UcaW2lB~v~-bresKVs4NEcLj5wfO0vCnQsQ0NpLQUC0GqXOtC~rkUU0TMLujHpE9Mnq4BZAzsqceW31w-ZBlahDtVeuLoaKjp3ytlyd8v~IpRoaHmmFpHVp~ATEmagmgZxF4BHwmc1WDFXnNEUx2mXCw__",
//   images: [
//     "https://media-hosting.imagekit.io//e5d6cfde1a9a4ee9/Screenshot%202025-01-24%20154510.png?Expires=1832330730&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=AQ~~oPGi~RmznR4-9iRH0UirVQKg7dJXoTZ9xZwuPw3nHMo4B-0vF8doPqlxJVs81PFRRMgfnE4vUfdYJvcH5tbDs8yqSHengY529AR43OuOYYDvXaEvrMLkMNgitZh--hVwn3SRHqJNluCZLCCiOey~FYGWyG2zJnq2Dev-HEL~SgxTuNwfdWGqsHmaX9UcaW2lB~v~-bresKVs4NEcLj5wfO0vCnQsQ0NpLQUC0GqXOtC~rkUU0TMLujHpE9Mnq4BZAzsqceW31w-ZBlahDtVeuLoaKjp3ytlyd8v~IpRoaHmmFpHVp~ATEmagmgZxF4BHwmc1WDFXnNEUx2mXCw__"
//   ],
//   videos: [
//     "https://media-hosting.imagekit.io//eb67881fea2f4210/WhatsApp%20Video%202025-01-19%20at%2023.59.43_a935c437.mp4?Expires=1832330730&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=1w0WHlu86pWtCIzHwrR1N661hIKaQjtx7LJmDM3db0G1DopFajn7F3pacifs-E8Yb1S0IRSarcpMeUhpZroX8VGEtYNHOShgX1jo4oDUOJQhdozk7Yhk~Rk~SbPh04y4cnTsDrK7vuRbJ~at0JE9APYzBnzSpNGEUZFoEO7TmxFW0uHG0m5dlw23aBEk223zjyhtE8NlQTYzeMC72qkipH5~xh5rV~Tv1g1NYkHrcdbB8BTo~SqIHw6fHUMs8xYeRAZtxGftN7Su3lwcG6iRX~eTYxKN~lcgK9qIlvINBP8AVqup3Yzc-Digzuyj4bH0Cgnr60UJroWhZVlTee0WOQ__"
//   ]
//  },
//  {
//   id: 35,
//   type: 'room',
//   name: "سرير في غرفة ثنائية في شكري بيه",
//   price: 4500,
//   roomType: 'shared',
//   bedsInRoom: 2,
//   location: "Şükrübey, Istanbul",
//   coordinates: { lat: 40.976528, lng: 28.729361 },
//   googleMapsUrl: "https://maps.google.com/?q=40.976528,28.729361",
//   description: "متوفر سرير في غرفه ثنائية في شكري بيه قريبه من جامعات متعددة",
  
//   apartment: {
//     currentOccupants: 4,
//     roomStatus: {
//       currentInRoom: 1,
//       availableBeds: 1
//     }
//   },
 
//   deposit: {
//     required: true,
//     amount: 1700
//   },
 
//   utilities: {
//     included: false,
//     description: "غير شامل الفواتير"
//   },
 
//   transportation: {
//     metrobus: "5 دقائق",
//     "افجلار مركز": "8 دقائق"
//   },
 
//   nearbyUniversities: [
//     "Gelişim University",
//     "Aydin University",
//     "Istanbul University"
//   ],
 
//   image: "https://media-hosting.imagekit.io//4e261e7bcdf34c68/WhatsApp%20Image%202025-01-20%20at%2000.11.50_f65ac27b.jpg?Expires=1832330998&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=bnWTBKQYoV7xfg5NBmOO427LwVNQErGriO8-RHma13~sxLFb8vYnId8iap8feof~P2lmtm3Rh1lh8-FQ1ScEeFUrOT-4JiPNVZcYUMHHAqfHv3iLrgX~mWvnKqsoNhU4DNQqAoRCUWhj1p73j-~kQTv6oJ4ydvuoLFoqcz~-yQiyG2~lpyf6ElZoJunzJ450ouyaszq2ffeNr8oE8Qj0VMCXgyoumCJ~-dOS7MYn-IDo9ywL5ItHHiJxwZDMQeKQMMrii~M2X9xpbyig3DNhh3POODkE-Ripb29YXeTsBge1JP~wrv3VBLMQjAqsMmCTkiVY8qjmmGk2afNTzCpVcA__",

//   images: [
//     "https://media-hosting.imagekit.io//4e261e7bcdf34c68/WhatsApp%20Image%202025-01-20%20at%2000.11.50_f65ac27b.jpg?Expires=1832330998&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=bnWTBKQYoV7xfg5NBmOO427LwVNQErGriO8-RHma13~sxLFb8vYnId8iap8feof~P2lmtm3Rh1lh8-FQ1ScEeFUrOT-4JiPNVZcYUMHHAqfHv3iLrgX~mWvnKqsoNhU4DNQqAoRCUWhj1p73j-~kQTv6oJ4ydvuoLFoqcz~-yQiyG2~lpyf6ElZoJunzJ450ouyaszq2ffeNr8oE8Qj0VMCXgyoumCJ~-dOS7MYn-IDo9ywL5ItHHiJxwZDMQeKQMMrii~M2X9xpbyig3DNhh3POODkE-Ripb29YXeTsBge1JP~wrv3VBLMQjAqsMmCTkiVY8qjmmGk2afNTzCpVcA__",
//     "https://media-hosting.imagekit.io//8650a30b1a724588/WhatsApp%20Image%202025-01-20%20at%2000.11.51_b86b6e7a.jpg?Expires=1832330998&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=FaNEdZomH6QlybC7XobV2j385XggN7-C8Ji9rVsdXxzVzk2F4bS5c4uIwv-qWmRmFqv6~82RIRsNeTcPgUITAILNLEGQ4VgjS3mEe15IBsP0yj8thiPj0ozp~LusMLfk-Zk25malWvM2NOdvLwG4OMACRF8il5~Up1I-5tIEXoL-pldIrRcUVa9BIScERmbWwvNWwz862Ho~INJNPIW4J-UhfXY2xLZjvDZt6PzWI2EJ2gge87p4UaNlxl~gEApOaYTlwYHklbyoJQzaoqzX-2HBkgWGdBUnLoOxmgaexQTazqTxmpBxZsFCjM12UHfkZobjtsxVj6wdjkEVGv6W1A__",
//     "https://media-hosting.imagekit.io//f6282e2e095e474d/WhatsApp%20Image%202025-01-20%20at%2000.11.51_407133a5.jpg?Expires=1832330998&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=xKEvLYgIzjcQPfI0yYBN6NclzDShihWSd0RrKT1tMjTH9n4A8FHdVAk-2OyHn6Kb5-14NqTfSqidsReRUMrzas0f3J9tlY46g3V9s77-S1Hng98ZxbFHzjaIrcWDt-lc2H16ylql-FV9iMbz6hFszpnHmKIT7H-llw1qPYwrHmkU88NJKK5QVCg-ku0CSgtbRKMICwmup99KqL7npgMO1LL1H-WxL1otRkAnBPATm4HNIyMr4JXUfzBSt0liy8rpE2WIK7HCp~61GRgXSn4Ssr5MPXezM34cxT-vyYBQKhbdaI0CD5GhguVR6dW7N2-KiGUJyrRcwMVHwtaCGLqBdA__",
//     "https://media-hosting.imagekit.io//1002c913bf584eea/WhatsApp%20Image%202025-01-20%20at%2000.11.50_b5d380c1.jpg?Expires=1832330998&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=l1-RmnttiU~UFBT0IIx4zFTfGBBOoRo28cercs9fJ87-wDs9ZbB~e0P9abCqA8ufET23Yz8zJqWK99xmOFOCh4aGbCkSvzXFDrcMYFm-44oBtORt59c5OABGpih9TAuB8rIqoOYX~AKXdtH7Xz6IcXLGIsZSZfrA8F0M9rQnQ-~D1fAD67OOqVUskY-U6TwXgN6bLr5tTbCX3nQXw8HYpsLc8EdCL3Suow6vRentnul9PmElKVCCcGxMrg38oYE2DtZU-8AF2fNJT3Kqmwa6IrRYJD~Hw-PsUrgpz0qaUmSsbxO0WsPvyms1IhCZ8B9BN0voSj7OseAZekrhbINe0A__",
//     "https://media-hosting.imagekit.io//fb9bc7fedecd445b/WhatsApp%20Image%202025-01-20%20at%2000.11.50_931014db.jpg?Expires=1832330998&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nqzgGHXCr6fgTPueRonwc9kX8pL0WDMVPMje1s0Bcfqns12vDtKafm5cnB7z5fditP1pVuTewvWwGKe81wUgalAZwXoVewKSKZkhKr7xODaOhAHFs5JIQPL6wodAbG4q8XYSdLBjjJNSn5Fb7XXgeHcTJdlM5MGewsMPi1MWBKg1tCR3s-z~9ANDKsD6dAfsJ7HvquLNo3dw2PXcKs1VaYqRV747O2xtXXdDI7-Xajr~kBRwb8PQla1CC2Pbs8Js1CjViUDgkFUz1SvfPQnM3R5lTOBsQKpH2hOCN~THmcpYCln4Jl33NeYKYhcQWJHw-XjzDPHKZgQ3PArkn5QVQA__"
//   ],
//   videos: []
//  },
//  {
//   id: 36,
//   type: 'room',
//   name: "سرير في غرفة ثنائية في الفاتح",
//   price: 5710,
//   roomType: 'shared',
//   bedsInRoom: 2,
//   preference: 'male',
//   location: "Fatih, Istanbul",
//   googleMapsUrl: "https://maps.app.goo.gl/8FLTQm2Xsaqubezc6",
//   description: "متوفر سرير في غرفة ثنائية في الفاتح في شقة 3+1 لطلاب",
//   apartment: {
//     type: "3+1"
//   },
//   deposit: {
//     required: true,
//     amount: 2855
//   },
//   transportation: {
//     marmaray: "قريبة",
//     bus: "قريبة"
//   },
  
//   image: "https://media-hosting.imagekit.io//9234855f2d374ca9/WhatsApp%20Image%202025-01-20%20at%2011.42.49_a207d786.jpg?Expires=1832331878&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=g6MIrC9WWytZPOnOODwSCLQE7wALFyzAY2Fe4Km7x5XyS3xVRO2UbwZwE59weAADBgd3woA5MjqimDjFidlZpXBI8nHdzvmr7DQpwtCSN9JHD6FgvoVFBAZu3us4ZvTY-bzQ9Zr2pgsf7VFHUiJ837AH0~JYcV6NEnw6wVbbit-lReHEvGC-4nUBzmEWItuw~3rHnT7dmDUvfjrN3aYYszG7WmiLQ-BHjSLk1RTElXXs3k4tMApeDClam5q-rzxhguTS7zGtl5U6O3-SV3MgQ3jz0Fl3GdScZ5PV85IpP7OA6SoMo7SHe8eeBbnrTmoR6sDgXh3i8BoxCXTEi2GMbA__",

//   images: [
//     "https://media-hosting.imagekit.io//9234855f2d374ca9/WhatsApp%20Image%202025-01-20%20at%2011.42.49_a207d786.jpg?Expires=1832331878&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=g6MIrC9WWytZPOnOODwSCLQE7wALFyzAY2Fe4Km7x5XyS3xVRO2UbwZwE59weAADBgd3woA5MjqimDjFidlZpXBI8nHdzvmr7DQpwtCSN9JHD6FgvoVFBAZu3us4ZvTY-bzQ9Zr2pgsf7VFHUiJ837AH0~JYcV6NEnw6wVbbit-lReHEvGC-4nUBzmEWItuw~3rHnT7dmDUvfjrN3aYYszG7WmiLQ-BHjSLk1RTElXXs3k4tMApeDClam5q-rzxhguTS7zGtl5U6O3-SV3MgQ3jz0Fl3GdScZ5PV85IpP7OA6SoMo7SHe8eeBbnrTmoR6sDgXh3i8BoxCXTEi2GMbA__",
//     "https://media-hosting.imagekit.io//b84f943e9f044982/WhatsApp%20Image%202025-01-20%20at%2011.42.48_ecfcca60.jpg?Expires=1832331533&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=b0xytsEizJz9GRy2TSgQdopvnxNSEjdpV0qQDRCvM5bBG54qcauMQUr6gI4pMMUjJIyXg564gAWPbhJiUWhyhtNpaimUZax-E0HTyA~ynFGBlGNQJUc2bPXhQ~kbf~zzeZXx8LfvXH1OHk9kvS8p4KzPrmYmxyt-CJgim2gaFIYDergK3YV-zgz773LRYGCAZJGdhqkTcN0cMWGi8EvUnt7XBkPT4iWzFFl7c23SpOzNUuS5xScFisqTwiS~1Gm6ERCkpPxE06D1VE1J0dbSVfvBt2fGJqOH4-HuGLuxdmITNYNzXJ0gnsqzqlXuyBs9zz5oRzKVx8ghLQAJ~draww__",
//     "https://media-hosting.imagekit.io//e44e00802b084080/WhatsApp%20Image%202025-01-20%20at%2011.42.48_98430ba3.jpg?Expires=1832331533&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=TXsi02cTNKKYod9i9XA2AYTN78gfMGfaPRcy6LA5hIQIXnw0dkNBojOtkBQVNPpBbLWIXe4uUIWD3ZcX0LqcibUCwJCrberuMSoKOv~M9DiGLnZhY84bgD64Ps7DQfbxJ0kSlXx4chY5Q-1Ae8OHE8jHe8Wgwos0MIhgllAKjnj0YJEHv2vjrh1I0O0zQWRKQui5l5WcB7d4Q0ncS86Hm4Uzh3P1XzoV9Z4MLUi6BNIURCdzHpYdMRgBPqPSo3ND6G3GkOHyYRZgMBiHzsRilSijlGfTl4bA4lXvzeQgcu-x8~A8fglw84p7Q0ANnxoldUrR~lr6FfuFRfhe6~4Ozg__",
//     "https://media-hosting.imagekit.io//ed38843be0504699/WhatsApp%20Image%202025-01-20%20at%2011.42.47_c1da0b74.jpg?Expires=1832331533&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=CY0VNLn2-5RssUJdYlRnKxBw~Xbb~WF-REzNlGCQqohZ01qplBcxGNekbhxrNCvZn3tZkg2~kLi7wlk4cSz8YNxbJaaPIhiIay4z55J5KdGy37r-tYQjdfrasUOFRh-R0FI2StbzwyqvU-yk5mpYmubLYnxOeyYfYO-XCkCCx2BbhgJMJrN4BC4~B8wHuyYq2Pi5l4tppoTdfOXFd6C2MIlGPQ0ehDMtQrBTpRXQI3MItmGGkfHiLv6m8IEA2aIsd5dz2ivft0MpqCPoWezIx-mI48bhG8S5ZcunN9xITgG2XyHlm5QJvTymIWaybWjXYZ89Jt4op9jTO4~i-tvdCw__",
//     "https://media-hosting.imagekit.io//b101f5b42ca54cd2/WhatsApp%20Image%202025-01-20%20at%2011.42.47_8140f225.jpg?Expires=1832331533&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wF7vsOT3VWdiReR453pNH2SuEgZSvw5FxMlsYn~ML2es1AW5SbR1vMxaH2kdfMnBfBwkh8yeAUADD3X5I~JHPqBF3xx8lCr-u5bspOZDxM5vZ6ed0gO37QDkHEMRieQ84wRkeJcSYnXzf2SBfYCqBNIw2b90MDxtlLhUr7WOUyFkhB~3Vk1FYy0qpHPUBOIjuUhmOmT8BmTpPb1XYOeGfAZ3gPxCEPYdoPSs7wXbtwGKdDQCU14lXOnYwIHLkxOVneOwjYVrLXRBKL03jZ2j-cNh~zgTqe4FKj~b~Ac5AxJH-ZK1bzqMOa2l1pOMfa0Wlq8bYdFqbgDY98SkvjvaAg__",    
//   ],
//   videos: []
//  },
//  {
//   id: 37,
//   type: 'room',
//   name: "سرير في غرفة ثنائية في بيكوز",
//   price: 5710,
//   roomType: 'shared',
//   bedsInRoom: 2,
//   preference: 'male',
//   location: "Beykoz, Istanbul",
//   googleMapsUrl: "https://maps.app.goo.gl/8FLTQm2Xsaqubezc6",
//   description: "متوفر سرير في غرفة ثنائية في الفاتح في شقة 3+1 لطلاب",
//   apartment: {
//     type: "3+1"
//   },
//   deposit: {
//     required: true,
//     amount: 2855
//   },
//   transportation: {
//     marmaray: "قريبة",
//     bus: "قريبة"
//   },

//   image: "https://media-hosting.imagekit.io//0265c3e45f654ede/WhatsApp%20Image%202025-01-20%20at%2011.53.38_fe60b6c4.jpg?Expires=1832332091&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nvCEy1gkZE5al3OROt76lBFa--oMz~d50pSszBvULneqIAtbbb4SEQXRb~zhNCzpx7KgiaOfpUIaZvUXJCvlSebzRoLXUcChiHBAQgkn0fbRCzz~IlEOR4Shfa3Du8F5yRFyWCrr0kJRKwolD5~ojBY-NgSzplEtH04iTGtBWD-oAFGJdmx4gTcXs7FFNDW3orzvRgkJk2gVuTUoQSHuKK-HYadiyKnSIWOmygd8M4-xLyxBQnM4aMiM~b9qgX63twSyf8hMhCI0PopH8F-fgqzp5-7X2t2vIogrnKvysuOfbtJ5J3yUpo9e1AJ0qaepA4TJjH2aTNCRoixrHGkj5g__",
  
//   images: [
//     "https://media-hosting.imagekit.io//0265c3e45f654ede/WhatsApp%20Image%202025-01-20%20at%2011.53.38_fe60b6c4.jpg?Expires=1832332091&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nvCEy1gkZE5al3OROt76lBFa--oMz~d50pSszBvULneqIAtbbb4SEQXRb~zhNCzpx7KgiaOfpUIaZvUXJCvlSebzRoLXUcChiHBAQgkn0fbRCzz~IlEOR4Shfa3Du8F5yRFyWCrr0kJRKwolD5~ojBY-NgSzplEtH04iTGtBWD-oAFGJdmx4gTcXs7FFNDW3orzvRgkJk2gVuTUoQSHuKK-HYadiyKnSIWOmygd8M4-xLyxBQnM4aMiM~b9qgX63twSyf8hMhCI0PopH8F-fgqzp5-7X2t2vIogrnKvysuOfbtJ5J3yUpo9e1AJ0qaepA4TJjH2aTNCRoixrHGkj5g__",
//     "https://media-hosting.imagekit.io//a87078e57bc6465a/WhatsApp%20Image%202025-01-20%20at%2011.53.39_d1573173.jpg?Expires=1832332091&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wnwiVtKnsV26OywrJeZzKhYWd3nDdkOZEAWliwHLXdKEx9oyroBoM8EzYORwLBG8XrbCvGN8T7CHpM34qC~AvVT85J8kHtDhBHgQWcXQDL1PoCi~IZ9ckJ7dueka-n-rC7uEzdtS1bBQBMvzpEDYl4bFsdqj3PIqG3Zf5mkdRzvnhd3jYuZXMPWnFQRgPmmQecPpTpdchgIZq2otdDt8ihyB4DHwnjTqTP0fR9ggO7VdBIPdKSN9MZuwJpw3M7UTdOHSBLa8Hll6APEBPHhM7WIjfp-GcyCbffCMRG8xVrqmWUwI80monoFo9GUgD6gZeIhTmtwxjNoo7m3wGZk5CA__",
//     "https://media-hosting.imagekit.io//ecd78018b25a4917/WhatsApp%20Image%202025-01-20%20at%2011.53.38_cc449a92.jpg?Expires=1832332091&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nPmrgG8OyWrHoDppnWNcTbFZENAeR3t9GawyEg9Ro-Bt1exOz~Xs7oNkja5NT96IHfLQ2vQRQ4A4an~UOybLgmWW3zxu77BmRQ3Rm1BK2NioxP8dPbrb9DK0KTjTVgiHZ2mSs0laI-TgWcngT9HpCCqRJlPKta6Fl5vSrE8x57l76n25aXbww4rz1iLv76TnS7z2BiJYZJqYSR9bO6A7cFukaXK3aqAd3iDfcXcIhZ4kcihERnpj0ax3xYGRfqJrMHWmcY0vNeI6TSxQE2NFoLw5I91tT0OBt04r9Y3pzWPmZ4B5SFR98YezBff3HmpfAPj7OYg74e9tbgcW7qOjsQ__",
//     "https://media-hosting.imagekit.io//87dc2ce7615b4098/WhatsApp%20Image%202025-01-20%20at%2011.53.39_9c34b0d9.jpg?Expires=1832332091&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Em0h6dDtGNK4xhuJ968l-dNjAl-ReBfQB8U0PaV-vRJWeFkaQKrYPOf2D9mUsJiA41mGBdvoGxbgESIrDcqCybZRWPfJSLZ9ajZitpY5lkInMM6Va96STCo1aOffqesxmdrJMzF4nAY1BCC6qKymqpHfvnmsZ~Ua8jIRgL8G20wfoAyNoojyju2U4lO1fQ3CCEt0YcAa8KwlcwyQbQiaLQDSNbU7y3KzHESVbTXvJHnD8c55Mg1c-W1EYZFKRFYYzH4T0mPCx9GL2dN0egQ-sWvELPUVEjlfGRjp7WYZZC5cYmURXjn5WO2UVmFRxP13LjqatJOL6r-hFzOSfLtMTQ__"
//   ],
//   videos: []
//  },
//  {
//   id: 38,
//   type: 'room',
//   name: "غرفة فردية في افجيلار",
//   price: 5000,
//   roomType: 'individual',
//   location: "Avcılar, Istanbul",
//   coordinates: { lat: 40.979861, lng: 28.716111 },
//   googleMapsUrl: "https://maps.google.com/?q=40.979861,28.716111",
//   description: "متوفر غرفة فردية في افجيلار في شقة 4+1",
//   apartment: {
//     type: "4+1"
//   },
//   deposit: {
//     required: true,
//     amount: 5000,
//     description: "تامين شهر"
//   },
//   transportation: {
//     metrobus: "10 دقائق"
//   },

//   image: "https://media-hosting.imagekit.io//89bdf02c5bc24e75/Screenshot%202025-01-24%20161427.png?Expires=1832332485&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=RibaY9ChOod06NzajkAZl507iOB8ohrhFEwcLrKowkjys~OBl9KpfVtPHfmoZAhOELgYeMB4~P6tekmUb-ltnnPBrKIms-6FnjTjd--6aS52Pn3fUIOmrmwzB5CZpJoOuVKx2zOpprcRVastPZwx43YLCCIh2MAauBbjrwjQYjgykL3H-cPOMDE1VRWMf~UWmkq7yqTCY0PchkC2p-Q1I08OxT8KQhHGnyvTGCCJUvtnCeT4lVbLAflsFL6KJ5VYs6WBqequ-vKyNK9vc~jL449V6fNgBkr~X4gvXL8tDtMC68XqfIFOUADCii7LYU3-eauPyZv-SYXBfQutUHl26Q__",
//   images: [
//     "https://media-hosting.imagekit.io//89bdf02c5bc24e75/Screenshot%202025-01-24%20161427.png?Expires=1832332485&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=RibaY9ChOod06NzajkAZl507iOB8ohrhFEwcLrKowkjys~OBl9KpfVtPHfmoZAhOELgYeMB4~P6tekmUb-ltnnPBrKIms-6FnjTjd--6aS52Pn3fUIOmrmwzB5CZpJoOuVKx2zOpprcRVastPZwx43YLCCIh2MAauBbjrwjQYjgykL3H-cPOMDE1VRWMf~UWmkq7yqTCY0PchkC2p-Q1I08OxT8KQhHGnyvTGCCJUvtnCeT4lVbLAflsFL6KJ5VYs6WBqequ-vKyNK9vc~jL449V6fNgBkr~X4gvXL8tDtMC68XqfIFOUADCii7LYU3-eauPyZv-SYXBfQutUHl26Q__",
//     "https://media-hosting.imagekit.io//ab821ebeceb54fa6/WhatsApp%20Image%202025-01-20%20at%2012.29.51_3976b298.jpg?Expires=1832332419&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ROfn9rwd0rtqlIIPuqYyg89Uxz5saiKLAR5~pcf6zuP6oV5fSShxVzpKe7erIWnNbB5Om-bvNT0Pz8FajQCefY47cyE~GoRRct1YPd7bTqOy52s5md86YfZx38j1VT7Yx-EdgINrUlkOAs17eiYKQyH1Pvuhx6SglWjTku0MfmiiYku5hHvB6mXw3uhKbcIZOazBNzXFDXXnr6P3~NPexrpH~ojKaH3rpLaeeaU6A0HLVhUQM1hCHoKWYQ6mgm5wuwGK47syIOKyCeOxuAfcGzDodmGRE9vRjEyFG7uzz2m-rZwY72qA7d4eU-HcdUtl8-dGthxnyzPsWw2K0rOvRQ__"
//   ],
//   videos: [
//     "https://media-hosting.imagekit.io//6bd841d78c784862/WhatsApp%20Video%202025-01-20%20at%2012.29.51_775c5e79.mp4?Expires=1832332419&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=r97BWEbBYR5macUMOxG-T9a0tf1qbs1HrvP6SMPidKDk2S7-44waRQ3ppoICzgCl3RMtFCSrm5wSvVae25exMsaK08GYTAY8Qc9ywQIkkuhlVer5ZuNR0l1UO7tH1QdkAMalkzM~9Mh88Zo4AxVeV3MRcJonkL1TFL9YI0SmVxXW4SkIZ-v9ReUzZtAcmCUfQOyUaypdbV3R0wC6h-M8kmKQmLGlbxVljY0wsz-NIrPpD7UEoU95H-KLLlXJOB~cjaCv3cT03uATS7Lsh2rV~GPH2Ba0WxiV6Omhz7aaDqWxiAJOBJ6bZ3elyPa2NkSBGPtnKEM0SoCZzmQPnNIVJw__"
//   ]
//  },
//  {
//   id: 39,
//   type: 'room',
//   name: "غرفة فردية في مجمع Kitaş yeşilpınar",
//   price: 12492,
//   roomType: 'individual',
//   location: "Yeşilpınar, Istanbul",
//   description: "غرفه فرديه مع حمام خاص في مجمع سكني Kitaş yeşilpınar evler",
//   apartment: {
//     type: "3+1",
//     building: "Kitaş yeşilpınar evler",
//     features: ["حمام خاص"]
//   },
//   deposit: {
//     required: true,
//     amount: 12492
//   },
//   landmarks: {
//     "فيالاند": "قريبة جداً"
//   },
//   transportation: {
//     metro: "M7 - 10 دقائق"
//   },

//   image: "https://media-hosting.imagekit.io//f46a5de0f0314fad/WhatsApp%20Image%202025-01-20%20at%2012.44.02_a4d42877.jpg?Expires=1832332922&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=OwlNKOe2aGZlLCT~OIubzAivyP6FCSVV4MxSFtW~ZMAkJ6aoLlrmgPwDD5lNSMHGh2MRYSEs37ARhAUETf8c6mP7gmgJo4G6c5HIlSNEAR-tNhCW7gQdalAn6wuMI6GuA5~yJ89ieDKBDvLEnQGfSz-~URTdz-6CfTg3NdGEIy7o1THuiTNNyvyuYCtABZFsEXJnTjJW~iTGeVFgzXLEgoe6y5u2gxiH3EUCu1W6w-~aqUlBuU7HJF~ZYrU7uqPnfhHWV7FsETpAvxxdyCxtsgMCQK8g5KCE5s5Ru-Pd1mHNg~H9gY6LVLjvZEQYv-~8hQyWXOTR3o~qrZarv1ZdhA__",
//   images: [
//     "https://media-hosting.imagekit.io//f46a5de0f0314fad/WhatsApp%20Image%202025-01-20%20at%2012.44.02_a4d42877.jpg?Expires=1832332922&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=OwlNKOe2aGZlLCT~OIubzAivyP6FCSVV4MxSFtW~ZMAkJ6aoLlrmgPwDD5lNSMHGh2MRYSEs37ARhAUETf8c6mP7gmgJo4G6c5HIlSNEAR-tNhCW7gQdalAn6wuMI6GuA5~yJ89ieDKBDvLEnQGfSz-~URTdz-6CfTg3NdGEIy7o1THuiTNNyvyuYCtABZFsEXJnTjJW~iTGeVFgzXLEgoe6y5u2gxiH3EUCu1W6w-~aqUlBuU7HJF~ZYrU7uqPnfhHWV7FsETpAvxxdyCxtsgMCQK8g5KCE5s5Ru-Pd1mHNg~H9gY6LVLjvZEQYv-~8hQyWXOTR3o~qrZarv1ZdhA__",
//     "https://media-hosting.imagekit.io//4f6aeddbf5a24bbb/WhatsApp%20Image%202025-01-20%20at%2012.44.03_454ae1d3.jpg?Expires=1832332922&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=xaML~dLUfeSHPAlUBFIGZq9yfKy~FrqcwS0GJkt6y5poPz1tCJ2Ah1mlFpOTxVNFTu-DDPrLUCOQIfgxG7xEGK4VdwQKQUM5dlFBpJfmQrPChztd7ydtm6ytDjhLS6yU3eF0iyq2cztA9tSQczHb7rhv1QGZO4baoeY5iTlcT2AbB~h~Wp0zj0XbHBQpASfwR0UeleRhziR47Dc3xFdjvZb5DMyjrZxrO6tH~shmfUmOXVmR8P4FeDPvU0FDOS7qcRVxwMFDbrpTJmQERQWNtlfYUfs-3sfajAX-k9pZ~rhHTNk8VSH8FBiBiOF7mGU-4FJNPoLjSX21Vun62LFPsA__"
//   ],
//   videos: [
//     "https://media-hosting.imagekit.io//70db0f6f46584684/WhatsApp%20Video%202025-01-20%20at%2012.44.03_9f9cc288.mp4?Expires=1832332922&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=UbHZqlVB789R57LJAXdIvugtvFRBVK~evjFHSSoG1RUW~IHRuuH-bOss-UWc~VyNQ3275IGS1C1bqm8oljYRKUhrCY2a58A8RoXcnyvXsSDOsQDBq~2q6YcE0sim0By-ADpzw-3RgSSmXf0sWzC~sbzF4lo7U0ICzOoXsByzeM1T1R6jzH-obokkTHQg95WCZo1xeOXuAeQRjlSgkzrArQqw1ZLwgWKdAwmckWfiuEeOYh2cyOnYNqYFqtVQYuHHqfCgq93PhiIk-LrUigAFX4m72eTALsg3IDgbqlkzTWZk36khuDZY80neef31HjFgy9QFXqG8VZBNpeaKMDWEZQ__"
//   ]
//  },
//  {
//   id: 40,
//   type: 'room',
//   name: "غرفة فردية في تشيكمك كوي",
//   price: 9500,
//   roomType: 'individual',
//   preference: 'male',
//   location: "Çekmeköy, Istanbul",
//   coordinates: { lat: 41.010917, lng: 29.184222 },
//   googleMapsUrl: "https://maps.google.com/?q=41.010917,29.184222",
//   description: "غرفه فرديه لطلاب في تشيكمك كوي شقة 3+1",
//   apartment: {
//     type: "3+1",
//     currentOccupants: 2
//   },
//   deposit: {
//     required: false,
//     description: "بدون تامين"
//   },
//   transportation: {
//     metro: "M5 - 5 دقائق مشي"
//   },
//   priceNotes: "قابل للتفاوض",
//   image: "https://media-hosting.imagekit.io//b7beed4e61d24cf4/WhatsApp%20Image%202025-01-20%20at%2013.23.23_d8927f1b.jpg?Expires=1832334602&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=HrIp3OrKKcZ6hauVBjBOSXD89tepesa57DRhF~MC0nSaOBL0dgINO1novaofxE6~pMOWrmJZoC--0BufHCdcmb7rkKlubh0E3Iowg2gRzSGmrrxSHFDQNOJ9GvFI7KrtuCCiVuRLaegB5BDiOobnICEn5s8re-W0uqo2N6uUPLPx108gSCOlqJM2ZnbMS9dcqXlUKJ5th~XYuv8WVtippXr~bdy8IyLnHpU8r~5i0BDxuH7TOjKG44fdMUU3jsCoMslldGKJKUXa8MC-BOUCtePDnsFb4jtA-a7Dvj~P6pCnWd5QA58MKjsOJwqyrlT043ZIDBIZMgDhdsDjMp5~QA__",
//   images: [
//     "https://media-hosting.imagekit.io//b7beed4e61d24cf4/WhatsApp%20Image%202025-01-20%20at%2013.23.23_d8927f1b.jpg?Expires=1832334602&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=HrIp3OrKKcZ6hauVBjBOSXD89tepesa57DRhF~MC0nSaOBL0dgINO1novaofxE6~pMOWrmJZoC--0BufHCdcmb7rkKlubh0E3Iowg2gRzSGmrrxSHFDQNOJ9GvFI7KrtuCCiVuRLaegB5BDiOobnICEn5s8re-W0uqo2N6uUPLPx108gSCOlqJM2ZnbMS9dcqXlUKJ5th~XYuv8WVtippXr~bdy8IyLnHpU8r~5i0BDxuH7TOjKG44fdMUU3jsCoMslldGKJKUXa8MC-BOUCtePDnsFb4jtA-a7Dvj~P6pCnWd5QA58MKjsOJwqyrlT043ZIDBIZMgDhdsDjMp5~QA__",
//     "https://media-hosting.imagekit.io//2655ec65e4b44041/WhatsApp%20Image%202025-01-20%20at%2013.23.23_9f67ad88.jpg?Expires=1832334602&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=zb9UREc49v-weqxfW0usmH-GzsT3vcidTUsxqwV5cPr3wQYLk4Rspfa1uZKQ9Sbs3e3l7oFAf7qlyIGxTkpVPxQYwJg2O4NpluqxhHPFoL3dkQKZhIphKI923~SWaj1jKm2n7Vq715lFbA7kxuez3hCLta4I2oSr~U8WwXF~IO6yEIgcyf0IMBLF9eBk4~YgRElx6M4qXYTiPBzlDOq4cXNUGTPlyKe~5z0PVh-AH4GqW9sZqr53F5Te2Xnsqj4EzeD0yevh~lCFFlcBg505OB9Dbl294eFgIK3EB9wHAWL4c7rBjthDyYu9gEHh37H1fOPJXv2H-nuTYBe259uKrQ__",
//     "https://media-hosting.imagekit.io//9322c4c2b8734a4d/WhatsApp%20Image%202025-01-20%20at%2013.23.23_09b34ad8.jpg?Expires=1832334602&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=BBXFlfx5mr6taWYkorjw1rAxWY2fisdi-FPalgMLT9Sgk72KmS4XH0veuIsqMswKsCP66GcFaO-3dcobxbVNrVhMEiQ0KnpLD7OI5RbgYS45dbcOltafzUGdqqvB-9fzFGP~LyXFoEtjEOrRx6PNCqbEVl~IY7gKJJ9sJGL-yPZTvX1RgefHkjBSjM-ltNhoilYs96ZKpILX1xPA0v3gKUNsVZ~ughPSSHP6aSq-3mx7kkHIpHIhGg7g~pCytEpAxx0EXTwaMSblUvD-HX-zF9MqPiImk9Y~B5f5ahp1iINf~u63OU5Kon87dq8PS4uinz~mKLxdz~lEdHYJ1XRQGQ__"
//   ],
//   videos: []
//  },
//  {
//   id: 41,
//   type: 'room',
//   name: "غرفة فردية في عليبيكوي",
//   price: 8000,
//   roomType: 'individual',
//   preference: 'male',
//   location: "Alibeyköy, Istanbul",
//   description: "غرفه فرديه لطالب في عليبيكوي مع مواصلات سهلة",
  
//   apartment: {
//     type: "3+1",
//     currentOccupants: 2,
//     roomsStatus: "طالبين كل واحد في غرفة"
//   },
 
//   utilities: {
//     included: true,
//     description: "شامل الفواتير"
//   },
 
//   nearbyAreas: [
//     "شيشلي",
//     "تقسيم", 
//     "ايمينونو",
//     "بشكتاش"
//   ],
 
//   transportation: {
//     description: "المواصلات سهلة من المنزل"
//   },
//  image: "https://media-hosting.imagekit.io//0f0ae852a07d42f3/WhatsApp%20Image%202025-01-20%20at%2013.37.26_0a23f8be.jpg?Expires=1832334914&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=u7MStNET9ANFHX342IAcc~Nqd~-GpfOQDmO20uY0NcWKjCu6rVhwqt3Rk-dq6uLJ-jy-mqIfOC8cSiyCgqnPSFocXl6m8vkwf0u0Qs4oQhwQb0TUceTzIQARI5y-p0O4JTeIcMjGUR6FJxqW4DUck789q8vt91glLxU7TQVZx5P5CdNCw1bLLh~o50Le4udSs72A-UqIKdIbpVX4i6yMp3LXXBzjyY8F2ops7koaqWzxpTQEW-FLCN8ImR5lw4Ho7Hi3Qp0t1e2oOFRdvh9ImUWFZe-z3Z~an7~3kcRJFqtgvzvPdOpMoKif1KaiA9qkQeGF1Dbfjq7owpIOM108TA__",
//   images: [
//     "https://media-hosting.imagekit.io//0f0ae852a07d42f3/WhatsApp%20Image%202025-01-20%20at%2013.37.26_0a23f8be.jpg?Expires=1832334914&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=u7MStNET9ANFHX342IAcc~Nqd~-GpfOQDmO20uY0NcWKjCu6rVhwqt3Rk-dq6uLJ-jy-mqIfOC8cSiyCgqnPSFocXl6m8vkwf0u0Qs4oQhwQb0TUceTzIQARI5y-p0O4JTeIcMjGUR6FJxqW4DUck789q8vt91glLxU7TQVZx5P5CdNCw1bLLh~o50Le4udSs72A-UqIKdIbpVX4i6yMp3LXXBzjyY8F2ops7koaqWzxpTQEW-FLCN8ImR5lw4Ho7Hi3Qp0t1e2oOFRdvh9ImUWFZe-z3Z~an7~3kcRJFqtgvzvPdOpMoKif1KaiA9qkQeGF1Dbfjq7owpIOM108TA__",
//     "https://media-hosting.imagekit.io//f3bce738b20b43bf/WhatsApp%20Image%202025-01-20%20at%2013.37.26_ce30c851.jpg?Expires=1832334914&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=z0BFxT2OQBAaTKK0QEvzKDZHKn9Ffb9LW8JFtgepCHJiqBJXPOAwYem5t0XUk3O7LPIA5hCQfngcIIm7DZcN3XSUreQ6PA8qcDwzVUNd85scBkGKU~XH3wyMLUAcT3B0T7kVFaYsuZUrVnPjDA3L-1kaTb6fF0QidomhmLkq-J7meASvFyvdwC-tkf5tCGx6ivkY-j989Lli5RRBW5I9Yf~NO3sB5qnWSO1xmyLshK1CDttKr27OQBpW5GJYHL57GOGMRDCZ0B0DPLtaic5Rf6fQ~QRX0BeS9d0-ibM8vLwZY2qHc2rH-MqCMz4s87MGF5LeI6waTCMsAtJJe6Ca2A__",
//     "https://media-hosting.imagekit.io//f8d9bb517c894980/WhatsApp%20Image%202025-01-20%20at%2013.37.26_decd8633.jpg?Expires=1832334914&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=alwHzdq17oGDuX6FIP42eZbJh4xinJ52adDToUmiwNqig8qPSG82U8kowNKuEzSltuGAqAz7D0Ya4dIX1FkEBO6noO~ZIQlaUoBkUK9V-lKs2rG3wxlCcwLQ-Eqp1K9ocpstpgtDbIaiEdB5SiZIn5fP11HiAGusW5VYD3gW2NZHWppbGs4zJg75vveeV-TIPM3Q8PYPUkdUNPIPhA51WowYsGBnNjD4McPaHUIcVgaDkiQmq4ovmAOha-egvEpjvyZXry~eBEaioUzp5-uxvI8ljx2Y9xxp3bdjxZZlMzTavSO-n5ygr1DPjw-d3fjfxmkxSLsHnJ1uctlAjmbEHw__",
//     "https://media-hosting.imagekit.io//e739cba36d844022/WhatsApp%20Image%202025-01-20%20at%2013.37.27_05c45c3e.jpg?Expires=1832334914&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=R8duxfb~u4n5wzm35-29k~KAC8soZ5KK71ZRSt5K6oqKVW7rt0ZfbEh9N3AlGAWQIS6qf6mcfz8fRR1Q5jQGXu06M2T~TwokJccAo6tvbyfxEDkiAfxuTF5prAj639v2auogVBV8K4lhUu1p2bdBvle4G~c~3oKI~JEnZ77Z9P6RaOlxZVGL-Ev0rgZRkvujh1UfwzdxbUqiblG28pjD4Q-0ZlvBCySKWH-SvUuYPz49vDPTfuCzdxFebkx2eQxqJ2HjhyUGR~5D7s7Iq~udvEkeH0HklLdIMlsSadRYYb8VL5jG45Xy3sYUiZgjufTO5ob9bx526Z8JdV-6KiJkcQ__"
//   ],
//   videos: []
//  },
//  {
//   id: 42,
//   type: 'apartment',
//   name: "شقة في صفاكوي",
//   price: 20000,
//   location: "Safaköy, Istanbul",
//   coordinates: { lat: 41.006111, lng: 28.807389 },
//   googleMapsUrl: "https://maps.google.com/?q=41.006111,28.807389",
//   description: "شقة للايجار 2+1 في صفاكوي",
//   apartment: {
//     type: "2+1",
//     floor: 2,
//     unit: 2
//   },
//   deposit: {
//     required: true,
//     amount: 20000,
//     description: "تامين شهر"
//   },
//   commission: {
//     type: 'fixed',
//     value: 20000,
//     description: "عمولة شهر"
//   },
//   landmarks: {
//     "مطار اتاتورك": "قريب"
//   },
//   transportation: {
//     metro: "M9 - قريب"
//   },
//   images: [],
//   videos: [
//     {
//       url: "https://media-hosting.imagekit.io//fa9c00450b294767/WhatsApp%20Video%202025-01-20%20at%2014.39.46_d4ac2001.mp4?Expires=1832335212&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=xvSPwyFVfN2TfE0DdiXPWsG8dVc00ZYz4sSJvnf~0dED1gBFOSgB8zN4QC0eJE8xNWg-XOcaW4dNA0ByO3cWHVHGvnlrg6b5ZjX7woZd2pa0RHiKpBj4dygb8GGmwqNHNTtfTYX9WYZ6HMa0Jfad5yaEB3yqKuJG9p4COXdluHVP7yJzU9kKWeyAEVp~u33lmUaBOJxYETM7~nE-rhhUYauIojDUA962-LwnjSuN~2~RbylUQY1VRWSov2uxT8ULzeJ7ytJuwdA7GMCekQ2ruuqmDYSWaunHCDWI0I4vaKzhS4sFrm1G2lm381RIH-NwXodmR8qM7y0Cj7NOv6eCoA__"
//     }
//   ]
//  },
//  {
//   id: 43,
//   type: 'room',
//   rooms: [
//     {
//       type: 'individual',
//       price: 7000,
//       deposit: 1000
//     },
//     {
//       type: 'shared',
//       bedsInRoom: 2,
//       price: 4000,
//       deposit: 1000,
//       description: "لوكس - يشترط بنتين خوات او صديقات"
//     }
//   ],
//   preference: 'female',
//   location: "Avcılar, Istanbul",
//   coordinates: { lat: 40.978306, lng: 28.720444 },
//   googleMapsUrl: "https://maps.google.com/?q=40.978306,28.720444",
//   description: "غرف في سكن طالبات هادئ في افجيلار قرب الحديقة البيضاء",
//   apartment: {
//     type: "3+1",
//     maxOccupants: 4
//   },
//   utilities: {
//     included: false,
//     description: "غير شامل الفواتير"
//   },
//   commission: {
//     type: 'fixed',
//     value: 1000,
//     description: "للشخص"
//   },
//   landmarks: {
//     "بازار الاربعاء": "اول",
//     "الحديقة البيضاء": "قريب"
//   },
//   image: "https://media-hosting.imagekit.io//06f062b14aa7462b/WhatsApp%20Image%202025-01-20%20at%2014.43.25_09254fb9.jpg?Expires=1832335373&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=a3SpqC2tZj8Ty3A4cxxk493TYJ0V-2Sfx0nXXxeHaEnyUcOQHg6kGG8a7EUEwnb1VCvkTEyPzitqIIYkLk6ERMO4vvON3iALtn3ssgyNFBGr4eIh5skTFAkrl9KU-EW-pY02ztBKTB5WzkVslW5zPqWKMopthgNdQQIlcpsjdTJoKA9uepUjjt~gFv4fM4hlgOPAsFK3kVHAd8LAMgaq3Tb5sdTnCM2FDt9-YXRdBJDUBZ3gVWtZtcMuXqqFUg9bh4V0guwRI-w2HObyBL7TWuB7WHurS2D9mkEaAuy~U4a90rGGrHKqpr5NJCwVtKGgmlIcOSoIN5OQxiXlMg5Zbw__",
//   images: [
//     "https://media-hosting.imagekit.io//c2669538502747d4/WhatsApp%20Image%202025-01-20%20at%2014.43.25_ebc3a96a.jpg?Expires=1832335373&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=baVlyY2NVFnqChnXkhH5gm2Z~rJoBoM~Kza6MaNgId5cIq-iw1zN11asWKqd7VHO-L85tDP6PSFF0dlsgu8ywIWzGxT4IrbH3VQ0ENGwQHAM90rcDKHWgH1uMFlC4LddwIU2BWA1mfKuIGkZk3eG8dBhY49fIeYhG2iGRb8seZUuT6Eys85YDVK9n4bpDJbwFIG-sOEsfrsqp4VJC6HgBhkusvq6c5x0mgF6t~MVfwFLZW3FSCP0xqDGrMBekMs0zTfA55bLLS~mANbPnyOEOOHGVHBM4mcgOrSYPhRsD111K9EzwPsMwtDwl7isHyPZ2HdDIDZK2VGMsLpEInRXEg__",
//     "https://media-hosting.imagekit.io//657b4bcdf7f249e2/WhatsApp%20Image%202025-01-20%20at%2014.43.25_87804daf.jpg?Expires=1832335373&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=SyvFkkIrKNysJ8B5EXjFIL2rxCAUC9r0t~GqbTrRcu~XDtTQTHEnfmcyGBKpPdCAqBPymPUlODOJEbXKOhIiIimzXMGuCLsV1Lx23lqQ-t1q5J38aEqNJi~X1S56QKgorHG-5-QT~MpG7bFbVfSBKMu7ycRYSBjA-9yvvMSreA-5RpW359Acf4eoGPZG6uPO~xCogIZGkaVizpe2rHlyLZz0DlKozChtg1vbxljBKzrFlukabUZKfIg9GDnjyCM1GnSACk6kiR5uiQzEyAMVUu66N5nxGzoXkNjvRV2toGfQuzA1QvOXlUZUkTmQrLEPPRdv4EYdba3HIs5dBaz2ag__",
//     "https://media-hosting.imagekit.io//06f062b14aa7462b/WhatsApp%20Image%202025-01-20%20at%2014.43.25_09254fb9.jpg?Expires=1832335373&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=a3SpqC2tZj8Ty3A4cxxk493TYJ0V-2Sfx0nXXxeHaEnyUcOQHg6kGG8a7EUEwnb1VCvkTEyPzitqIIYkLk6ERMO4vvON3iALtn3ssgyNFBGr4eIh5skTFAkrl9KU-EW-pY02ztBKTB5WzkVslW5zPqWKMopthgNdQQIlcpsjdTJoKA9uepUjjt~gFv4fM4hlgOPAsFK3kVHAd8LAMgaq3Tb5sdTnCM2FDt9-YXRdBJDUBZ3gVWtZtcMuXqqFUg9bh4V0guwRI-w2HObyBL7TWuB7WHurS2D9mkEaAuy~U4a90rGGrHKqpr5NJCwVtKGgmlIcOSoIN5OQxiXlMg5Zbw__"
//   ],
//   videos: []
//  },
//  {
//   id: 44,
//   type: 'room',
//   name: "غرفة فردية في عمرانية",
//   price: 9500,
//   roomType: 'individual',
//   preference: 'female',
//   location: "Ümraniye, Istanbul",
//   description: "غرفة فردية للبنات في عمرانية",
//   deposit: {
//     required: false,
//     description: "بدون ديبوزت"
//   },
//   commission: {
//     required: false,
//     description: "بدون كميشن"  
//   },
//   nearbyUniversities: [
//     "Medipol University",
//     "Fenerbahçe University"
//   ],
//   image: "https://media-hosting.imagekit.io//f1a7ceafc36745a6/WhatsApp%20Image%202025-01-20%20at%2015.39.33_e87a7297.jpg?Expires=1832335863&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=sXw8xEUYLXxLZQmXI23tQ2NJvU7tFP-yxndnxNvF0UQB5BGO5rpe-UOM27W4qE3J8S51-MaG1ECSqOG9Mw9EOAvqgKtpmP~eg3QDPofO2diRjJuziIZ9Hi34U64xddwrQKd49Ed9Qnsj4yIYo1u4yF~ethegbcgeNz~l1CGKNwUqP4UIiudJSUzfAOoxwA2FqfnM5ozKfYnpMrp7S-xyTILm04s9EV0g5ntnvXgdT~t3npfOjvmJlDJMmlRojVPwtiMD~naJhpJ-e8FjDO4V1~qwvU1XoOlF42ke16lZw6gE4Tv2FCaJQHsUrj2uqVaoLfQlL~fKgBvRaz-WmIJFkw__",
//   images: [
//     "https://media-hosting.imagekit.io//f1a7ceafc36745a6/WhatsApp%20Image%202025-01-20%20at%2015.39.33_e87a7297.jpg?Expires=1832335863&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=sXw8xEUYLXxLZQmXI23tQ2NJvU7tFP-yxndnxNvF0UQB5BGO5rpe-UOM27W4qE3J8S51-MaG1ECSqOG9Mw9EOAvqgKtpmP~eg3QDPofO2diRjJuziIZ9Hi34U64xddwrQKd49Ed9Qnsj4yIYo1u4yF~ethegbcgeNz~l1CGKNwUqP4UIiudJSUzfAOoxwA2FqfnM5ozKfYnpMrp7S-xyTILm04s9EV0g5ntnvXgdT~t3npfOjvmJlDJMmlRojVPwtiMD~naJhpJ-e8FjDO4V1~qwvU1XoOlF42ke16lZw6gE4Tv2FCaJQHsUrj2uqVaoLfQlL~fKgBvRaz-WmIJFkw__"
//   ],
//   videos: []
//  }


]

export const findPropertyById = (id) => {
  // Convert id to number since URL params are strings
  const numId = parseInt(id, 10);
  return properties.find(property => property.id === numId);
};