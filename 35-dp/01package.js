/*
 * @Author: ganlan
 * @Date: 2021-06-20 14:45:24
 * @Description: 01背包
 */

// 0-1 背包问题 ：有 N 件物品和一个容量为 C 的背包。第 i 件物品的价值是 v[i]，重量是 w[i]。
//  状态转移方程：dp[i][j] = max{dp[i-1][j],dp[i-1][j-w[i]]+v[i]}

function package(v, w, N, C) {
  let dp = []
  for (let i = 0; i <= N; i++) {
    dp.push(new Array(C + 1).fill(0))
  }
  for (let i = 1; i < N+1; i++) {
    for (let j = 0; j <= C; j++) {
      let index = i-1
      if (w[index] > j) {
        dp[i][j] = dp[i - 1][j]
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - w[index]] + v[index])
      }
    }
  }

  console.log(dp)
}

package([6, 2, 1, 8], [4, 5, 4, 1], 4, 6)
package([4, 2, 3], [2, 1, 3], 3, 4)
package([6,3,5,4,6],[2,2,6,5,4],5,10)
