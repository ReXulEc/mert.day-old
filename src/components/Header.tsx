import Head from "next/head"

const Header = () => {
    return (
        <Head>
            <title>Mert.</title>
            <link rel="icon" href="https://avatars.githubusercontent.com/u/78258229?v=4" />
            <meta name="theme-color" content="#3b82f6" />
            <meta name="author" content="Mert Dogu." />
            <meta content="https://i.imgur.com/Z4Jg3c8.png" property="og:image" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta content="Mert Dogu" property="og:title" />
            <meta content="mert.day" property="og:site_name" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="description" content="Im a 16 years old self taught front-end developer from Izmir, Turkey." />
            <meta content="Im a 16 years old self taught front-end developer from Izmir, Turkey." property="og:description"/>
            <meta name="keywords" content="rexulec, mert dogu, mert.day, react, next, vue, rexulec.com" />
        </Head>
    )
}

export default Header;