const output = document.getElementById('output');
const submit = document.getElementById('submit');
const selectElement = document.getElementById("digitSelect");


async function sendMessage() {
  var input = document.getElementById('input');
  const selectedLesson = parseInt(selectElement.value);
  const message = input.value;
  console.log(`message: ${message}`);
  input.value = '';
  output.innerHTML += `<p>You: ${message}</p>`;
  var res = ''; 
  console.log(selectedLesson);
  switch (selectedLesson) {
    case 1:
      res = lesson1(message); break;
    case 2:
      res = lesson2(message);  break;  
    case 3:
      res = lesson3(message);  break;  
    case 4:
      res = lesson4(message);   break; 
    case 5:
      res = lesson5(message);   break; 
    case 6:
      res = lesson6(message);   break; 
    case 7:
      res = lesson7(message);    break;
    case 8:
      res = lesson8(message);   break; 
    case 9:
      res = lesson9(message);   break; 
    case 10:
      res = lesson10(message);  break;  
    case 11:
      res = lesson11(message);   break; 
    case 13:
      res = lesson13(message);   break; 
    case 14:
      res = lesson14(message);    break;
    case 15:
      res = lesson15(message);    break;
    case 17:
      res = lesson17(message);    break;
    case 18:
      res = lesson18(message);    break;
    case 19:
      res = lesson19(message);    break;
    case 20:
      res = lesson20(message);    break;     
    case 21:
        res = lesson21(message);
        break;
    case 22:
        res = lesson22(message);
        break;
    case 26:
        res = lesson26(message);
        break;
    case 27:
        res = lesson27(message);
        break;
    case 28:
        res = lesson28(message);
        break;
    case 29:
        res = lesson29(message);
        break;
    case 30:
        res = lesson30(message);
        break;
    case 31:
        res = lesson31(message);
        break;
    case 32:
        res = lesson32(message);
        break;
    case 33:
        res = lesson33(message);
        break;
    case 34:
        res = lesson34(message);
        break;
    case 35:
        res = lesson35(message);
        break;
    case 36:
        res = lesson36(message);
        break;
    case 37:
        res = lesson37(message);
        break;
    case 38:
        res = lesson38(message);
        break;
    case 39:
        res = lesson39(message);
        break;
    case 40:
        res = lesson40(message);
        break;
    case 41:
        res = lesson41(message);
        break;
    case 42:
        res = lesson42(message);
        break;
    case 43:
        res = lesson43(message);
        break;
    case 44:
        res = lesson44(message);
        break;
    case 45:
        res = lesson45(message);
        break;
    case 46:
        res = lesson46(message);
        break;
    case 47:
        res = lesson47(message);
        break;
    case 48:
        res = lesson48(message);
        break;
    case 49:
        res = lesson49(message);
        break;
    case 51:
        res = lesson51(message);
        break;
    case 55:
        res = lesson55(message);
        break;
    case 54:
        res = lesson54(message);
        break;
    case 56:
        res = lesson56(message);
        break;
    case 57:
        res = lesson57(message);
        break;
    case 58:
        res = lesson58(message);
        break;
    case 59:
        res = lesson59(message);
        break;
    case 62:
        res = lesson62(message);
        break;
    case 64:
        res = lesson64(message);
        break;
    case 65:
        res = lesson65(message);
        break;
    case 66:
        res = lesson66(message);
        break;
    case 67:
        res = lesson67(message);
        break;
    case 70:
        res = lesson70(message);
        break;
    case 71:
        res = lesson71(message);
        break;
    case 72:
        res = lesson72(message);
        break;
    // case 73:
    //     res = lesson73(message);
    //     break;
    case 74:
        res = lesson74(message);
        break;
    // case 75:
    //     res = lesson75(message);
    //     break;
    case 81:
        res = lesson81(message);
        break;
    case 83:
        res = lesson83(message);
        break;
    case 84:
      setTimeout(res = await getDefinition(message), 2000)

  
  }
  output.innerHTML += `<p>AI: ${res}</p>`;
}


input.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    event.preventDefault(); 
    sendMessage(); 
  }
});

async function getDefinition(message) {
  const url = 'http://elc-back.duckdns.org/ai-tense/define-tense/';
  const body = {
    "input": message,
  };

  const jsonBody = JSON.stringify(body); 

  let response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
   },
    body: jsonBody,
  });

  console.log(jsonBody);

  let data =  response.text();
  console.log(data);
  return data;  
}


























































