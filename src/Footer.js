import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>
            <div>
                <h2>Let's work together</h2>
                <p className='available'>I'm availale for full-time, part-time, freelance and contract work.</p>
                <a href="mailto: p2iyinoluwa@gmail.com">SAY HELLO</a>
            </div>
            <p className='copyright'><span>&#9400; Iyinoluwa Bilewu 2022</span> <span>|</span> <a href="https://github.com/Iyin0"><BsGithub /></a> <a href="https://www.linkedin.com/in/isaac-bilewu-906716196/"><BsLinkedin /></a></p>
        </footer>
    );
}

export default Footer;