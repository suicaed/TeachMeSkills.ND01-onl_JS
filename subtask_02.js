class StateMachine {
  #timersData = []

  add(cb, seconds) {
    this.#timersData.push({ cb, seconds })
    return this
  }

  run() {
    this.#timersData = this.#timersData.map((data) => {
      const timerId = setTimeout(data.cb, data.seconds * 1000)
      return {
        ...data,
        timerId,
      }
    })
  }

  stopAll() {
    this.#timersData.forEach((item) => clearTimeout(item.timerId))
  }
}

const stateMachine = new StateMachine()

stateMachine
  .add(() => {
    console.log('This message will appear after 1 second')
  }, 1)
  .add(() => {
    console.log('This message will appear after 2 seconds')
    stateMachine.stopAll()
  }, 2)
  .add(() => {
    console.log('This message will never appear')
  }, 3)

stateMachine.run()