function lesson1(input) {
  var grammarPatterns = [
    /^.*?i (am|am not) \w+$/,
    /^.*?(she|he|it|this) (is|is not|isn't) \w+$/,
    /^.*?(you|we|they) (are|are not|aren't) \w+$/,
    /^.*?(your|my|his|her|its) name (is|is not|isn't) \w+$/,
    /^.*?(your|my|his|her|its) (.+) name (is|is not|isn't) \w+$/,
    /^.*?(what is|what is not|what isn't|what's|what's not) (your|my|his|her|its|their|our)\w+$/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}


function lesson2(input) {
  const words = input.split(' ');

  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase();
    if (word === 'a') {
      if (i < words.length - 1) {
        const nextWord = words[i + 1].toLowerCase();
        if (/^[aeiou]/.test(nextWord) || /s$/.test(nextWord)) {
          return 'NO';
        }
      }
    } else if (word === 'an') {
      if (i < words.length - 1) {
        const nextWord = words[i + 1].toLowerCase();
        if (/^[^aeiou]/.test(nextWord) || /s$/.test(nextWord)) {
          return 'NO';
        }
      }
    } else if (word === 'the') {
      return 'YES';
    }
  }

  return 'YES';
}

function lesson3(input) {
  var grammarPatterns = [
    /^.*?i (am|am not) (a|an) (.+).*?$/,
    /^.*?you (are|are not|aren't) (a|an) (.+).*?$/,
    /^.*?(he|she|it|.+) (is|is not|isn't) (a|an) (.+).*?$/,
    /^.*?(your|my|his|her|its) \w+ (is|is not|isn't) (a|an) (.+).*?$/,
    /^.*?(we|they) (are|are not|aren't) .+s.*?$/,
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson4(input) {
  var grammarPatterns = [
    /^.*?i (am|am not) from (.+).*?$/,
    /^.*?(you|we|they) (are|are not|aren't) from (.+).*?$/,
    /^.*?(he|she|it|.+) (is|is not|isn't) from (.+).*?$/,
    /^.*?(your|my|his|her|its) (.+) (is|is not|isn't) from (.+).*?$/,
    /^.*?where (are|are not|aren't) (you|they|we) from.*?$/,
    /^.*?where (is|is not|isn't) (your|my|his|her|its) (.+) from.*?$/,
    /^.*?where (is|is not|isn't) (he|she|it|.+) from.*?$/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson5(input) {
  var grammarPatterns = [
    /^.*?i (am|am not) (a|an) \w+$/,
    /^.*?(she|he|it|.+) (is|is not|isn't) (a|an) \w+$/,
    /^.*?(we|they|you) (are|are not|aren't) (a|an) \w+$/,
    /^.*?(your|my|his|her|its) \w+ (is|is not|isn't) (a|an) \w+$/,
    /^.*?are (you|we|they) (a|an) \w+\??$/,
    /^.*?is (she|he|it|.+) (a|an) \w+\??$/,
    /^.*?is (your|my|his|her|its) \w+ (a|an) \w+$/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson6(input) {
  var grammarPatterns = [
    /^.*?i (am|am not) \w+$/,
    /^.*?(she|he|it|.+) (is|is not|isn't) \w+$/,
    /^.*?(we|they|you) (are|are not|aren't) \w+$/,
    /^.*?(your|my|his|her|its) (.+) (is|is not|isn't) \w+$/,
    /^.*?are (you|we|they) \w+$/,
    /^.*?is (she|he|it|.+) \w+$/,
    /^.*?is (your|my|his|her|its) \w+ \w+$/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson7(input) {
  var grammarPatterns = [
    /^.*?i (am|am not) \d+$/,
    /^.*?(she|he|it|.+) (is|is not|isn't) \d+$/,
    /^.*?(we|they|you) (are|are not|aren't) \d+$/,
    /^.*?(your|my|his|her|its) \w+ (is|is not|isn't) \d+$/,
    /^.*?are (you|we|they) \d+$/,
    /^.*?is (she|he|it|.+) \d+$/,
    /^.*?is (your|my|his|her|its) \w+ \d+$/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson8(input) {
  var grammarPatterns = [
    /^.*?(what is|what is not|what isn't|what's|what's not) (your|my|his|her|its) (.+).*?$/,
    /^.*?(your|my|his|her|its) (.+) (is|is not|isn't) (.+).*?$/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson9(input) {
  var grammarPatterns = [
    /^.*?how old (are|are not|aren't) (you|we|they).*?$/,
    /^.*?how old (is|is not|isn't) (he|she|it|.+).*?$/,
    /^.*?how old (am|am not) i.*?$/,
    /^.*?i (am|am not) \d+ years old.*?$/,
    /^.*?(you|we|they) (are|are not|aren't) \d+ years old.*?$/,
    /^.*?(he|she|it|.+) (is|is not|isn't) \d+ years old.*?$/,
    /^.*?(your|my|his|her|its) (.+) (is|is not|isn't) \d+ years old.*?$/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson10(input) {
  var grammarPatterns = [
    /^.*?this (is|is not|isn't) (.+).*?$/,
    /^.*?this (is|is not|isn't) (.+)'s (.+).*?$/,
    /^.*?this (is|is not|isn't) (my|your|his|her|our|their) (.+).*?$/,
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson11(input) {
  var grammarPatterns = [
    /^.*?(i|you|we|they) have (.+).*?$/,
    /^.*?(he|she|it|.+) has (.+).*?$/,
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson12(input) {
  input = input.toLowerCase();
  const presentSimplePattern = /^(i|you|we|they|he|she|it)(\s+[\w\s']+)?\s+(\b(?:am|are|is|dod|does)\b\s+[\w\s']+)?\b(?!not\b)\s*(\b(?:\w+ed|had|has|have|will|shall|do|does|is|are|am)\b)?\s*\b(?!to\b)\s*(?:\b\w+\b)?(\s+[\w\s']+)?(\.|\?|!)?$/i;

  if (presentSimplePattern.test(input)) {
    return 'YES';
  } else {
    return 'NO';
  }
}


function lesson13(input) {
  input = input.toLowerCase();
  const pattern = /^.*?(he|she|it|.+) \w+s.*?$/;

  if (pattern.test(input)) {
    return "YES";
  } else {
    return "NO";
  }
}

function lesson14(input) {
  var grammarPatterns = [
    /^.*?does (he|she|it|.+) (.+).*?$/,
    /^.*?does (my|your|his|her|our|their) \w+ (.+).*?$/,
    /^.*?(he|she|it|.+) .+s.*?$/,
    /^.*?(he|she|it|.+) (does not|doesn't) (.+).*?$/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson15(input) {
  var grammarPatterns = [
    /^.*?(who|what|where|when|why|how|which|whose|whom|what time) does (he|she|it|.+) (.+).*?$/,
    /^.*?(who|what|where|when|why|how|which|whose|whom|what time) does (my|your|his|her|our|their) (.+) (.+).*?$/,
    /^.*?(he|she|it|.+) \w+s.*?$/,
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson17(input) {
  var grammarPatterns = [
    /^.*?can (.+) (.+).*?$/,
    /^.*?can (my|your|his|her|our|their) (.+) (.+).*?$/,
    /^.*?(.+) (can|cannot|can't|can not) (.+).*?$/,
    /^.*?(my|your|his|her|our|their) (.+) (can|cannot|can't|can not) (.+).*?$/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}


function lesson19(input) {
  var grammarPatterns = [
    /^.*?there (is|is not|isn't) (.+) (on|in|at) (.+).*?$/,
    /^.*?(is|is not|isn't) there (.+) (on|in|at) (.+).*?$/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson20(input) {
  var grammarPatterns = [
    /^.*(i|she|he|it|.+) (was|was not|wasn't) (.+).*?$/,
    /^.*(you|we|they) (were|were not|weren't) (.+).*?$/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson21(input) {
  var grammarPatterns = [
    /^.*(i|she|he|it|.+) (was|was not|wasn't) (.+).*?$/,
    /^.*(you|we|they) (were|were not|weren't) (.+).*?$/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson22(input) {
  var grammarPatterns = [
    /^.*(.+) (was|were) born on the (first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth|eleventh|twelfth|thirteenth|fourteenth|fifteenth|sixteenth|seventeenth|eighteenth|nineteenth|twentieth|twenty first|twenty second|twenty third|twentyfourth|twenty fifth|twenty sixth|twenty seventh|twenty eighth|twenty ninth|thirtieth|thirty first) of (january|february|march|april|may|june|july|aug ust|september|october|november|december).*?$/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson26(input) {
  var grammarPatterns = [
    /^.*\w+ would like (.+).*?$/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson27(input) {
  var grammarPatterns = [
    /^.*\w+ (would|would not|wouldn't) like (.+).*?$/,
    /^.*(would|would not|wouldn't) \w+ like (.+).*?$/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson28(input) {
  var grammarPatterns = [
    /^.*\w+'d like (.+).*?$/,
    /^.*we have (.+).*?$/,
    /^.*there's (.+) (in|on|at) (.+).*?$/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson29(input) {
  var grammarPatterns = [
    /^.*do you have (some|any) (.+).*?$/,
    /^.*i have (some|any) (.+).*?$/,
    /^.*i (do not|don't) have (some|any) (.+).*?$/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson30(input) {
  var grammarPatterns = [
    /^.*(would|would not|wouldn't) \w+ like (some|any) (.+).*?$/,
    /^.*\w+ (would|would not|wouldn't) like (some|any) (.+).*?$/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson31(input) {
  var grammarPatterns = [
    /^.*?i (am|am not) .+ing.*?/,
    /^.*?(you|we|they) (are|are not|aren't) .+ing.*?/,
    /^.*?\w+ (is|is not|isn't) .+ing.*?/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson32(input) {
  var grammarPatterns = [
    /^.*?i (am|am not) .+ing.*?/,
    /^.*?(you|we|they) (are|are not|aren't) .+ing.*?/,
    /^.*?\w+ (is|is not|isn't) .+ing.*?/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson33(input) {
  var grammarPatterns = [
    /^.*?(are|are not|aren't) you .+ing.*?/,
    /^.*?i (am|am not) .+ing.*?/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson34(input) {
  var grammarPatterns = [
    /^.*?is \w+ .+ing.*?/,
    /^.*?\w+ (is|is not|isn't) .+ing.*?/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson35(input) {
  var grammarPatterns = [
    /^.*?what (am|am not) i .+ing.*?/,
    /^.*?what (are|are not|aren't) (you|we|they) .+ing.*?/,
    /^.*?(what is|what is not|what isn't|what's|what's not) \w+ .+ing.*?/,
    /^.*?i (am|am not) .+ing.*?/,
    /^.*?(you|we|they) (are|are not|aren't) .+ing.*?/,
    /^.*?\w+ (is|is not|isn't) .+ing.*?/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson36(input) {
  var grammarPatterns = [
    /^.*?(i am|i'm) going to (.+).*?/,
    /^.*?(you|we|they)'re going to (.+).*?/,
    /^.*?(you|we|they) are going to (.+).*?/,
    /^.*?(she|he|it)'s going to (.+).*?/,
    /^.*?\w+ is going to (.+).*?/,
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson37(input) {
  var grammarPatterns = [
    /^.*?where (are|are not|aren't) you going to stay.*?/, 
    /^.*?what (are|are not|aren't) you going to do.*?/,
    /^.*?i (am|am not) going to (.+).*?/  
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson38(input) {
  var grammarPatterns = [
    /^.*?i can't stop .+ing.*?/,
    /^.*?i enjoy .+ing.*?/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson39(input) {
  var grammarPatterns = [
    /^.*?keep .+ing.*?/,
    /^.*?kept .+ing.*?/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson40(input) {
  var grammarPatterns = [
    /^.*?(what is|what is not|what isn't|what's|what's not) (her|his) (.+).*?/,
    /^.*?where (is|is not|isn't) (she|he|it) from.*?/,
    /^.*?where (are|are not|aren't) (you|we|they) from.*?/,
    /^.*?where (am|am not) i from*.?/,
    /^.*?who (is|is not|isn't) (.+).*?/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}
function lesson41(input) {
  var grammarPatterns = [
    /^.*?how much (is|is not|isn't) (.+).*?/,
    /^.*?it (is|is not|isn't) \d+.*?/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson42(input) {
  var grammarPatterns = [
    /^.*?(i|you|we|they) (.+) every day.*?/,
    /^.*?(she|he|it) .+s every day.*?/,
    /^.*?(i|you|we|they) (don't|do not) (.+) every day.*?/,
    /^.*?(she|he|it) (does not|doesn't) (.+) every day.*?/,
    /^.*?do (i|you|we|they) (.+) every day.*?/,
    /^.*?does (she|he|it) (.+) every day.*?/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson43(input) {
  var grammarPatterns = [
    /^.*?does (she|he|it) (.+).*?/,
    /^.*?(she|he|it) (does|does not|doesn't).*?/,
    /^.*?(she|he|it) .+s  .*?/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson44(input) {
  var grammarPatterns = [
    /^.*?excuse me\. can you tell me the time\, please\?? (.+).*?/,
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}
function lesson45(input) {
  var grammarPatterns = [
    /^.*?there (is|is not|isn't) (a|an) (.+) (on|in|at) (.+).*?$/,
    /^.*?(is|is not|isn't) there (a|an) (.+) (on|in|at) (.+).*?$/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson46(input) {
  var grammarPatterns = [
    /^.*?there (are|are not|aren't) (any|some) (.+) (on|in|at) (.+).*?$/,
    /^.*?(are|are not|aren't) there (any|some) (.+) (on|in|at) (.+).*?$/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson47(input) {
  var grammarPatterns = [
    /^.*?(i|you|we|they|she|he|it) can (.+).*?$/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson48(input) {
  var grammarPatterns = [
    /^.*?(i|you|we|they|she|he|it) could (.+).*?$/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson49(input) {
  var grammarPatterns = [
    /^.*?(i|she|he|it) was (a|an) (.+).*?$/,
    /^.*?(you|we|they) were (a|an) (.+).*?$/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson51(input) {
  var grammarPatterns = [
    /^.*?when were you born.*?$/,
    /^.*?when was (she|he|it) born.*?$/,
    /^.*?(she|he|it|i) was born on the (1st|2nd|3rd|(?:[4-9]|1\d|2[0-9]|3[0-1])th) of (january|february|march|april|may|june|july|august|september|october|november|december).*?$/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}


function lesson55(input) {
  var grammarPatterns = [
    /^.*?from my point of view (.+).*?$/,
    /^.*?(i think|believe that) (.+).*?$/,
    /^.*?in my opinion\, (.+).*?$/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson56(input) {
  var grammarPatterns = [
    /^.*?(what's|what (is|is not|isn't)) your favourite (.+).*?$/,
    /^.*?my favourite (.+) (is|is not|isn't) (.+).*?$/,
    /^.*?would you like some(.+).*?$/,
    /^.*?i would like some(.+).*?$/,
    /^.*?i wouldn't you like any(.+).*?$/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson57(input) {
  var grammarPatterns = [
    /^.*?can i have (.+)\, please.*?$/,
    /^.*?yes\, sure.*?$/,
    /^.*?no\, i'm sorry.*?$/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson58(input) {
  var grammarPatterns = [
    /^.*?(what is|what is not|what isn't|what's|what's not) .+er than (.+).*?$/,
    /^.*?(.+) (is|is not|isn't) .+er than (.+).*?$/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}


function lesson59(input) {
  var grammarPatterns = [
    /^.*?(are|are not|aren't) you .+ing.*?/,
    /^.*?i (am|am not) .+ing.*?/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson62(input) {
  var grammarPatterns = [
    /^.*?(when|where|why|what) do you (.+).*?/,
    /^.*?i (.+).*?/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson64(input) {
  var grammarPatterns = [
    /^.*?what (am|am not) i .+ing.*?/,
    /^.*?what (are|are not|aren't) (you|we|they) .+ing.*?/,
    /^.*?(what is|what is not|what isn't|what's|what's not) (she|he|it) .+ing.*?/,
    /^.*?i (am|am not) .+ing.*?/,
    /^.*?(you|we|they) (are|are not|aren't) .+ing.*?/,
    /^.*?(she|he|it) (is|is not|isn't) .+ing.*?/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson65(input) {
  var grammarPatterns = [
    /^.*?(i|you|we|they) (have|have not| haven't) got (.+).*?/,
    /^.*?have (i|you|we|they) got (.+).*?/,
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}


function lesson66(input) {
  var grammarPatterns = [
    /^.*?(she|he|it) (has|has not| hasn't) got (.+).*?/,
    /^.*?has (she|he|it) got (.+).*?/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}


function lesson67(input) {
  var grammarPatterns = [
    /^.*?i like the way you (.+).*?/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson68(input) {
  var grammarPatterns = [
    /^.*?how many .+s (do|does) \w+ (.+).*?/,
    /^.*?\w+ \w+ \w+.*?/,
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson69(input) {
  var grammarPatterns = [
    /^.*?how much \w+ (do|does) \w+ (.+).*?/,
    /^.*?\w+ \w+ \w+.*?/,
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson70(input) {
  var grammarPatterns = [
    /^.*?\w+ will (.+).*?/,
    /^.*?(.+) (am|am not|are|are not|aren't|is|is not|isn't) going to (.+).*?/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson71(input) {
  var grammarPatterns = [
    /^.*?(do|does) \w+ think that \w+ will (.+).*?/,
    /^.*?of course (.+) wiil.*?/,
    /^.*?definitely.*?/,
    /^.*?absolutely.*?/,
    /^.*?(.+) might do.*?/,
    /^.*?i thinh so.*?/,
    /^.*?perhaps.*?/,
    /^.*?maybe.*?/,
    /^.*?i (am|am not) sure.*?/,
    /^.*?i doubt it.*?/,
    /^.*?anything's possible.*?/,
    /^.*?i don't think so.*?/,
    /^.*?no chance.*?/,
    /^.*?definitely not.*?/,
    /^.*?not a chance.*?/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson72(input) {
  var grammarPatterns = [
    /^.*?(have|has|have not|haven't|has not|hasn't) \w+ .+ed.*?/,
    /^.*?\w+ (have|has|have not|haven't|has not|hasn't) .+ed.*?/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson74(input) {
  var grammarPatterns = [
    /^.*?how long have (i|you|we|they) been .+ing.*?/,
    /^.*?how long has (he|she|it|.+) been .+ing.*?/,
    /^.*?(i|you|we|they) have been .+ing.*?/,
    /^.*?(he|she|it|.+) has been .+ing.*?/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson76(input) {
  var grammarPatterns = [
    /^.*?\w+ (should have|should not have|shouldn't have) (.+).*?/,
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson81(input) {
  var grammarPatterns = [
    /^.*?will you able to (.+).*?/,
    /^.*?i will be able to (.+).*?/,
    /^.*?i will not be able to (.+).*?/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson83(input) {
  var grammarPatterns = [
    /^.*?do you like (.+).*?/,
    /^.*?are you fond of \w+ing.*?/,
    /^.*?(i am|i'm) (fairly|pretty) keen on \w+ing.*?/,
    /^.*?(i am|i'm) really into \w+ing.*?/,
    /^.*?(i am|i'm) quite a big fan of \w+ing.*?/,
    /^.*?i simple adore \w+ing.*?/,
    /^.*?(i am|i'm) quite enthusiastica about \w+ing.*?/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson85(input) {
  var grammarPatterns = [
    /^.*?would you like (.+).*?/,
    /^.*?well\,? quite honestly (i do not| i don't|i do) think (i've|i've not|i have|i haven't|i have not) ever thought about that\,? but i guess (.+).*?/,
    /^.*?actually\,? this (is|is not|isn't) something that (i've|i've not|i have|i haven't|i have not) ever considered\,? but in short (.+).*?/,
    /^.*?(i am|i'm|i am not|i'm not|i amn't) really sure how to put this\,? but i suppose generally speaking (.+).*?/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson87(input) {
  var grammarPatterns = [
    /^.*?what are your views on (.+).*?/,
    /^.*?do you have any suggestions for (.+).*?/,
    /^.*?would you like to suggest a course of action for (.+).*?/,
    /^.*?how do you feel about (.+).*?/,
    /^.*?from my point of view (.+).*?/,
    /^.*?i suggest (.+).*?/,
    /^.*?i guess we should (.+).*?/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson88(input) {
  var grammarPatterns = [
    /^.*?i prefer(.+) to (.+).*?/,
    /^.*?(i would|i'd|i would not|i wouldn't|i'd not) prefer to (.+) than (.+).*?/,
    /^.*?(i would|i'd|i would not|i wouldn't|i'd not) rather(.+) then (.+).*?/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

function lesson84(input) {
  var grammarPatterns = [
    /^.*?why did (.+) (.+).*?/,
    /^.*?i guess this was probably because (.+).*?/,
    /^.*?this could be because(.+).*?/,
    /^.*?this might be because(.+).*?/
  ];

  input = input.toLowerCase();

  for (var i = 0; i < grammarPatterns.length; i++) {
    if (grammarPatterns[i].test(input)) {
      return "YES";
    }
  }

  return "NO";
}

submit.addEventListener('click', sendMessage);
