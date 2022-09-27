import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Code Promo Amazon !</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Bienvenu sur le site des codes promos Amazon!" />
        <p className="description">
          Les-Codes-Promos.com est la référence des ressources : tous les codes promos Amazon valident pour Bénéficier de réduction sur son panier
        </p>
        <p className="description">
          Nous fournissons des codes promos Amazon pour faire bénéficier de réductions importantes les clients Amazon.
        </p>
         <p className="description">
          La solution pour faire de grandes économies quand on achète sur Amazon
         </p>
       
        <p className="description">Des centaines de <a href="https://www.les-codes-promos.com/code-promo-amazon/" target="_blank">growth hacks</a> enrichis CHAQUE JOUR</p>
        <p className="description">Près de 100 <a href="https://www.les-codes-promos.com/code-promo-amazon/">ressources pour entrepreneurs</a> téléchargeables</p>
        <p className="description">
          Toutes les réductions et promotions <a href="https://www.les-codes-promos.com/code-promo-amazon/">Promos Flash</a>, de <a href="https://www.les-codes-promos.com/code-promo-amazon">Prime day</a>, Livraison en Point retrait <a href="https://www.les-codes-promos.com/code-promo-amazon">Livraison Gratuite</a>, Soldes Amazon
        </p>
        <p className="description">
          Des codes de réduction 5€ 10€ 25€ <a href="https://www.les-codes-promos.com/">Des codes qui fonctionnent</a>
        </p>
        <p className="description">
          Des coupons codes Amazon
      
    
      </main>

      <Footer />
    </div>
  )
}
