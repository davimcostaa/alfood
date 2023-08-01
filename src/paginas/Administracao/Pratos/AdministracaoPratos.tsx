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
import IPrato from '../../../interfaces/IPrato'

const AdministracaoPratos = () => {
    const [pratos, setPratos] = useState < IPrato[] > ([])

    const excluirPrato = (pratoPraExclusao: IPrato) => {
        http.delete(`pratos/${pratoPraExclusao.id}/`)
        .then(() => {
            const listaRestaurantes = pratos.filter(prato => prato.id !== pratoPraExclusao.id )
            setPratos([...listaRestaurantes])
        })
    }

    useEffect(() => {
        http.get<IPrato[]>("pratos/")
        .then(resposta => setPratos(resposta.data))
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
                            Tag
                        </TableCell>
                        <TableCell>
                            Imagem
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
                    {pratos.map(prato => (
                        <TableRow key={prato.id}>
                        <TableCell>
                            {prato.nome}
                        </TableCell>
                        <TableCell>
                            {prato.tag}
                        </TableCell>
                        <TableCell>
                            [<a href={prato.imagem} target="__blank" rel="noreferrer">Ver imagem</a>]
                        </TableCell>
                        <TableCell>
                            [ <Link to={`/admin/pratos/${prato.id}`}>Editar</Link> ]
                        </TableCell>
                        <TableCell>
                            <Button 
                                variant="outlined" 
                                color="error"
                                onClick={() => excluirPrato(prato)}
                                > Excluir </Button> 
                        </TableCell>
                    </TableRow>
                    ))}
                    
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AdministracaoPratos
