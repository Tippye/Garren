import Dark from '@/styles/DarkVar.css';
import Default from '@/styles/DefaultVar.css'

/**
 * 使用主题
 * @param theme 主题名
 */
export async function useTheme(theme) {
    return new Promise(resolve => {
        let style_tag = document.querySelector('style#garren_theme')
        if (!style_tag) {
            style_tag = document.createElement('style')
            style_tag.setAttribute('id', 'garren_theme')
            style_tag.setAttribute('type', 'text/css')
            document.querySelector('head').appendChild(style_tag)
        }
        let theme_text
        switch (theme) {
            case 'dark':
                theme_text = Dark
                break
            default:
                theme_text = Default
        }
        style_tag.innerHTML = theme_text
        resolve()
    })
}