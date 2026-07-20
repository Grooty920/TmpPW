/**
 * 格式化日期为中文格式
 * 30天内的文章显示相对时间（如"3天前"），更早的显示绝对日期
 * @param date Date对象
 * @returns 格式化的日期字符串
 */
export function formatDate(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diff / (1000 * 60 * 60));
  const diffMinutes = Math.floor(diff / (1000 * 60));

  // 30天内的文章显示相对时间
  if (diffDays < 30) {
    if (diffDays === 0) {
      if (diffHours === 0) {
        if (diffMinutes < 1) return "刚刚";
        return diffMinutes + "分钟前";
      }
      return diffHours + "小时前";
    }
    return diffDays + "天前";
  }

  // 更早的文章显示绝对日期
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}年${month}月${day}日`;
}

/**
 * 格式化日期为完整中文格式（含星期）
 * @param date Date对象
 * @returns 格式化的日期字符串，如 "2026年7月16日 星期四"
 */
export function formatDateFull(date: Date): string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekdays = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
  const weekday = weekdays[date.getDay()];
  return `${year}年${month}月${day}日 ${weekday}`;
}