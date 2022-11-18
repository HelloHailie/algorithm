function solution(sizes) {
    let width = []
    let height = []
    sizes.map((v,i) => {
             width[i] = Math.max(...v)
             height[i] = Math.min(... v)
    })
    return Math.max(...width) * Math.max(...height) 
}