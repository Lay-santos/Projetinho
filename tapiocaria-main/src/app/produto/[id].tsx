import { Image, Text, View } from "react-native";
import { style } from "./1style"
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ProdutctType } from "../home/page";

export default function Produto() {

    const { id } = useLocalSearchParams()
    const [produto, setProduto] = useState<ProdutctType>()

    function fetchProduto() {
        fetch(`http://localhost:8080/produto/${id}`)
            .then((res) => res.json())
            .then(data => setProduto(data))
    }

    useEffect(() => {
        fetchProduto()
    }, [])

    return (

        <View style={style.container}>


            <Image style={style.image} source={produto?.imgUrl}></Image>

            <Text style={style.description}>{produto?.name}</Text>
            <Text style={style.price}>{produto?.price}</Text>

            <Text style={style.subtitle}>Sobre</Text>
            <Text style={style.paragrafo}>{produto?.description} </Text>
            <Text style={style.subtitle}>Igredientes</Text>
            {produto?.ingredientes.split(";").map((igredient, index) =>
                <Text>
                    •{igredient}</Text>)}
        </View>
    )
}

/**<Image source= {require("@assents/images/banana")}></Image> */