import Link from "next/link"
import React from 'react'

export default function Email() {
  return (
    <div style={{ marginTop: 50 + 'px' }}>
      <table cellPadding="0" cellSpacing="0" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15 + 'px', fontWeight: 400, maxWidth: 600 + 'px', border: 'none', margin: '0 auto', borderRadius: 6 + 'px', overflow: 'hidden', backgroundColor: '#fff', boxShadow: '0 0 3px rgba(60, 72, 88, 0.15)' }}>

        <thead>
          <tr style={{ backgroundColor: "#4f46e5", padding: "3px 0", border: "none", height: "68px", textAlign: "center", color: " #fff", fontSize: "24px", }}>
            <th scope="col" style={{ padding: '48px 24px 0', color: '#ffffff', fontSize: '18px', fontWeight: 600 }}>
              MOR INFO
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td style={{ padding: '48px 24px 0', color: '#161c2d', fontSize: '18px', fontWeight: 600 }}>
              Olá, Usuário! 😊
            </td>
          </tr>
          <tr>
            <td style={{ padding: '15px 24px 15px', color: '#8492a6' }}>
              Obrigado por se cadastrar! <br />Segue o link abaixo para cofirmar seu e-email :
            </td>
          </tr>

          <tr>
            <td style={{ padding: '15px 24px' }}>
              <Link href="#" style={{ padding: '8px 20px', outline: 'none', textDecoration: 'none', fontSize: '16px', letterSpacing: 0.5 + 'px', transition: 'all 0.3s', fontWeight: 600, borderRadius: 6 + 'px', backgroundColor: '#4f46e5', border: '1px solid #4f46e5', color: '#ffffff' }}>
                Confirma endereço de email
              </Link>
            </td>
          </tr>

          <tr>
            <td style={{ padding: '15px 24px 0', color: '#8492a6' }}>
              Esse link estará disponivel no máximo 30 minutos
            </td>
          </tr>

          <tr>
            <td style={{ padding: '15px 24px 15px', color: '#8492a6' }}>
              Atenciosamente.
              <br />
              MORINFO
            </td>
          </tr>

          <tr>
            <td style={{ padding: '16px 8px', color: '#8492a6', backgroundColor: '#f8f9fc', textAlign: 'center' }}>
              © {new Date().getFullYear()}MOR INFO.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
