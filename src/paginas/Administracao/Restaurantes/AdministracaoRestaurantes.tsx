import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button
} from '@mui/material'
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import http from '../../../http'
import IRestaurante from '../../../interfaces/IRestaurante'

const AdministracaoRestaurantes = () => {
    const [restaurantes, setRestaurantes] = useState < IRestaurante[] > ([])

    const excluirRestaurante = (restauranteParaExclusao: IRestaurante) => {
        http.delete(`restaurantes/${restauranteParaExclusao.id}/`)
        .then(() => {
            const listaRestaurantes = restaurantes.filter(restaurante => restaurante.id !== restauranteParaExclusao.id )
            setRestaurantes([...listaRestaurantes])
        })
    }

    useEffect(() => {
        http.get<IRestaurante[]>("restaurantes/")
        .then(resposta => setRestaurantes(resposta.data))
    })

    return (

        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Nome
                        </TableCell>
                        <TableCell>
                            Editar
                        </TableCell>
                        <TableCell>
                            Excluir
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {restaurantes.map(restaurante => (
                        <TableRow key={restaurante.id}>
                        <TableCell>
                            {restaurante.nome}
                        </TableCell>
                        <TableCell>
                            [ <Link to={`/admin/restaurantes/${restaurante.id}`}>Editar</Link> ]
                        </TableCell>
                        <TableCell>
                            <Button 
                                variant="outlined" 
                                color="error"
                                onClick={() => excluirRestaurante(restaurante)}
                                > Excluir </Button> 
                        </TableCell>
                    </TableRow>
                    ))}
                    
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AdministracaoRestaurantes
