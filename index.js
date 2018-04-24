var katzDeliLine = [];

function takeANumber(deliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line`;
  }