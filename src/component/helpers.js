
function generateCoverStyle() {
    const emojiList = ['😀', '😃', '😄', '😁', '😉', '😌', '😍', '🥰', '😘' ];
    const prefixList = ['amazing', 'fancy', 'cute', 'tasty', 'early'];
    const suffixList = ['pasta', 'pizza', 'money', 'morning', 'evening', 'night'];
    const colorList = ['bg-orange-600', 'bg-teal-600', 'bg-red-600', 'bg-purple-600', 'bg-green-600', 'bg-blue-600'];

    const randomCoverStyle = {
        emoji: emojiList[Math.floor(Math.random()*emojiList.length)],
        prefix: prefixList[Math.floor(Math.random()*prefixList.length)],
        suffix: suffixList[Math.floor(Math.random()*suffixList.length)],
        color: colorList[Math.floor(Math.random()*colorList.length)]
    }
    return randomCoverStyle;
}

export {
    generateCoverStyle
}