async function get() {
    let data
    //These is just a demostration, the key would be hidden if the I uploaded it globaly, don't steal my key :(
    await fetch('https://api.ipregistry.co/?key=pvg3737yum75lhv1')
    .then(res => res.json())
    .then(d => data = d)
    document.querySelector('#country').innerText = data.location.country.name
    console.log(data)
    let country
    for (i=0;i<c.length;i++) {
        if (c[i].Country.Name==data.location.country.name) country = c[i]
    }
    console.log(country)
    document.querySelector('#policephone').innerText = country.Police.All[0]
    document.querySelector('#policephone').setAttribute('href', `tel:${country.Police.All[0]}`)
    document.querySelector('#firephone').innerText = country.Fire.All[0]
    document.querySelector('#firephone').setAttribute('href', `tel:${country.Fire.All[0]}`)
    document.querySelector('#hospitalphone').innerText = country.Ambulance.All[0]
    document.querySelector('#hospitalphone').setAttribute('href', `tel:${country.Ambulance.All[0]}`)
    document.querySelector('#flag').src = data.location.country.flag.twemoji
}

document.querySelector('#buttonoutline').addEventListener('click', get)
document.querySelector('#buttoninline').addEventListener('click', get)

const c = [
    {
      "Country": {
        "Name": "Afghanistan",
        "ISOCode": "AF",
        "ISONumeric": "4"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "119"
        ]
      },
      "Police": {
        "All": [
          "119"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Åland Islands",
        "ISOCode": "AX",
        "ISONumeric": "248"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Albania",
        "ISOCode": "AL",
        "ISONumeric": "8"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Algeria",
        "ISOCode": "DZ",
        "ISONumeric": "12"
      },
      "Ambulance": {
        "All": [
          "14"
        ]
      },
      "Fire": {
        "All": [
          "14"
        ]
      },
      "Police": {
        "All": [
          "18"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "American Samoa",
        "ISOCode": "AS",
        "ISONumeric": "16"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          "911"
        ]
      }
    },
    {
      "Country": {
        "Name": "Andorra",
        "ISOCode": "AD",
        "ISONumeric": "20"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Angola",
        "ISOCode": "AO",
        "ISONumeric": "24"
      },
      "Ambulance": {
        "All": [
          "69"
        ]
      },
      "Fire": {
        "All": [
          "69"
        ]
      },
      "Police": {
        "All": [
          "69"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Anguilla",
        "ISOCode": "AI",
        "ISONumeric": "660"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Antarctica",
        "ISOCode": "AQ",
        "ISONumeric": "10"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Antigua and Barbuda",
        "ISOCode": "AG",
        "ISONumeric": "28"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          "999",
          "911"
        ]
      }
    },
    {
      "Country": {
        "Name": "Argentina",
        "ISOCode": "AR",
        "ISONumeric": "32"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Armenia",
        "ISOCode": "AM",
        "ISONumeric": "51"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          "911"
        ]
      }
    },
    {
      "Country": {
        "Name": "Aruba",
        "ISOCode": "AW",
        "ISONumeric": "533"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          "911"
        ]
      }
    },
    {
      "Country": {
        "Name": "Australia",
        "ISOCode": "AU",
        "ISONumeric": "36"
      },
      "Ambulance": {
        "All": [
          "000"
        ]
      },
      "Fire": {
        "All": [
          "000"
        ]
      },
      "Police": {
        "All": [
          "000"
        ]
      },
      "Dispatch": {
        "Fixed": [
          "000"
        ],
        "GSM": [
          "112"
        ]
      }
    },
    {
      "Country": {
        "Name": "Austria",
        "ISOCode": "AT",
        "ISONumeric": "40"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Azerbaijan",
        "ISOCode": "AZ",
        "ISONumeric": "31"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Bahamas",
        "ISOCode": "BS",
        "ISONumeric": "44"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          "911"
        ]
      }
    },
    {
      "Country": {
        "Name": "Bahrain",
        "ISOCode": "BH",
        "ISONumeric": "48"
      },
      "Ambulance": {
        "All": [
          "999"
        ]
      },
      "Fire": {
        "All": [
          "999"
        ]
      },
      "Police": {
        "All": [
          "999"
        ]
      },
      "Dispatch": {
        "All": [
          "999"
        ]
      }
    },
    {
      "Country": {
        "Name": "Bangladesh",
        "ISOCode": "BD",
        "ISONumeric": "50"
      },
      "Ambulance": {
        "All": [
          "999"
        ]
      },
      "Fire": {
        "All": [
          "999"
        ]
      },
      "Police": {
        "All": [
          "999"
        ]
      },
      "Dispatch": {
        "All": [
          "999"
        ]
      }
    },
    {
      "Country": {
        "Name": "Barbados",
        "ISOCode": "BB",
        "ISONumeric": "52"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
        ]
      }
    },
    {
      "Country": {
        "Name": "Belarus",
        "ISOCode": "BY",
        "ISONumeric": "112"
      },
      "Ambulance": {
        "All": [
          "103"
        ]
      },
      "Fire": {
        "All": [
          "101"
        ]
      },
      "Police": {
        "All": [
          "102"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Belgium",
        "ISOCode": "BE",
        "ISONumeric": "56"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Belize",
        "ISOCode": "BZ",
        "ISONumeric": "84"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          "911"
        ]
      }
    },
    {
      "Country": {
        "Name": "Benin",
        "ISOCode": "BJ",
        "ISONumeric": "204"
      },
      "Ambulance": {
        "All": [
          "118"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "117"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Bermuda",
        "ISOCode": "BM",
        "ISONumeric": "60"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          "911"
        ]
      }
    },
    {
      "Country": {
        "Name": "Bhutan",
        "ISOCode": "BT",
        "ISONumeric": "64"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "110"
        ]
      },
      "Police": {
        "All": [
          "113"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Bolivia, Plurinational State of",
        "ISOCode": "BO",
        "ISONumeric": "68"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          "911"
        ]
      }
    },
    {
      "Country": {
        "Name": "Bonaire, Sint Eustatius and Saba",
        "ISOCode": "BQ",
        "ISONumeric": "535"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          "911"
        ]
      }
    },
    {
      "Country": {
        "Name": "Bosnia and Herzegovina",
        "ISOCode": "BA",
        "ISONumeric": "70"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Botswana",
        "ISOCode": "BW",
        "ISONumeric": "72"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          "997",
          " 911"
        ]
      }
    },
    {
      "Country": {
        "Name": "Bouvet Island",
        "ISOCode": "BV",
        "ISONumeric": "74"
      },
      "Ambulance": {
        "All": [
          null
        ]
      },
      "Fire": {
        "All": [
          null
        ]
      },
      "Police": {
        "All": [
          null
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Brazil",
        "ISOCode": "BR",
        "ISONumeric": "76"
      },
      "Ambulance": {
        "All": [
          "192"
        ]
      },
      "Fire": {
        "All": [
          "193"
        ]
      },
      "Police": {
        "All": [
          "190"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "British Indian Ocean Territory",
        "ISOCode": "IO",
        "ISONumeric": "86"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Brunei Darussalam",
        "ISOCode": "BN",
        "ISONumeric": "96"
      },
      "Ambulance": {
        "All": [
          "991"
        ]
      },
      "Fire": {
        "All": [
          "995"
        ]
      },
      "Police": {
        "All": [
          "993"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Bulgaria",
        "ISOCode": "BG",
        "ISONumeric": "100"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Burkina Faso",
        "ISOCode": "BF",
        "ISONumeric": "854"
      },
      "Ambulance": {
        "All": [
          "18"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "17"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Burundi",
        "ISOCode": "BI",
        "ISONumeric": "108"
      },
      "Ambulance": {
        "All": [
          "118"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "117"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Cape Verde",
        "ISOCode": "CV",
        "ISONumeric": "132"
      },
      "Ambulance": {
        "All": [
          "131"
        ]
      },
      "Fire": {
        "All": [
          "130"
        ]
      },
      "Police": {
        "All": [
          "132"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Cambodia",
        "ISOCode": "KH",
        "ISONumeric": "116"
      },
      "Ambulance": {
        "All": [
          "119"
        ]
      },
      "Fire": {
        "All": [
          "118"
        ]
      },
      "Police": {
        "All": [
          "117"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Cameroon",
        "ISOCode": "CM",
        "ISONumeric": "120"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Canada",
        "ISOCode": "CA",
        "ISONumeric": "124"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          "911"
        ],
        "GSM": [
          "112"
        ]
      }
    },
    {
      "Country": {
        "Name": "Cayman Islands",
        "ISOCode": "KY",
        "ISONumeric": "136"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          "911"
        ]
      }
    },
    {
      "Country": {
        "Name": "Central African Republic",
        "ISOCode": "CF",
        "ISONumeric": "140"
      },
      "Ambulance": {
        "All": [
          "118"
        ]
      },
      "Fire": {
        "All": [
          "1220"
        ]
      },
      "Police": {
        "All": [
          "117"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Chad",
        "ISOCode": "TD",
        "ISONumeric": "148"
      },
      "Ambulance": {
        "All": [
          "18"
        ]
      },
      "Fire": {
        "All": [
          "2251-4242"
        ]
      },
      "Police": {
        "All": [
          "17"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Chile",
        "ISOCode": "CL",
        "ISONumeric": "152"
      },
      "Ambulance": {
        "All": [
          "131"
        ]
      },
      "Fire": {
        "All": [
          "132"
        ]
      },
      "Police": {
        "All": [
          "133"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "China",
        "ISOCode": "CN",
        "ISONumeric": "156"
      },
      "Ambulance": {
        "All": [
          "120"
        ]
      },
      "Fire": {
        "All": [
          "119"
        ]
      },
      "Police": {
        "All": [
          "110"
        ]
      },
      "Traffic": {
        "All": [
          "122"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Christmas Island",
        "ISOCode": "CX",
        "ISONumeric": "162"
      },
      "Ambulance": {
        "All": [
          "000"
        ]
      },
      "Fire": {
        "All": [
          "000"
        ]
      },
      "Police": {
        "All": [
          "000"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Cocos (Keeling) Islands",
        "ISOCode": "CC",
        "ISONumeric": "166"
      },
      "Ambulance": {
        "All": [
          "000"
        ]
      },
      "Fire": {
        "All": [
          "000"
        ]
      },
      "Police": {
        "All": [
          "000"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Colombia",
        "ISOCode": "CO",
        "ISONumeric": "170"
      },
      "Ambulance": {
        "All": [
          "123"
        ]
      },
      "Fire": {
        "All": [
          "123"
        ]
      },
      "Police": {
        "All": [
          "123"
        ]
      },
      "Dispatch": {
        "All": [
          "123"
        ]
      }
    },
    {
      "Country": {
        "Name": "Comoros",
        "ISOCode": "KM",
        "ISONumeric": "174"
      },
      "Ambulance": {
        "All": [
          "18"
        ]
      },
      "Fire": {
        "All": [
          "772-03-73"
        ]
      },
      "Police": {
        "All": [
          "17"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Congo",
        "ISOCode": "CG",
        "ISONumeric": "178"
      },
      "Ambulance": {
        "All": [
          "118"
        ]
      },
      "Fire": {
        "All": [
          null
        ]
      },
      "Police": {
        "All": [
          "117"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Congo, the Democratic Republic of the",
        "ISOCode": "CD",
        "ISONumeric": "180"
      },
      "Ambulance": {
        "All": [
          "118"
        ]
      },
      "Fire": {
        "All": [
          null
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Cook Islands",
        "ISOCode": "CK",
        "ISONumeric": "184"
      },
      "Ambulance": {
        "All": [
          "998"
        ]
      },
      "Fire": {
        "All": [
          "996"
        ]
      },
      "Police": {
        "All": [
          "999"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Costa Rica",
        "ISOCode": "CR",
        "ISONumeric": "188"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          "911"
        ]
      }
    },
    {
      "Country": {
        "Name": "Côte d'Ivoire",
        "ISOCode": "CI",
        "ISONumeric": "384"
      },
      "Ambulance": {
        "All": [
          null
        ]
      },
      "Fire": {
        "All": [
          "180"
        ]
      },
      "Police": {
        "All": [
          "110",
          "111",
          "170"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Croatia",
        "ISOCode": "HR",
        "ISONumeric": "191"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Cuba",
        "ISOCode": "CU",
        "ISONumeric": "192"
      },
      "Ambulance": {
        "All": [
          "104"
        ]
      },
      "Fire": {
        "All": [
          "105"
        ]
      },
      "Police": {
        "All": [
          "106"
        ]
      },
      "Dispatch": {
        "All": [
          "26811"
        ]
      }
    },
    {
      "Country": {
        "Name": "Curaçao",
        "ISOCode": "CW",
        "ISONumeric": "531"
      },
      "Ambulance": {
        "All": [
          "912"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Cyprus",
        "ISOCode": "CY",
        "ISONumeric": "196"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          "199"
        ]
      }
    },
    {
      "Country": {
        "Name": "Czech Republic",
        "ISOCode": "CZ",
        "ISONumeric": "203"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Denmark",
        "ISOCode": "DK",
        "ISONumeric": "208"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Djibouti",
        "ISOCode": "DJ",
        "ISONumeric": "262"
      },
      "Ambulance": {
        "All": [
          "18"
        ]
      },
      "Fire": {
        "All": [
          "19"
        ]
      },
      "Police": {
        "All": [
          "17"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Dominica",
        "ISOCode": "DM",
        "ISONumeric": "212"
      },
      "Ambulance": {
        "All": [
          "999"
        ]
      },
      "Fire": {
        "All": [
          "999"
        ]
      },
      "Police": {
        "All": [
          "999"
        ]
      },
      "Dispatch": {
        "All": [
          "999"
        ]
      }
    },
    {
      "Country": {
        "Name": "Dominican Republic",
        "ISOCode": "DO",
        "ISONumeric": "214"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          "911"
        ]
      }
    },
    {
      "Country": {
        "Name": "Ecuador",
        "ISOCode": "EC",
        "ISONumeric": "218"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Egypt",
        "ISOCode": "EG",
        "ISONumeric": "818"
      },
      "Ambulance": {
        "All": [
          "123"
        ]
      },
      "Fire": {
        "All": [
          "180"
        ]
      },
      "Police": {
        "All": [
          "122"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "El Salvador",
        "ISOCode": "SV",
        "ISONumeric": "222"
      },
      "Ambulance": {
        "All": [
          "132"
        ]
      },
      "Fire": {
        "All": [
          "913"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          "999"
        ]
      }
    },
    {
      "Country": {
        "Name": "Equatorial Guinea",
        "ISOCode": "GQ",
        "ISONumeric": "226"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "115"
        ]
      },
      "Police": {
        "All": [
          "114"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Eritrea",
        "ISOCode": "ER",
        "ISONumeric": "232"
      },
      "Ambulance": {
        "All": [
          "116"
        ]
      },
      "Fire": {
        "All": [
          "114"
        ]
      },
      "Police": {
        "All": [
          "113"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Estonia",
        "ISOCode": "EE",
        "ISONumeric": "233"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Ethiopia",
        "ISOCode": "ET",
        "ISONumeric": "231"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Falkland Islands (Malvinas)",
        "ISOCode": "FK",
        "ISONumeric": "238"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          "999"
        ]
      }
    },
    {
      "Country": {
        "Name": "Faroe Islands",
        "ISOCode": "FO",
        "ISONumeric": "234"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Fiji",
        "ISOCode": "FJ",
        "ISONumeric": "242"
      },
      "Ambulance": {
        "All": [
          "000"
        ]
      },
      "Fire": {
        "All": [
          "000"
        ]
      },
      "Police": {
        "All": [
          "000"
        ]
      },
      "Dispatch": {
        "All": [
          "911"
        ]
      }
    },
    {
      "Country": {
        "Name": "Finland",
        "ISOCode": "FI",
        "ISONumeric": "246"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "France",
        "ISOCode": "FR",
        "ISONumeric": "250"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "French Guiana",
        "ISOCode": "GF",
        "ISONumeric": "254"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          "112"
        ]
      }
    },
    {
      "Country": {
        "Name": "French Polynesia",
        "ISOCode": "PF",
        "ISONumeric": "258"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "French Southern Territories",
        "ISOCode": "TF",
        "ISONumeric": "260"
      },
      "Ambulance": {
        "All": [
          "No Permanent Population"
        ]
      },
      "Fire": {
        "All": [
          null
        ]
      },
      "Police": {
        "All": [
          null
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Gabon",
        "ISOCode": "GA",
        "ISONumeric": "266"
      },
      "Ambulance": {
        "All": [
          "18"
        ]
      },
      "Fire": {
        "All": [
          "1300"
        ]
      },
      "Police": {
        "All": [
          "1730"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Gambia",
        "ISOCode": "GM",
        "ISONumeric": "270"
      },
      "Ambulance": {
        "All": [
          "118"
        ]
      },
      "Fire": {
        "All": [
          "116"
        ]
      },
      "Police": {
        "All": [
          "117"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Georgia",
        "ISOCode": "GE",
        "ISONumeric": "268"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Germany",
        "ISOCode": "DE",
        "ISONumeric": "276"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Ghana",
        "ISOCode": "GH",
        "ISONumeric": "288"
      },
      "Ambulance": {
        "All": [
          "999"
        ]
      },
      "Fire": {
        "All": [
          "999"
        ]
      },
      "Police": {
        "All": [
          "999"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Gibraltar",
        "ISOCode": "GI",
        "ISONumeric": "292"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          "999"
        ]
      }
    },
    {
      "Country": {
        "Name": "Greece",
        "ISOCode": "GR",
        "ISONumeric": "300"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Greenland",
        "ISOCode": "GL",
        "ISONumeric": "304"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Grenada",
        "ISOCode": "GD",
        "ISONumeric": "308"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Guadeloupe",
        "ISOCode": "GP",
        "ISONumeric": "312"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Guam",
        "ISOCode": "GU",
        "ISONumeric": "316"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          "911"
        ]
      }
    },
    {
      "Country": {
        "Name": "Guatemala",
        "ISOCode": "GT",
        "ISONumeric": "320"
      },
      "Ambulance": {
        "All": [
          "128"
        ]
      },
      "Fire": {
        "All": [
          "122"
        ]
      },
      "Police": {
        "All": [
          "110"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Guernsey",
        "ISOCode": "GG",
        "ISONumeric": "831"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Guinea",
        "ISOCode": "GN",
        "ISONumeric": "324"
      },
      "Ambulance": {
        "All": [
          "110"
        ]
      },
      "Fire": {
        "All": [
          "111"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Guinea-Bissau",
        "ISOCode": "GW",
        "ISONumeric": "624"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Guyana",
        "ISOCode": "GY",
        "ISONumeric": "328"
      },
      "Ambulance": {
        "All": [
          "999"
        ]
      },
      "Fire": {
        "All": [
          "999"
        ]
      },
      "Police": {
        "All": [
          "999"
        ]
      },
      "Dispatch": {
        "All": [
          "999"
        ]
      }
    },
    {
      "Country": {
        "Name": "Haiti",
        "ISOCode": "HT",
        "ISONumeric": "332"
      },
      "Ambulance": {
        "All": [
          "115"
        ]
      },
      "Fire": {
        "All": [
          "116"
        ]
      },
      "Police": {
        "All": [
          "114"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Heard Island and McDonald Islands",
        "ISOCode": "HM",
        "ISONumeric": "334"
      },
      "Ambulance": {
        "All": [
          null
        ]
      },
      "Fire": {
        "All": [
          null
        ]
      },
      "Police": {
        "All": [
          null
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Vatican",
        "ISOCode": "VA",
        "ISONumeric": "336"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Honduras",
        "ISOCode": "HN",
        "ISONumeric": "340"
      },
      "Ambulance": {
        "All": [
          "195",
          " 195"
        ]
      },
      "Fire": {
        "All": [
          "198"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Hong Kong",
        "ISOCode": "HK",
        "ISONumeric": "344"
      },
      "Ambulance": {
        "All": [
          "999"
        ]
      },
      "Fire": {
        "All": [
          "999"
        ]
      },
      "Police": {
        "All": [
          "999"
        ]
      },
      "Dispatch": {
        "All": [
          "999"
        ],
        "GSM": [
          "112"
        ]
      }
    },
    {
      "Country": {
        "Name": "Hungary",
        "ISOCode": "HU",
        "ISONumeric": "348"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Iceland",
        "ISOCode": "IS",
        "ISONumeric": "352"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "India",
        "ISOCode": "IN",
        "ISONumeric": "356"
      },
      "Ambulance": {
        "All": [
          "102"
        ]
      },
      "Fire": {
        "All": [
          "101"
        ]
      },
      "Police": {
        "All": [
          "100"
        ]
      },
      "Traffic": {
        "All": [
          "103"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Indonesia",
        "ISOCode": "ID",
        "ISONumeric": "360"
      },
      "Ambulance": {
        "All": [
          "113"
        ]
      },
      "Fire": {
        "All": [
          "118"
        ]
      },
      "Police": {
        "All": [
          "110"
        ],
        "GSM": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Iran, Islamic Republic of",
        "ISOCode": "IR",
        "ISONumeric": "364"
      },
      "Ambulance": {
        "All": [
          "125"
        ]
      },
      "Fire": {
        "All": [
          "115"
        ]
      },
      "Police": {
        "All": [
          "110"
        ],
        "GSM": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Iraq",
        "ISOCode": "IQ",
        "ISONumeric": "368"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Ireland",
        "ISOCode": "IE",
        "ISONumeric": "372"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          "999"
        ]
      }
    },
    {
      "Country": {
        "Name": "Isle of Man",
        "ISOCode": "IM",
        "ISONumeric": "833"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          "999"
        ]
      }
    },
    {
      "Country": {
        "Name": "Israel",
        "ISOCode": "IL",
        "ISONumeric": "376"
      },
      "Ambulance": {
        "All": [
          "102"
        ]
      },
      "Fire": {
        "All": [
          "101"
        ]
      },
      "Police": {
        "All": [
          "100"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Italy",
        "ISOCode": "IT",
        "ISONumeric": "380"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Jamaica",
        "ISOCode": "JM",
        "ISONumeric": "388"
      },
      "Ambulance": {
        "All": [
          "110"
        ]
      },
      "Fire": {
        "All": [
          "110"
        ]
      },
      "Police": {
        "All": [
          "119"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Japan",
        "ISOCode": "JP",
        "ISONumeric": "392"
      },
      "Ambulance": {
        "All": [
          "119"
        ]
      },
      "Fire": {
        "All": [
          "119"
        ]
      },
      "Police": {
        "All": [
          "110"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Jersey",
        "ISOCode": "JE",
        "ISONumeric": "832"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          "999"
        ]
      }
    },
    {
      "Country": {
        "Name": "Jordan",
        "ISOCode": "JO",
        "ISONumeric": "400"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Traffic": {
        "All": [
          "190"
        ]
      },
      "Dispatch": {
        "All": [
          "911"
        ]
      }
    },
    {
      "Country": {
        "Name": "Kazakhstan",
        "ISOCode": "KZ",
        "ISONumeric": "398"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Kenya",
        "ISOCode": "KE",
        "ISONumeric": "404"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          "999"
        ]
      }
    },
    {
      "Country": {
        "Name": "Kiribati",
        "ISOCode": "KI",
        "ISONumeric": "296"
      },
      "Ambulance": {
        "All": [
          "999"
        ]
      },
      "Fire": {
        "All": [
          "999"
        ]
      },
      "Police": {
        "All": [
          "999"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Korea, Democratic People's Republic of",
        "ISOCode": "KP",
        "ISONumeric": "408"
      },
      "Ambulance": {
        "All": [
          "119"
        ]
      },
      "Fire": {
        "All": [
          "119"
        ]
      },
      "Police": {
        "All": [
          "119"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Korea, Republic of",
        "ISOCode": "KR",
        "ISONumeric": "410"
      },
      "Ambulance": {
        "All": [
          "119"
        ]
      },
      "Fire": {
        "All": [
          "119"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Kuwait",
        "ISOCode": "KW",
        "ISONumeric": "414"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Kyrgyzstan",
        "ISOCode": "KG",
        "ISONumeric": "417"
      },
      "Ambulance": {
        "All": [
          "101"
        ]
      },
      "Fire": {
        "All": [
          "103"
        ]
      },
      "Police": {
        "All": [
          "102"
        ]
      },
      "Dispatch": {
        "All": [
          "103"
        ]
      }
    },
    {
      "Country": {
        "Name": "Lao People's Democratic Republic",
        "ISOCode": "LA",
        "ISONumeric": "418"
      },
      "Ambulance": {
        "All": [
          "190"
        ]
      },
      "Fire": {
        "All": [
          "195"
        ]
      },
      "Police": {
        "All": [
          "191"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Latvia",
        "ISOCode": "LV",
        "ISONumeric": "428"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Lebanon",
        "ISOCode": "LB",
        "ISONumeric": "422"
      },
      "Ambulance": {
        "All": [
          "175"
        ]
      },
      "Fire": {
        "All": [
          "140"
        ]
      },
      "Police": {
        "All": [
          "999"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Lesotho",
        "ISOCode": "LS",
        "ISONumeric": "426"
      },
      "Ambulance": {
        "All": [
          "122"
        ]
      },
      "Fire": {
        "All": [
          "121"
        ]
      },
      "Police": {
        "All": [
          "123",
          " 123"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Liberia",
        "ISOCode": "LR",
        "ISONumeric": "430"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "GSM": [
          "911"
        ]
      }
    },
    {
      "Country": {
        "Name": "Libya",
        "ISOCode": "LY",
        "ISONumeric": "434"
      },
      "Ambulance": {
        "All": [
          "1515"
        ]
      },
      "Fire": {
        "All": [
          "1515"
        ]
      },
      "Police": {
        "All": [
          "1515"
        ]
      },
      "Dispatch": {
        "All": [
          "193"
        ]
      }
    },
    {
      "Country": {
        "Name": "Liechtenstein",
        "ISOCode": "LI",
        "ISONumeric": "438"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Lithuania",
        "ISOCode": "LT",
        "ISONumeric": "440"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Luxembourg",
        "ISOCode": "LU",
        "ISONumeric": "442"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Macau",
        "ISOCode": "MO",
        "ISONumeric": "446"
      },
      "Ambulance": {
        "All": [
          "999"
        ]
      },
      "Fire": {
        "All": [
          "999"
        ]
      },
      "Police": {
        "All": [
          "999"
        ]
      },
      "Dispatch": {
        "All": [
          "999"
        ]
      }
    },
    {
      "Country": {
        "Name": "Macedonia, the former Yugoslav Republic of",
        "ISOCode": "MK",
        "ISONumeric": "807"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Madagascar",
        "ISOCode": "MG",
        "ISONumeric": "450"
      },
      "Ambulance": {
        "All": [
          "118"
        ]
      },
      "Fire": {
        "All": [
          "124"
        ]
      },
      "Police": {
        "All": [
          "117"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Malawi",
        "ISOCode": "MW",
        "ISONumeric": "454"
      },
      "Ambulance": {
        "All": [
          "999"
        ]
      },
      "Fire": {
        "All": [
          "998"
        ]
      },
      "Police": {
        "All": [
          "997"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Malaysia",
        "ISOCode": "MY",
        "ISONumeric": "458"
      },
      "Ambulance": {
        "All": [
          "999"
        ],
        "GSM": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "999"
        ]
      },
      "Police": {
        "All": [
          "999"
        ],
        "GSM": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Maldives",
        "ISOCode": "MV",
        "ISONumeric": "462"
      },
      "Ambulance": {
        "All": [
          "118"
        ]
      },
      "Fire": {
        "All": [
          "102"
        ]
      },
      "Police": {
        "All": [
          "119"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Mali",
        "ISOCode": "ML",
        "ISONumeric": "466"
      },
      "Ambulance": {
        "All": [
          "18"
        ]
      },
      "Fire": {
        "All": [
          "15"
        ]
      },
      "Police": {
        "All": [
          "17"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Malta",
        "ISOCode": "MT",
        "ISONumeric": "470"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Marshall Islands",
        "ISOCode": "MH",
        "ISONumeric": "584"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Martinique",
        "ISOCode": "MQ",
        "ISONumeric": "474"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Mauritania",
        "ISOCode": "MR",
        "ISONumeric": "478"
      },
      "Ambulance": {
        "All": [
          "118"
        ]
      },
      "Fire": {
        "All": [
          "101"
        ]
      },
      "Police": {
        "All": [
          "117"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Mauritius",
        "ISOCode": "MU",
        "ISONumeric": "480"
      },
      "Ambulance": {
        "All": [
          "115"
        ]
      },
      "Fire": {
        "All": [
          "114"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          "999"
        ]
      }
    },
    {
      "Country": {
        "Name": "Mayotte",
        "ISOCode": "YT",
        "ISONumeric": "175"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Mexico",
        "ISOCode": "MX",
        "ISONumeric": "484"
      },
      "Ambulance": {
        "All": [
          "066"
        ]
      },
      "Fire": {
        "All": [
          "066"
        ]
      },
      "Police": {
        "All": [
          "066"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Micronesia, Federated States of",
        "ISOCode": "FM",
        "ISONumeric": "583"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Moldova, Republic of",
        "ISOCode": "MD",
        "ISONumeric": "498"
      },
      "Ambulance": {
        "All": [
          "901"
        ]
      },
      "Fire": {
        "All": [
          "903"
        ]
      },
      "Police": {
        "All": [
          "902"
        ],
        "GSM": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Monaco",
        "ISOCode": "MC",
        "ISONumeric": "492"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Mongolia",
        "ISOCode": "MN",
        "ISONumeric": "496"
      },
      "Ambulance": {
        "All": [
          "105"
        ]
      },
      "Fire": {
        "All": [
          "105"
        ]
      },
      "Police": {
        "All": [
          "105"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Montenegro",
        "ISOCode": "ME",
        "ISONumeric": "499"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Montserrat",
        "ISOCode": "MS",
        "ISONumeric": "500"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Morocco",
        "ISOCode": "MA",
        "ISONumeric": "504"
      },
      "Ambulance": {
        "All": [
          "15"
        ]
      },
      "Fire": {
        "All": [
          "15"
        ]
      },
      "Police": {
        "All": [
          "19"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Mozambique",
        "ISOCode": "MZ",
        "ISONumeric": "508"
      },
      "Ambulance": {
        "All": [
          "198"
        ]
      },
      "Fire": {
        "All": [
          "117"
        ]
      },
      "Police": {
        "All": [
          "119"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Myanmar",
        "ISOCode": "MM",
        "ISONumeric": "104"
      },
      "Ambulance": {
        "All": [
          null
        ]
      },
      "Fire": {
        "All": [
          null
        ]
      },
      "Police": {
        "All": [
          null
        ]
      },
      "Dispatch": {
        "All": [
          "999"
        ]
      }
    },
    {
      "Country": {
        "Name": "Namibia",
        "ISOCode": "NA",
        "ISONumeric": "516"
      },
      "Ambulance": {
        "All": [
          null
        ]
      },
      "Fire": {
        "All": [
          null
        ]
      },
      "Police": {
        "All": [
          "10111"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Nauru",
        "ISOCode": "NR",
        "ISONumeric": "520"
      },
      "Ambulance": {
        "All": [
          "111"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "110"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Nepal",
        "ISOCode": "NP",
        "ISONumeric": "524"
      },
      "Ambulance": {
        "All": [
          "101"
        ]
      },
      "Fire": {
        "All": [
          "102"
        ]
      },
      "Police": {
        "All": [
          "100"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Netherlands",
        "ISOCode": "NL",
        "ISONumeric": "528"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "New Caledonia",
        "ISOCode": "NC",
        "ISONumeric": "540"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      },
      "NoData": true
    },
    {
      "Country": {
        "Name": "New Zealand",
        "ISOCode": "NZ",
        "ISONumeric": "554"
      },
      "Ambulance": {
        "All": [
          "111"
        ]
      },
      "Fire": {
        "All": [
          "111"
        ]
      },
      "Police": {
        "All": [
          "111"
        ]
      },
      "Dispatch": {
        "All": [
          "111"
        ]
      }
    },
    {
      "Country": {
        "Name": "Nicaragua",
        "ISOCode": "NI",
        "ISONumeric": "558"
      },
      "Ambulance": {
        "All": [
          "128"
        ]
      },
      "Fire": {
        "All": [
          "115",
          "115"
        ]
      },
      "Police": {
        "All": [
          "118"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Niger",
        "ISOCode": "NE",
        "ISONumeric": "562"
      },
      "Ambulance": {
        "All": [
          "18"
        ]
      },
      "Fire": {
        "All": [
          "15"
        ]
      },
      "Police": {
        "All": [
          "17"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Nigeria",
        "ISOCode": "NG",
        "ISONumeric": "566"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Niue",
        "ISOCode": "NU",
        "ISONumeric": "570"
      },
      "Ambulance": {
        "All": [
          null
        ]
      },
      "Fire": {
        "All": [
          null
        ]
      },
      "Police": {
        "All": [
          null
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Norfolk Island",
        "ISOCode": "NF",
        "ISONumeric": "574"
      },
      "Ambulance": {
        "All": [
          null
        ]
      },
      "Fire": {
        "All": [
          null
        ]
      },
      "Police": {
        "All": [
          null
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Northern Mariana Islands",
        "ISOCode": "MP",
        "ISONumeric": "580"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Norway",
        "ISOCode": "NO",
        "ISONumeric": "578"
      },
      "Ambulance": {
        "All": [
          "110"
        ]
      },
      "Fire": {
        "All": [
          "113"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Oman",
        "ISOCode": "OM",
        "ISONumeric": "512"
      },
      "Ambulance": {
        "All": [
          "999"
        ]
      },
      "Fire": {
        "All": [
          "999"
        ]
      },
      "Police": {
        "All": [
          "999"
        ]
      },
      "Dispatch": {
        "All": [
          "999"
        ]
      }
    },
    {
      "Country": {
        "Name": "Pakistan",
        "ISOCode": "PK",
        "ISONumeric": "586"
      },
      "Ambulance": {
        "All": [
          "16"
        ]
      },
      "Fire": {
        "All": [
          "115"
        ]
      },
      "Police": {
        "All": [
          "15"
        ]
      },
      "Dispatch": {
        "All": [
          "15"
        ]
      }
    },
    {
      "Country": {
        "Name": "Palau",
        "ISOCode": "PW",
        "ISONumeric": "585"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          "911"
        ]
      }
    },
    {
      "Country": {
        "Name": "Palestine, State of",
        "ISOCode": "PS",
        "ISONumeric": "275"
      },
      "Ambulance": {
        "All": [
          "101"
        ]
      },
      "Fire": {
        "All": [
          "101"
        ]
      },
      "Police": {
        "All": [
          "100"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Panama",
        "ISOCode": "PA",
        "ISONumeric": "591"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          "911"
        ]
      }
    },
    {
      "Country": {
        "Name": "Papua New Guinea",
        "ISOCode": "PG",
        "ISONumeric": "598"
      },
      "Ambulance": {
        "All": [
          "110"
        ]
      },
      "Fire": {
        "All": [
          "111"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Paraguay",
        "ISOCode": "PY",
        "ISONumeric": "600"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          "00"
        ]
      }
    },
    {
      "Country": {
        "Name": "Peru",
        "ISOCode": "PE",
        "ISONumeric": "604"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          "011",
          " 5114"
        ]
      }
    },
    {
      "Country": {
        "Name": "Philippines",
        "ISOCode": "PH",
        "ISONumeric": "608"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          "116",
          "117"
        ]
      }
    },
    {
      "Country": {
        "Name": "Pitcairn",
        "ISOCode": "PN",
        "ISONumeric": "612"
      },
      "Ambulance": {
        "All": [
          null
        ]
      },
      "Fire": {
        "All": [
          null
        ]
      },
      "Police": {
        "All": [
          null
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Poland",
        "ISOCode": "PL",
        "ISONumeric": "616"
      },
      "Ambulance": {
        "All": [
          "998"
        ]
      },
      "Fire": {
        "All": [
          "999"
        ]
      },
      "Police": {
        "All": [
          "997"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Portugal",
        "ISOCode": "PT",
        "ISONumeric": "620"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Puerto Rico",
        "ISOCode": "PR",
        "ISONumeric": "630"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          "911"
        ]
      }
    },
    {
      "Country": {
        "Name": "Qatar",
        "ISOCode": "QA",
        "ISONumeric": "634"
      },
      "Ambulance": {
        "All": [
          "999"
        ]
      },
      "Fire": {
        "All": [
          "999"
        ]
      },
      "Police": {
        "All": [
          "999"
        ]
      },
      "Dispatch": {
        "All": [
          "999"
        ]
      }
    },
    {
      "Country": {
        "Name": "Réunion",
        "ISOCode": "RE",
        "ISONumeric": "638"
      },
      "Ambulance": {
        "All": [
          "112",
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Romania",
        "ISOCode": "RO",
        "ISONumeric": "642"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Russian Federation",
        "ISOCode": "RU",
        "ISONumeric": "643"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Rwanda",
        "ISOCode": "RW",
        "ISONumeric": "646"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "912"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Saint Barthélemy",
        "ISOCode": "BL",
        "ISONumeric": "652"
      },
      "Ambulance": {
        "All": [
          null
        ]
      },
      "Fire": {
        "All": [
          null
        ]
      },
      "Police": {
        "All": [
          null
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Saint Helena, Ascension and Tristan da Cunha",
        "ISOCode": "SH",
        "ISONumeric": "654"
      },
      "Ambulance": {
        "All": [
          "999"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "999"
        ]
      },
      "Dispatch": {
        "All": [
          "911"
        ]
      }
    },
    {
      "Country": {
        "Name": "Saint Kitts and Nevis",
        "ISOCode": "KN",
        "ISONumeric": "659"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          "911"
        ]
      }
    },
    {
      "Country": {
        "Name": "Saint Lucia",
        "ISOCode": "LC",
        "ISONumeric": "662"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          "999",
          "911"
        ]
      }
    },
    {
      "Country": {
        "Name": "Saint Martin (French part)",
        "ISOCode": "MF",
        "ISONumeric": "663"
      },
      "Ambulance": {
        "All": [
          null
        ]
      },
      "Fire": {
        "All": [
          null
        ]
      },
      "Police": {
        "All": [
          null
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Saint Pierre and Miquelon",
        "ISOCode": "PM",
        "ISONumeric": "666"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Saint Vincent and the Grenadines",
        "ISOCode": "VC",
        "ISONumeric": "670"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          "999",
          "911"
        ]
      }
    },
    {
      "Country": {
        "Name": "Samoa",
        "ISOCode": "WS",
        "ISONumeric": "882"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          "999"
        ]
      }
    },
    {
      "Country": {
        "Name": "San Marino",
        "ISOCode": "SM",
        "ISONumeric": "674"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Sao Tome and Principe",
        "ISOCode": "ST",
        "ISONumeric": "678"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Saudi Arabia",
        "ISOCode": "SA",
        "ISONumeric": "682"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Senegal",
        "ISOCode": "SN",
        "ISONumeric": "686"
      },
      "Ambulance": {
        "All": [
          "1515"
        ]
      },
      "Fire": {
        "All": [
          "18"
        ]
      },
      "Police": {
        "All": [
          "17"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Serbia",
        "ISOCode": "RS",
        "ISONumeric": "688"
      },
      "Ambulance": {
        "All": [
          "193"
        ]
      },
      "Fire": {
        "All": [
          "194"
        ]
      },
      "Police": {
        "All": [
          "192"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Seychelles",
        "ISOCode": "SC",
        "ISONumeric": "690"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          "999"
        ]
      }
    },
    {
      "Country": {
        "Name": "Sierra Leone",
        "ISOCode": "SL",
        "ISONumeric": "694"
      },
      "Ambulance": {
        "All": [
          "999"
        ]
      },
      "Fire": {
        "All": [
          "999"
        ]
      },
      "Police": {
        "All": [
          "019"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Singapore",
        "ISOCode": "SG",
        "ISONumeric": "702"
      },
      "Ambulance": {
        "All": [
          "995"
        ]
      },
      "Fire": {
        "All": [
          "995"
        ]
      },
      "Police": {
        "All": [
          "999"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Sint Maarten (Dutch part)",
        "ISOCode": "SX",
        "ISONumeric": "534"
      },
      "Ambulance": {
        "All": [
          null
        ]
      },
      "Fire": {
        "All": [
          null
        ]
      },
      "Police": {
        "All": [
          null
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Slovakia",
        "ISOCode": "SK",
        "ISONumeric": "703"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Slovenia",
        "ISOCode": "SI",
        "ISONumeric": "705"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Solomon Islands",
        "ISOCode": "SB",
        "ISONumeric": "90"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          "911"
        ]
      }
    },
    {
      "Country": {
        "Name": "Somalia",
        "ISOCode": "SO",
        "ISONumeric": "706"
      },
      "Ambulance": {
        "All": [
          "555"
        ]
      },
      "Fire": {
        "All": [
          "999"
        ]
      },
      "Police": {
        "All": [
          "888"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "South Africa",
        "ISOCode": "ZA",
        "ISONumeric": "710"
      },
      "Ambulance": {
        "All": [
          "10177"
        ]
      },
      "Fire": {
        "All": [
          "10177"
        ]
      },
      "Police": {
        "All": [
          "10111"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ],
        "GSM": [
          "112"
        ]
      }
    },
    {
      "Country": {
        "Name": "South Georgia and the South Sandwich Islands",
        "ISOCode": "GS",
        "ISONumeric": "239"
      },
      "Ambulance": {
        "All": [
          "999"
        ]
      },
      "Fire": {
        "All": [
          "999"
        ]
      },
      "Police": {
        "All": [
          "999"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "South Sudan",
        "ISOCode": "SS",
        "ISONumeric": "728"
      },
      "Ambulance": {
        "All": [
          "999"
        ]
      },
      "Fire": {
        "All": [
          "999"
        ]
      },
      "Police": {
        "All": [
          "999"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Spain",
        "ISOCode": "ES",
        "ISONumeric": "724"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Sri Lanka",
        "ISOCode": "LK",
        "ISONumeric": "144"
      },
      "Ambulance": {
        "All": [
          "110"
        ]
      },
      "Fire": {
        "All": [
          "110"
        ]
      },
      "Police": {
        "All": [
          "119"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Sudan",
        "ISOCode": "SD",
        "ISONumeric": "729"
      },
      "Ambulance": {
        "All": [
          "999"
        ]
      },
      "Fire": {
        "All": [
          "999"
        ]
      },
      "Police": {
        "All": [
          "999"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Suriname",
        "ISOCode": "SR",
        "ISONumeric": "740"
      },
      "Ambulance": {
        "All": [
          "115"
        ]
      },
      "Fire": {
        "All": [
          "115"
        ]
      },
      "Police": {
        "All": [
          "115"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Svalbard and Jan Mayen",
        "ISOCode": "SJ",
        "ISONumeric": "744"
      },
      "Ambulance": {
        "All": [
          null
        ]
      },
      "Fire": {
        "All": [
          null
        ]
      },
      "Police": {
        "All": [
          null
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Swaziland",
        "ISOCode": "SZ",
        "ISONumeric": "748"
      },
      "Ambulance": {
        "All": [
          "933"
        ]
      },
      "Fire": {
        "All": [
          "977"
        ]
      },
      "Police": {
        "All": [
          "999"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Sweden",
        "ISOCode": "SE",
        "ISONumeric": "752"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Switzerland",
        "ISOCode": "CH",
        "ISONumeric": "756"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Syrian Arab Republic",
        "ISOCode": "SY",
        "ISONumeric": "760"
      },
      "Ambulance": {
        "All": [
          "113"
        ]
      },
      "Fire": {
        "All": [
          "110"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Taiwan, Province of China",
        "ISOCode": "TW",
        "ISONumeric": "158"
      },
      "Ambulance": {
        "All": [
          "119"
        ]
      },
      "Fire": {
        "All": [
          "119"
        ]
      },
      "Police": {
        "All": [
          "110"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Tajikistan",
        "ISOCode": "TJ",
        "ISONumeric": "762"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Tanzania, United Republic of",
        "ISOCode": "TZ",
        "ISONumeric": "834"
      },
      "Ambulance": {
        "All": [
          "115"
        ]
      },
      "Fire": {
        "All": [
          "114"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          "112",
          "999"
        ]
      }
    },
    {
      "Country": {
        "Name": "Thailand",
        "ISOCode": "TH",
        "ISONumeric": "764"
      },
      "Ambulance": {
        "All": [
          "199"
        ]
      },
      "Fire": {
        "All": [
          "1669"
        ]
      },
      "Police": {
        "All": [
          "191"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Timor-Leste",
        "ISOCode": "TL",
        "ISONumeric": "626"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Togo",
        "ISOCode": "TG",
        "ISONumeric": "768"
      },
      "Ambulance": {
        "All": [
          "118"
        ]
      },
      "Fire": {
        "All": [
          "8200"
        ]
      },
      "Police": {
        "All": [
          "117"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Tokelau",
        "ISOCode": "TK",
        "ISONumeric": "772"
      },
      "Ambulance": {
        "All": [
          null
        ]
      },
      "Fire": {
        "All": [
          null
        ]
      },
      "Police": {
        "All": [
          null
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Tonga",
        "ISOCode": "TO",
        "ISONumeric": "776"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          "911"
        ]
      }
    },
    {
      "Country": {
        "Name": "Trinidad and Tobago",
        "ISOCode": "TT",
        "ISONumeric": "780"
      },
      "Ambulance": {
        "All": [
          "990"
        ]
      },
      "Fire": {
        "All": [
          "811"
        ]
      },
      "Police": {
        "All": [
          "999"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Tunisia",
        "ISOCode": "TN",
        "ISONumeric": "788"
      },
      "Ambulance": {
        "All": [
          "190"
        ]
      },
      "Fire": {
        "All": [
          "198"
        ]
      },
      "Police": {
        "All": [
          "197"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Turkey",
        "ISOCode": "TR",
        "ISONumeric": "792"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Turkmenistan",
        "ISOCode": "TM",
        "ISONumeric": "795"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
        ]
      }
    },
    {
      "Country": {
        "Name": "Turks and Caicos Islands",
        "ISOCode": "TC",
        "ISONumeric": "796"
      },
      "Ambulance": {
        "All": [
          null
        ]
      },
      "Fire": {
        "All": [
          null
        ]
      },
      "Police": {
        "All": [
          null
        ]
      },
      "Dispatch": {
        "All": [
          "999",
          " 911"
        ]
      }
    },
    {
      "Country": {
        "Name": "Tuvalu",
        "ISOCode": "TV",
        "ISONumeric": "798"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          "911"
        ]
      }
    },
    {
      "Country": {
        "Name": "Uganda",
        "ISOCode": "UG",
        "ISONumeric": "800"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "GSM": [
          "112"
        ],
        "Fixed": [
          "999"
        ]
      }
    },
    {
      "Country": {
        "Name": "Ukraine",
        "ISOCode": "UA",
        "ISONumeric": "804"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "United Arab Emirates",
        "ISOCode": "AE",
        "ISONumeric": "784"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "United Kingdom of Great Britain and Northern Ireland",
        "ISOCode": "GB",
        "ISONumeric": "826"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          "999"
        ]
      }
    },
    {
      "Country": {
        "Name": "United States Minor Outlying Islands",
        "ISOCode": "UM",
        "ISONumeric": "581"
      },
      "Ambulance": {
        "All": [
          null
        ]
      },
      "Fire": {
        "All": [
          null
        ]
      },
      "Police": {
        "All": [
          null
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "United States of America",
        "ISOCode": "US",
        "ISONumeric": "840"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          "911"
        ]
      }
    },
    {
      "Country": {
        "Name": "Uruguay",
        "ISOCode": "UY",
        "ISONumeric": "858"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          "999",
          "911"
        ]
      }
    },
    {
      "Country": {
        "Name": "Uzbekistan",
        "ISOCode": "UZ",
        "ISONumeric": "860"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          "03"
        ]
      }
    },
    {
      "Country": {
        "Name": "Vanuatu",
        "ISOCode": "VU",
        "ISONumeric": "548"
      },
      "Ambulance": {
        "All": [
          "112"
        ]
      },
      "Fire": {
        "All": [
          "112"
        ]
      },
      "Police": {
        "All": [
          "112"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Venezuela, Bolivarian Republic of",
        "ISOCode": "VE",
        "ISONumeric": "862"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          "171"
        ]
      }
    },
    {
      "Country": {
        "Name": "Viet Nam",
        "ISOCode": "VN",
        "ISONumeric": "704"
      },
      "Ambulance": {
        "All": [
          "114"
        ]
      },
      "Fire": {
        "All": [
          "115"
        ]
      },
      "Police": {
        "All": [
          "113"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Virgin Islands, British",
        "ISOCode": "VG",
        "ISONumeric": "92"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          "999"
        ]
      }
    },
    {
      "Country": {
        "Name": "Virgin Islands, U.S.",
        "ISOCode": "VI",
        "ISONumeric": "850"
      },
      "Ambulance": {
        "All": [
          "911"
        ]
      },
      "Fire": {
        "All": [
          "911"
        ]
      },
      "Police": {
        "All": [
          "911"
        ]
      },
      "Dispatch": {
        "All": [
          "911"
        ]
      }
    },
    {
      "Country": {
        "Name": "Wallis and Futuna",
        "ISOCode": "WF",
        "ISONumeric": "876"
      },
      "Ambulance": {
        "All": [
          null
        ]
      },
      "Fire": {
        "All": [
          null
        ]
      },
      "Police": {
        "All": [
          null
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Western Sahara",
        "ISOCode": "EH",
        "ISONumeric": "732"
      },
      "Ambulance": {
        "All": [
          "150"
        ]
      },
      "Fire": {
        "All": [
          "150"
        ]
      },
      "Police": {
        "All": [
          "150"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Yemen",
        "ISOCode": "YE",
        "ISONumeric": "887"
      },
      "Ambulance": {
        "All": [
          "191"
        ]
      },
      "Fire": {
        "All": [
          "191"
        ]
      },
      "Police": {
        "All": [
          "194"
        ]
      },
      "Dispatch": {
        "All": [
          null
        ]
      }
    },
    {
      "Country": {
        "Name": "Zambia",
        "ISOCode": "ZM",
        "ISONumeric": "894"
      },
      "Ambulance": {
        "All": [
          "999"
        ]
      },
      "Fire": {
        "All": [
          "999"
        ]
      },
      "Police": {
        "All": [
          "999"
        ]
      },
      "Dispatch": {
        "All": [
          "999"
        ]
      }
    },
    {
      "Country": {
        "Name": "Zimbabwe",
        "ISOCode": "ZW",
        "ISONumeric": "716"
      },
      "Ambulance": {
        "All": [
          "999"
        ]
      },
      "Fire": {
        "All": [
          "999"
        ]
      },
      "Police": {
        "All": [
          "999"
        ]
      },
      "Dispatch": {
        "All": [
          "999"
        ]
      }
    }
  ]

get()