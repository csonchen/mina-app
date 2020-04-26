let inter = null

/**
 * 开始倒计时
 * @param {*} totalSeconds 
 */
const beginCountdown = (totalSeconds) => {     
  const [ days, hours, minutes, seconds ] = getTime(totalSeconds)
  worker.postMessage({
    days,
    hours,
    minutes,
    seconds,
  })

  inter = setInterval(() => {
    totalSeconds = totalSeconds - 1

    const [ days, hours, minutes, seconds ] = getTime(totalSeconds)

    if (totalSeconds <= 0) {
      clearTime()
    }

    worker.postMessage({
      days,
      hours,
      minutes,
      seconds,
      totalSeconds,
    })
  }, 1000)
}

/**
 * 获取日，时，分，秒
 * @param {*} totalSeconds 
 */
const getTime = (totalSeconds) => {
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds / 3600) % 24)
  const minutes = Math.floor((totalSeconds / 60) % 60)
  const seconds = Math.floor(totalSeconds % 60)
  return [days, hours, minutes, seconds]
}

/**
 * 清除倒计时
 */
const clearTime = () => {
  inter && clearInterval(inter)
  inter = null
}

worker.onMessage((res) => {
  beginCountdown(res.remainSeconds)
})





