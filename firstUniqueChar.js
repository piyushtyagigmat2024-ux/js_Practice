// First Unique Character in a String
// Usage:
//   node firstUniqueChar.js "leetcode"
//   node firstUniqueChar.js "loveleetcode"

function firstUniqueChar(s) {
  const count = new Map();
  for (const ch of s) count.set(ch, (count.get(ch) || 0) + 1);
  for (let i = 0; i < s.length; i++) if (count.get(s[i]) === 1) return i;
  return -1;
}

if (require.main === module) {
  const arg = process.argv[2];
  if (arg) {
    const idx = firstUniqueChar(arg);
    console.log(idx);
  } else {
    // run sample cases
    const samples = ["leetcode", "loveleetcode", "aabb"];
    for (const s of samples) {
      console.log(`${s} -> ${firstUniqueChar(s)}`);
    }
  }
}

module.exports = firstUniqueChar;
