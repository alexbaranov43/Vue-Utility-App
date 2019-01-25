<template>
  <div>
    <div class="row">
      &nbsp;
    </div>
    <div class="calculator" valign="middle">
      <div class="display">{{ result || current || 0}}</div>
      <div @click="clear" class="button">AC</div>
      <div @click="sign" class="button">+/-</div>
      <div @click="percent" class="button">%</div>
      <div @click="divide" class="button operator">÷</div>
      <div @click="append(7)" class="button">7</div>
      <div @click="append(8)" class="button">8</div>
      <div @click="append(9)" class="button">9</div>
      <div @click="multiply" class="button operator">X</div>
      <div @click="append(4)" class="button">4</div>
      <div @click="append(5)" class="button">5</div>
      <div @click="append(6)" class="button">6</div>
      <div @click="subtract" class="button operator">-</div>
      <div @click="append(1)" class="button">1</div>
      <div @click="append(2)" class="button">2</div>
      <div @click="append(3)" class="button">3</div>
      <div @click="add" class="button operator">+</div>
      <div @click="zero(0)" class="button zero">0</div>
      <div @click="dot" class="button">.</div>
      <div @click="equal" class="button operator">=</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      previous: null,
      operatorClicked: false,
      current: '',
      operator: null,
      result: ''
    }
  },
  methods: {
    clear () {
      this.current = ''
      this.result = ''
    },
    sign () {
      this.current =
        this.current.charAt(0) === '-'
          ? this.current.slice(1)
          : `-${this.current}`
    },
    percent () {
      this.current = `${parseFloat(this.current) / 100}`
    },
    append (number) {
      if (this.operatorClicked) {
        this.current = ''
        this.operatorClicked = false
      }
      this.current = `${this.current}${number}`
    },
    dot () {
      if (this.current.indexOf('.') === -1) {
        this.append('.')
      }
    },
    zero (number) {
      if (this.current === 0) {
      } else {
        this.current = `${this.current}${number}`
      }
    },
    setPrevious () {
      this.previous = this.current
      this.operatorClicked = true
    },
    add () {
      this.operator = (a, b) => a + b
      this.setPrevious()
    },
    subtract () {
      this.operator = (a, b) => a - b
      this.setPrevious()
    },
    divide () {
      this.operator = (a, b) => a / b
      this.setPrevious()
    },
    multiply () {
      this.operator = (a, b) => a * b
      this.setPrevious()
    },
    equal () {
      if (this.result) {
        this.current = this.result
        this.result = `${this.operator(
          parseInt(this.result),
          parseInt(this.previous)
        )}`
      } else {
        this.result = `${this.operator(
          parseFloat(this.previous),
          parseFloat(this.current)
        )}`
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculator {
  width: 400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
  font-size: 30px;
}

.operator {
  background-color: #006fcf !important;
  color: white;
}

.display {
  grid-column: 1/5;
  background-color: #00175a;
  color: #f2f2f2;
}

.button {
  background-color: #eee;
  border: 1px solid #999;
  border-radius: 15px;
}

.zero {
  grid-column: 1 / 3;
}
</style>
