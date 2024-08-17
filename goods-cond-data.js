const goodsData=[
    {
        condicioners:[
            // BERGEN
            {brandName:"Bergen BEI07FRD/BEO07FRD", 
                partNo: "0101040021-100445064"},
            {brandName:"Bergen BEI09FRD/BEO09FRD", 
                partNo: "0101040021-100445065"},
            {brandName:"Bergen BEI12FRD/BEO12FRD", 
                partNo: "0101040021-100445066"},
            {brandName:"Bergen BEI18FRD/BEO18FRD", 
                partNo: "0101040021-100445067"},
            {brandName:"Bergen BEI24FRD/BEO24FRD", 
                partNo: "0101040021-100445068"},
            // BERGEN

            // LEBERG
            // on/off
            {brandName:"Leberg FREYA 3.0 (on/off) LS-07FRA3/LU-07FRA3", 
                partNo: "0101040021-100445009"},
            {brandName:"Leberg FREYA 3.0 (on/off) LS-09FRA3/LU-09FRA3", 
                partNo: "0101040021-100445010"},
            {brandName:"Leberg FREYA 3.0 (on/off) LS-12FRA3/LU-12FRA3", 
                partNo: "0101040021-100445011"},
            {brandName:"Leberg FREYA 3.0 (on/off) LS-18FRA3/LU-18FRA3", 
                partNo: "0101040021-100445012"},
            {brandName:"Leberg FREYA 3.0 (on/off) LS-24FRA3/LU-24FRA3", 
                partNo: "0101040021-100445013"},
            // on/off
            // invertor
            {brandName:"Leberg Brannen (invertor) LS-09BRN/LU-09BRN", 
                partNo: "0101040021-100440762"},
            {brandName:"Leberg Brannen (invertor) LS-12BRN/LU-12BRN", 
                partNo: "0101040021-100440763"},
            {brandName:"Leberg Brannen (invertor) LS-18BRN/LU-18BRN", 
                partNo: "0101040021-100440764"},
            {brandName:"Leberg Brannen (invertor) LS-24BRN/LU-24BRN", 
                partNo: "0101040021-100440765"},

            {brandName:"Leberg LOKI 3.0 (invertor) LS/LU-12OLI3", 
                partNo: "0101040821-100438381",
                sale:"+"},
            {brandName:"Leberg LOKI 3.0 (invertor) LS/LU-12OLI3", 
                partNo: "0101040821-100438382",
                sale:"+"},
            {brandName:"Leberg Odin 3.0 (invertor) LS-12ODI3/LU-12ODI3", 
                partNo: "0101010821-100437598"},  

            {brandName:"Leberg Viking (invertor) LBS-VKG07UA2/LBU-VKG07UA2", 
                partNo: "0101040521-100438439"},
            {brandName:"Leberg Viking (invertor) LBS-VKG09UA2/LBU-VKG09UA2", 
                partNo: "0101040521-100438440"},
            {brandName:"Leberg Viking (invertor) LBS-VKG12UA/LBU-VKG12UA", 
                partNo: "0101010821-100434993"},
            {brandName:"Leberg Viking (invertor) LBS-VKG18UA2/LBU-VKG18UA2", 
                partNo: "0101040521-100439764"},
            {brandName:"Leberg Viking (invertor) LBS-VKG24UA2/LBU-VKG24UA2", 
                partNo: "0101040521-100439765"},

            // NC clima
            {brandName:"NC clima Birmingham ( -20С ) (invertor) NCI09EHBIw1eu/NCO09EHBIw1eu", 
                partNo: "0101040066-100445537"},
            {brandName:"NC clima Birmingham ( -20С ) (invertor) NCI12EHBIw1eu/NCO12EHBIw1eu", 
                partNo: "0101040066-100445538"},
            {brandName:"NC clima Birmingham ( -20С ) (invertor) NCI18EHBIw1eu/NCO18EHBIw1eu", 
                partNo: "0101040066-100445539"},
            {brandName:"NC clima Birmingham ( -20С ) (invertor) NCI24EHBIw1eu/NCO24EHBIw1eu", 
                partNo: "0101040066-100445540"},
            
            {brandName:"NC clima Liverpool ( -25С ) (invertor) NCI09EHLIw1eu/NCO09EHLIw1eu", 
                partNo: "0101040066-100445551"},
            {brandName:"NC clima Liverpool ( -25С ) (invertor) NCI12EHLIw1eu/NCO12EHLIw1eu", 
                partNo: "0101040066-100445552"},
            {brandName:"NC clima Liverpool ( -25С ) (invertor) NCI18EHLIw1eu/NCO18EHLIw1eu", 
                partNo: "0101040066-100445553"},
            {brandName:"NC clima Liverpool ( -25С ) (invertor) NCI24EHLIw1eu/NCO24EHLIw1eu", 
                partNo: "0101040066-100445554"},

            {brandName:"NC clima Manchester ( -15С ) (invertor) NCI07EHMIw1eu/NCO07EHMIw1eu", 
                partNo: "0101040066-100445523"},
            {brandName:"NC clima Manchester ( -15С ) (invertor) NCI09EHMIw1eu/NCO09EHMIw1eu", 
                partNo: "0101040066-100445524"},
            {brandName:"NC clima Manchester ( -15С ) (invertor) NCI12EHMIw1eu/NCO12EHMIw1eu", 
                partNo: "0101040066-100445525"},
            {brandName:"NC clima Manchester ( -15С ) (invertor) NCI18EHMIw1eu/NCO18EHMIw1eu", 
                partNo: "0101040066-100445526"},
            {brandName:"NC clima Manchester ( -15С ) (invertor) NCI24EHMIw1eu/NCO24EHMIw1eu", 
                partNo: "0101040066-100445527"},

            {brandName:"NC clima Stonehenge ( -30С ) (invertor) NCI09EHSIw1eu/NCO09EHSIw1eu", 
                partNo: "0101040001-100445370"},
            {brandName:"NC clima Stonehenge ( -30С ) (invertor) NCI12EHSIw1eu/NCO12EHSIw1eu", 
                partNo: "0101040001-100445371"},
            {brandName:"NC clima Stonehenge ( -30С ) (invertor) NCI18EHSIw1eu/NCO18EHSIw1eu", 
                partNo: "0101040001-100445372"},
            {brandName:"NC clima Stonehenge ( -30С ) (invertor) NCI24EHSIw1eu/NCO24EHSIw1eu", 
                partNo: "0101040001-100445373"},

            // NEOCLIMA

            {brandName:"Neoclima ALASKA 2.0 (-30C) (invertor) NS/NU-09AHTIw", 
                partNo: "0101010801-100430969",
                sale:"+"},
            {brandName:"Neoclima ALASKA 4.0 (-30C) (invertor) NS-09EHRIw2/NU-09EHRIw2", 
                partNo: "0101040801-100440108",},


            {brandName:"Neoclima ArtVogue (-15C) (invertor) NS-12EHVIws1/NU-12EHVI1", 
                partNo: "0101010801-100436358"},  
            {brandName:"Neoclima ArtVogue (-15C) (invertor) NS/NU-12AHVIws", 
                partNo: "0101010801-100425368"},  


            {brandName:"Neoclima Gulfstream (-23C) (invertor) NS-09EGSIw1eu/NU-09EGSIw1eu", 
                partNo: "0101040001-100444858"},  
            {brandName:"Neoclima Gulfstream (-23C) (invertor) NS-12EGSIw1eu/NU-12EGSIw1eu", 
                partNo: "0101040001-100444859"},  
            {brandName:"Neoclima Gulfstream (-23C) (invertor) NS-18EGSIw1eu/NU-18EGSIw1eu", 
                partNo: "0101040001-100444860"},  
            {brandName:"Neoclima Gulfstream (-23C) (invertor) NS-24EGSIw1eu/NU-24EGSIw1eu", 
                partNo: "0101040001-100444861"},  



            {brandName:"Neoclima SKYCOLD 2,0 (-20/-25 C) (invertor) NS-09EHBIw1/NU-09EHBIw1", 
                partNo: "0101010801-100439546"},  
            {brandName:"Neoclima SKYCOLD 2,0 (-20/-25 C) (invertor) NS-12EHBIw1/NU-12EHBIw1", 
                partNo: "0101010801-100439549"},  
            {brandName:"Neoclima SKYCOLD 2,0 (-20/-25 C) (invertor) NS-18EHBIw1/NU-18EHBIw1", 
                partNo: "0101010801-100439551"},  
            {brandName:"Neoclima SKYCOLD 2,0 (-20/-25 C) (invertor) NS-24EHBIw1/NU-24EHBIw1", 
                partNo: "0101010801-100439553"},  




            {brandName:"Neoclima Therminator 3.2 (-15C) (invertor) NS-07EHXIw1eu/NU-07EHXIw1eu", 
                partNo: "0101040001-100441039"},  
            {brandName:"Neoclima Therminator 3.2 (-15C) (invertor) NS-09EHXIw1eu/NU-09EHXIw1eu", 
                partNo: "0101040001-100441040"},  
            {brandName:"Neoclima Therminator 3.2 (-15C) (invertor) NS-12EHXIw1eu/NU-12EHXIw1eu", 
                partNo: "0101040001-100441041"},  
            {brandName:"Neoclima Therminator 3.2 (-15C) (invertor) NS-18EHXIw1eu/NU-18EHXIw1eu", 
                partNo: "0101040001-100441042"},  
            {brandName:"Neoclima Therminator 3.2 (-15C) (invertor) NS-24EHXIw1eu/NU-24EHXIw1eu", 
                partNo: "0101040001-100441043"},  


            {brandName:"Neoclima U-Mate (- 23C) (invertor) NS/NU-09EUMIw3", 
                partNo: "0101010801-100435163"},   



           {brandName:"Neoclima YETI (-22C) (invertor) NS/NU-09EHZIw", 
                partNo: "0101010801-100429696",
                sale:"+"},   

            // NEOCLIMA

            //  Panasonic
            {brandName:"Panasonic Compact (invertor) CS-TZ20TKEW-1/CU-TZ20TKEW-1", 
                partNo: "0101010802-100430090",
                sale:"+"},
            {brandName:"Panasonic Compact (invertor) CS-TZ25TKEW/CU-TZ25TKEW", 
                partNo: "0101010802-100426030",
                sale:"+"},
            {brandName:"Panasonic Compact (invertor) CS-TZ50TKEW/CU-TZ50TKEW", 
                partNo: "0101010802-100426033",
                sale:"+"},


            {brandName:"Panasonic Deluxe (invertor) CS/CU-E24RKD", 
                partNo: "0101010802-100419032"},


            {brandName:"Panasonic Flagship Silver (invertor) CS-XZ20TKEW/CU-XZ20TKEW", 
                partNo: "0101010802-100426019"},


            {brandName:"Panasonic Nordic (-35C) (invertor) CS-HZ35XKE/CU-HZ35XKE", 
                partNo: "0101040802-100439938"},

            {brandName:"Panasonic Server (-25C) (invertor) CS-Z25YKEA/CU-Z25YKEA", 
                partNo: "0101040802-100440618"},
            {brandName:"Panasonic Server (-25C) (invertor) CS-Z35YKEA/CU-Z35YKEA", 
                partNo: "0101040802-100440628"},
            {brandName:"Panasonic Server (-25C) (invertor) CS-Z42YKEA/CU-Z42YKEA", 
                partNo: "0101040502-100440629"},
            {brandName:"Panasonic Server (-25C) (invertor) CS-Z50YKEA/CU-Z50YKEA", 
                partNo: "0101040502-100440630"},
            //  Panasonic

            //  TOSHIBA
            {brandName:"Toshiba Haori (invertor) RAS-10N4KVRG-UA/RAS-10N4AVRG-UA", 
                partNo: "0101040804-100438337"},
            {brandName:"Toshiba Haori (invertor) RAS-13N4KVRG-UA/RAS-13N4AVRG-UA", 
                partNo: "0101040804-100438338"},
            {brandName:"Toshiba Haori (invertor) RAS-16N4KVRG-UA/RAS-16N4AVRG-UA", 
                partNo: "0101040804-100438339"},
            {brandName:"Toshiba Haori (invertor) RAS-B16N4KVRG-E/RAS-16J2AVSG-E1", 
                partNo: "0101040004-100445194"},



            {brandName:"Toshiba Seiya B2KVG (invertor) RAS-B07B2KVG-E/RAS-07B2AVG-E", 
                partNo: "0101040004-100445284"},
            {brandName:"Toshiba Seiya B2KVG (invertor) RAS-B10B2KVG-E/RAS-10B2AVG-E", 
                partNo: "0101040004-100445285"},
            {brandName:"Toshiba Seiya B2KVG (invertor) RAS-B13B2KVG-E/RAS-13B2AVG-E", 
                partNo: "0101040004-100445286"},
            {brandName:"Toshiba Seiya B2KVG (invertor) RAS-B13B2KVG-E1/RAS-13B2AVG-E", 
                partNo: "0101040004-100445290"},
            {brandName:"Toshiba Seiya B2KVG (invertor) RAS-B16B2KVG-E/RAS-16B2AVG-E", 
                partNo: "0101040004-100445287"},
            {brandName:"Toshiba Seiya B2KVG (invertor) RAS-B18B2KVG-E/RAS-18B2AVG-E", 
                partNo: "0101040004-100445288"},
            {brandName:"Toshiba Seiya B2KVG (invertor) RAS-B24B2KVG-E/RAS-24B2AVG-E", 
                partNo: "0101040004-100445289"},



            {brandName:"Toshiba Seiya TKVG UA (invertor) RAS- B07TKVG-UA/RAS-07TAVG-UA", 
                partNo: "0101010804-100432562"},
            {brandName:"Toshiba Seiya TKVG UA (invertor) RAS- B10TKVG-UA/RAS-10TAVG-UA", 
                partNo: "0101010804-100432569"},
            {brandName:"Toshiba Seiya TKVG UA (invertor) RAS- B13TKVG-UA/RAS-13TAVG-UA", 
                partNo: "0101010804-100432570"},
            {brandName:"Toshiba Seiya TKVG UA (invertor) RAS- B16TKVG-UA/RAS-16TAVG-UA", 
                partNo: "0101010804-100432571"},
            {brandName:"Toshiba Seiya TKVG UA (invertor) RAS-18TKVG-UA/RAS-18TAVG-UA", 
                partNo: "0101010804-100433109"},
            {brandName:"Toshiba Seiya TKVG UA (invertor) RAS-24TKVG-UA/RAS-24TAVG-UA", 
                partNo: "0101010804-100433110"},



            {brandName:"Toshiba Shorai Edge (invertor) RAS-07J2KVSG-UA/RAS-07J2AVSG-UA", 
                partNo: "0101040804-100438353"},
            {brandName:"Toshiba Shorai Edge (invertor) RAS-10J2KVSG-UA/RAS-10J2AVSG-UA", 
                partNo: "0101040804-100438354"},
            {brandName:"Toshiba Shorai Edge (invertor) RAS-13J2KVSG-UA/RAS-13J2AVSG-UA", 
                partNo: "0101040804-100438355"},
            {brandName:"Toshiba Shorai Edge (invertor) RAS-18J2KVSG-UA/RAS-18J2AVSG-UA", 
                partNo: "0101040804-100438357"},
            {brandName:"Toshiba Shorai Edge (invertor) RAS-22J2KVSG-UA/RAS-22J2AVSG-UA", 
                partNo: "0101040804-100438358"},



            {brandName:"Toshiba Shorai Edge Blaсk (invertor) RAS-B10G3KVSGB-E/RAS-10J2AVSG-E1", 
                partNo: "0101040004-100445291"},
            {brandName:"Toshiba Shorai Edge Blaсk (invertor) RAS-B13G3KVSGB-E/RAS-13J2AVSG-E1", 
                partNo: "0101040004-100445293"},
            {brandName:"Toshiba Shorai Edge Blaсk (invertor) RAS-B18G3KVSGB-E/RAS-18J2AVSG-E1", 
                partNo: "0101040004-100445295"},
            //  TOSHIBA

            //  Hyundai
            {brandName:"Hyundai Mobile (On/Off) HPAC09UACO", 
                partNo: "0101170007-100443807"},
            {brandName:"Hyundai Mobile (On/Off) HPAC12UACH", 
                partNo: "0101170007-100443808"},
            //  Hyundai

            // Accessories
            {brandName:"Neoclima Module NWF-01", 
                partNo: "0101070501-100439345"},
            {brandName:"Neoclima Module NWF-02", 
                partNo: "0101070501-100439346"},
            {brandName:"Panasonic CZ-RCC5 комплект кабелів CN-CNT ", 
                partNo: "0101070502-100440632"},
            {brandName:"Panasonic Модуль керування Panasonic CZ-TACG1", 
                partNo: "0101010002-100432925"},
            // Accessories
        ]
    }
]