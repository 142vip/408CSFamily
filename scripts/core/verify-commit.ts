import { commitLiner } from '@142vip/commit-linter'
import { VipColor, VipConsole, vipLogger } from '@142vip/utils'

/**
 * 验证Git Commit信息
 */
function verifyCommitMain(): void {
  const { type, scope, subject, commit } = commitLiner()

  // 提交符合规范，打印相关信息
  VipConsole.log(`type: ${type}, scope: ${scope}, subject: ${subject}`)
  vipLogger.logByBlank(`${VipColor.greenBright('Git Commit: ')} ${VipColor.green(commit)}`)
}

void verifyCommitMain()
