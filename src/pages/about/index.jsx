import Curve from '@/components/Layout/Curve'
import Inner from '@/components/Layout/Inner'
import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Curve >
        <h1>About</h1>
        <div className='body'>
            <p> Nullam mattis mattis dictum. Praesent sit amet condimentum mi, quis venenatis lectus. Phasellus ac ante id purus viverra hendrerit quis at ex. Donec vitae augue pulvinar augue dictum fermentum dapibus nec tellus.</p>
            <p>Phasellus cursus, ante in eleifend vehicula, leo metus mattis est, sit amet dignissim dui nibh in dui. Nullam dictum tortor vitae quam condimentum, eget tincidunt nisi tincidunt. Praesent ut erat at purus gravida aliquam non a purus. Pellentesque sagittis in justo vel venenatis.</p>
        </div>
      </Curve>
    </>
  )
}
