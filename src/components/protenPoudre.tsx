/* eslint-disable react/no-unescaped-entities */


import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Check } from 'lucide-react'
import Prot from '@/../public/prot.jpg'
import Prot2 from '@/../public/prot2.jpg'
import Prot3 from '@/../public/prot3.webp'
import Prot4 from '@/../public/prot4.webp'
import Prot5 from '@/../public/prot4.jpg'
import Prot6 from '@/../public/prot5.jpg'
import Prot7 from '@/../public/prot6.jpg'

export default function Protenpoudre() {
  const [activeTab, setActiveTab] = useState("description")

  return (
    <>
      <Head>
        <title>Protéine de soja en poudre bio NaturePro - Vegan et Musculation</title>
        <meta name="description" content="Découvrez notre protéine de soja en poudre bio NaturePro, riche en protéines, idéale pour la musculation et les régimes vegan - Livraison rapide et satisfait ou remboursé." />
        <meta name="keywords" content="protéine de soja en poudre, protéine vegan, musculation, bio, isolate" />
        <link rel="canonical" href="https://www.naturepro.com/produits/proteine-soja-poudre" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Protéine de soja en poudre bio NaturePro</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className='items-center'>
            <Image 
              src={Prot6} 
              alt="Protéine de soja en poudre NaturePro" 
              width={400} 
              height={400}
              className="rounded-lg "
            />
          </div>
          
          <div>
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-sm text-gray-600">(4.8/5 basé sur 230 avis)</span>
            </div>
            
            <p className="text-2xl font-bold mb-4">39,99 €</p>
            
            <ul className="mb-6">
              <li className="flex items-center mb-2"><Check className="mr-2 text-green-500" /> 100% bio et vegan</li>
              <li className="flex items-center mb-2"><Check className="mr-2 text-green-500" /> Riche en protéines (80g/100g)</li>
              <li className="flex items-center mb-2"><Check className="mr-2 text-green-500" /> Sans OGM, sans gluten</li>
              <li className="flex items-center mb-2"><Check className="mr-2 text-green-500" /> Idéal pour la musculation</li>
            </ul>
            
            <Button className="w-full mb-4">Ajouter au panier</Button>
            <p className="text-sm text-gray-600 text-center">Livraison gratuite dès 50€ d'achat</p>
          </div>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-12">
          <TabsList>
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="utilisation">Utilisation</TabsTrigger>
            <TabsTrigger value="avis">Avis clients</TabsTrigger>
          </TabsList>
          <TabsContent value="description">
            <Card>
              <CardHeader>
                <CardTitle>Description du produit</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Notre protéine de soja en poudre bio NaturePro est la solution idéale pour les sportifs et les personnes suivant un régime végétalien. Avec sa teneur élevée en protéines (80g/100g) et son profil d'acides aminés complet, elle favorise la croissance musculaire et la récupération après l'effort.</p>
                <h2 className="text-xl font-semibold mt-4 mb-2">Avantages :</h2>
                <ul className="list-disc pl-5">
                  <li>Source de protéines végétales de haute qualité</li>
                  <li>Faible en matières grasses et en glucides</li>
                  <li>Facilement digestible</li>
                  <li>Convient aux végétariens et végétaliens</li>
                  <li>Cultivé sans pesticides ni OGM</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="utilisation">
            <Card>
              <CardHeader>
                <CardTitle>Guide d'utilisation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Pour des résultats optimaux, mélangez 30g (environ 3 cuillères à soupe) de poudre avec 250ml d'eau ou de lait végétal. Consommez 1 à 3 portions par jour, de préférence après l'entraînement ou entre les repas.</p>
                <h2 className="text-xl font-semibold mt-4 mb-2">Recette : Smoothie protéiné aux fruits rouges</h2>
                <ul className="list-disc pl-5">
                  <li>30g de protéine de soja en poudre NaturePro</li>
                  <li>250ml de lait d'amande</li>
                  <li>1 banane</li>
                  <li>100g de fruits rouges congelés</li>
                  <li>1 cuillère à café de miel (optionnel)</li>
                </ul>
                <p className="mt-2">Mixez tous les ingrédients jusqu'à obtenir une consistance lisse. Savourez immédiatement !</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="avis">
            <Card>
              <CardHeader>
                <CardTitle>Avis clients</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Sophie L.", rating: 5, comment: "Excellente protéine, se mélange facilement et goût neutre. Parfait pour mes smoothies post-entraînement !" },
                    { name: "Marc D.", rating: 4, comment: "Très bon rapport qualité-prix. J'apprécie particulièrement qu'elle soit bio et sans OGM." },
                    { name: "Lucie F.", rating: 5, comment: "Je suis végane et cette protéine répond parfaitement à mes besoins. Mes performances en musculation se sont nettement améliorées." }
                  ].map((review, index) => (
                    <div key={index} className="border-b pb-4">
                      <div className="flex items-center mb-2">
                        <span className="font-semibold mr-2">{review.name}</span>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                          ))}
                        </div>
                      </div>
                      <p>{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Foire aux questions</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Quelle est la différence entre la protéine de soja et la whey ?</AccordionTrigger>
              <AccordionContent>
                La protéine de soja est d'origine végétale, convient aux végans et est naturellement sans lactose. La whey, issue du lait, est souvent considérée comme ayant une meilleure absorption, mais la protéine de soja reste une excellente alternative, notamment pour son profil d'acides aminés complet.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Cette protéine convient-elle pour la prise de masse ?</AccordionTrigger>
              <AccordionContent>
                Absolument ! Notre protéine de soja est idéale pour la prise de masse musculaire. Avec sa teneur élevée en protéines et son profil d'acides aminés complet, elle favorise la synthèse protéique nécessaire à la croissance musculaire.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Comment conserver ce produit ?</AccordionTrigger>
              <AccordionContent>
                Pour une conservation optimale, gardez le produit dans un endroit frais et sec, à l'abri de la lumière directe. Assurez-vous de bien refermer le contenant après chaque utilisation. Consommez de préférence dans les 3 mois après ouverture.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
        
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Comparaison avec d'autres sources de protéines</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2">Produit</th>
                  <th className="border p-2">Protéines/100g</th>
                  <th className="border p-2">Vegan</th>
                  <th className="border p-2">Sans gluten</th>
                  <th className="border p-2">Prix/kg</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Protéine de soja NaturePro</td>
                  <td className="border p-2">80g</td>
                  <td className="border p-2">Oui</td>
                  <td className="border p-2">Oui</td>
                  <td className="border p-2">39,99 €</td>
                </tr>
                <tr>
                  <td className="border p-2">Whey Isolate</td>
                  <td className="border p-2">90g</td>
                  <td className="border p-2">Non</td>
                  <td className="border p-2">Oui</td>
                  <td className="border p-2">49,99 €</td>
                </tr>
                <tr>
                  <td className="border p-2">Protéine de pois</td>
                  <td className="border p-2">75g</td>
                  <td className="border p-2">Oui</td>
                  <td className="border p-2">Oui</td>
                  <td className="border p-2">34,99 €</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Articles liés</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Les bienfaits des protéines végétales pour la musculation", image: Prot },
              { title: "5 recettes de smoothies protéinés vegan", image: Prot2 },
              { title: "Comment choisir sa protéine en poudre ?", image: Prot3 }
            ].map((article, index) => (
              <Card key={index}>
                <Image src={article.image} alt={article.title} width={300} height={200} className="w-full h-40 object-cover" />
                <CardHeader>
                  <CardTitle className="text-lg">{article.title}</CardTitle>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full">Lire l'article</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}