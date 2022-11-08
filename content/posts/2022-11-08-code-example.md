---
title: Code Example
date: 2022-11-08
kind: article
---

A simple yield example:

~~~ ruby
def multiply(a,b)
  puts "#{a} multiplied by #{b} is equal to #{a * b}"
end

def calculate(msg)
  puts "Calculating..."
  yield
  puts "Done!"
end

calculate() {multiply(2,6)}
~~~
