import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material"

export const MuiTable = () => {
    return (
        <TableContainer component={Paper} sx={{ maxHeight: '400px' }}>
            <Table aria-aria-label="simple table" stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell align="center">Gender</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((row) => (
                        <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.first_name}</TableCell>
                        <TableCell>{row.last_name}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell align="center">{row.gender}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

const tableData = [
    {
        "id": 1,
        "first_name": "Tami",
        "last_name": "Rhoades",
        "email": "trhoades0@wired.com",
        "gender": "Female",
        "ip_address": "147.35.102.101"
      }, {
        "id": 2,
        "first_name": "Evered",
        "last_name": "Bastistini",
        "email": "ebastistini1@google.com.br",
        "gender": "Male",
        "ip_address": "9.227.22.221"
      }, {
        "id": 3,
        "first_name": "Whitby",
        "last_name": "Hullot",
        "email": "whullot2@google.com",
        "gender": "Male",
        "ip_address": "201.117.179.42"
      }, {
        "id": 4,
        "first_name": "Mattias",
        "last_name": "Restieaux",
        "email": "mrestieaux3@github.io",
        "gender": "Polygender",
        "ip_address": "39.159.225.147"
      }, {
        "id": 5,
        "first_name": "Garv",
        "last_name": "Nance",
        "email": "gnance4@livejournal.com",
        "gender": "Male",
        "ip_address": "131.28.49.0"
      }, {
        "id": 6,
        "first_name": "Ryann",
        "last_name": "MacRinn",
        "email": "rmacrinn5@mac.com",
        "gender": "Female",
        "ip_address": "9.137.39.12"
      }, {
        "id": 7,
        "first_name": "Rudolph",
        "last_name": "Rowsel",
        "email": "rrowsel6@imdb.com",
        "gender": "Male",
        "ip_address": "205.204.236.14"
      }, {
        "id": 8,
        "first_name": "Tabatha",
        "last_name": "Crossingham",
        "email": "tcrossingham7@domainmarket.com",
        "gender": "Female",
        "ip_address": "178.161.24.132"
      }, {
        "id": 9,
        "first_name": "Ofilia",
        "last_name": "Callen",
        "email": "ocallen8@google.com.au",
        "gender": "Female",
        "ip_address": "105.215.141.120"
      }, {
        "id": 10,
        "first_name": "Rad",
        "last_name": "Berndtsson",
        "email": "rberndtsson9@posterous.com",
        "gender": "Male",
        "ip_address": "103.146.222.155"
      }, {
        "id": 11,
        "first_name": "Cherri",
        "last_name": "Snary",
        "email": "csnarya@xinhuanet.com",
        "gender": "Female",
        "ip_address": "85.128.16.246"
      }, {
        "id": 12,
        "first_name": "Fabian",
        "last_name": "Langton",
        "email": "flangtonb@japanpost.jp",
        "gender": "Male",
        "ip_address": "241.1.221.84"
      }
]