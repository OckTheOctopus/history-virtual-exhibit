import Page from "../components/container";
import Link from 'next/link';

export default function Bibliography() {
    return (
        <>
            <Page>
                <p>Below is the bilbiography of the project.</p>
                <Link href="https://harindabama.com/2017/07/30/penataran-appeasing-the-mountain-god/">
                    <p>Bama. Penataran: Appeasing the Mountain God. What an Amazing World! Published July 30, 2017. Accessed August 11, 2022. <a target="_blank" rel="noopener noreferrer">https://harindabama.com/2017/07/30/penataran-appeasing-the-mountain-god/‌</a></p>
                </Link>
                <Link href="https://en.wikipedia.org/wiki/Penataran">
                    <p>Wikipedia Contributors. Penataran. Wikipedia. Published January 25, 2022. Accessed August 11, 2022. <a target="_blank" rel="noopener noreferrer">https://en.wikipedia.org/wiki/Penataran</a>.</p>
                </Link>
                <Link href="https://ecommons.cornell.edu/bitstream/handle/1813/53578/INDO_17_0_1107130745_51_66.pdf?sequence=1&isAllowed=y">
                    <p>THE "S a M a Y a " of BHARADAH and KUTURAN*. <a target="_blank" rel="noopener noreferrer">https://ecommons.cornell.edu/bitstream/handle/1813/53578/INDO_17_0_1107130745_51_66.pdf?sequence=1&isAllowed=y</a></p>
                </Link>
                <Link href='https://en.wikipedia.org/wiki/Nagarakretagama'>
                    <p>Wikipedia Contributors. Nagarakretagama. Wikipedia. Published May 31, 2022. Accessed August 11, 2022. <a target="_blank" rel="noopener noreferrer">https://en.wikipedia.org/wiki/Nagarakretagama</a></p>
                </Link>
                <Link href='https://en.wikipedia.org/wiki/History_of_Indonesia'>
                    <p>Wikipedia Contributors. History of Indonesia. Wikipedia. Published August 8, 2022. Accessed August 16, 2022. <a target='_blank' rel='noopener noreferrer'>https://en.wikipedia.org/wiki/History_of_Indonesia#Colonial_era</a></p>
                </Link>
                <Link href='https://www.britannica.com/biography/Cornelis-and-Frederik-de-Houtman'>
                    <p>Cornelis and Frederik de Houtman | Dutch explorers | Britannica. In: Encyclopædia Britannica. ; 2022. Accessed August 17, 2022. <a target='_blank' rel='noopener noreferrer'>https://www.britannica.com/biography/Cornelis-and-Frederik-de-Houtman</a></p>
                </Link>
                <Link href='https://www.newworldencyclopedia.org/entry/Dutch_East_India_Company'>
                    <p>Dutch East India Company - New World Encyclopedia. Newworldencyclopedia.org. Published 2017. Accessed August 17, 2022. <a target='_blank' rel='noopener noreferrer'>https://www.newworldencyclopedia.org/entry/Dutch_East_India_Company</a></p>
                </Link>
                <Link href='https://en.wikipedia.org/wiki/Duit'>
                    <p>Wikipedia Contributors. Duit. Wikipedia. Published April 19, 2022. Accessed August 17, 2022. <a target={'_blank'}  rel='noopener noreferrer'>https://en.wikipedia.org/wiki/Duit</a></p>
                </Link>
            </Page>
        </>
    )
}